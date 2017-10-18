import { Observable } from 'rxjs/Observable';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ConfigService } from '@ngx-config/core';
import { FormControl } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';

import { Orm } from 'shared/api/orm';

import {
  Organization,
  Product
} from 'shared/api';
import { AlertActions } from 'shared/ngrx';

import { OrganizationsService } from '../../organizations.service';

@Component({
  selector: 'app-organizations-settings-products-home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsHomeComponent implements OnInit, OnDestroy {
  @ViewChild('selectInvite') public selectInvite;
  @ViewChild(DatatableComponent) table: DatatableComponent;

  public config: any;

  public rows$: ReplaySubject<Product[]> = new ReplaySubject(1);
  public rows: Product[];
  public totalCount$: Observable<{count: number}>;
  public totalCount: {count: number};

  public products: Product[];

  public textControl: FormControl;

  public searchTerm: string;
  public limit = 25;
  public page = 0;
  public orderFilter: string | string[];
  public searchCategory: string;

  public selected$: ReplaySubject<any[]> = new ReplaySubject(1);
  public selected: any[] = [];

  private organizationId: string;

  private destroyStream$: AsyncSubject<any> = new AsyncSubject();

  constructor(
    private configService: ConfigService,
    private orm: Orm,
    private organizationService: OrganizationsService
  ) {
    this.config = this.configService.getSettings();

    this.organizationService.getOrganization()
      .takeUntil(this.destroyStream$)
      .subscribe((org: Organization) => {
        if (org) {
          this.organizationId = org.id;

          this.orm.Organization.getProducts(this.organizationId)
            .auditTime(0)
            .takeUntil(this.destroyStream$)
            .subscribe((products: Product[]) => {
              this.products = products;

              this.search();
            });
        }
      });
  }

  public ngOnInit() {
    this.textControl = new FormControl({
      value: '',
      disabled: false
    });

    this.textControl.valueChanges
      .auditTime(500)
      .distinctUntilChanged()
      .takeUntil(this.destroyStream$)
      .subscribe((newValue) => {
        this.searchTerm = newValue;
        this.search();
      });
  }

  public ngOnDestroy() {
    this.destroyStream$.next(1);
    this.destroyStream$.complete();
  }

  public search() {
    this.rows = this.products.filter((item) => {
      let pass = true;

      if (this.searchCategory) {
        pass = (item as any).UserCategory.type === this.searchCategory;
      }

      if (pass && this.searchTerm) {
        const reg = new RegExp(this.searchTerm, 'i');
        pass = reg.test(item.name)
      }
      return pass;
    });

    this.table.offset = 0;
    this.rows$.next(this.rows);
  }

  public filterByCategory(category: string) {
    this.searchCategory = category;
    this.search();
  }

  public selectAllClick() {
    if (this.selected.length === this.table.rowCount) {
      this.selected = [];
      this.selected$.next(this.selected);
    } else {
      this.selected = [...this.table.rows];
      this.selected$.next(this.selected);
    }
  }

  public onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    this.selected$.next(this.selected);
  }
}

