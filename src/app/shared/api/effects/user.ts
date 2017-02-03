/* tslint:disable */
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/observable/concat';
import { Injectable, Inject } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { LoopbackAction } from '../models/BaseModels';
import { BaseLoopbackEffects } from './base';

import { UserActionTypes, UserActions } from '../actions/user';
import { LoopbackErrorActions } from '../actions/error';
import { UserApi } from '../services/index';

@Injectable()
export class UserEffects extends BaseLoopbackEffects {
  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Apps relation effects
   */
  @Effect()
  protected findByIdApps: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_APPS)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdApps(action.payload.id, action.payload.fk)
        .map((response) => new UserActions.findByIdAppsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.findByIdAppsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyByIdApps: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_APPS)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyByIdApps(action.payload.id, action.payload.fk)
        .map(() => new UserActions.destroyByIdAppsSuccess(action.payload, action.meta))
        .catch((error) => concat(
          of(new UserActions.destroyByIdAppsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateByIdApps: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_APPS)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateByIdApps(action.payload.id, action.payload.fk, action.payload.data)
        .map((response) => new UserActions.updateByIdAppsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.updateByIdAppsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createApps: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.CREATE_APPS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createApps(action.payload.id, action.payload.data)
        .map((response) => new UserActions.createAppsSuccess(action.payload.id,response, action.meta))
        .catch((error) => concat(
          of(new UserActions.createAppsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected deleteApps: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.DELETE_APPS)
    .mergeMap((action: LoopbackAction) =>
      this.user.deleteApps(action.payload.id)
        .map(() => new UserActions.deleteAppsSuccess(action.payload.id, action.meta))
        .catch((error) => concat(
          of(new UserActions.deleteAppsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyApps: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_APPS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyApps(action.payload.id, action.payload.data)
        .map((response) => new UserActions.createManyAppsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.createManyAppsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * User specific actions
   */
  @Effect()
  protected login: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.LOGIN)
    .mergeMap((action: LoopbackAction) =>
      this.user.login(action.payload.credentials, action.payload.include, action.payload.rememberMe)
        .map((response) => new UserActions.loginSuccess(response, action.meta))
        .catch((error) => concat(
          of(new UserActions.loginFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected signup: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.SIGNUP)
    .mergeMap((action: LoopbackAction) =>
      this.user.create(action.payload)
        .map((response) => new UserActions.signupSuccess(action.payload, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.signupFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected logout: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.LOGOUT)
    .mergeMap((action: LoopbackAction) =>
      this.user.logout()
        .map(() => new UserActions.logoutSuccess(action.meta))
        .catch((error) => concat(
          of(new UserActions.logoutFail()),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Decorate base effects metadata
   */
  @Effect() protected create;
  @Effect() protected createMany;
  @Effect() protected findById;
  @Effect() protected find;
  @Effect() protected findOne;
  @Effect() protected updateAll;
  @Effect() protected deleteById;
  @Effect() protected updateAttributes;
  @Effect() protected upsert;
  @Effect() protected upsertWithWhere;
  @Effect() protected replaceOrCreate;
  @Effect() protected replaceById;
  @Effect() protected patchOrCreate;
  @Effect() protected patchAttributes;

  constructor(
    @Inject(Actions) public actions$: Actions,
    @Inject(UserApi) public user: UserApi
  ) {
    super(actions$, user, 'User', UserActionTypes);
  }
}
