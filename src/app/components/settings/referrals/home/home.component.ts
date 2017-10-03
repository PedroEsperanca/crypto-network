import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Orm } from 'shared/api/orm';

import {
  User,
  StripeSource,
  StripeCharge,
  getLoopbackAuthAccount
} from 'shared/api';
import { IAppState } from 'shared/ngrx';

@Component({
  selector: 'app-settings-referrals-home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsReferralsHomeComponent {
  public sources$: Observable<StripeSource[]>;
  public charges$: Observable<StripeCharge[]>;
  public currentUser$: Observable<User>;

  constructor(
    private store: Store<IAppState>,
    private orm: Orm
  ) {
    this.currentUser$ = this.store.select(getLoopbackAuthAccount);
    this.sources$ = this.currentUser$.switchMap((user) => this.orm.User.getStripeSources(user.id));
    this.charges$ = this.currentUser$.switchMap((user) => this.orm.User.getStripeCharges(user.id));
  }
}
