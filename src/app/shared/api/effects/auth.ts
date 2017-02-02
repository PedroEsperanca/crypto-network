/* tslint:disable */
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/observable/concat';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import { LoopbackAuthActionTypes, LoopbackAuthActions } from '../actions/auth';
import { LoopbackErrorActions } from '../actions/error';
import { LoopBackAuth } from '../services/core/auth.service';
import { UserApi } from '../services/index';

/**
 * @module LoopbackAuthEffects
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible authentication effects.
 */
@Injectable()
export class LoopbackAuthEffects {
  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect()
  protected loadToken: Observable<Action> = this.actions$
    .ofType(LoopbackAuthActionTypes.LOAD_TOKEN)
    .startWith(new LoopbackAuthActions.loadToken())
    .map(() => new LoopbackAuthActions.loadTokenSuccess(this.auth.getToken()));

  @Effect({dispatch: false})
  protected setToken: Observable<Action> = this.actions$
    .ofType(LoopbackAuthActionTypes.SET_TOKEN)
    .map(toPayload)
    .do((payload) => {
      this.auth.setUser(payload);
      this.auth.setRememberMe(true);
      this.auth.save();

      this.store.dispatch(new LoopbackAuthActions.setTokenSuccess(payload));
    });

  @Effect({dispatch: false})
  protected setUser: Observable<Action> = this.actions$
    .ofType(LoopbackAuthActionTypes.SET_USER)
    .map(toPayload)
    .do((payload) => {
      let token = this.auth.getToken();
      this.auth.setUser(Object.assign(token, {
        userId: payload.id,
        user: payload
      }));
      this.auth.setRememberMe(true);
      this.auth.save();

      this.store.dispatch(new LoopbackAuthActions.setUserSuccess(payload));
    });

  /*@Effect({dispatch: false})
  protected updateUserProperties: Observable<Action> = this.actions$
    .ofType(LoopbackAuthActionTypes.UPDATE_USER_PROPERTIES)
    .map(toPayload)
    .do((payload) => {
      let token = this.auth.getToken();
      token.user = Object.assign(token.user, payload);
      this.auth.setUser(token);
      this.auth.save();

      this.store.dispatch(new LoopbackAuthActions.updateUserPropertiesSuccess(payload));
    });*/

  @Effect()
  protected updateUserProperties: Observable<Action> = this.actions$
    .ofType(LoopbackAuthActionTypes.UPDATE_USER_PROPERTIES)
    .map(toPayload)
    .mergeMap((payload) => {
      let token = this.auth.getToken();
      return this.user.patchAttributes(token.userId, payload)
        .map((response) => {
          token.user = Object.assign(token.user, payload);
          this.auth.setUser(token);
          this.auth.save();
          return new LoopbackAuthActions.updateUserPropertiesSuccess(payload)
        })
        .catch((error) => concat(
          of(new LoopbackAuthActions.updateUserPropertiesFail(error)),
          of(new LoopbackErrorActions.error(error))
        ))
    });

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private auth: LoopBackAuth,
    private user: UserApi
  ) {}
}
