/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { SDKToken, User } from '../models';

export const UserActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('User'), {
  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Apps relation action types
   */
  FIND_BY_ID_APPS: type('[User] FindByIdApps user'),
  FIND_BY_ID_APPS_SUCCESS: type('[User] FindByIdApps user success'),
  FIND_BY_ID_APPS_FAIL: type('[User] FindByIdApps user fail'),

  DESTROY_BY_ID_APPS: type('[User] DestroyByIdApps user'),
  DESTROY_BY_ID_APPS_SUCCESS: type('[User] DestroyByIdApps user success'),
  DESTROY_BY_ID_APPS_FAIL: type('[User] DestroyByIdApps user fail'),

  UPDATE_BY_ID_APPS: type('[User] UpdateByIdApps user'),
  UPDATE_BY_ID_APPS_SUCCESS: type('[User] UpdateByIdApps user success'),
  UPDATE_BY_ID_APPS_FAIL: type('[User] UpdateByIdApps user fail'),

  CREATE_APPS: type('[User] CreateApps user'),
  CREATE_APPS_SUCCESS: type('[User] CreateApps user success'),
  CREATE_APPS_FAIL: type('[User] CreateApps user fail'),

  DELETE_APPS: type('[User] DeleteApps user'),
  DELETE_APPS_SUCCESS: type('[User] DeleteApps user success'),
  DELETE_APPS_FAIL: type('[User] DeleteApps user fail'),

  CREATE_MANY_APPS: type('[User] CreateManyApps user'),
  CREATE_MANY_APPS_SUCCESS: type('[User] CreateManyApps user success'),
  CREATE_MANY_APPS_FAIL: type('[User] CreateManyApps user fail'),

  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * OAuthClientApplications relation action types
   */
  FIND_BY_ID_OAUTHCLIENTAPPLICATIONS: type('[User] FindByIdOAuthClientApplications user'),
  FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[User] FindByIdOAuthClientApplications user success'),
  FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL: type('[User] FindByIdOAuthClientApplications user fail'),

  DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS: type('[User] DestroyByIdOAuthClientApplications user'),
  DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[User] DestroyByIdOAuthClientApplications user success'),
  DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL: type('[User] DestroyByIdOAuthClientApplications user fail'),

  UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS: type('[User] UpdateByIdOAuthClientApplications user'),
  UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[User] UpdateByIdOAuthClientApplications user success'),
  UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL: type('[User] UpdateByIdOAuthClientApplications user fail'),

  CREATE_OAUTHCLIENTAPPLICATIONS: type('[User] CreateOAuthClientApplications user'),
  CREATE_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[User] CreateOAuthClientApplications user success'),
  CREATE_OAUTHCLIENTAPPLICATIONS_FAIL: type('[User] CreateOAuthClientApplications user fail'),

  DELETE_OAUTHCLIENTAPPLICATIONS: type('[User] DeleteOAuthClientApplications user'),
  DELETE_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[User] DeleteOAuthClientApplications user success'),
  DELETE_OAUTHCLIENTAPPLICATIONS_FAIL: type('[User] DeleteOAuthClientApplications user fail'),

  CREATE_MANY_OAUTHCLIENTAPPLICATIONS: type('[User] CreateManyOAuthClientApplications user'),
  CREATE_MANY_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[User] CreateManyOAuthClientApplications user success'),
  CREATE_MANY_OAUTHCLIENTAPPLICATIONS_FAIL: type('[User] CreateManyOAuthClientApplications user fail'),

  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Organizations relation action types
   */
  FIND_BY_ID_ORGANIZATIONS: type('[User] FindByIdOrganizations user'),
  FIND_BY_ID_ORGANIZATIONS_SUCCESS: type('[User] FindByIdOrganizations user success'),
  FIND_BY_ID_ORGANIZATIONS_FAIL: type('[User] FindByIdOrganizations user fail'),

  DESTROY_BY_ID_ORGANIZATIONS: type('[User] DestroyByIdOrganizations user'),
  DESTROY_BY_ID_ORGANIZATIONS_SUCCESS: type('[User] DestroyByIdOrganizations user success'),
  DESTROY_BY_ID_ORGANIZATIONS_FAIL: type('[User] DestroyByIdOrganizations user fail'),

  UPDATE_BY_ID_ORGANIZATIONS: type('[User] UpdateByIdOrganizations user'),
  UPDATE_BY_ID_ORGANIZATIONS_SUCCESS: type('[User] UpdateByIdOrganizations user success'),
  UPDATE_BY_ID_ORGANIZATIONS_FAIL: type('[User] UpdateByIdOrganizations user fail'),

  CREATE_ORGANIZATIONS: type('[User] CreateOrganizations user'),
  CREATE_ORGANIZATIONS_SUCCESS: type('[User] CreateOrganizations user success'),
  CREATE_ORGANIZATIONS_FAIL: type('[User] CreateOrganizations user fail'),

  DELETE_ORGANIZATIONS: type('[User] DeleteOrganizations user'),
  DELETE_ORGANIZATIONS_SUCCESS: type('[User] DeleteOrganizations user success'),
  DELETE_ORGANIZATIONS_FAIL: type('[User] DeleteOrganizations user fail'),

  CREATE_MANY_ORGANIZATIONS: type('[User] CreateManyOrganizations user'),
  CREATE_MANY_ORGANIZATIONS_SUCCESS: type('[User] CreateManyOrganizations user success'),
  CREATE_MANY_ORGANIZATIONS_FAIL: type('[User] CreateManyOrganizations user fail'),
}, {
  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * User specific action types
   */
  LOGIN: type('[User] Login user'),
  LOGIN_SUCCESS: type('[User] Login user success'),
  LOGIN_FAIL: type('[User] Login user fail'),

  SIGNUP: type('[User] Signup user'),
  SIGNUP_SUCCESS: type('[User] Signup user success'),
  SIGNUP_FAIL: type('[User] Signup user fail'),

  LOGOUT: type('[User] Logout user'),
  LOGOUT_SUCCESS: type('[User] Logout user success'),
  LOGOUT_FAIL: type('[User] Logout user fail'),
});

export const UserActions =
Object.assign(BaseLoopbackActionsFactory<User>('User', UserActionTypes), {
  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Apps relation actions
   */
  findByIdApps: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_APPS;
    public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },

  findByIdAppsSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_APPS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  findByIdAppsFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  destroyByIdApps: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_APPS;
    public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },

  destroyByIdAppsSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_APPS_SUCCESS;
    public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },

  destroyByIdAppsFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  updateByIdApps: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_APPS;
    public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },

  updateByIdAppsSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_APPS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  updateByIdAppsFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  createApps: class implements Action {
    public readonly type = UserActionTypes.CREATE_APPS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createAppsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_APPS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createAppsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  deleteApps: class implements Action {
    public readonly type = UserActionTypes.DELETE_APPS;

    constructor(public payload: any, public meta?: any) { }
  },

  deleteAppsSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_APPS_SUCCESS;

    constructor(public payload: any, public meta?: any) { }
  },

  deleteAppsFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  createManyApps: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_APPS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createManyAppsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_APPS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createManyAppsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * OAuthClientApplications relation actions
   */
  findByIdOAuthClientApplications: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS;
    public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },

  findByIdOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  findByIdOAuthClientApplicationsFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  destroyByIdOAuthClientApplications: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS;
    public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },

  destroyByIdOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS;
    public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },

  destroyByIdOAuthClientApplicationsFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  updateByIdOAuthClientApplications: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS;
    public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },

  updateByIdOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  updateByIdOAuthClientApplicationsFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  createOAuthClientApplications: class implements Action {
    public readonly type = UserActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createOAuthClientApplicationsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  deleteOAuthClientApplications: class implements Action {
    public readonly type = UserActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS;

    constructor(public payload: any, public meta?: any) { }
  },

  deleteOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS_SUCCESS;

    constructor(public payload: any, public meta?: any) { }
  },

  deleteOAuthClientApplicationsFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  createManyOAuthClientApplications: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createManyOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createManyOAuthClientApplicationsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Organizations relation actions
   */
  findByIdOrganizations: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_ORGANIZATIONS;
    public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },

  findByIdOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_ORGANIZATIONS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  findByIdOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  destroyByIdOrganizations: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_ORGANIZATIONS;
    public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },

  destroyByIdOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_ORGANIZATIONS_SUCCESS;
    public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },

  destroyByIdOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  updateByIdOrganizations: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_ORGANIZATIONS;
    public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },

  updateByIdOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_ORGANIZATIONS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  updateByIdOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  createOrganizations: class implements Action {
    public readonly type = UserActionTypes.CREATE_ORGANIZATIONS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_ORGANIZATIONS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  deleteOrganizations: class implements Action {
    public readonly type = UserActionTypes.DELETE_ORGANIZATIONS;

    constructor(public payload: any, public meta?: any) { }
  },

  deleteOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_ORGANIZATIONS_SUCCESS;

    constructor(public payload: any, public meta?: any) { }
  },

  deleteOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  createManyOrganizations: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_ORGANIZATIONS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createManyOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_ORGANIZATIONS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createManyOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
}, {
  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * User specific actions
   */
  login: class implements Action {
    public readonly type = UserActionTypes.LOGIN;
    public payload: {credentials: any, include: any, rememberMe: boolean};

    constructor(
      credentials: any,
      include: any = 'user',
      rememberMe: boolean = true,
      public meta?: any) {
      this.payload = {credentials, include, rememberMe};
    }
  },

  loginSuccess: class implements Action {
    public readonly type = UserActionTypes.LOGIN_SUCCESS;

    constructor(public payload: SDKToken, public meta?: any) { }
  },

  loginFail: class implements Action {
    public readonly type = UserActionTypes.LOGIN_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  signup: class implements Action {
    public readonly type = UserActionTypes.SIGNUP;

    constructor(public payload: any, public meta?: any) { }
  },

  signupSuccess: class implements Action {
    public readonly type = UserActionTypes.SIGNUP_SUCCESS;
    public payload: {credentials: any, data: any};

    constructor(credentials: any, data: any, public meta?: any) {
      this.payload = {credentials, data};
    }
  },

  signupFail: class implements Action {
    public readonly type = UserActionTypes.SIGNUP_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  logout: class implements Action  {
    public readonly type = UserActionTypes.LOGOUT;
  },

  logoutSuccess: class implements Action  {
    public readonly type = UserActionTypes.LOGOUT_SUCCESS;
  },

  logoutFail: class implements Action  {
    public readonly type = UserActionTypes.LOGOUT_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});
