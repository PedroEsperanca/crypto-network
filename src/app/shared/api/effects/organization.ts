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

import { OrganizationActionTypes, OrganizationActions } from '../actions/Organization';
import { LoopbackErrorActions } from '../actions/error';
import { OrganizationApi } from '../services/index';

@Injectable()
export class OrganizationEffects extends BaseLoopbackEffects {
  @Effect()
  public stripeAuthenticateCallback$ = this.actions$
    .ofType(OrganizationActionTypes.STRIPE_AUTHENTICATE_CALLBACK)
    .mergeMap((action: LoopbackAction) =>
      this.organization.stripeAuthenticateCallback(action.payload.req, action.payload.res)
        .map((response: any) => new OrganizationActions.stripeAuthenticateCallbackSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.stripeAuthenticateCallbackFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public stripeAuthenticate$ = this.actions$
    .ofType(OrganizationActionTypes.STRIPE_AUTHENTICATE)
    .mergeMap((action: LoopbackAction) =>
      this.organization.stripeAuthenticate(action.payload.id)
        .map((response: any) => new OrganizationActions.stripeAuthenticateSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.stripeAuthenticateFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdUsers$ = this.actions$
    .ofType(OrganizationActionTypes.FIND_BY_ID_USERS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.findByIdUsers(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'User', 'findByIdSuccess'),
          of(new OrganizationActions.findByIdUsersSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.findByIdUsersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdUsers$ = this.actions$
    .ofType(OrganizationActionTypes.DESTROY_BY_ID_USERS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.destroyByIdUsers(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'User', 'deleteByIdSuccess'),
          of(new OrganizationActions.destroyByIdUsersSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.destroyByIdUsersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdUsers$ = this.actions$
    .ofType(OrganizationActionTypes.UPDATE_BY_ID_USERS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.updateByIdUsers(action.payload.id, action.payload.fk, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'User', 'findByIdSuccess'),
          of(new OrganizationActions.updateByIdUsersSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.updateByIdUsersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public linkUsers$ = this.actions$
    .ofType(OrganizationActionTypes.LINK_USERS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.linkUsers(action.payload.id, action.payload.fk, action.payload.data)
        .map((response: any) => new OrganizationActions.linkUsersSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.linkUsersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public unlinkUsers$ = this.actions$
    .ofType(OrganizationActionTypes.UNLINK_USERS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.unlinkUsers(action.payload.id, action.payload.fk)
        .map((response: any) => new OrganizationActions.unlinkUsersSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.unlinkUsersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdRoles$ = this.actions$
    .ofType(OrganizationActionTypes.FIND_BY_ID_ROLES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.findByIdRoles(action.payload.id, action.payload.fk)
        .map((response: any) => new OrganizationActions.findByIdRolesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.findByIdRolesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdRoles$ = this.actions$
    .ofType(OrganizationActionTypes.DESTROY_BY_ID_ROLES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.destroyByIdRoles(action.payload.id, action.payload.fk)
        .map((response: any) => new OrganizationActions.destroyByIdRolesSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.destroyByIdRolesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdRoles$ = this.actions$
    .ofType(OrganizationActionTypes.UPDATE_BY_ID_ROLES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.updateByIdRoles(action.payload.id, action.payload.fk, action.payload.data)
        .map((response: any) => new OrganizationActions.updateByIdRolesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.updateByIdRolesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getS3Photo$ = this.actions$
    .ofType(OrganizationActionTypes.GET_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.organization.getS3Photo(action.payload.id, action.payload.refresh)
        .map((response: any) => new OrganizationActions.getS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.getS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createS3Photo$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createS3Photo(action.payload.id, action.payload.data)
        .map((response: any) => new OrganizationActions.createS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.createS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateS3Photo$ = this.actions$
    .ofType(OrganizationActionTypes.UPDATE_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.organization.updateS3Photo(action.payload.id, action.payload.data)
        .map((response: any) => new OrganizationActions.updateS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.updateS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyS3Photo$ = this.actions$
    .ofType(OrganizationActionTypes.DESTROY_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.organization.destroyS3Photo(action.payload.id)
        .map((response: any) => new OrganizationActions.destroyS3PhotoSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.destroyS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getStripeCustomer$ = this.actions$
    .ofType(OrganizationActionTypes.GET_STRIPECUSTOMER)
    .mergeMap((action: LoopbackAction) =>
      this.organization.getStripeCustomer(action.payload.id, action.payload.refresh)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeCustomer', 'findSuccess'),
          of(new OrganizationActions.getStripeCustomerSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.getStripeCustomerFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createStripeCustomer$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_STRIPECUSTOMER)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createStripeCustomer(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeCustomer', 'findSuccess'),
          of(new OrganizationActions.createStripeCustomerSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.createStripeCustomerFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateStripeCustomer$ = this.actions$
    .ofType(OrganizationActionTypes.UPDATE_STRIPECUSTOMER)
    .mergeMap((action: LoopbackAction) =>
      this.organization.updateStripeCustomer(action.payload.id, action.payload.data)
        .map((response: any) => new OrganizationActions.updateStripeCustomerSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.updateStripeCustomerFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyStripeCustomer$ = this.actions$
    .ofType(OrganizationActionTypes.DESTROY_STRIPECUSTOMER)
    .mergeMap((action: LoopbackAction) =>
      this.organization.destroyStripeCustomer(action.payload.id)
        .map((response: any) => new OrganizationActions.destroyStripeCustomerSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.destroyStripeCustomerFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdStripeSources$ = this.actions$
    .ofType(OrganizationActionTypes.FIND_BY_ID_STRIPESOURCES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.findByIdStripeSources(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'StripeSource', 'findByIdSuccess'),
          of(new OrganizationActions.findByIdStripeSourcesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.findByIdStripeSourcesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdStripeSources$ = this.actions$
    .ofType(OrganizationActionTypes.DESTROY_BY_ID_STRIPESOURCES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.destroyByIdStripeSources(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeSource', 'deleteByIdSuccess'),
          of(new OrganizationActions.destroyByIdStripeSourcesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.destroyByIdStripeSourcesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdStripeSources$ = this.actions$
    .ofType(OrganizationActionTypes.UPDATE_BY_ID_STRIPESOURCES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.updateByIdStripeSources(action.payload.id, action.payload.fk, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'StripeSource', 'findByIdSuccess'),
          of(new OrganizationActions.updateByIdStripeSourcesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.updateByIdStripeSourcesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdStripeCharges$ = this.actions$
    .ofType(OrganizationActionTypes.FIND_BY_ID_STRIPECHARGES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.findByIdStripeCharges(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'StripeCharge', 'findByIdSuccess'),
          of(new OrganizationActions.findByIdStripeChargesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.findByIdStripeChargesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdStripeCharges$ = this.actions$
    .ofType(OrganizationActionTypes.DESTROY_BY_ID_STRIPECHARGES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.destroyByIdStripeCharges(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeCharge', 'deleteByIdSuccess'),
          of(new OrganizationActions.destroyByIdStripeChargesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.destroyByIdStripeChargesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdStripeCharges$ = this.actions$
    .ofType(OrganizationActionTypes.UPDATE_BY_ID_STRIPECHARGES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.updateByIdStripeCharges(action.payload.id, action.payload.fk, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'StripeCharge', 'findByIdSuccess'),
          of(new OrganizationActions.updateByIdStripeChargesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.updateByIdStripeChargesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getStripeStoreIdentity$ = this.actions$
    .ofType(OrganizationActionTypes.GET_STRIPESTOREIDENTITY)
    .mergeMap((action: LoopbackAction) =>
      this.organization.getStripeStoreIdentity(action.payload.id, action.payload.refresh)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeStoreIdentity', 'findSuccess'),
          of(new OrganizationActions.getStripeStoreIdentitySuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.getStripeStoreIdentityFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createStripeStoreIdentity$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_STRIPESTOREIDENTITY)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createStripeStoreIdentity(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeStoreIdentity', 'findSuccess'),
          of(new OrganizationActions.createStripeStoreIdentitySuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.createStripeStoreIdentityFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateStripeStoreIdentity$ = this.actions$
    .ofType(OrganizationActionTypes.UPDATE_STRIPESTOREIDENTITY)
    .mergeMap((action: LoopbackAction) =>
      this.organization.updateStripeStoreIdentity(action.payload.id, action.payload.data)
        .map((response: any) => new OrganizationActions.updateStripeStoreIdentitySuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.updateStripeStoreIdentityFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyStripeStoreIdentity$ = this.actions$
    .ofType(OrganizationActionTypes.DESTROY_STRIPESTOREIDENTITY)
    .mergeMap((action: LoopbackAction) =>
      this.organization.destroyStripeStoreIdentity(action.payload.id)
        .map((response: any) => new OrganizationActions.destroyStripeStoreIdentitySuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.destroyStripeStoreIdentityFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdContacts$ = this.actions$
    .ofType(OrganizationActionTypes.FIND_BY_ID_CONTACTS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.findByIdContacts(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'Contact', 'findByIdSuccess'),
          of(new OrganizationActions.findByIdContactsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.findByIdContactsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdContacts$ = this.actions$
    .ofType(OrganizationActionTypes.DESTROY_BY_ID_CONTACTS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.destroyByIdContacts(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Contact', 'deleteByIdSuccess'),
          of(new OrganizationActions.destroyByIdContactsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.destroyByIdContactsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdContacts$ = this.actions$
    .ofType(OrganizationActionTypes.UPDATE_BY_ID_CONTACTS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.updateByIdContacts(action.payload.id, action.payload.fk, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'Contact', 'findByIdSuccess'),
          of(new OrganizationActions.updateByIdContactsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.updateByIdContactsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdPosts$ = this.actions$
    .ofType(OrganizationActionTypes.FIND_BY_ID_POSTS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.findByIdPosts(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'Post', 'findByIdSuccess'),
          of(new OrganizationActions.findByIdPostsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.findByIdPostsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdPosts$ = this.actions$
    .ofType(OrganizationActionTypes.DESTROY_BY_ID_POSTS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.destroyByIdPosts(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Post', 'deleteByIdSuccess'),
          of(new OrganizationActions.destroyByIdPostsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.destroyByIdPostsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdPosts$ = this.actions$
    .ofType(OrganizationActionTypes.UPDATE_BY_ID_POSTS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.updateByIdPosts(action.payload.id, action.payload.fk, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'Post', 'findByIdSuccess'),
          of(new OrganizationActions.updateByIdPostsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.updateByIdPostsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdProducts$ = this.actions$
    .ofType(OrganizationActionTypes.FIND_BY_ID_PRODUCTS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.findByIdProducts(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'Product', 'findByIdSuccess'),
          of(new OrganizationActions.findByIdProductsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.findByIdProductsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdProducts$ = this.actions$
    .ofType(OrganizationActionTypes.DESTROY_BY_ID_PRODUCTS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.destroyByIdProducts(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Product', 'deleteByIdSuccess'),
          of(new OrganizationActions.destroyByIdProductsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.destroyByIdProductsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdProducts$ = this.actions$
    .ofType(OrganizationActionTypes.UPDATE_BY_ID_PRODUCTS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.updateByIdProducts(action.payload.id, action.payload.fk, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'Product', 'findByIdSuccess'),
          of(new OrganizationActions.updateByIdProductsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.updateByIdProductsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdSubscriptions$ = this.actions$
    .ofType(OrganizationActionTypes.FIND_BY_ID_SUBSCRIPTIONS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.findByIdSubscriptions(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'Subscription', 'findByIdSuccess'),
          of(new OrganizationActions.findByIdSubscriptionsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.findByIdSubscriptionsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdSubscriptions$ = this.actions$
    .ofType(OrganizationActionTypes.DESTROY_BY_ID_SUBSCRIPTIONS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.destroyByIdSubscriptions(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Subscription', 'deleteByIdSuccess'),
          of(new OrganizationActions.destroyByIdSubscriptionsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.destroyByIdSubscriptionsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdSubscriptions$ = this.actions$
    .ofType(OrganizationActionTypes.UPDATE_BY_ID_SUBSCRIPTIONS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.updateByIdSubscriptions(action.payload.id, action.payload.fk, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'Subscription', 'findByIdSuccess'),
          of(new OrganizationActions.updateByIdSubscriptionsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.updateByIdSubscriptionsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdOAuthClientApplications$ = this.actions$
    .ofType(OrganizationActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.findByIdOAuthClientApplications(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'OAuthApp', 'findByIdSuccess'),
          of(new OrganizationActions.findByIdOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.findByIdOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdOAuthClientApplications$ = this.actions$
    .ofType(OrganizationActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.destroyByIdOAuthClientApplications(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'OAuthApp', 'deleteByIdSuccess'),
          of(new OrganizationActions.destroyByIdOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.destroyByIdOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdOAuthClientApplications$ = this.actions$
    .ofType(OrganizationActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.updateByIdOAuthClientApplications(action.payload.id, action.payload.fk, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'OAuthApp', 'findByIdSuccess'),
          of(new OrganizationActions.updateByIdOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.updateByIdOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getUsers$ = this.actions$
    .ofType(OrganizationActionTypes.GET_USERS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.getUsers(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
          of(new OrganizationActions.getUsersSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.getUsersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createUsers$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_USERS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createUsers(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
          of(new OrganizationActions.createUsersSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.createUsersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteUsers$ = this.actions$
    .ofType(OrganizationActionTypes.DELETE_USERS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.deleteUsers(action.payload.id)
        .map((response: any) => new OrganizationActions.deleteUsersSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.deleteUsersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getRoles$ = this.actions$
    .ofType(OrganizationActionTypes.GET_ROLES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.getRoles(action.payload.id, action.payload.filter)
        .map((response: any) => new OrganizationActions.getRolesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.getRolesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createRoles$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_ROLES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createRoles(action.payload.id, action.payload.data)
        .map((response: any) => new OrganizationActions.createRolesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.createRolesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteRoles$ = this.actions$
    .ofType(OrganizationActionTypes.DELETE_ROLES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.deleteRoles(action.payload.id)
        .map((response: any) => new OrganizationActions.deleteRolesSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.deleteRolesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getStripeSources$ = this.actions$
    .ofType(OrganizationActionTypes.GET_STRIPESOURCES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.getStripeSources(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeSource', 'findSuccess'),
          of(new OrganizationActions.getStripeSourcesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.getStripeSourcesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createStripeSources$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_STRIPESOURCES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createStripeSources(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeSource', 'findSuccess'),
          of(new OrganizationActions.createStripeSourcesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.createStripeSourcesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteStripeSources$ = this.actions$
    .ofType(OrganizationActionTypes.DELETE_STRIPESOURCES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.deleteStripeSources(action.payload.id)
        .map((response: any) => new OrganizationActions.deleteStripeSourcesSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.deleteStripeSourcesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getStripeCharges$ = this.actions$
    .ofType(OrganizationActionTypes.GET_STRIPECHARGES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.getStripeCharges(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeCharge', 'findSuccess'),
          of(new OrganizationActions.getStripeChargesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.getStripeChargesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createStripeCharges$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_STRIPECHARGES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createStripeCharges(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeCharge', 'findSuccess'),
          of(new OrganizationActions.createStripeChargesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.createStripeChargesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteStripeCharges$ = this.actions$
    .ofType(OrganizationActionTypes.DELETE_STRIPECHARGES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.deleteStripeCharges(action.payload.id)
        .map((response: any) => new OrganizationActions.deleteStripeChargesSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.deleteStripeChargesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getContacts$ = this.actions$
    .ofType(OrganizationActionTypes.GET_CONTACTS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.getContacts(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Contact', 'findSuccess'),
          of(new OrganizationActions.getContactsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.getContactsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createContacts$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_CONTACTS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createContacts(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Contact', 'findSuccess'),
          of(new OrganizationActions.createContactsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.createContactsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteContacts$ = this.actions$
    .ofType(OrganizationActionTypes.DELETE_CONTACTS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.deleteContacts(action.payload.id)
        .map((response: any) => new OrganizationActions.deleteContactsSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.deleteContactsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getPosts$ = this.actions$
    .ofType(OrganizationActionTypes.GET_POSTS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.getPosts(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Post', 'findSuccess'),
          of(new OrganizationActions.getPostsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.getPostsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createPosts$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_POSTS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createPosts(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Post', 'findSuccess'),
          of(new OrganizationActions.createPostsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.createPostsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deletePosts$ = this.actions$
    .ofType(OrganizationActionTypes.DELETE_POSTS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.deletePosts(action.payload.id)
        .map((response: any) => new OrganizationActions.deletePostsSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.deletePostsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getProducts$ = this.actions$
    .ofType(OrganizationActionTypes.GET_PRODUCTS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.getProducts(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Product', 'findSuccess'),
          of(new OrganizationActions.getProductsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.getProductsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createProducts$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_PRODUCTS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createProducts(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Product', 'findSuccess'),
          of(new OrganizationActions.createProductsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.createProductsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteProducts$ = this.actions$
    .ofType(OrganizationActionTypes.DELETE_PRODUCTS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.deleteProducts(action.payload.id)
        .map((response: any) => new OrganizationActions.deleteProductsSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.deleteProductsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getSubscriptions$ = this.actions$
    .ofType(OrganizationActionTypes.GET_SUBSCRIPTIONS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.getSubscriptions(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Subscription', 'findSuccess'),
          of(new OrganizationActions.getSubscriptionsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.getSubscriptionsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createSubscriptions$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_SUBSCRIPTIONS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createSubscriptions(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Subscription', 'findSuccess'),
          of(new OrganizationActions.createSubscriptionsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.createSubscriptionsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteSubscriptions$ = this.actions$
    .ofType(OrganizationActionTypes.DELETE_SUBSCRIPTIONS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.deleteSubscriptions(action.payload.id)
        .map((response: any) => new OrganizationActions.deleteSubscriptionsSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.deleteSubscriptionsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getOAuthClientApplications$ = this.actions$
    .ofType(OrganizationActionTypes.GET_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.getOAuthClientApplications(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'OAuthApp', 'findSuccess'),
          of(new OrganizationActions.getOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.getOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createOAuthClientApplications$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createOAuthClientApplications(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'OAuthApp', 'findSuccess'),
          of(new OrganizationActions.createOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.createOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteOAuthClientApplications$ = this.actions$
    .ofType(OrganizationActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.deleteOAuthClientApplications(action.payload.id)
        .map((response: any) => new OrganizationActions.deleteOAuthClientApplicationsSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.deleteOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public s3PUTSignedUrl$ = this.actions$
    .ofType(OrganizationActionTypes.S3_P_U_T_SIGNED_URL)
    .mergeMap((action: LoopbackAction) =>
      this.organization.s3PUTSignedUrl(action.payload.id, action.payload.key, action.payload.options)
        .map((response: any) => new OrganizationActions.s3PUTSignedUrlSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.s3PUTSignedUrlFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public s3GETSignedUrl$ = this.actions$
    .ofType(OrganizationActionTypes.S3_G_E_T_SIGNED_URL)
    .mergeMap((action: LoopbackAction) =>
      this.organization.s3GETSignedUrl(action.payload.id, action.payload.key)
        .map((response: any) => new OrganizationActions.s3GETSignedUrlSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.s3GETSignedUrlFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyS3Photo$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_MANY_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createManyS3Photo(action.payload.id, action.payload.data)
        .map((response: any) => new OrganizationActions.createManyS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.createManyS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyStripeCustomer$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_MANY_STRIPECUSTOMER)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createManyStripeCustomer(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeCustomer', 'findSuccess'),
          of(new OrganizationActions.createManyStripeCustomerSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.createManyStripeCustomerFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyStripeStoreIdentity$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_MANY_STRIPESTOREIDENTITY)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createManyStripeStoreIdentity(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeStoreIdentity', 'findSuccess'),
          of(new OrganizationActions.createManyStripeStoreIdentitySuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.createManyStripeStoreIdentityFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyUsers$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_MANY_USERS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createManyUsers(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
          of(new OrganizationActions.createManyUsersSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.createManyUsersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyRoles$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_MANY_ROLES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createManyRoles(action.payload.id, action.payload.data)
        .map((response: any) => new OrganizationActions.createManyRolesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new OrganizationActions.createManyRolesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyStripeSources$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_MANY_STRIPESOURCES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createManyStripeSources(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeSource', 'findSuccess'),
          of(new OrganizationActions.createManyStripeSourcesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.createManyStripeSourcesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyStripeCharges$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_MANY_STRIPECHARGES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createManyStripeCharges(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeCharge', 'findSuccess'),
          of(new OrganizationActions.createManyStripeChargesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.createManyStripeChargesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyContacts$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_MANY_CONTACTS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createManyContacts(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Contact', 'findSuccess'),
          of(new OrganizationActions.createManyContactsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.createManyContactsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyPosts$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_MANY_POSTS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createManyPosts(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Post', 'findSuccess'),
          of(new OrganizationActions.createManyPostsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.createManyPostsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyProducts$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_MANY_PRODUCTS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createManyProducts(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Product', 'findSuccess'),
          of(new OrganizationActions.createManyProductsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.createManyProductsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManySubscriptions$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_MANY_SUBSCRIPTIONS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createManySubscriptions(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Subscription', 'findSuccess'),
          of(new OrganizationActions.createManySubscriptionsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.createManySubscriptionsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyOAuthClientApplications$ = this.actions$
    .ofType(OrganizationActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createManyOAuthClientApplications(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'OAuthApp', 'findSuccess'),
          of(new OrganizationActions.createManyOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new OrganizationActions.createManyOAuthClientApplicationsFail(error, action.meta)),
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
    @Inject(OrganizationApi) public organization: OrganizationApi
  ) {
    super(actions$, organization, 'Organization', OrganizationActionTypes, OrganizationActions);
  }
}
