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

import { OrganizationActionTypes, OrganizationActions } from '../actions/Organization';
import { LoopbackErrorActions } from '../actions/error';
import { OrganizationApi } from '../services/index';

@Injectable()
export class OrganizationEffects extends BaseLoopbackEffects {
  @Effect()
  protected findByIdUsers: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.FIND_BY_ID_USERS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.findByIdUsers(action.payload.id, action.payload.fk)
        .mergeMap((response) => {
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'User', 'findByIdSuccess');
          return new OrganizationActions.findByIdUsersSuccess(action.payload.id, response, action.meta);
        })
        .catch((error) => concat(
          of(new OrganizationActions.findByIdUsersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyByIdUsers: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.DESTROY_BY_ID_USERS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.destroyByIdUsers(action.payload.id, action.payload.fk)
        .map((response) => new OrganizationActions.destroyByIdUsersSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.destroyByIdUsersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateByIdUsers: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.UPDATE_BY_ID_USERS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.updateByIdUsers(action.payload.id, action.payload.fk, action.payload.data)
        .map((response) => new OrganizationActions.updateByIdUsersSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.updateByIdUsersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected linkUsers: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.LINK_USERS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.linkUsers(action.payload.id, action.payload.fk, action.payload.data)
        .map((response) => new OrganizationActions.linkUsersSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.linkUsersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected unlinkUsers: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.UNLINK_USERS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.unlinkUsers(action.payload.id, action.payload.fk)
        .map((response) => new OrganizationActions.unlinkUsersSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.unlinkUsersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected findByIdRoles: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.FIND_BY_ID_ROLES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.findByIdRoles(action.payload.id, action.payload.fk)
        .map((response) => new OrganizationActions.findByIdRolesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.findByIdRolesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyByIdRoles: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.DESTROY_BY_ID_ROLES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.destroyByIdRoles(action.payload.id, action.payload.fk)
        .map((response) => new OrganizationActions.destroyByIdRolesSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.destroyByIdRolesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateByIdRoles: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.UPDATE_BY_ID_ROLES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.updateByIdRoles(action.payload.id, action.payload.fk, action.payload.data)
        .map((response) => new OrganizationActions.updateByIdRolesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.updateByIdRolesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getS3Photo: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.GET_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.organization.getS3Photo(action.payload.id, action.payload.refresh)
        .map((response) => new OrganizationActions.getS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.getS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createS3Photo: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.CREATE_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createS3Photo(action.payload.id, action.payload.data)
        .map((response) => new OrganizationActions.createS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.createS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateS3Photo: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.UPDATE_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.organization.updateS3Photo(action.payload.id, action.payload.data)
        .map((response) => new OrganizationActions.updateS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.updateS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyS3Photo: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.DESTROY_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.organization.destroyS3Photo(action.payload.id)
        .map((response) => new OrganizationActions.destroyS3PhotoSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.destroyS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected findByIdApps: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.FIND_BY_ID_APPS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.findByIdApps(action.payload.id, action.payload.fk)
        .mergeMap((response) => {
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'App', 'findByIdSuccess');
          return new OrganizationActions.findByIdAppsSuccess(action.payload.id, response, action.meta);
        })
        .catch((error) => concat(
          of(new OrganizationActions.findByIdAppsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyByIdApps: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.DESTROY_BY_ID_APPS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.destroyByIdApps(action.payload.id, action.payload.fk)
        .map((response) => new OrganizationActions.destroyByIdAppsSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.destroyByIdAppsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateByIdApps: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.UPDATE_BY_ID_APPS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.updateByIdApps(action.payload.id, action.payload.fk, action.payload.data)
        .map((response) => new OrganizationActions.updateByIdAppsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.updateByIdAppsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected findByIdOAuthClientApplications: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.findByIdOAuthClientApplications(action.payload.id, action.payload.fk)
        .mergeMap((response) => {
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'OAuthApp', 'findByIdSuccess');
          return new OrganizationActions.findByIdOAuthClientApplicationsSuccess(action.payload.id, response, action.meta);
        })
        .catch((error) => concat(
          of(new OrganizationActions.findByIdOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyByIdOAuthClientApplications: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.destroyByIdOAuthClientApplications(action.payload.id, action.payload.fk)
        .map((response) => new OrganizationActions.destroyByIdOAuthClientApplicationsSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.destroyByIdOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateByIdOAuthClientApplications: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.updateByIdOAuthClientApplications(action.payload.id, action.payload.fk, action.payload.data)
        .map((response) => new OrganizationActions.updateByIdOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.updateByIdOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getUsers: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.GET_USERS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.getUsers(action.payload.id, action.payload.filter)
        .map((response) => new OrganizationActions.getUsersSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.getUsersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createUsers: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.CREATE_USERS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createUsers(action.payload.id, action.payload.data)
        .map((response) => new OrganizationActions.createUsersSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.createUsersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected deleteUsers: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.DELETE_USERS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.deleteUsers(action.payload.id)
        .map((response) => new OrganizationActions.deleteUsersSuccess(action.payload, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.deleteUsersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getRoles: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.GET_ROLES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.getRoles(action.payload.id, action.payload.filter)
        .map((response) => new OrganizationActions.getRolesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.getRolesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createRoles: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.CREATE_ROLES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createRoles(action.payload.id, action.payload.data)
        .map((response) => new OrganizationActions.createRolesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.createRolesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected deleteRoles: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.DELETE_ROLES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.deleteRoles(action.payload.id)
        .map((response) => new OrganizationActions.deleteRolesSuccess(action.payload, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.deleteRolesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getApps: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.GET_APPS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.getApps(action.payload.id, action.payload.filter)
        .map((response) => new OrganizationActions.getAppsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.getAppsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createApps: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.CREATE_APPS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createApps(action.payload.id, action.payload.data)
        .map((response) => new OrganizationActions.createAppsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.createAppsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected deleteApps: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.DELETE_APPS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.deleteApps(action.payload.id)
        .map((response) => new OrganizationActions.deleteAppsSuccess(action.payload, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.deleteAppsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getOAuthClientApplications: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.GET_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.getOAuthClientApplications(action.payload.id, action.payload.filter)
        .map((response) => new OrganizationActions.getOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.getOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createOAuthClientApplications: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createOAuthClientApplications(action.payload.id, action.payload.data)
        .map((response) => new OrganizationActions.createOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.createOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected deleteOAuthClientApplications: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.deleteOAuthClientApplications(action.payload.id)
        .map((response) => new OrganizationActions.deleteOAuthClientApplicationsSuccess(action.payload, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.deleteOAuthClientApplicationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected s3PUTSignedUrl: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.S3_P_U_T_SIGNED_URL)
    .mergeMap((action: LoopbackAction) =>
      this.organization.s3PUTSignedUrl(action.payload.id, action.payload.key, action.payload.options)
        .map((response) => new OrganizationActions.s3PUTSignedUrlSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.s3PUTSignedUrlFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected s3GETSignedUrl: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.S3_G_E_T_SIGNED_URL)
    .mergeMap((action: LoopbackAction) =>
      this.organization.s3GETSignedUrl(action.payload.id, action.payload.key)
        .map((response) => new OrganizationActions.s3GETSignedUrlSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.s3GETSignedUrlFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyS3Photo: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.CREATE_MANY_S3PHOTO)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createManyS3Photo(action.payload.id, action.payload.data)
        .map((response) => new OrganizationActions.createManyS3PhotoSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.createManyS3PhotoFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyUsers: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.CREATE_MANY_USERS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createManyUsers(action.payload.id, action.payload.data)
        .map((response) => new OrganizationActions.createManyUsersSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.createManyUsersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyRoles: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.CREATE_MANY_ROLES)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createManyRoles(action.payload.id, action.payload.data)
        .map((response) => new OrganizationActions.createManyRolesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.createManyRolesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyApps: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.CREATE_MANY_APPS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createManyApps(action.payload.id, action.payload.data)
        .map((response) => new OrganizationActions.createManyAppsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.createManyAppsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyOAuthClientApplications: Observable<LoopbackAction> = this.actions$
    .ofType(OrganizationActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.organization.createManyOAuthClientApplications(action.payload.id, action.payload.data)
        .map((response) => new OrganizationActions.createManyOAuthClientApplicationsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new OrganizationActions.createManyOAuthClientApplicationsFail(error, action.meta)),
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
    @Inject(OrganizationApi) public organization: OrganizationApi
  ) {
    super(actions$, organization, 'Organization', OrganizationActionTypes, OrganizationActions);
  }
}
