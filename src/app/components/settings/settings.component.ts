import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { ConfigService } from '@nglibs/config';

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
  public currentUser: User;

  public needToVerifyEmail: boolean = false;

  private subscriptions: Subscription[] = [];

  constructor(
    public auth: LoopBackAuth,
    private configService: ConfigService,
    private store: Store<IAppState>
  ) {
    this.config = this.configService.getSettings();

    this.subscriptions.push(this.store.let(getLoopbackAuthUser()).subscribe((user: User) => {
      if (!user) { return; }

      this.currentUser = Object.assign({}, user);

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
