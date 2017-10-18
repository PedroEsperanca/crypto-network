import { Observable } from 'rxjs/Observable';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { ConfigService } from '@ngx-config/core';

import { Orm } from 'shared/api/orm';

import {
  User,
  LoopBackAuth,
  LoopBackConfig,
  SDKToken,
  getLoopbackAuthToken,
  Organization,
  OrganizationApi,
} from 'shared/api';

import { OrganizationsService } from '../../organizations.service';

import { IAppState } from 'shared/ngrx';

@Component({
  selector: 'app-organizations-settings-store',
  styleUrls: [ './store.component.scss' ],
  templateUrl: './store.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsStoreComponent implements OnDestroy {
  public currentToken: SDKToken;
  public currenUser: User;

  public config: any;
  public stripeAuthUrl: string;

  public currentOrganization: Organization;
  public currentOrganization$: Observable<Organization>;
  public organizationId: string;

  private destroyStream$: AsyncSubject<any> = new AsyncSubject();

  constructor(
    private store: Store<IAppState>,
    private configService: ConfigService,
    private orm: Orm,
    private auth: LoopBackAuth,
    private organization: OrganizationApi,
    private organizationService: OrganizationsService
  ) {
    this.config = this.configService.getSettings();
    this.currentOrganization$ = this.organizationService.getOrganization()
    this.currentOrganization$
      .takeUntil(this.destroyStream$)
      .subscribe((org: Organization) => {
        if (org) {
          this.organizationId = org.id;
          this.currentOrganization = org;
          console.log(this.currentOrganization);
        }
      });

    this.store.select(getLoopbackAuthToken)
      .takeUntil(this.destroyStream$)
      .subscribe((token: SDKToken) => {
        if (!token) { return; }

        this.currentToken = (<any> Object).assign({}, token);
        this.currenUser = (<any> Object).assign({}, token.user);
      })

    this.stripeAuthUrl = LoopBackConfig.getPath() + '/' + LoopBackConfig.getApiVersion() +
      '/Organizations/' + this.organizationId + '/stripeAuthenticate?access_token=' + this.currentToken.id;
  }

  public ngOnDestroy() {
    this.destroyStream$.next(1);
    this.destroyStream$.complete();
  }
}
