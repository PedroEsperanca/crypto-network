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

import { OAuthAppActionTypes, OAuthAppActions } from '../actions/OAuthApp';
import { LoopbackErrorActions } from '../actions/error';
import { OAuthAppApi } from '../services/index';

@Injectable()
export class OAuthAppEffects extends BaseLoopbackEffects {
  @Effect()
  protected keysReset: Observable<LoopbackAction> = this.actions$
    .ofType(OAuthAppActionTypes.KEYS_RESET)
    .mergeMap((action: LoopbackAction) =>
      this.oauthapp.keysReset(action.payload.id)
        .map((response) => new OAuthAppActions.keysResetSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OAuthAppActions.keysResetFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getUser: Observable<LoopbackAction> = this.actions$
    .ofType(OAuthAppActionTypes.GET_USER)
    .mergeMap((action: LoopbackAction) =>
      this.oauthapp.getUser(action.payload.id, action.payload.refresh)
        .map((response) => new OAuthAppActions.getUserSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OAuthAppActions.getUserFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getOrganization: Observable<LoopbackAction> = this.actions$
    .ofType(OAuthAppActionTypes.GET_ORGANIZATION)
    .mergeMap((action: LoopbackAction) =>
      this.oauthapp.getOrganization(action.payload.id, action.payload.refresh)
        .map((response) => new OAuthAppActions.getOrganizationSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OAuthAppActions.getOrganizationFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getS3Logo: Observable<LoopbackAction> = this.actions$
    .ofType(OAuthAppActionTypes.GET_S3LOGO)
    .mergeMap((action: LoopbackAction) =>
      this.oauthapp.getS3Logo(action.payload.id, action.payload.refresh)
        .map((response) => new OAuthAppActions.getS3LogoSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OAuthAppActions.getS3LogoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createS3Logo: Observable<LoopbackAction> = this.actions$
    .ofType(OAuthAppActionTypes.CREATE_S3LOGO)
    .mergeMap((action: LoopbackAction) =>
      this.oauthapp.createS3Logo(action.payload.id, action.payload.data)
        .map((response) => new OAuthAppActions.createS3LogoSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OAuthAppActions.createS3LogoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateS3Logo: Observable<LoopbackAction> = this.actions$
    .ofType(OAuthAppActionTypes.UPDATE_S3LOGO)
    .mergeMap((action: LoopbackAction) =>
      this.oauthapp.updateS3Logo(action.payload.id, action.payload.data)
        .map((response) => new OAuthAppActions.updateS3LogoSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OAuthAppActions.updateS3LogoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyS3Logo: Observable<LoopbackAction> = this.actions$
    .ofType(OAuthAppActionTypes.DESTROY_S3LOGO)
    .mergeMap((action: LoopbackAction) =>
      this.oauthapp.destroyS3Logo(action.payload.id)
        .map((response) => new OAuthAppActions.destroyS3LogoSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new OAuthAppActions.destroyS3LogoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected s3PUTSignedUrl: Observable<LoopbackAction> = this.actions$
    .ofType(OAuthAppActionTypes.S3_P_U_T_SIGNED_URL)
    .mergeMap((action: LoopbackAction) =>
      this.oauthapp.s3PUTSignedUrl(action.payload.id, action.payload.key, action.payload.options)
        .map((response) => new OAuthAppActions.s3PUTSignedUrlSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OAuthAppActions.s3PUTSignedUrlFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected s3GETSignedUrl: Observable<LoopbackAction> = this.actions$
    .ofType(OAuthAppActionTypes.S3_G_E_T_SIGNED_URL)
    .mergeMap((action: LoopbackAction) =>
      this.oauthapp.s3GETSignedUrl(action.payload.id, action.payload.key)
        .map((response) => new OAuthAppActions.s3GETSignedUrlSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OAuthAppActions.s3GETSignedUrlFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyS3Logo: Observable<LoopbackAction> = this.actions$
    .ofType(OAuthAppActionTypes.CREATE_MANY_S3LOGO)
    .mergeMap((action: LoopbackAction) =>
      this.oauthapp.createManyS3Logo(action.payload.id, action.payload.data)
        .map((response) => new OAuthAppActions.createManyS3LogoSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OAuthAppActions.createManyS3LogoFail(error, action.meta)),
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
    @Inject(OAuthAppApi) public oauthapp: OAuthAppApi
  ) {
    super(actions$, oauthapp, 'OAuthApp', OAuthAppActionTypes, OAuthAppActions);
  }
}
