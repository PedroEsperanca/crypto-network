import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { ConfigService } from '@ngx-config/core';

import {
  SDKToken,
  User,
  OrganizationInterface,
  LoopBackFilter,
  LoopBackAuth,
  getLoopbackAuthAccount
} from 'shared/api';
import {
  IAppState
} from 'shared/ngrx';

@Component({
  selector: 'app-settings',
  styleUrls: [ './settings.component.scss' ],
  templateUrl: './settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnDestroy {
  public config: any;
  public currentUser: User;

  public needToVerifyEmail = false;

  private subscriptions: Subscription[] = [];

  constructor(
    public auth: LoopBackAuth,
    private configService: ConfigService,
    private store: Store<IAppState>
  ) {
    this.config = this.configService.getSettings();

    this.subscriptions.push(this.store.let(getLoopbackAuthAccount()).subscribe((user: User) => {
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
