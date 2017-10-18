import { AsyncSubject } from 'rxjs/AsyncSubject';
import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

import { ConfigService } from '@ngx-config/core';

import { Orm } from 'shared/api/orm';

import {
  Organization,
  Product
} from 'shared/api';
import { AlertActions } from 'shared/ngrx';

import { OrganizationsService } from '../../organizations.service';

@Component({
  selector: 'app-organizations-settings-products-new',
  styleUrls: [ './new.component.scss' ],
  templateUrl: './new.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsNewComponent implements OnDestroy {
  public config: any;

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
        }
      });
  }

  public ngOnDestroy() {
    this.destroyStream$.next(1);
    this.destroyStream$.complete();
  }
}
