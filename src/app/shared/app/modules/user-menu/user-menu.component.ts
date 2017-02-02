import 'rxjs/add/operator/let';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ConfigService } from 'ng2-config';

import { SDKToken, User, getLoopbackAuthToken, getLoopbackAuthUser } from 'shared/api';
import { IAppState } from 'shared/ngrx';
import { UserActions } from 'shared/api/actions';

@Component({
  selector: 'user-menu',
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
    this.currentToken$ = store.let(getLoopbackAuthToken());
    this.currentUser$ = store.let(getLoopbackAuthUser());
  }

  public logout() {
    this.store.dispatch(new UserActions.logout());
  }
}
