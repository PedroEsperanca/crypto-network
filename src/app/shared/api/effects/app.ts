/* tslint:disable */
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/observable/concat';
import { Injectable, Inject } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { LoopbackAction } from '../models/BaseModels';
import { BaseLoopbackEffects } from './base';
import { resolver } from './resolver';

import { AppActionTypes, AppActions } from '../actions/App';
import { LoopbackErrorActions } from '../actions/error';
import { AppApi } from '../services/index';

@Injectable()
export class AppEffects extends BaseLoopbackEffects {
  @Effect()
  public getUser$ = this.actions$
    .ofType(AppActionTypes.GET_USER)
    .mergeMap((action: LoopbackAction) =>
      this.app.getUser(action.payload.id, action.payload.refresh)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
          of(new AppActions.getUserSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new AppActions.getUserFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getOrganization$ = this.actions$
    .ofType(AppActionTypes.GET_ORGANIZATION)
    .mergeMap((action: LoopbackAction) =>
      this.app.getOrganization(action.payload.id, action.payload.refresh)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Organization', 'findSuccess'),
          of(new AppActions.getOrganizationSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new AppActions.getOrganizationFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getS3Photo$ = this.actions$
    .ofType(AppActionTypes.GET_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.app.getS3Photo(action.payload.id, action.payload.refresh)
        .map((response: any) => new AppActions.getS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new AppActions.getS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createS3Photo$ = this.actions$
    .ofType(AppActionTypes.CREATE_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.app.createS3Photo(action.payload.id, action.payload.data)
        .map((response: any) => new AppActions.createS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new AppActions.createS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateS3Photo$ = this.actions$
    .ofType(AppActionTypes.UPDATE_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.app.updateS3Photo(action.payload.id, action.payload.data)
        .map((response: any) => new AppActions.updateS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new AppActions.updateS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyS3Photo$ = this.actions$
    .ofType(AppActionTypes.DESTROY_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.app.destroyS3Photo(action.payload.id)
        .map((response: any) => new AppActions.destroyS3PhotoSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new AppActions.destroyS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getOption$ = this.actions$
    .ofType(AppActionTypes.GET_OPTION)
    .mergeMap((action: LoopbackAction) =>
      this.app.getOption(action.payload.id, action.payload.refresh)
        .map((response: any) => new AppActions.getOptionSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new AppActions.getOptionFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createOption$ = this.actions$
    .ofType(AppActionTypes.CREATE_OPTION)
    .mergeMap((action: LoopbackAction) =>
      this.app.createOption(action.payload.id, action.payload.data)
        .map((response: any) => new AppActions.createOptionSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new AppActions.createOptionFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateOption$ = this.actions$
    .ofType(AppActionTypes.UPDATE_OPTION)
    .mergeMap((action: LoopbackAction) =>
      this.app.updateOption(action.payload.id, action.payload.data)
        .map((response: any) => new AppActions.updateOptionSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new AppActions.updateOptionFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyOption$ = this.actions$
    .ofType(AppActionTypes.DESTROY_OPTION)
    .mergeMap((action: LoopbackAction) =>
      this.app.destroyOption(action.payload.id)
        .map((response: any) => new AppActions.destroyOptionSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new AppActions.destroyOptionFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public s3PUTSignedUrl$ = this.actions$
    .ofType(AppActionTypes.S3_P_U_T_SIGNED_URL)
    .mergeMap((action: LoopbackAction) =>
      this.app.s3PUTSignedUrl(action.payload.id, action.payload.key, action.payload.options)
        .map((response: any) => new AppActions.s3PUTSignedUrlSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new AppActions.s3PUTSignedUrlFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public s3GETSignedUrl$ = this.actions$
    .ofType(AppActionTypes.S3_G_E_T_SIGNED_URL)
    .mergeMap((action: LoopbackAction) =>
      this.app.s3GETSignedUrl(action.payload.id, action.payload.key)
        .map((response: any) => new AppActions.s3GETSignedUrlSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new AppActions.s3GETSignedUrlFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyS3Photo$ = this.actions$
    .ofType(AppActionTypes.CREATE_MANY_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.app.createManyS3Photo(action.payload.id, action.payload.data)
        .map((response: any) => new AppActions.createManyS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new AppActions.createManyS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyOption$ = this.actions$
    .ofType(AppActionTypes.CREATE_MANY_OPTION)
    .mergeMap((action: LoopbackAction) =>
      this.app.createManyOption(action.payload.id, action.payload.data)
        .map((response: any) => new AppActions.createManyOptionSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new AppActions.createManyOptionFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

    /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Decorate base effects metadata
   */
  @Effect() public create$;
  @Effect() public createMany$;
  @Effect() public findById$;
  @Effect() public find$;
  @Effect() public findOne$;
  @Effect() public updateAll$;
  @Effect() public deleteById$;
  @Effect() public updateAttributes$;
  @Effect() public upsert$;
  @Effect() public upsertWithWhere$;
  @Effect() public replaceOrCreate$;
  @Effect() public replaceById$;
  @Effect() public patchOrCreate$;
  @Effect() public patchAttributes$;

  constructor(
    @Inject(Actions) public actions$: Actions,
    @Inject(AppApi) public app: AppApi
  ) {
    super(actions$, app, 'App', AppActionTypes, AppActions);
  }
}
