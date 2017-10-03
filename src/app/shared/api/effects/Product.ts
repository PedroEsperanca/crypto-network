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

import { ProductActionTypes, ProductActions } from '../actions/Product';
import { LoopbackErrorActions } from '../actions/error';
import { ProductApi } from '../services/index';

@Injectable()
export class ProductEffects extends BaseLoopbackEffects {
  @Effect()
  public getOrganization$ = this.actions$
    .ofType(ProductActionTypes.GET_ORGANIZATION)
    .mergeMap((action: LoopbackAction) =>
      this.product.getOrganization(action.payload.id, action.payload.refresh)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Organization', 'findSuccess'),
          of(new ProductActions.getOrganizationSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new ProductActions.getOrganizationFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getS3Photo$ = this.actions$
    .ofType(ProductActionTypes.GET_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.product.getS3Photo(action.payload.id, action.payload.refresh)
        .map((response: any) => new ProductActions.getS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new ProductActions.getS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createS3Photo$ = this.actions$
    .ofType(ProductActionTypes.CREATE_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.product.createS3Photo(action.payload.id, action.payload.data)
        .map((response: any) => new ProductActions.createS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new ProductActions.createS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateS3Photo$ = this.actions$
    .ofType(ProductActionTypes.UPDATE_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.product.updateS3Photo(action.payload.id, action.payload.data)
        .map((response: any) => new ProductActions.updateS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new ProductActions.updateS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyS3Photo$ = this.actions$
    .ofType(ProductActionTypes.DESTROY_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.product.destroyS3Photo(action.payload.id)
        .map((response: any) => new ProductActions.destroyS3PhotoSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new ProductActions.destroyS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public s3PUTSignedUrl$ = this.actions$
    .ofType(ProductActionTypes.S3_P_U_T_SIGNED_URL)
    .mergeMap((action: LoopbackAction) =>
      this.product.s3PUTSignedUrl(action.payload.id, action.payload.key, action.payload.options)
        .map((response: any) => new ProductActions.s3PUTSignedUrlSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new ProductActions.s3PUTSignedUrlFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public s3GETSignedUrl$ = this.actions$
    .ofType(ProductActionTypes.S3_G_E_T_SIGNED_URL)
    .mergeMap((action: LoopbackAction) =>
      this.product.s3GETSignedUrl(action.payload.id, action.payload.key)
        .map((response: any) => new ProductActions.s3GETSignedUrlSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new ProductActions.s3GETSignedUrlFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyS3Photo$ = this.actions$
    .ofType(ProductActionTypes.CREATE_MANY_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.product.createManyS3Photo(action.payload.id, action.payload.data)
        .map((response: any) => new ProductActions.createManyS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new ProductActions.createManyS3PhotoFail(error, action.meta)),
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
    @Inject(ProductApi) public product: ProductApi
  ) {
    super(actions$, product, 'Product', ProductActionTypes, ProductActions);
  }
}
