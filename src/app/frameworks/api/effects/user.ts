import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/observable/concat';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { UserActions } from '../actions/user';
import { ErrorActions } from '../actions/error';
import { UserApi } from '../services/index';

@Injectable()
export class UserEffects {
  @Effect()
  public login: Observable<Action> = this.actions$
    .ofType(UserActions.LOGIN)
    .map((action) => action.payload)
    .mergeMap((payload) =>
      this.user.login(payload.credentials, payload.include, payload.rememberMe)
        .map((response) => this.userActions.loginSuccess(response))
        .catch((error) => concat(of(this.userActions.loginFail(error)), of(this.errorActions.error(error))))
    );

  @Effect()
  public logout: Observable<Action> = this.actions$
    .ofType(UserActions.LOGOUT)
    .map((action) => action.payload)
    .mergeMap((payload) =>
      this.user.logout()
        .map(() => this.userActions.logoutSuccess())
        .catch((error) => concat(of(this.userActions.logoutFail()), of(this.errorActions.error(error))))
    );

  constructor(
    private actions$: Actions,
    private userActions: UserActions,
    private errorActions: ErrorActions,
    private user: UserApi
  ) {}
}
