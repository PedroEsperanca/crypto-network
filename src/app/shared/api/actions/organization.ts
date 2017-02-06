/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { SDKToken, Organization } from '../models';

export const OrganizationActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('Organization'), {
  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Apps relation action types
   */
  FIND_BY_ID_APPS: type('[Organization] FindByIdApps user'),
  FIND_BY_ID_APPS_SUCCESS: type('[Organization] FindByIdApps user success'),
  FIND_BY_ID_APPS_FAIL: type('[Organization] FindByIdApps user fail'),

  DESTROY_BY_ID_APPS: type('[Organization] DestroyByIdApps user'),
  DESTROY_BY_ID_APPS_SUCCESS: type('[Organization] DestroyByIdApps user success'),
  DESTROY_BY_ID_APPS_FAIL: type('[Organization] DestroyByIdApps user fail'),

  UPDATE_BY_ID_APPS: type('[Organization] UpdateByIdApps user'),
  UPDATE_BY_ID_APPS_SUCCESS: type('[Organization] UpdateByIdApps user success'),
  UPDATE_BY_ID_APPS_FAIL: type('[Organization] UpdateByIdApps user fail'),

  CREATE_APPS: type('[Organization] CreateApps user'),
  CREATE_APPS_SUCCESS: type('[Organization] CreateApps user success'),
  CREATE_APPS_FAIL: type('[Organization] CreateApps user fail'),

  DELETE_APPS: type('[Organization] DeleteApps user'),
  DELETE_APPS_SUCCESS: type('[Organization] DeleteApps user success'),
  DELETE_APPS_FAIL: type('[Organization] DeleteApps user fail'),

  CREATE_MANY_APPS: type('[Organization] CreateManyApps user'),
  CREATE_MANY_APPS_SUCCESS: type('[Organization] CreateManyApps user success'),
  CREATE_MANY_APPS_FAIL: type('[Organization] CreateManyApps user fail'),

  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Users relation action types
   */
  FIND_BY_ID_USERS: type('[Organization] FindByIdUsers user'),
  FIND_BY_ID_USERS_SUCCESS: type('[Organization] FindByIdUsers user success'),
  FIND_BY_ID_USERS_FAIL: type('[Organization] FindByIdUsers user fail'),

  DESTROY_BY_ID_USERS: type('[Organization] DestroyByIdUsers user'),
  DESTROY_BY_ID_USERS_SUCCESS: type('[Organization] DestroyByIdUsers user success'),
  DESTROY_BY_ID_USERS_FAIL: type('[Organization] DestroyByIdUsers user fail'),

  UPDATE_BY_ID_USERS: type('[Organization] UpdateByIdUsers user'),
  UPDATE_BY_ID_USERS_SUCCESS: type('[Organization] UpdateByIdUsers user success'),
  UPDATE_BY_ID_USERS_FAIL: type('[Organization] UpdateByIdUsers user fail'),

  CREATE_USERS: type('[Organization] CreateUsers user'),
  CREATE_USERS_SUCCESS: type('[Organization] CreateUsers user success'),
  CREATE_USERS_FAIL: type('[Organization] CreateUsers user fail'),

  DELETE_USERS: type('[Organization] DeleteUsers user'),
  DELETE_USERS_SUCCESS: type('[Organization] DeleteUsers user success'),
  DELETE_USERS_FAIL: type('[Organization] DeleteUsers user fail'),

  CREATE_MANY_USERS: type('[Organization] CreateManyUsers user'),
  CREATE_MANY_USERS_SUCCESS: type('[Organization] CreateManyUsers user success'),
  CREATE_MANY_USERS_FAIL: type('[Organization] CreateManyUsers user fail'),

  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * OAuthClientApplications relation action types
   */
  FIND_BY_ID_OAUTHCLIENTAPPLICATIONS: type('[Organization] FindByIdOAuthClientApplications user'),
  FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[Organization] FindByIdOAuthClientApplications user success'),
  FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL: type('[Organization] FindByIdOAuthClientApplications user fail'),

  DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS: type('[Organization] DestroyByIdOAuthClientApplications user'),
  DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[Organization] DestroyByIdOAuthClientApplications user success'),
  DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL: type('[Organization] DestroyByIdOAuthClientApplications user fail'),

  UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS: type('[Organization] UpdateByIdOAuthClientApplications user'),
  UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[Organization] UpdateByIdOAuthClientApplications user success'),
  UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL: type('[Organization] UpdateByIdOAuthClientApplications user fail'),

  CREATE_OAUTHCLIENTAPPLICATIONS: type('[Organization] CreateOAuthClientApplications user'),
  CREATE_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[Organization] CreateOAuthClientApplications user success'),
  CREATE_OAUTHCLIENTAPPLICATIONS_FAIL: type('[Organization] CreateOAuthClientApplications user fail'),

  DELETE_OAUTHCLIENTAPPLICATIONS: type('[Organization] DeleteOAuthClientApplications user'),
  DELETE_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[Organization] DeleteOAuthClientApplications user success'),
  DELETE_OAUTHCLIENTAPPLICATIONS_FAIL: type('[Organization] DeleteOAuthClientApplications user fail'),

  CREATE_MANY_OAUTHCLIENTAPPLICATIONS: type('[Organization] CreateManyOAuthClientApplications user'),
  CREATE_MANY_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[Organization] CreateManyOAuthClientApplications user success'),
  CREATE_MANY_OAUTHCLIENTAPPLICATIONS_FAIL: type('[Organization] CreateManyOAuthClientApplications user fail'),

  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Roles relation action types
   */
  FIND_BY_ID_ROLES: type('[Organization] FindByIdRoles user'),
  FIND_BY_ID_ROLES_SUCCESS: type('[Organization] FindByIdRoles user success'),
  FIND_BY_ID_ROLES_FAIL: type('[Organization] FindByIdRoles user fail'),

  DESTROY_BY_ID_ROLES: type('[Organization] DestroyByIdRoles user'),
  DESTROY_BY_ID_ROLES_SUCCESS: type('[Organization] DestroyByIdRoles user success'),
  DESTROY_BY_ID_ROLES_FAIL: type('[Organization] DestroyByIdRoles user fail'),

  UPDATE_BY_ID_ROLES: type('[Organization] UpdateByIdRoles user'),
  UPDATE_BY_ID_ROLES_SUCCESS: type('[Organization] UpdateByIdRoles user success'),
  UPDATE_BY_ID_ROLES_FAIL: type('[Organization] UpdateByIdRoles user fail'),

  CREATE_ROLES: type('[Organization] CreateRoles user'),
  CREATE_ROLES_SUCCESS: type('[Organization] CreateRoles user success'),
  CREATE_ROLES_FAIL: type('[Organization] CreateRoles user fail'),

  DELETE_ROLES: type('[Organization] DeleteRoles user'),
  DELETE_ROLES_SUCCESS: type('[Organization] DeleteRoles user success'),
  DELETE_ROLES_FAIL: type('[Organization] DeleteRoles user fail'),

  CREATE_MANY_ROLES: type('[Organization] CreateManyRoles user'),
  CREATE_MANY_ROLES_SUCCESS: type('[Organization] CreateManyRoles user success'),
  CREATE_MANY_ROLES_FAIL: type('[Organization] CreateManyRoles user fail'),
});

export const OrganizationActions =
Object.assign(BaseLoopbackActionsFactory<Organization>('Organization', OrganizationActionTypes), {
  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Apps relation actions
   */
  findByIdApps: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_APPS;
    public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },

  findByIdAppsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_APPS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  findByIdAppsFail: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  destroyByIdApps: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_APPS;
    public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },

  destroyByIdAppsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_APPS_SUCCESS;
    public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },

  destroyByIdAppsFail: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  updateByIdApps: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_APPS;
    public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },

  updateByIdAppsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_APPS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  updateByIdAppsFail: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  createApps: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_APPS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createAppsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_APPS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createAppsFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  deleteApps: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_APPS;

    constructor(public payload: any, public meta?: any) { }
  },

  deleteAppsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_APPS_SUCCESS;

    constructor(public payload: any, public meta?: any) { }
  },

  deleteAppsFail: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  createManyApps: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_APPS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createManyAppsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_APPS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createManyAppsFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Users relation actions
   */
  findByIdUsers: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_USERS;
    public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },

  findByIdUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_USERS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  findByIdUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  destroyByIdUsers: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_USERS;
    public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },

  destroyByIdUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_USERS_SUCCESS;
    public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },

  destroyByIdUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  updateByIdUsers: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_USERS;
    public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },

  updateByIdUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_USERS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  updateByIdUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  createUsers: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_USERS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_USERS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  deleteUsers: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_USERS;

    constructor(public payload: any, public meta?: any) { }
  },

  deleteUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_USERS_SUCCESS;

    constructor(public payload: any, public meta?: any) { }
  },

  deleteUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  createManyUsers: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_USERS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createManyUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_USERS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createManyUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * OAuthClientApplications relation actions
   */
  findByIdOAuthClientApplications: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS;
    public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },

  findByIdOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  findByIdOAuthClientApplicationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  destroyByIdOAuthClientApplications: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS;
    public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },

  destroyByIdOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS;
    public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },

  destroyByIdOAuthClientApplicationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  updateByIdOAuthClientApplications: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS;
    public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },

  updateByIdOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  updateByIdOAuthClientApplicationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  createOAuthClientApplications: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createOAuthClientApplicationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  deleteOAuthClientApplications: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS;

    constructor(public payload: any, public meta?: any) { }
  },

  deleteOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS_SUCCESS;

    constructor(public payload: any, public meta?: any) { }
  },

  deleteOAuthClientApplicationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  createManyOAuthClientApplications: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createManyOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createManyOAuthClientApplicationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Roles relation actions
   */
  findByIdRoles: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_ROLES;
    public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },

  findByIdRolesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_ROLES_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  findByIdRolesFail: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  destroyByIdRoles: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_ROLES;
    public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },

  destroyByIdRolesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_ROLES_SUCCESS;
    public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },

  destroyByIdRolesFail: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  updateByIdRoles: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_ROLES;
    public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },

  updateByIdRolesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_ROLES_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  updateByIdRolesFail: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  createRoles: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_ROLES;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createRolesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_ROLES_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createRolesFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  deleteRoles: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_ROLES;

    constructor(public payload: any, public meta?: any) { }
  },

  deleteRolesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_ROLES_SUCCESS;

    constructor(public payload: any, public meta?: any) { }
  },

  deleteRolesFail: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  createManyRoles: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_ROLES;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createManyRolesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_ROLES_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  createManyRolesFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});
