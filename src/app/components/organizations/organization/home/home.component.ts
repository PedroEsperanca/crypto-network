import 'rxjs/add/operator/take';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/switchMap';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState, getCurrentOrganization } from 'frameworks/ngrx';
import { OrganizationInterface } from 'frameworks/api';
import { LoopBackFilter } from 'frameworks/api/models';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'organizationHome',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationHomeComponent implements OnInit {
  private organization$: Observable<OrganizationInterface>;

  constructor(
    private store: Store<IAppState>
  ) {}

  public ngOnInit() {
    this.organization$ = this.store.let(getCurrentOrganization());
  }
}
