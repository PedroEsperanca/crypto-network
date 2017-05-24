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

import { UserActionTypes, UserActions } from '../actions/User';
import { LoopbackErrorActions } from '../actions/error';
import { UserApi } from '../services/index';

@Injectable()
export class UserEffects extends BaseLoopbackEffects {
  @Effect()
  protected sendVerificationCode: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.SEND_VERIFICATION_CODE)
    .mergeMap((action: LoopbackAction) =>
      this.user.sendVerificationCode(action.payload.id, action.payload.data)
        .map((response) => new UserActions.sendVerificationCodeSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new UserActions.sendVerificationCodeFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected findByIdEmails: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_EMAILS)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdEmails(action.payload.id, action.payload.fk)
        .map((response) => new UserActions.findByIdEmailsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.findByIdEmailsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyByIdEmails: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_EMAILS)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyByIdEmails(action.payload.id, action.payload.fk)
        .map((response) => new UserActions.destroyByIdEmailsSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new UserActions.destroyByIdEmailsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateByIdEmails: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_EMAILS)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateByIdEmails(action.payload.id, action.payload.fk, action.payload.data)
        .map((response) => new UserActions.updateByIdEmailsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.updateByIdEmailsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected findByIdPhones: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_PHONES)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdPhones(action.payload.id, action.payload.fk)
        .map((response) => new UserActions.findByIdPhonesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.findByIdPhonesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyByIdPhones: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_PHONES)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyByIdPhones(action.payload.id, action.payload.fk)
        .map((response) => new UserActions.destroyByIdPhonesSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new UserActions.destroyByIdPhonesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateByIdPhones: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_PHONES)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateByIdPhones(action.payload.id, action.payload.fk, action.payload.data)
        .map((response) => new UserActions.updateByIdPhonesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.updateByIdPhonesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getS3Photo: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.GET_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.user.getS3Photo(action.payload.id, action.payload.refresh)
        .map((response) => new UserActions.getS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.getS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createS3Photo: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.CREATE_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.user.createS3Photo(action.payload.id, action.payload.data)
        .map((response) => new UserActions.createS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.createS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateS3Photo: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.UPDATE_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateS3Photo(action.payload.id, action.payload.data)
        .map((response) => new UserActions.updateS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.updateS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyS3Photo: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.DESTROY_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyS3Photo(action.payload.id)
        .map((response) => new UserActions.destroyS3PhotoSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new UserActions.destroyS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected findByIdIdentities: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_IDENTITIES)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdIdentities(action.payload.id, action.payload.fk)
        .map((response) => new UserActions.findByIdIdentitiesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.findByIdIdentitiesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyByIdIdentities: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_IDENTITIES)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyByIdIdentities(action.payload.id, action.payload.fk)
        .map((response) => new UserActions.destroyByIdIdentitiesSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new UserActions.destroyByIdIdentitiesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateByIdIdentities: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_IDENTITIES)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateByIdIdentities(action.payload.id, action.payload.fk, action.payload.data)
        .map((response) => new UserActions.updateByIdIdentitiesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.updateByIdIdentitiesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected findByIdCredentials: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_CREDENTIALS)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdCredentials(action.payload.id, action.payload.fk)
        .map((response) => new UserActions.findByIdCredentialsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.findByIdCredentialsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyByIdCredentials: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_CREDENTIALS)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyByIdCredentials(action.payload.id, action.payload.fk)
        .map((response) => new UserActions.destroyByIdCredentialsSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new UserActions.destroyByIdCredentialsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateByIdCredentials: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_CREDENTIALS)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateByIdCredentials(action.payload.id, action.payload.fk, action.payload.data)
        .map((response) => new UserActions.updateByIdCredentialsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.updateByIdCredentialsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected findByIdAccessTokens: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_ACCESSTOKENS)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdAccessTokens(action.payload.id, action.payload.fk)
        .map((response) => new UserActions.findByIdAccessTokensSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.findByIdAccessTokensFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyByIdAccessTokens: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_ACCESSTOKENS)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyByIdAccessTokens(action.payload.id, action.payload.fk)
        .map((response) => new UserActions.destroyByIdAccessTokensSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new UserActions.destroyByIdAccessTokensFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateByIdAccessTokens: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_ACCESSTOKENS)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateByIdAccessTokens(action.payload.id, action.payload.fk, action.payload.data)
        .map((response) => new UserActions.updateByIdAccessTokensSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.updateByIdAccessTokensFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected findByIdOrganizations: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_ORGANIZATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdOrganizations(action.payload.id, action.payload.fk)
        .mergeMap((response) => {
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'Organization', 'findByIdSuccess');
          return new UserActions.findByIdOrganizationsSuccess(action.payload.id, response, action.meta);
        })
        .catch((error) => concat(
          of(new UserActions.findByIdOrganizationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyByIdOrganizations: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_ORGANIZATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyByIdOrganizations(action.payload.id, action.payload.fk)
        .map((response) => new UserActions.destroyByIdOrganizationsSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new UserActions.destroyByIdOrganizationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateByIdOrganizations: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_ORGANIZATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateByIdOrganizations(action.payload.id, action.payload.fk, action.payload.data)
        .map((response) => new UserActions.updateByIdOrganizationsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.updateByIdOrganizationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected linkOrganizations: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.LINK_ORGANIZATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.linkOrganizations(action.payload.id, action.payload.fk, action.payload.data)
        .map((response) => new UserActions.linkOrganizationsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.linkOrganizationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected unlinkOrganizations: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.UNLINK_ORGANIZATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.unlinkOrganizations(action.payload.id, action.payload.fk)
        .map((response) => new UserActions.unlinkOrganizationsSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new UserActions.unlinkOrganizationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected findByIdApps: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_APPS)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdApps(action.payload.id, action.payload.fk)
        .mergeMap((response) => {
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'App', 'findByIdSuccess');
          return new UserActions.findByIdAppsSuccess(action.payload.id, response, action.meta);
        })
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
        .map((response) => new UserActions.destroyByIdAppsSuccess(action.payload.id, action.payload.fk, action.meta))
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
  protected findByIdOAuthClientApplications: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.findByIdOAuthClientApplications(action.payload.id, action.payload.fk)
        .map((response) => new UserActions.findByIdOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.findByIdOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyByIdOAuthClientApplications: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.destroyByIdOAuthClientApplications(action.payload.id, action.payload.fk)
        .map((response) => new UserActions.destroyByIdOAuthClientApplicationsSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new UserActions.destroyByIdOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateByIdOAuthClientApplications: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.updateByIdOAuthClientApplications(action.payload.id, action.payload.fk, action.payload.data)
        .map((response) => new UserActions.updateByIdOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.updateByIdOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getEmails: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.GET_EMAILS)
    .mergeMap((action: LoopbackAction) =>
      this.user.getEmails(action.payload.id, action.payload.filter)
        .map((response) => new UserActions.getEmailsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.getEmailsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createEmails: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.CREATE_EMAILS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createEmails(action.payload.id, action.payload.data)
        .map((response) => new UserActions.createEmailsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.createEmailsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected deleteEmails: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.DELETE_EMAILS)
    .mergeMap((action: LoopbackAction) =>
      this.user.deleteEmails(action.payload.id)
        .map((response) => new UserActions.deleteEmailsSuccess(action.payload, action.meta))
        .catch((error) => concat(
          of(new UserActions.deleteEmailsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getPhones: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.GET_PHONES)
    .mergeMap((action: LoopbackAction) =>
      this.user.getPhones(action.payload.id, action.payload.filter)
        .map((response) => new UserActions.getPhonesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.getPhonesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createPhones: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.CREATE_PHONES)
    .mergeMap((action: LoopbackAction) =>
      this.user.createPhones(action.payload.id, action.payload.data)
        .map((response) => new UserActions.createPhonesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.createPhonesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected deletePhones: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.DELETE_PHONES)
    .mergeMap((action: LoopbackAction) =>
      this.user.deletePhones(action.payload.id)
        .map((response) => new UserActions.deletePhonesSuccess(action.payload, action.meta))
        .catch((error) => concat(
          of(new UserActions.deletePhonesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getIdentities: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.GET_IDENTITIES)
    .mergeMap((action: LoopbackAction) =>
      this.user.getIdentities(action.payload.id, action.payload.filter)
        .map((response) => new UserActions.getIdentitiesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.getIdentitiesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createIdentities: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.CREATE_IDENTITIES)
    .mergeMap((action: LoopbackAction) =>
      this.user.createIdentities(action.payload.id, action.payload.data)
        .map((response) => new UserActions.createIdentitiesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.createIdentitiesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected deleteIdentities: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.DELETE_IDENTITIES)
    .mergeMap((action: LoopbackAction) =>
      this.user.deleteIdentities(action.payload.id)
        .map((response) => new UserActions.deleteIdentitiesSuccess(action.payload, action.meta))
        .catch((error) => concat(
          of(new UserActions.deleteIdentitiesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getCredentials: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.GET_CREDENTIALS)
    .mergeMap((action: LoopbackAction) =>
      this.user.getCredentials(action.payload.id, action.payload.filter)
        .map((response) => new UserActions.getCredentialsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.getCredentialsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createCredentials: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.CREATE_CREDENTIALS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createCredentials(action.payload.id, action.payload.data)
        .map((response) => new UserActions.createCredentialsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.createCredentialsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected deleteCredentials: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.DELETE_CREDENTIALS)
    .mergeMap((action: LoopbackAction) =>
      this.user.deleteCredentials(action.payload.id)
        .map((response) => new UserActions.deleteCredentialsSuccess(action.payload, action.meta))
        .catch((error) => concat(
          of(new UserActions.deleteCredentialsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getAccessTokens: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.GET_ACCESSTOKENS)
    .mergeMap((action: LoopbackAction) =>
      this.user.getAccessTokens(action.payload.id, action.payload.filter)
        .map((response) => new UserActions.getAccessTokensSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.getAccessTokensFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createAccessTokens: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.CREATE_ACCESSTOKENS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createAccessTokens(action.payload.id, action.payload.data)
        .map((response) => new UserActions.createAccessTokensSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.createAccessTokensFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected deleteAccessTokens: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.DELETE_ACCESSTOKENS)
    .mergeMap((action: LoopbackAction) =>
      this.user.deleteAccessTokens(action.payload.id)
        .map((response) => new UserActions.deleteAccessTokensSuccess(action.payload, action.meta))
        .catch((error) => concat(
          of(new UserActions.deleteAccessTokensFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getOrganizations: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.GET_ORGANIZATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.getOrganizations(action.payload.id, action.payload.filter)
        .map((response) => new UserActions.getOrganizationsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.getOrganizationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createOrganizations: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.CREATE_ORGANIZATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createOrganizations(action.payload.id, action.payload.data)
        .map((response) => new UserActions.createOrganizationsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.createOrganizationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected deleteOrganizations: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.DELETE_ORGANIZATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.deleteOrganizations(action.payload.id)
        .map((response) => new UserActions.deleteOrganizationsSuccess(action.payload, action.meta))
        .catch((error) => concat(
          of(new UserActions.deleteOrganizationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getApps: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.GET_APPS)
    .mergeMap((action: LoopbackAction) =>
      this.user.getApps(action.payload.id, action.payload.filter)
        .map((response) => new UserActions.getAppsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.getAppsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createApps: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.CREATE_APPS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createApps(action.payload.id, action.payload.data)
        .map((response) => new UserActions.createAppsSuccess(action.payload.id, response, action.meta))
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
        .map((response) => new UserActions.deleteAppsSuccess(action.payload, action.meta))
        .catch((error) => concat(
          of(new UserActions.deleteAppsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getOAuthClientApplications: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.GET_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.getOAuthClientApplications(action.payload.id, action.payload.filter)
        .map((response) => new UserActions.getOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.getOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createOAuthClientApplications: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createOAuthClientApplications(action.payload.id, action.payload.data)
        .map((response) => new UserActions.createOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.createOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected deleteOAuthClientApplications: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.deleteOAuthClientApplications(action.payload.id)
        .map((response) => new UserActions.deleteOAuthClientApplicationsSuccess(action.payload, action.meta))
        .catch((error) => concat(
          of(new UserActions.deleteOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected login: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.LOGIN)
    .mergeMap((action: LoopbackAction) =>
      this.user.login(action.payload.credentials, action.payload.include)
        .map((response) => new UserActions.loginSuccess(response, action.meta))
        .catch((error) => concat(
          of(new UserActions.loginFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected logout: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.LOGOUT)
    .mergeMap((action: LoopbackAction) =>
      this.user.logout()
        .map((response) => new UserActions.logoutSuccess(action.meta))
        .catch((error) => concat(
          of(new UserActions.logoutFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected verify: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.VERIFY)
    .mergeMap((action: LoopbackAction) =>
      this.user.verify(action.payload.id)
        .map((response) => new UserActions.verifySuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new UserActions.verifyFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected confirm: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.CONFIRM)
    .mergeMap((action: LoopbackAction) =>
      this.user.confirm(action.payload.uid, action.payload.token, action.payload.redirect)
        .map((response) => new UserActions.confirmSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new UserActions.confirmFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected resetPassword: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.RESET_PASSWORD)
    .mergeMap((action: LoopbackAction) =>
      this.user.resetPassword(action.payload.options)
        .map((response) => new UserActions.resetPasswordSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new UserActions.resetPasswordFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected changePassword: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.CHANGE_PASSWORD)
    .mergeMap((action: LoopbackAction) =>
      this.user.changePassword(action.payload.oldPassword, action.payload.newPassword)
        .map((response) => new UserActions.changePasswordSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new UserActions.changePasswordFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected setPassword: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.SET_PASSWORD)
    .mergeMap((action: LoopbackAction) =>
      this.user.setPassword(action.payload.newPassword)
        .map((response) => new UserActions.setPasswordSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new UserActions.setPasswordFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected setPrimaryEmail: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.SET_PRIMARY_EMAIL)
    .mergeMap((action: LoopbackAction) =>
      this.user.setPrimaryEmail(action.payload.id, action.payload.fk)
        .map((response) => new UserActions.setPrimaryEmailSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new UserActions.setPrimaryEmailFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected setPrimaryPhone: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.SET_PRIMARY_PHONE)
    .mergeMap((action: LoopbackAction) =>
      this.user.setPrimaryPhone(action.payload.id, action.payload.fk)
        .map((response) => new UserActions.setPrimaryPhoneSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new UserActions.setPrimaryPhoneFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected s3PUTSignedUrl: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.S3_P_U_T_SIGNED_URL)
    .mergeMap((action: LoopbackAction) =>
      this.user.s3PUTSignedUrl(action.payload.id, action.payload.key, action.payload.options)
        .map((response) => new UserActions.s3PUTSignedUrlSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.s3PUTSignedUrlFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected s3GETSignedUrl: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.S3_G_E_T_SIGNED_URL)
    .mergeMap((action: LoopbackAction) =>
      this.user.s3GETSignedUrl(action.payload.id, action.payload.key)
        .map((response) => new UserActions.s3GETSignedUrlSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.s3GETSignedUrlFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyS3Photo: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyS3Photo(action.payload.id, action.payload.data)
        .map((response) => new UserActions.createManyS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.createManyS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyEmails: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_EMAILS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyEmails(action.payload.id, action.payload.data)
        .map((response) => new UserActions.createManyEmailsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.createManyEmailsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyPhones: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_PHONES)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyPhones(action.payload.id, action.payload.data)
        .map((response) => new UserActions.createManyPhonesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.createManyPhonesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyIdentities: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_IDENTITIES)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyIdentities(action.payload.id, action.payload.data)
        .map((response) => new UserActions.createManyIdentitiesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.createManyIdentitiesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyCredentials: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_CREDENTIALS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyCredentials(action.payload.id, action.payload.data)
        .map((response) => new UserActions.createManyCredentialsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.createManyCredentialsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyAccessTokens: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_ACCESSTOKENS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyAccessTokens(action.payload.id, action.payload.data)
        .map((response) => new UserActions.createManyAccessTokensSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.createManyAccessTokensFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyOrganizations: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_ORGANIZATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyOrganizations(action.payload.id, action.payload.data)
        .map((response) => new UserActions.createManyOrganizationsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new UserActions.createManyOrganizationsFail(error, action.meta)),
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

  @Effect()
  protected createManyOAuthClientApplications: Observable<LoopbackAction> = this.actions$
    .ofType(UserActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.user.createManyOAuthClientApplications(action.payload.id, action.payload.data)
        .map((response) => new UserActions.createManyOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
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
    super(actions$, user, 'User', UserActionTypes, UserActions);
  }
}
