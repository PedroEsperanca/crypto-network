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
  public findByIdShoppingCard$ = this.actions$
    .ofType(ProductActionTypes.FIND_BY_ID_SHOPPINGCARD)
    .mergeMap((action: LoopbackAction) =>
      this.product.findByIdShoppingCard(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'User', 'findByIdSuccess'),
          of(new ProductActions.findByIdShoppingCardSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new ProductActions.findByIdShoppingCardFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdShoppingCard$ = this.actions$
    .ofType(ProductActionTypes.DESTROY_BY_ID_SHOPPINGCARD)
    .mergeMap((action: LoopbackAction) =>
      this.product.destroyByIdShoppingCard(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'User', 'deleteByIdSuccess'),
          of(new ProductActions.destroyByIdShoppingCardSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new ProductActions.destroyByIdShoppingCardFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdShoppingCard$ = this.actions$
    .ofType(ProductActionTypes.UPDATE_BY_ID_SHOPPINGCARD)
    .mergeMap((action: LoopbackAction) =>
      this.product.updateByIdShoppingCard(action.payload.id, action.payload.fk, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'User', 'findByIdSuccess'),
          of(new ProductActions.updateByIdShoppingCardSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new ProductActions.updateByIdShoppingCardFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public linkShoppingCard$ = this.actions$
    .ofType(ProductActionTypes.LINK_SHOPPINGCARD)
    .mergeMap((action: LoopbackAction) =>
      this.product.linkShoppingCard(action.payload.id, action.payload.fk, action.payload.data)
        .map((response: any) => new ProductActions.linkShoppingCardSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new ProductActions.linkShoppingCardFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public unlinkShoppingCard$ = this.actions$
    .ofType(ProductActionTypes.UNLINK_SHOPPINGCARD)
    .mergeMap((action: LoopbackAction) =>
      this.product.unlinkShoppingCard(action.payload.id, action.payload.fk)
        .map((response: any) => new ProductActions.unlinkShoppingCardSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new ProductActions.unlinkShoppingCardFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdWhishList$ = this.actions$
    .ofType(ProductActionTypes.FIND_BY_ID_WHISHLIST)
    .mergeMap((action: LoopbackAction) =>
      this.product.findByIdWhishList(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'User', 'findByIdSuccess'),
          of(new ProductActions.findByIdWhishListSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new ProductActions.findByIdWhishListFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdWhishList$ = this.actions$
    .ofType(ProductActionTypes.DESTROY_BY_ID_WHISHLIST)
    .mergeMap((action: LoopbackAction) =>
      this.product.destroyByIdWhishList(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'User', 'deleteByIdSuccess'),
          of(new ProductActions.destroyByIdWhishListSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new ProductActions.destroyByIdWhishListFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdWhishList$ = this.actions$
    .ofType(ProductActionTypes.UPDATE_BY_ID_WHISHLIST)
    .mergeMap((action: LoopbackAction) =>
      this.product.updateByIdWhishList(action.payload.id, action.payload.fk, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'User', 'findByIdSuccess'),
          of(new ProductActions.updateByIdWhishListSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new ProductActions.updateByIdWhishListFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public linkWhishList$ = this.actions$
    .ofType(ProductActionTypes.LINK_WHISHLIST)
    .mergeMap((action: LoopbackAction) =>
      this.product.linkWhishList(action.payload.id, action.payload.fk, action.payload.data)
        .map((response: any) => new ProductActions.linkWhishListSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new ProductActions.linkWhishListFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public unlinkWhishList$ = this.actions$
    .ofType(ProductActionTypes.UNLINK_WHISHLIST)
    .mergeMap((action: LoopbackAction) =>
      this.product.unlinkWhishList(action.payload.id, action.payload.fk)
        .map((response: any) => new ProductActions.unlinkWhishListSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new ProductActions.unlinkWhishListFail(error, action.meta)),
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
  public getShoppingCard$ = this.actions$
    .ofType(ProductActionTypes.GET_SHOPPINGCARD)
    .mergeMap((action: LoopbackAction) =>
      this.product.getShoppingCard(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
          of(new ProductActions.getShoppingCardSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new ProductActions.getShoppingCardFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createShoppingCard$ = this.actions$
    .ofType(ProductActionTypes.CREATE_SHOPPINGCARD)
    .mergeMap((action: LoopbackAction) =>
      this.product.createShoppingCard(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
          of(new ProductActions.createShoppingCardSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new ProductActions.createShoppingCardFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteShoppingCard$ = this.actions$
    .ofType(ProductActionTypes.DELETE_SHOPPINGCARD)
    .mergeMap((action: LoopbackAction) =>
      this.product.deleteShoppingCard(action.payload.id)
        .map((response: any) => new ProductActions.deleteShoppingCardSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new ProductActions.deleteShoppingCardFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getWhishList$ = this.actions$
    .ofType(ProductActionTypes.GET_WHISHLIST)
    .mergeMap((action: LoopbackAction) =>
      this.product.getWhishList(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
          of(new ProductActions.getWhishListSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new ProductActions.getWhishListFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createWhishList$ = this.actions$
    .ofType(ProductActionTypes.CREATE_WHISHLIST)
    .mergeMap((action: LoopbackAction) =>
      this.product.createWhishList(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
          of(new ProductActions.createWhishListSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new ProductActions.createWhishListFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteWhishList$ = this.actions$
    .ofType(ProductActionTypes.DELETE_WHISHLIST)
    .mergeMap((action: LoopbackAction) =>
      this.product.deleteWhishList(action.payload.id)
        .map((response: any) => new ProductActions.deleteWhishListSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new ProductActions.deleteWhishListFail(error, action.meta)),
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

  @Effect()
  public createManyShoppingCard$ = this.actions$
    .ofType(ProductActionTypes.CREATE_MANY_SHOPPINGCARD)
    .mergeMap((action: LoopbackAction) =>
      this.product.createManyShoppingCard(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
          of(new ProductActions.createManyShoppingCardSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new ProductActions.createManyShoppingCardFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyWhishList$ = this.actions$
    .ofType(ProductActionTypes.CREATE_MANY_WHISHLIST)
    .mergeMap((action: LoopbackAction) =>
      this.product.createManyWhishList(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
          of(new ProductActions.createManyWhishListSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new ProductActions.createManyWhishListFail(error, action.meta)),
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
