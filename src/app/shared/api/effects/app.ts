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
import { resolver } from './resolver';

import { AppActionTypes, AppActions } from '../actions/App';
import { LoopbackErrorActions } from '../actions/error';
import { AppApi } from '../services/index';

@Injectable()
export class AppEffects extends BaseLoopbackEffects {
  @Effect()
  protected getUser: Observable<LoopbackAction> = this.actions$
    .ofType(AppActionTypes.GET_USER)
    .mergeMap((action: LoopbackAction) =>
      this.app.getUser(action.payload.id, action.payload.refresh)
        .map((response) => new AppActions.getUserSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new AppActions.getUserFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getOrganization: Observable<LoopbackAction> = this.actions$
    .ofType(AppActionTypes.GET_ORGANIZATION)
    .mergeMap((action: LoopbackAction) =>
      this.app.getOrganization(action.payload.id, action.payload.refresh)
        .map((response) => new AppActions.getOrganizationSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new AppActions.getOrganizationFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getS3Photo: Observable<LoopbackAction> = this.actions$
    .ofType(AppActionTypes.GET_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.app.getS3Photo(action.payload.id, action.payload.refresh)
        .map((response) => new AppActions.getS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new AppActions.getS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createS3Photo: Observable<LoopbackAction> = this.actions$
    .ofType(AppActionTypes.CREATE_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.app.createS3Photo(action.payload.id, action.payload.data)
        .map((response) => new AppActions.createS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new AppActions.createS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateS3Photo: Observable<LoopbackAction> = this.actions$
    .ofType(AppActionTypes.UPDATE_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.app.updateS3Photo(action.payload.id, action.payload.data)
        .map((response) => new AppActions.updateS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new AppActions.updateS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyS3Photo: Observable<LoopbackAction> = this.actions$
    .ofType(AppActionTypes.DESTROY_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.app.destroyS3Photo(action.payload.id)
        .map((response) => new AppActions.destroyS3PhotoSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new AppActions.destroyS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getOption: Observable<LoopbackAction> = this.actions$
    .ofType(AppActionTypes.GET_OPTION)
    .mergeMap((action: LoopbackAction) =>
      this.app.getOption(action.payload.id, action.payload.refresh)
        .map((response) => new AppActions.getOptionSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new AppActions.getOptionFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createOption: Observable<LoopbackAction> = this.actions$
    .ofType(AppActionTypes.CREATE_OPTION)
    .mergeMap((action: LoopbackAction) =>
      this.app.createOption(action.payload.id, action.payload.data)
        .map((response) => new AppActions.createOptionSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new AppActions.createOptionFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateOption: Observable<LoopbackAction> = this.actions$
    .ofType(AppActionTypes.UPDATE_OPTION)
    .mergeMap((action: LoopbackAction) =>
      this.app.updateOption(action.payload.id, action.payload.data)
        .map((response) => new AppActions.updateOptionSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new AppActions.updateOptionFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyOption: Observable<LoopbackAction> = this.actions$
    .ofType(AppActionTypes.DESTROY_OPTION)
    .mergeMap((action: LoopbackAction) =>
      this.app.destroyOption(action.payload.id)
        .map((response) => new AppActions.destroyOptionSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new AppActions.destroyOptionFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected s3PUTSignedUrl: Observable<LoopbackAction> = this.actions$
    .ofType(AppActionTypes.S3_P_U_T_SIGNED_URL)
    .mergeMap((action: LoopbackAction) =>
      this.app.s3PUTSignedUrl(action.payload.id, action.payload.key, action.payload.options)
        .map((response) => new AppActions.s3PUTSignedUrlSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new AppActions.s3PUTSignedUrlFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected s3GETSignedUrl: Observable<LoopbackAction> = this.actions$
    .ofType(AppActionTypes.S3_G_E_T_SIGNED_URL)
    .mergeMap((action: LoopbackAction) =>
      this.app.s3GETSignedUrl(action.payload.id, action.payload.key)
        .map((response) => new AppActions.s3GETSignedUrlSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new AppActions.s3GETSignedUrlFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyS3Photo: Observable<LoopbackAction> = this.actions$
    .ofType(AppActionTypes.CREATE_MANY_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.app.createManyS3Photo(action.payload.id, action.payload.data)
        .map((response) => new AppActions.createManyS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new AppActions.createManyS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyOption: Observable<LoopbackAction> = this.actions$
    .ofType(AppActionTypes.CREATE_MANY_OPTION)
    .mergeMap((action: LoopbackAction) =>
      this.app.createManyOption(action.payload.id, action.payload.data)
        .map((response) => new AppActions.createManyOptionSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new AppActions.createManyOptionFail(error, action.meta)),
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
    @Inject(AppApi) public app: AppApi
  ) {
    super(actions$, app, 'App', AppActionTypes, AppActions);
  }
}
