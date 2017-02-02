import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { ConfigService } from 'ng2-config';

import {
  SDKToken,
  User,
  OrganizationInterface,
  LoopBackFilter,
  LoopBackAuth,
  getLoopbackAuthUser
} from 'shared/api';
import {
  IAppState,
  getOrganizationsState,
  getOrganizations
} from 'shared/ngrx';

@Component({
  selector: 'settings.settings',
  styleUrls: [ './settings.component.scss' ],
  templateUrl: './settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnDestroy {
  public config: any;
  public organizations$: Observable<OrganizationInterface[]>;

  public needToVerifyEmail: boolean = false;

  private subscriptions: Subscription[] = [];

  constructor(
    public auth: LoopBackAuth,
    private configService: ConfigService,
    private store: Store<IAppState>
  ) {
    this.config = this.configService.getSettings();

    this.organizations$ = store.let(getOrganizationsState())
      .switchMap((organizations) => store.let(getOrganizations(organizations.ids)));

    this.subscriptions.push(this.store.let(getLoopbackAuthUser()).subscribe((user: User) => {
      if (!user) { return; }

      if (typeof user.emailAddresses !== 'undefined') {
        this.needToVerifyEmail = user.emailAddresses.filter((email: any) => {
          return !email.verified;
        }).length > 0;
      } else {
        this.needToVerifyEmail = !user.emailVerified;
      }
    }));
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
