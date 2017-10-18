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

import { UserActionTypes, UserActions } from '../actions/User';
import { LoopbackErrorActions } from '../actions/error';
import { UserApi } from '../services/index';

@Injectable()
export class UserEffects extends BaseLoopbackEffects {
  @Effect()
  public sendVerificationCode$ = this.actions$
    .ofType(UserActionTypes.SEND_VERIFICATION_CODE)
    .mergeMap((action: LoopbackAction) =>
      this.user.sendVerificationCode(action.payload.id, action.payload.data)
        .map((response: any) => new UserActions.sendVerificationCodeSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.sendVerificationCodeFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdEmails$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_EMAILS)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdEmails(action.payload.id, action.payload.fk)
        .map((response: any) => new UserActions.findByIdEmailsSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.findByIdEmailsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdEmails$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_EMAILS)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyByIdEmails(action.payload.id, action.payload.fk)
        .map((response: any) => new UserActions.destroyByIdEmailsSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.destroyByIdEmailsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdEmails$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_EMAILS)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateByIdEmails(action.payload.id, action.payload.fk, action.payload.data)
        .map((response: any) => new UserActions.updateByIdEmailsSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.updateByIdEmailsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdPhones$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_PHONES)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdPhones(action.payload.id, action.payload.fk)
        .map((response: any) => new UserActions.findByIdPhonesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.findByIdPhonesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdPhones$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_PHONES)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyByIdPhones(action.payload.id, action.payload.fk)
        .map((response: any) => new UserActions.destroyByIdPhonesSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.destroyByIdPhonesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdPhones$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_PHONES)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateByIdPhones(action.payload.id, action.payload.fk, action.payload.data)
        .map((response: any) => new UserActions.updateByIdPhonesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.updateByIdPhonesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getStripeCustomer$ = this.actions$
    .ofType(UserActionTypes.GET_STRIPECUSTOMER)
    .mergeMap((action: LoopbackAction) =>
      this.user.getStripeCustomer(action.payload.id, action.payload.refresh)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeCustomer', 'findSuccess'),
          of(new UserActions.getStripeCustomerSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.getStripeCustomerFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createStripeCustomer$ = this.actions$
    .ofType(UserActionTypes.CREATE_STRIPECUSTOMER)
    .mergeMap((action: LoopbackAction) =>
      this.user.createStripeCustomer(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeCustomer', 'findSuccess'),
          of(new UserActions.createStripeCustomerSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.createStripeCustomerFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateStripeCustomer$ = this.actions$
    .ofType(UserActionTypes.UPDATE_STRIPECUSTOMER)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateStripeCustomer(action.payload.id, action.payload.data)
        .map((response: any) => new UserActions.updateStripeCustomerSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.updateStripeCustomerFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyStripeCustomer$ = this.actions$
    .ofType(UserActionTypes.DESTROY_STRIPECUSTOMER)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyStripeCustomer(action.payload.id)
        .map((response: any) => new UserActions.destroyStripeCustomerSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.destroyStripeCustomerFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdStripeSources$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_STRIPESOURCES)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdStripeSources(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'StripeSource', 'findByIdSuccess'),
          of(new UserActions.findByIdStripeSourcesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.findByIdStripeSourcesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdStripeSources$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_STRIPESOURCES)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyByIdStripeSources(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeSource', 'deleteByIdSuccess'),
          of(new UserActions.destroyByIdStripeSourcesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.destroyByIdStripeSourcesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdStripeSources$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_STRIPESOURCES)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateByIdStripeSources(action.payload.id, action.payload.fk, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'StripeSource', 'findByIdSuccess'),
          of(new UserActions.updateByIdStripeSourcesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.updateByIdStripeSourcesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdStripeCharges$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_STRIPECHARGES)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdStripeCharges(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'StripeCharge', 'findByIdSuccess'),
          of(new UserActions.findByIdStripeChargesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.findByIdStripeChargesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdStripeCharges$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_STRIPECHARGES)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyByIdStripeCharges(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeCharge', 'deleteByIdSuccess'),
          of(new UserActions.destroyByIdStripeChargesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.destroyByIdStripeChargesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdStripeCharges$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_STRIPECHARGES)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateByIdStripeCharges(action.payload.id, action.payload.fk, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'StripeCharge', 'findByIdSuccess'),
          of(new UserActions.updateByIdStripeChargesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.updateByIdStripeChargesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdIdentities$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_IDENTITIES)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdIdentities(action.payload.id, action.payload.fk)
        .map((response: any) => new UserActions.findByIdIdentitiesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.findByIdIdentitiesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdIdentities$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_IDENTITIES)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyByIdIdentities(action.payload.id, action.payload.fk)
        .map((response: any) => new UserActions.destroyByIdIdentitiesSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.destroyByIdIdentitiesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdIdentities$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_IDENTITIES)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateByIdIdentities(action.payload.id, action.payload.fk, action.payload.data)
        .map((response: any) => new UserActions.updateByIdIdentitiesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.updateByIdIdentitiesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdCredentials$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_CREDENTIALS)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdCredentials(action.payload.id, action.payload.fk)
        .map((response: any) => new UserActions.findByIdCredentialsSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.findByIdCredentialsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdCredentials$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_CREDENTIALS)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyByIdCredentials(action.payload.id, action.payload.fk)
        .map((response: any) => new UserActions.destroyByIdCredentialsSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.destroyByIdCredentialsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdCredentials$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_CREDENTIALS)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateByIdCredentials(action.payload.id, action.payload.fk, action.payload.data)
        .map((response: any) => new UserActions.updateByIdCredentialsSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.updateByIdCredentialsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdAccessTokens$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_ACCESSTOKENS)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdAccessTokens(action.payload.id, action.payload.fk)
        .map((response: any) => new UserActions.findByIdAccessTokensSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.findByIdAccessTokensFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdAccessTokens$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_ACCESSTOKENS)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyByIdAccessTokens(action.payload.id, action.payload.fk)
        .map((response: any) => new UserActions.destroyByIdAccessTokensSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.destroyByIdAccessTokensFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdAccessTokens$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_ACCESSTOKENS)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateByIdAccessTokens(action.payload.id, action.payload.fk, action.payload.data)
        .map((response: any) => new UserActions.updateByIdAccessTokensSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.updateByIdAccessTokensFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdRoles$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_ROLES)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdRoles(action.payload.id, action.payload.fk)
        .map((response: any) => new UserActions.findByIdRolesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.findByIdRolesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdRoles$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_ROLES)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyByIdRoles(action.payload.id, action.payload.fk)
        .map((response: any) => new UserActions.destroyByIdRolesSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.destroyByIdRolesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdRoles$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_ROLES)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateByIdRoles(action.payload.id, action.payload.fk, action.payload.data)
        .map((response: any) => new UserActions.updateByIdRolesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.updateByIdRolesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getS3Photo$ = this.actions$
    .ofType(UserActionTypes.GET_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.user.getS3Photo(action.payload.id, action.payload.refresh)
        .map((response: any) => new UserActions.getS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.getS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createS3Photo$ = this.actions$
    .ofType(UserActionTypes.CREATE_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.user.createS3Photo(action.payload.id, action.payload.data)
        .map((response: any) => new UserActions.createS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.createS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateS3Photo$ = this.actions$
    .ofType(UserActionTypes.UPDATE_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateS3Photo(action.payload.id, action.payload.data)
        .map((response: any) => new UserActions.updateS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.updateS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyS3Photo$ = this.actions$
    .ofType(UserActionTypes.DESTROY_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyS3Photo(action.payload.id)
        .map((response: any) => new UserActions.destroyS3PhotoSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.destroyS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdOrganizations$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_ORGANIZATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdOrganizations(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'Organization', 'findByIdSuccess'),
          of(new UserActions.findByIdOrganizationsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.findByIdOrganizationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdOrganizations$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_ORGANIZATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyByIdOrganizations(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Organization', 'deleteByIdSuccess'),
          of(new UserActions.destroyByIdOrganizationsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.destroyByIdOrganizationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdOrganizations$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_ORGANIZATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateByIdOrganizations(action.payload.id, action.payload.fk, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'Organization', 'findByIdSuccess'),
          of(new UserActions.updateByIdOrganizationsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.updateByIdOrganizationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public linkOrganizations$ = this.actions$
    .ofType(UserActionTypes.LINK_ORGANIZATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.linkOrganizations(action.payload.id, action.payload.fk, action.payload.data)
        .map((response: any) => new UserActions.linkOrganizationsSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.linkOrganizationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public unlinkOrganizations$ = this.actions$
    .ofType(UserActionTypes.UNLINK_ORGANIZATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.unlinkOrganizations(action.payload.id, action.payload.fk)
        .map((response: any) => new UserActions.unlinkOrganizationsSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.unlinkOrganizationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdContacts$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_CONTACTS)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdContacts(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'Contact', 'findByIdSuccess'),
          of(new UserActions.findByIdContactsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.findByIdContactsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdContacts$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_CONTACTS)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyByIdContacts(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Contact', 'deleteByIdSuccess'),
          of(new UserActions.destroyByIdContactsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.destroyByIdContactsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdContacts$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_CONTACTS)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateByIdContacts(action.payload.id, action.payload.fk, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'Contact', 'findByIdSuccess'),
          of(new UserActions.updateByIdContactsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.updateByIdContactsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdInvitations$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_INVITATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdInvitations(action.payload.id, action.payload.fk)
        .map((response: any) => new UserActions.findByIdInvitationsSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.findByIdInvitationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdInvitations$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_INVITATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyByIdInvitations(action.payload.id, action.payload.fk)
        .map((response: any) => new UserActions.destroyByIdInvitationsSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.destroyByIdInvitationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdInvitations$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_INVITATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateByIdInvitations(action.payload.id, action.payload.fk, action.payload.data)
        .map((response: any) => new UserActions.updateByIdInvitationsSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.updateByIdInvitationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdFollowers$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_FOLLOWERS)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdFollowers(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'User', 'findByIdSuccess'),
          of(new UserActions.findByIdFollowersSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.findByIdFollowersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public linkFollowers$ = this.actions$
    .ofType(UserActionTypes.LINK_FOLLOWERS)
    .mergeMap((action: LoopbackAction) =>
      this.user.linkFollowers(action.payload.id, action.payload.fk, action.payload.data)
        .map((response: any) => new UserActions.linkFollowersSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.linkFollowersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public unlinkFollowers$ = this.actions$
    .ofType(UserActionTypes.UNLINK_FOLLOWERS)
    .mergeMap((action: LoopbackAction) =>
      this.user.unlinkFollowers(action.payload.id, action.payload.fk)
        .map((response: any) => new UserActions.unlinkFollowersSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.unlinkFollowersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdFollowing$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_FOLLOWING)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdFollowing(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'User', 'findByIdSuccess'),
          of(new UserActions.findByIdFollowingSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.findByIdFollowingFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public linkFollowing$ = this.actions$
    .ofType(UserActionTypes.LINK_FOLLOWING)
    .mergeMap((action: LoopbackAction) =>
      this.user.linkFollowing(action.payload.id, action.payload.fk, action.payload.data)
        .map((response: any) => new UserActions.linkFollowingSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.linkFollowingFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public unlinkFollowing$ = this.actions$
    .ofType(UserActionTypes.UNLINK_FOLLOWING)
    .mergeMap((action: LoopbackAction) =>
      this.user.unlinkFollowing(action.payload.id, action.payload.fk)
        .map((response: any) => new UserActions.unlinkFollowingSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.unlinkFollowingFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdPosts$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_POSTS)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdPosts(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'Post', 'findByIdSuccess'),
          of(new UserActions.findByIdPostsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.findByIdPostsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdPosts$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_POSTS)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyByIdPosts(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Post', 'deleteByIdSuccess'),
          of(new UserActions.destroyByIdPostsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.destroyByIdPostsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdPosts$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_POSTS)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateByIdPosts(action.payload.id, action.payload.fk, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'Post', 'findByIdSuccess'),
          of(new UserActions.updateByIdPostsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.updateByIdPostsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdShares$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_SHARES)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdShares(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'Post', 'findByIdSuccess'),
          of(new UserActions.findByIdSharesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.findByIdSharesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public linkShares$ = this.actions$
    .ofType(UserActionTypes.LINK_SHARES)
    .mergeMap((action: LoopbackAction) =>
      this.user.linkShares(action.payload.id, action.payload.fk, action.payload.data)
        .map((response: any) => new UserActions.linkSharesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.linkSharesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public unlinkShares$ = this.actions$
    .ofType(UserActionTypes.UNLINK_SHARES)
    .mergeMap((action: LoopbackAction) =>
      this.user.unlinkShares(action.payload.id, action.payload.fk)
        .map((response: any) => new UserActions.unlinkSharesSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.unlinkSharesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdShoppingCard$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_SHOPPINGCARD)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdShoppingCard(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'Product', 'findByIdSuccess'),
          of(new UserActions.findByIdShoppingCardSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.findByIdShoppingCardFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdShoppingCard$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_SHOPPINGCARD)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyByIdShoppingCard(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Product', 'deleteByIdSuccess'),
          of(new UserActions.destroyByIdShoppingCardSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.destroyByIdShoppingCardFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdShoppingCard$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_SHOPPINGCARD)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateByIdShoppingCard(action.payload.id, action.payload.fk, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'Product', 'findByIdSuccess'),
          of(new UserActions.updateByIdShoppingCardSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.updateByIdShoppingCardFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public linkShoppingCard$ = this.actions$
    .ofType(UserActionTypes.LINK_SHOPPINGCARD)
    .mergeMap((action: LoopbackAction) =>
      this.user.linkShoppingCard(action.payload.id, action.payload.fk, action.payload.data)
        .map((response: any) => new UserActions.linkShoppingCardSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.linkShoppingCardFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public unlinkShoppingCard$ = this.actions$
    .ofType(UserActionTypes.UNLINK_SHOPPINGCARD)
    .mergeMap((action: LoopbackAction) =>
      this.user.unlinkShoppingCard(action.payload.id, action.payload.fk)
        .map((response: any) => new UserActions.unlinkShoppingCardSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.unlinkShoppingCardFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdWhishList$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_WHISHLIST)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdWhishList(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'Product', 'findByIdSuccess'),
          of(new UserActions.findByIdWhishListSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.findByIdWhishListFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdWhishList$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_WHISHLIST)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyByIdWhishList(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Product', 'deleteByIdSuccess'),
          of(new UserActions.destroyByIdWhishListSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.destroyByIdWhishListFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdWhishList$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_WHISHLIST)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateByIdWhishList(action.payload.id, action.payload.fk, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'Product', 'findByIdSuccess'),
          of(new UserActions.updateByIdWhishListSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.updateByIdWhishListFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public linkWhishList$ = this.actions$
    .ofType(UserActionTypes.LINK_WHISHLIST)
    .mergeMap((action: LoopbackAction) =>
      this.user.linkWhishList(action.payload.id, action.payload.fk, action.payload.data)
        .map((response: any) => new UserActions.linkWhishListSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.linkWhishListFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public unlinkWhishList$ = this.actions$
    .ofType(UserActionTypes.UNLINK_WHISHLIST)
    .mergeMap((action: LoopbackAction) =>
      this.user.unlinkWhishList(action.payload.id, action.payload.fk)
        .map((response: any) => new UserActions.unlinkWhishListSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.unlinkWhishListFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdOAuthClientApplications$ = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdOAuthClientApplications(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'OAuthApp', 'findByIdSuccess'),
          of(new UserActions.findByIdOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.findByIdOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdOAuthClientApplications$ = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyByIdOAuthClientApplications(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'OAuthApp', 'deleteByIdSuccess'),
          of(new UserActions.destroyByIdOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.destroyByIdOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdOAuthClientApplications$ = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateByIdOAuthClientApplications(action.payload.id, action.payload.fk, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'OAuthApp', 'findByIdSuccess'),
          of(new UserActions.updateByIdOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.updateByIdOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getEmails$ = this.actions$
    .ofType(UserActionTypes.GET_EMAILS)
    .mergeMap((action: LoopbackAction) =>
      this.user.getEmails(action.payload.id, action.payload.filter)
        .map((response: any) => new UserActions.getEmailsSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.getEmailsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createEmails$ = this.actions$
    .ofType(UserActionTypes.CREATE_EMAILS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createEmails(action.payload.id, action.payload.data)
        .map((response: any) => new UserActions.createEmailsSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.createEmailsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteEmails$ = this.actions$
    .ofType(UserActionTypes.DELETE_EMAILS)
    .mergeMap((action: LoopbackAction) =>
      this.user.deleteEmails(action.payload.id)
        .map((response: any) => new UserActions.deleteEmailsSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.deleteEmailsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getPhones$ = this.actions$
    .ofType(UserActionTypes.GET_PHONES)
    .mergeMap((action: LoopbackAction) =>
      this.user.getPhones(action.payload.id, action.payload.filter)
        .map((response: any) => new UserActions.getPhonesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.getPhonesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createPhones$ = this.actions$
    .ofType(UserActionTypes.CREATE_PHONES)
    .mergeMap((action: LoopbackAction) =>
      this.user.createPhones(action.payload.id, action.payload.data)
        .map((response: any) => new UserActions.createPhonesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.createPhonesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deletePhones$ = this.actions$
    .ofType(UserActionTypes.DELETE_PHONES)
    .mergeMap((action: LoopbackAction) =>
      this.user.deletePhones(action.payload.id)
        .map((response: any) => new UserActions.deletePhonesSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.deletePhonesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getStripeSources$ = this.actions$
    .ofType(UserActionTypes.GET_STRIPESOURCES)
    .mergeMap((action: LoopbackAction) =>
      this.user.getStripeSources(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeSource', 'findSuccess'),
          of(new UserActions.getStripeSourcesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.getStripeSourcesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createStripeSources$ = this.actions$
    .ofType(UserActionTypes.CREATE_STRIPESOURCES)
    .mergeMap((action: LoopbackAction) =>
      this.user.createStripeSources(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeSource', 'findSuccess'),
          of(new UserActions.createStripeSourcesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.createStripeSourcesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteStripeSources$ = this.actions$
    .ofType(UserActionTypes.DELETE_STRIPESOURCES)
    .mergeMap((action: LoopbackAction) =>
      this.user.deleteStripeSources(action.payload.id)
        .map((response: any) => new UserActions.deleteStripeSourcesSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.deleteStripeSourcesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getStripeCharges$ = this.actions$
    .ofType(UserActionTypes.GET_STRIPECHARGES)
    .mergeMap((action: LoopbackAction) =>
      this.user.getStripeCharges(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeCharge', 'findSuccess'),
          of(new UserActions.getStripeChargesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.getStripeChargesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createStripeCharges$ = this.actions$
    .ofType(UserActionTypes.CREATE_STRIPECHARGES)
    .mergeMap((action: LoopbackAction) =>
      this.user.createStripeCharges(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeCharge', 'findSuccess'),
          of(new UserActions.createStripeChargesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.createStripeChargesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteStripeCharges$ = this.actions$
    .ofType(UserActionTypes.DELETE_STRIPECHARGES)
    .mergeMap((action: LoopbackAction) =>
      this.user.deleteStripeCharges(action.payload.id)
        .map((response: any) => new UserActions.deleteStripeChargesSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.deleteStripeChargesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getIdentities$ = this.actions$
    .ofType(UserActionTypes.GET_IDENTITIES)
    .mergeMap((action: LoopbackAction) =>
      this.user.getIdentities(action.payload.id, action.payload.filter)
        .map((response: any) => new UserActions.getIdentitiesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.getIdentitiesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createIdentities$ = this.actions$
    .ofType(UserActionTypes.CREATE_IDENTITIES)
    .mergeMap((action: LoopbackAction) =>
      this.user.createIdentities(action.payload.id, action.payload.data)
        .map((response: any) => new UserActions.createIdentitiesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.createIdentitiesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteIdentities$ = this.actions$
    .ofType(UserActionTypes.DELETE_IDENTITIES)
    .mergeMap((action: LoopbackAction) =>
      this.user.deleteIdentities(action.payload.id)
        .map((response: any) => new UserActions.deleteIdentitiesSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.deleteIdentitiesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getCredentials$ = this.actions$
    .ofType(UserActionTypes.GET_CREDENTIALS)
    .mergeMap((action: LoopbackAction) =>
      this.user.getCredentials(action.payload.id, action.payload.filter)
        .map((response: any) => new UserActions.getCredentialsSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.getCredentialsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createCredentials$ = this.actions$
    .ofType(UserActionTypes.CREATE_CREDENTIALS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createCredentials(action.payload.id, action.payload.data)
        .map((response: any) => new UserActions.createCredentialsSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.createCredentialsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteCredentials$ = this.actions$
    .ofType(UserActionTypes.DELETE_CREDENTIALS)
    .mergeMap((action: LoopbackAction) =>
      this.user.deleteCredentials(action.payload.id)
        .map((response: any) => new UserActions.deleteCredentialsSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.deleteCredentialsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getAccessTokens$ = this.actions$
    .ofType(UserActionTypes.GET_ACCESSTOKENS)
    .mergeMap((action: LoopbackAction) =>
      this.user.getAccessTokens(action.payload.id, action.payload.filter)
        .map((response: any) => new UserActions.getAccessTokensSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.getAccessTokensFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createAccessTokens$ = this.actions$
    .ofType(UserActionTypes.CREATE_ACCESSTOKENS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createAccessTokens(action.payload.id, action.payload.data)
        .map((response: any) => new UserActions.createAccessTokensSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.createAccessTokensFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteAccessTokens$ = this.actions$
    .ofType(UserActionTypes.DELETE_ACCESSTOKENS)
    .mergeMap((action: LoopbackAction) =>
      this.user.deleteAccessTokens(action.payload.id)
        .map((response: any) => new UserActions.deleteAccessTokensSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.deleteAccessTokensFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getRoles$ = this.actions$
    .ofType(UserActionTypes.GET_ROLES)
    .mergeMap((action: LoopbackAction) =>
      this.user.getRoles(action.payload.id, action.payload.filter)
        .map((response: any) => new UserActions.getRolesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.getRolesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createRoles$ = this.actions$
    .ofType(UserActionTypes.CREATE_ROLES)
    .mergeMap((action: LoopbackAction) =>
      this.user.createRoles(action.payload.id, action.payload.data)
        .map((response: any) => new UserActions.createRolesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.createRolesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteRoles$ = this.actions$
    .ofType(UserActionTypes.DELETE_ROLES)
    .mergeMap((action: LoopbackAction) =>
      this.user.deleteRoles(action.payload.id)
        .map((response: any) => new UserActions.deleteRolesSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.deleteRolesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getOrganizations$ = this.actions$
    .ofType(UserActionTypes.GET_ORGANIZATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.getOrganizations(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Organization', 'findSuccess'),
          of(new UserActions.getOrganizationsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.getOrganizationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createOrganizations$ = this.actions$
    .ofType(UserActionTypes.CREATE_ORGANIZATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createOrganizations(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Organization', 'findSuccess'),
          of(new UserActions.createOrganizationsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.createOrganizationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteOrganizations$ = this.actions$
    .ofType(UserActionTypes.DELETE_ORGANIZATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.deleteOrganizations(action.payload.id)
        .map((response: any) => new UserActions.deleteOrganizationsSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.deleteOrganizationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getContacts$ = this.actions$
    .ofType(UserActionTypes.GET_CONTACTS)
    .mergeMap((action: LoopbackAction) =>
      this.user.getContacts(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Contact', 'findSuccess'),
          of(new UserActions.getContactsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.getContactsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createContacts$ = this.actions$
    .ofType(UserActionTypes.CREATE_CONTACTS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createContacts(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Contact', 'findSuccess'),
          of(new UserActions.createContactsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.createContactsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteContacts$ = this.actions$
    .ofType(UserActionTypes.DELETE_CONTACTS)
    .mergeMap((action: LoopbackAction) =>
      this.user.deleteContacts(action.payload.id)
        .map((response: any) => new UserActions.deleteContactsSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.deleteContactsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getInvitations$ = this.actions$
    .ofType(UserActionTypes.GET_INVITATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.getInvitations(action.payload.id, action.payload.filter)
        .map((response: any) => new UserActions.getInvitationsSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.getInvitationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createInvitations$ = this.actions$
    .ofType(UserActionTypes.CREATE_INVITATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createInvitations(action.payload.id, action.payload.data)
        .map((response: any) => new UserActions.createInvitationsSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.createInvitationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteInvitations$ = this.actions$
    .ofType(UserActionTypes.DELETE_INVITATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.deleteInvitations(action.payload.id)
        .map((response: any) => new UserActions.deleteInvitationsSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.deleteInvitationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getFollowers$ = this.actions$
    .ofType(UserActionTypes.GET_FOLLOWERS)
    .mergeMap((action: LoopbackAction) =>
      this.user.getFollowers(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
          of(new UserActions.getFollowersSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.getFollowersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getFollowing$ = this.actions$
    .ofType(UserActionTypes.GET_FOLLOWING)
    .mergeMap((action: LoopbackAction) =>
      this.user.getFollowing(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
          of(new UserActions.getFollowingSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.getFollowingFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getPosts$ = this.actions$
    .ofType(UserActionTypes.GET_POSTS)
    .mergeMap((action: LoopbackAction) =>
      this.user.getPosts(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Post', 'findSuccess'),
          of(new UserActions.getPostsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.getPostsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createPosts$ = this.actions$
    .ofType(UserActionTypes.CREATE_POSTS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createPosts(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Post', 'findSuccess'),
          of(new UserActions.createPostsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.createPostsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deletePosts$ = this.actions$
    .ofType(UserActionTypes.DELETE_POSTS)
    .mergeMap((action: LoopbackAction) =>
      this.user.deletePosts(action.payload.id)
        .map((response: any) => new UserActions.deletePostsSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.deletePostsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getShares$ = this.actions$
    .ofType(UserActionTypes.GET_SHARES)
    .mergeMap((action: LoopbackAction) =>
      this.user.getShares(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Post', 'findSuccess'),
          of(new UserActions.getSharesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.getSharesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getShoppingCard$ = this.actions$
    .ofType(UserActionTypes.GET_SHOPPINGCARD)
    .mergeMap((action: LoopbackAction) =>
      this.user.getShoppingCard(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Product', 'findSuccess'),
          of(new UserActions.getShoppingCardSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.getShoppingCardFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createShoppingCard$ = this.actions$
    .ofType(UserActionTypes.CREATE_SHOPPINGCARD)
    .mergeMap((action: LoopbackAction) =>
      this.user.createShoppingCard(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Product', 'findSuccess'),
          of(new UserActions.createShoppingCardSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.createShoppingCardFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteShoppingCard$ = this.actions$
    .ofType(UserActionTypes.DELETE_SHOPPINGCARD)
    .mergeMap((action: LoopbackAction) =>
      this.user.deleteShoppingCard(action.payload.id)
        .map((response: any) => new UserActions.deleteShoppingCardSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.deleteShoppingCardFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getWhishList$ = this.actions$
    .ofType(UserActionTypes.GET_WHISHLIST)
    .mergeMap((action: LoopbackAction) =>
      this.user.getWhishList(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Product', 'findSuccess'),
          of(new UserActions.getWhishListSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.getWhishListFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createWhishList$ = this.actions$
    .ofType(UserActionTypes.CREATE_WHISHLIST)
    .mergeMap((action: LoopbackAction) =>
      this.user.createWhishList(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Product', 'findSuccess'),
          of(new UserActions.createWhishListSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.createWhishListFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteWhishList$ = this.actions$
    .ofType(UserActionTypes.DELETE_WHISHLIST)
    .mergeMap((action: LoopbackAction) =>
      this.user.deleteWhishList(action.payload.id)
        .map((response: any) => new UserActions.deleteWhishListSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.deleteWhishListFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getOAuthClientApplications$ = this.actions$
    .ofType(UserActionTypes.GET_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.getOAuthClientApplications(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'OAuthApp', 'findSuccess'),
          of(new UserActions.getOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.getOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createOAuthClientApplications$ = this.actions$
    .ofType(UserActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createOAuthClientApplications(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'OAuthApp', 'findSuccess'),
          of(new UserActions.createOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.createOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteOAuthClientApplications$ = this.actions$
    .ofType(UserActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.deleteOAuthClientApplications(action.payload.id)
        .map((response: any) => new UserActions.deleteOAuthClientApplicationsSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.deleteOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public login$ = this.actions$
    .ofType(UserActionTypes.LOGIN)
    .mergeMap((action: LoopbackAction) =>
      this.user.login(action.payload.credentials, action.payload.include)
        .map((response: any) => new UserActions.loginSuccess(response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.loginFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public logout$ = this.actions$
    .ofType(UserActionTypes.LOGOUT)
    .mergeMap((action: LoopbackAction) =>
      this.user.logout()
        .map((response: any) => new UserActions.logoutSuccess(action.meta))
        .catch((error: any) => concat(
          of(new UserActions.logoutFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public verify$ = this.actions$
    .ofType(UserActionTypes.VERIFY)
    .mergeMap((action: LoopbackAction) =>
      this.user.verify(action.payload.id)
        .map((response: any) => new UserActions.verifySuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.verifyFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public confirm$ = this.actions$
    .ofType(UserActionTypes.CONFIRM)
    .mergeMap((action: LoopbackAction) =>
      this.user.confirm(action.payload.uid, action.payload.token, action.payload.redirect)
        .map((response: any) => new UserActions.confirmSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.confirmFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public resetPassword$ = this.actions$
    .ofType(UserActionTypes.RESET_PASSWORD)
    .mergeMap((action: LoopbackAction) =>
      this.user.resetPassword(action.payload.options)
        .map((response: any) => new UserActions.resetPasswordSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.resetPasswordFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public changePassword$ = this.actions$
    .ofType(UserActionTypes.CHANGE_PASSWORD)
    .mergeMap((action: LoopbackAction) =>
      this.user.changePassword(action.payload.oldPassword, action.payload.newPassword)
        .map((response: any) => new UserActions.changePasswordSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.changePasswordFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public setPassword$ = this.actions$
    .ofType(UserActionTypes.SET_PASSWORD)
    .mergeMap((action: LoopbackAction) =>
      this.user.setPassword(action.payload.newPassword)
        .map((response: any) => new UserActions.setPasswordSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.setPasswordFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public setPrimaryEmail$ = this.actions$
    .ofType(UserActionTypes.SET_PRIMARY_EMAIL)
    .mergeMap((action: LoopbackAction) =>
      this.user.setPrimaryEmail(action.payload.id, action.payload.fk)
        .map((response: any) => new UserActions.setPrimaryEmailSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.setPrimaryEmailFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public setPrimaryPhone$ = this.actions$
    .ofType(UserActionTypes.SET_PRIMARY_PHONE)
    .mergeMap((action: LoopbackAction) =>
      this.user.setPrimaryPhone(action.payload.id, action.payload.fk)
        .map((response: any) => new UserActions.setPrimaryPhoneSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.setPrimaryPhoneFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public activate$ = this.actions$
    .ofType(UserActionTypes.ACTIVATE)
    .mergeMap((action: LoopbackAction) =>
      this.user.activate(action.payload.uid, action.payload.token, action.payload.redirect)
        .map((response: any) => new UserActions.activateSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.activateFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public s3PUTSignedUrl$ = this.actions$
    .ofType(UserActionTypes.S3_P_U_T_SIGNED_URL)
    .mergeMap((action: LoopbackAction) =>
      this.user.s3PUTSignedUrl(action.payload.id, action.payload.key, action.payload.options)
        .map((response: any) => new UserActions.s3PUTSignedUrlSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.s3PUTSignedUrlFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public s3GETSignedUrl$ = this.actions$
    .ofType(UserActionTypes.S3_G_E_T_SIGNED_URL)
    .mergeMap((action: LoopbackAction) =>
      this.user.s3GETSignedUrl(action.payload.id, action.payload.key)
        .map((response: any) => new UserActions.s3GETSignedUrlSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.s3GETSignedUrlFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyStripeCustomer$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_STRIPECUSTOMER)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyStripeCustomer(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeCustomer', 'findSuccess'),
          of(new UserActions.createManyStripeCustomerSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.createManyStripeCustomerFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyS3Photo$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyS3Photo(action.payload.id, action.payload.data)
        .map((response: any) => new UserActions.createManyS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.createManyS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyEmails$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_EMAILS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyEmails(action.payload.id, action.payload.data)
        .map((response: any) => new UserActions.createManyEmailsSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.createManyEmailsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyPhones$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_PHONES)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyPhones(action.payload.id, action.payload.data)
        .map((response: any) => new UserActions.createManyPhonesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.createManyPhonesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyStripeSources$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_STRIPESOURCES)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyStripeSources(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeSource', 'findSuccess'),
          of(new UserActions.createManyStripeSourcesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.createManyStripeSourcesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyStripeCharges$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_STRIPECHARGES)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyStripeCharges(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeCharge', 'findSuccess'),
          of(new UserActions.createManyStripeChargesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.createManyStripeChargesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyIdentities$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_IDENTITIES)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyIdentities(action.payload.id, action.payload.data)
        .map((response: any) => new UserActions.createManyIdentitiesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.createManyIdentitiesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyCredentials$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_CREDENTIALS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyCredentials(action.payload.id, action.payload.data)
        .map((response: any) => new UserActions.createManyCredentialsSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.createManyCredentialsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyAccessTokens$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_ACCESSTOKENS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyAccessTokens(action.payload.id, action.payload.data)
        .map((response: any) => new UserActions.createManyAccessTokensSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.createManyAccessTokensFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyRoles$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_ROLES)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyRoles(action.payload.id, action.payload.data)
        .map((response: any) => new UserActions.createManyRolesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.createManyRolesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyOrganizations$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_ORGANIZATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyOrganizations(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Organization', 'findSuccess'),
          of(new UserActions.createManyOrganizationsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.createManyOrganizationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyContacts$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_CONTACTS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyContacts(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Contact', 'findSuccess'),
          of(new UserActions.createManyContactsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.createManyContactsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyInvitations$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_INVITATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyInvitations(action.payload.id, action.payload.data)
        .map((response: any) => new UserActions.createManyInvitationsSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.createManyInvitationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyPosts$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_POSTS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyPosts(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Post', 'findSuccess'),
          of(new UserActions.createManyPostsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.createManyPostsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyShoppingCard$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_SHOPPINGCARD)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyShoppingCard(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Product', 'findSuccess'),
          of(new UserActions.createManyShoppingCardSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.createManyShoppingCardFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyWhishList$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_WHISHLIST)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyWhishList(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Product', 'findSuccess'),
          of(new UserActions.createManyWhishListSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.createManyWhishListFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyOAuthClientApplications$ = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyOAuthClientApplications(action.payload.id, action.payload.data)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'OAuthApp', 'findSuccess'),
          of(new UserActions.createManyOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new UserActions.createManyOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

    /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * User specific actions
   */
  @Effect()
  public signup$ = this.actions$
    .ofType(UserActionTypes.SIGNUP)
    .mergeMap((action: LoopbackAction) =>
      this.user.create(action.payload)
        .map((response: any) => new UserActions.signupSuccess(action.payload, response, action.meta))
        .catch((error: any) => concat(
          of(new UserActions.signupFail(error, action.meta)),
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
    @Inject(UserApi) public user: UserApi
  ) {
    super(actions$, user, 'User', UserActionTypes, UserActions);
  }
}
