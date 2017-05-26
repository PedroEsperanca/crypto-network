import 'rxjs/add/operator/let';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ConfigService } from '@ngx-config/core';

import { SDKToken, User, getLoopbackAuthToken, getLoopbackAuthAccount } from 'shared/api';
import { IAppState } from 'shared/ngrx';
import { UserActions } from 'shared/api/actions';

@Component({
  selector: 'app-user-menu',
  styleUrls: [ './user-menu.component.scss' ],
  templateUrl: './user-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserMenuComponent {
  public config: any;
  public currentToken$: Observable<SDKToken>;
  public currentUser$: Observable<User>;

  constructor(
    private store: Store<IAppState>,
    private configService: ConfigService
  ) {
    this.config = this.configService.getSettings();
    this.currentToken$ = store.select(getLoopbackAuthToken);
    this.currentUser$ = store.select(getLoopbackAuthAccount);
  }

  public logout() {
    this.store.dispatch(new UserActions.logout());
  }
}
