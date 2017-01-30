import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { LoopbackAuthActions } from '../actions/auth';
import { LoopBackAuth } from '../services/core/auth.service';

@Injectable()
export class LoopbackAuthEffects {
  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect()
  public loadToken: Observable<Action> = this.actions$
    .ofType(LoopbackAuthActions.LOAD_TOKEN)
    .startWith(this.loopbackAuthActions.loadToken())
    .map(() => this.loopbackAuthActions.loadTokenSuccess(this.auth.getToken()));

  @Effect()
  public setToken: Observable<Action> = this.actions$
    .ofType(LoopbackAuthActions.SET_TOKEN)
    .map((action) => action.payload)
    .do((payload) => {
      this.auth.setUser(payload);
      this.auth.setRememberMe(true);
      this.auth.save();

      return this.loopbackAuthActions.setTokenSuccess(payload);
    })
    .ignoreElements();

  @Effect()
  public setUser: Observable<Action> = this.actions$
    .ofType(LoopbackAuthActions.SET_USER)
    .map((action) => action.payload)
    .do((payload) => {
      let token = this.auth.getToken();
      this.auth.setUser(Object.assign(token, {
        userId: payload.id,
        user: payload
      }));
      this.auth.setRememberMe(true);
      this.auth.save();

      return this.loopbackAuthActions.setUserSuccess(payload);
    })
    .ignoreElements();

  @Effect()
  public updateUserProperties: Observable<Action> = this.actions$
    .ofType(LoopbackAuthActions.UPDATE_USER_PROPERTIES)
    .map((action) => action.payload)
    .do((payload) => {
      let token = this.auth.getToken();
      token.user = Object.assign(token.user, payload);
      this.auth.setUser(token);
      this.auth.save();

      return this.loopbackAuthActions.updateUserPropertiesSuccess(payload);
    })
    .ignoreElements();

  constructor(
    private actions$: Actions,
    private loopbackAuthActions: LoopbackAuthActions,
    private auth: LoopBackAuth
  ) {}
}
