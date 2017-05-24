/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, Organization } from '../models';

export const OrganizationActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('Organization'), {
  FIND_BY_ID_USERS: type('[Organization] findByIdUsers'),
  FIND_BY_ID_USERS_SUCCESS: type('[Organization] findByIdUsers success'),
  FIND_BY_ID_USERS_FAIL: type('[Organization] findByIdUsers fail'),

  DESTROY_BY_ID_USERS: type('[Organization] destroyByIdUsers'),
  DESTROY_BY_ID_USERS_SUCCESS: type('[Organization] destroyByIdUsers success'),
  DESTROY_BY_ID_USERS_FAIL: type('[Organization] destroyByIdUsers fail'),

  UPDATE_BY_ID_USERS: type('[Organization] updateByIdUsers'),
  UPDATE_BY_ID_USERS_SUCCESS: type('[Organization] updateByIdUsers success'),
  UPDATE_BY_ID_USERS_FAIL: type('[Organization] updateByIdUsers fail'),

  LINK_USERS: type('[Organization] linkUsers'),
  LINK_USERS_SUCCESS: type('[Organization] linkUsers success'),
  LINK_USERS_FAIL: type('[Organization] linkUsers fail'),

  UNLINK_USERS: type('[Organization] unlinkUsers'),
  UNLINK_USERS_SUCCESS: type('[Organization] unlinkUsers success'),
  UNLINK_USERS_FAIL: type('[Organization] unlinkUsers fail'),

  FIND_BY_ID_ROLES: type('[Organization] findByIdRoles'),
  FIND_BY_ID_ROLES_SUCCESS: type('[Organization] findByIdRoles success'),
  FIND_BY_ID_ROLES_FAIL: type('[Organization] findByIdRoles fail'),

  DESTROY_BY_ID_ROLES: type('[Organization] destroyByIdRoles'),
  DESTROY_BY_ID_ROLES_SUCCESS: type('[Organization] destroyByIdRoles success'),
  DESTROY_BY_ID_ROLES_FAIL: type('[Organization] destroyByIdRoles fail'),

  UPDATE_BY_ID_ROLES: type('[Organization] updateByIdRoles'),
  UPDATE_BY_ID_ROLES_SUCCESS: type('[Organization] updateByIdRoles success'),
  UPDATE_BY_ID_ROLES_FAIL: type('[Organization] updateByIdRoles fail'),

  GET_S3PHOTO: type('[Organization] getS3Photo'),
  GET_S3PHOTO_SUCCESS: type('[Organization] getS3Photo success'),
  GET_S3PHOTO_FAIL: type('[Organization] getS3Photo fail'),

  CREATE_S3PHOTO: type('[Organization] createS3Photo'),
  CREATE_S3PHOTO_SUCCESS: type('[Organization] createS3Photo success'),
  CREATE_S3PHOTO_FAIL: type('[Organization] createS3Photo fail'),

  UPDATE_S3PHOTO: type('[Organization] updateS3Photo'),
  UPDATE_S3PHOTO_SUCCESS: type('[Organization] updateS3Photo success'),
  UPDATE_S3PHOTO_FAIL: type('[Organization] updateS3Photo fail'),

  DESTROY_S3PHOTO: type('[Organization] destroyS3Photo'),
  DESTROY_S3PHOTO_SUCCESS: type('[Organization] destroyS3Photo success'),
  DESTROY_S3PHOTO_FAIL: type('[Organization] destroyS3Photo fail'),

  FIND_BY_ID_APPS: type('[Organization] findByIdApps'),
  FIND_BY_ID_APPS_SUCCESS: type('[Organization] findByIdApps success'),
  FIND_BY_ID_APPS_FAIL: type('[Organization] findByIdApps fail'),

  DESTROY_BY_ID_APPS: type('[Organization] destroyByIdApps'),
  DESTROY_BY_ID_APPS_SUCCESS: type('[Organization] destroyByIdApps success'),
  DESTROY_BY_ID_APPS_FAIL: type('[Organization] destroyByIdApps fail'),

  UPDATE_BY_ID_APPS: type('[Organization] updateByIdApps'),
  UPDATE_BY_ID_APPS_SUCCESS: type('[Organization] updateByIdApps success'),
  UPDATE_BY_ID_APPS_FAIL: type('[Organization] updateByIdApps fail'),

  FIND_BY_ID_OAUTHCLIENTAPPLICATIONS: type('[Organization] findByIdOAuthClientApplications'),
  FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[Organization] findByIdOAuthClientApplications success'),
  FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL: type('[Organization] findByIdOAuthClientApplications fail'),

  DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS: type('[Organization] destroyByIdOAuthClientApplications'),
  DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[Organization] destroyByIdOAuthClientApplications success'),
  DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL: type('[Organization] destroyByIdOAuthClientApplications fail'),

  UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS: type('[Organization] updateByIdOAuthClientApplications'),
  UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[Organization] updateByIdOAuthClientApplications success'),
  UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL: type('[Organization] updateByIdOAuthClientApplications fail'),

  GET_USERS: type('[Organization] getUsers'),
  GET_USERS_SUCCESS: type('[Organization] getUsers success'),
  GET_USERS_FAIL: type('[Organization] getUsers fail'),

  CREATE_USERS: type('[Organization] createUsers'),
  CREATE_USERS_SUCCESS: type('[Organization] createUsers success'),
  CREATE_USERS_FAIL: type('[Organization] createUsers fail'),

  DELETE_USERS: type('[Organization] deleteUsers'),
  DELETE_USERS_SUCCESS: type('[Organization] deleteUsers success'),
  DELETE_USERS_FAIL: type('[Organization] deleteUsers fail'),

  GET_ROLES: type('[Organization] getRoles'),
  GET_ROLES_SUCCESS: type('[Organization] getRoles success'),
  GET_ROLES_FAIL: type('[Organization] getRoles fail'),

  CREATE_ROLES: type('[Organization] createRoles'),
  CREATE_ROLES_SUCCESS: type('[Organization] createRoles success'),
  CREATE_ROLES_FAIL: type('[Organization] createRoles fail'),

  DELETE_ROLES: type('[Organization] deleteRoles'),
  DELETE_ROLES_SUCCESS: type('[Organization] deleteRoles success'),
  DELETE_ROLES_FAIL: type('[Organization] deleteRoles fail'),

  GET_APPS: type('[Organization] getApps'),
  GET_APPS_SUCCESS: type('[Organization] getApps success'),
  GET_APPS_FAIL: type('[Organization] getApps fail'),

  CREATE_APPS: type('[Organization] createApps'),
  CREATE_APPS_SUCCESS: type('[Organization] createApps success'),
  CREATE_APPS_FAIL: type('[Organization] createApps fail'),

  DELETE_APPS: type('[Organization] deleteApps'),
  DELETE_APPS_SUCCESS: type('[Organization] deleteApps success'),
  DELETE_APPS_FAIL: type('[Organization] deleteApps fail'),

  GET_OAUTHCLIENTAPPLICATIONS: type('[Organization] getOAuthClientApplications'),
  GET_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[Organization] getOAuthClientApplications success'),
  GET_OAUTHCLIENTAPPLICATIONS_FAIL: type('[Organization] getOAuthClientApplications fail'),

  CREATE_OAUTHCLIENTAPPLICATIONS: type('[Organization] createOAuthClientApplications'),
  CREATE_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[Organization] createOAuthClientApplications success'),
  CREATE_OAUTHCLIENTAPPLICATIONS_FAIL: type('[Organization] createOAuthClientApplications fail'),

  DELETE_OAUTHCLIENTAPPLICATIONS: type('[Organization] deleteOAuthClientApplications'),
  DELETE_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[Organization] deleteOAuthClientApplications success'),
  DELETE_OAUTHCLIENTAPPLICATIONS_FAIL: type('[Organization] deleteOAuthClientApplications fail'),

  S3_P_U_T_SIGNED_URL: type('[Organization] s3PUTSignedUrl'),
  S3_P_U_T_SIGNED_URL_SUCCESS: type('[Organization] s3PUTSignedUrl success'),
  S3_P_U_T_SIGNED_URL_FAIL: type('[Organization] s3PUTSignedUrl fail'),

  S3_G_E_T_SIGNED_URL: type('[Organization] s3GETSignedUrl'),
  S3_G_E_T_SIGNED_URL_SUCCESS: type('[Organization] s3GETSignedUrl success'),
  S3_G_E_T_SIGNED_URL_FAIL: type('[Organization] s3GETSignedUrl fail'),

  CREATE_MANY_S3PHOTO: type('[Organization] createManyS3Photo'),
  CREATE_MANY_S3PHOTO_SUCCESS: type('[Organization] createManyS3Photo success'),
  CREATE_MANY_S3PHOTO_FAIL: type('[Organization] createManyS3Photo fail'),

  CREATE_MANY_USERS: type('[Organization] createManyUsers'),
  CREATE_MANY_USERS_SUCCESS: type('[Organization] createManyUsers success'),
  CREATE_MANY_USERS_FAIL: type('[Organization] createManyUsers fail'),

  CREATE_MANY_ROLES: type('[Organization] createManyRoles'),
  CREATE_MANY_ROLES_SUCCESS: type('[Organization] createManyRoles success'),
  CREATE_MANY_ROLES_FAIL: type('[Organization] createManyRoles fail'),

  CREATE_MANY_APPS: type('[Organization] createManyApps'),
  CREATE_MANY_APPS_SUCCESS: type('[Organization] createManyApps success'),
  CREATE_MANY_APPS_FAIL: type('[Organization] createManyApps fail'),

  CREATE_MANY_OAUTHCLIENTAPPLICATIONS: type('[Organization] createManyOAuthClientApplications'),
  CREATE_MANY_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[Organization] createManyOAuthClientApplications success'),
  CREATE_MANY_OAUTHCLIENTAPPLICATIONS_FAIL: type('[Organization] createManyOAuthClientApplications fail'),

});
export const OrganizationActions =
Object.assign(BaseLoopbackActionsFactory<Organization>('Organization', OrganizationActionTypes), {

  /**
   * findByIdUsers Action.
   * Find a related item by id for users.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for users
   * @param {any} meta (optional).
   * 
   */
  findByIdUsers: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_USERS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdUsersSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_USERS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdUsersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdUsers Action.
   * Delete a related item by id for users.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for users
   * @param {any} meta (optional).
   * 
   */
  destroyByIdUsers: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_USERS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdUsersSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_USERS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdUsersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdUsers Action.
   * Update a related item by id for users.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for users
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdUsers: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_USERS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdUsersSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_USERS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdUsersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * linkUsers Action.
   * Add a related item by id for users.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for users
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  linkUsers: class implements Action {
    public readonly type = OrganizationActionTypes.LINK_USERS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * linkUsersSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  linkUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.LINK_USERS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * linkUsersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  linkUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.LINK_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * unlinkUsers Action.
   * Remove the users relation to an item by id.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for users
   * @param {any} meta (optional).
   * 
   */
  unlinkUsers: class implements Action {
    public readonly type = OrganizationActionTypes.UNLINK_USERS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkUsersSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  unlinkUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UNLINK_USERS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkUsersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  unlinkUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.UNLINK_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdRoles Action.
   * Find a related item by id for roles.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for roles
   * @param {any} meta (optional).
   * 
   */
  findByIdRoles: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_ROLES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdRolesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdRolesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_ROLES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdRolesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdRolesFail: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdRoles Action.
   * Delete a related item by id for roles.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for roles
   * @param {any} meta (optional).
   * 
   */
  destroyByIdRoles: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_ROLES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdRolesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdRolesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_ROLES_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdRolesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdRolesFail: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdRoles Action.
   * Update a related item by id for roles.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for roles
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdRoles: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_ROLES;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdRolesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdRolesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_ROLES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdRolesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdRolesFail: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getS3Photo Action.
   * Fetches hasOne relation s3Photo.
   *
   * @param {any} id Organization id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getS3Photo: class implements Action {
    public readonly type = OrganizationActionTypes.GET_S3PHOTO;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getS3PhotoSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getS3PhotoSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.GET_S3PHOTO_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getS3PhotoFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getS3PhotoFail: class implements Action {
    public readonly type = OrganizationActionTypes.GET_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createS3Photo Action.
   * Creates a new instance in s3Photo of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createS3Photo: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_S3PHOTO;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createS3PhotoSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createS3PhotoSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_S3PHOTO_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createS3PhotoFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createS3PhotoFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateS3Photo Action.
   * Update s3Photo of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateS3Photo: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_S3PHOTO;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateS3PhotoSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateS3PhotoSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_S3PHOTO_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateS3PhotoFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateS3PhotoFail: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyS3Photo Action.
   * Deletes s3Photo of this model.
   *
   * @param {any} id Organization id
   * @param {any} meta (optional).
   * 
   */
  destroyS3Photo: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_S3PHOTO;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * destroyS3PhotoSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyS3PhotoSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_S3PHOTO_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyS3PhotoFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyS3PhotoFail: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdApps Action.
   * Find a related item by id for apps.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for apps
   * @param {any} meta (optional).
   * 
   */
  findByIdApps: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_APPS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdAppsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdAppsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_APPS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdAppsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdAppsFail: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdApps Action.
   * Delete a related item by id for apps.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for apps
   * @param {any} meta (optional).
   * 
   */
  destroyByIdApps: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_APPS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdAppsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdAppsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_APPS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdAppsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdAppsFail: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdApps Action.
   * Update a related item by id for apps.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for apps
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdApps: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_APPS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdAppsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdAppsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_APPS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdAppsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdAppsFail: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdOAuthClientApplications Action.
   * Find a related item by id for oAuthClientApplications.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for oAuthClientApplications
   * @param {any} meta (optional).
   * 
   */
  findByIdOAuthClientApplications: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdOAuthClientApplicationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdOAuthClientApplicationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdOAuthClientApplicationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdOAuthClientApplications Action.
   * Delete a related item by id for oAuthClientApplications.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for oAuthClientApplications
   * @param {any} meta (optional).
   * 
   */
  destroyByIdOAuthClientApplications: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdOAuthClientApplicationsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdOAuthClientApplicationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdOAuthClientApplicationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdOAuthClientApplications Action.
   * Update a related item by id for oAuthClientApplications.
   *
   * @param {any} id Organization id
   * @param {any} fk Foreign key for oAuthClientApplications
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdOAuthClientApplications: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdOAuthClientApplicationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdOAuthClientApplicationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdOAuthClientApplicationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getUsers Action.
   * Queries users of Organization.
   *
   * @param {any} id Organization id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getUsers: class implements Action {
    public readonly type = OrganizationActionTypes.GET_USERS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getUsersSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.GET_USERS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getUsersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.GET_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createUsers Action.
   * Creates a new instance in users of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createUsers: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_USERS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createUsersSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_USERS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createUsersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteUsers Action.
   * Deletes all users of this model.
   *
   * @param {any} id Organization id
   * @param {any} meta (optional).
   * 
   */
  deleteUsers: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_USERS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteUsersSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_USERS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteUsersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getRoles Action.
   * Queries roles of Organization.
   *
   * @param {any} id Organization id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getRoles: class implements Action {
    public readonly type = OrganizationActionTypes.GET_ROLES;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getRolesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getRolesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.GET_ROLES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getRolesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getRolesFail: class implements Action {
    public readonly type = OrganizationActionTypes.GET_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createRoles Action.
   * Creates a new instance in roles of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createRoles: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_ROLES;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createRolesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createRolesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_ROLES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createRolesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createRolesFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteRoles Action.
   * Deletes all roles of this model.
   *
   * @param {any} id Organization id
   * @param {any} meta (optional).
   * 
   */
  deleteRoles: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_ROLES;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteRolesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteRolesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_ROLES_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteRolesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteRolesFail: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getApps Action.
   * Queries apps of Organization.
   *
   * @param {any} id Organization id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getApps: class implements Action {
    public readonly type = OrganizationActionTypes.GET_APPS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getAppsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getAppsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.GET_APPS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getAppsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getAppsFail: class implements Action {
    public readonly type = OrganizationActionTypes.GET_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createApps Action.
   * Creates a new instance in apps of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createApps: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_APPS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createAppsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createAppsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_APPS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createAppsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createAppsFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteApps Action.
   * Deletes all apps of this model.
   *
   * @param {any} id Organization id
   * @param {any} meta (optional).
   * 
   */
  deleteApps: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_APPS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteAppsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteAppsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_APPS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteAppsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteAppsFail: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getOAuthClientApplications Action.
   * Queries oAuthClientApplications of Organization.
   *
   * @param {any} id Organization id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getOAuthClientApplications: class implements Action {
    public readonly type = OrganizationActionTypes.GET_OAUTHCLIENTAPPLICATIONS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getOAuthClientApplicationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.GET_OAUTHCLIENTAPPLICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getOAuthClientApplicationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getOAuthClientApplicationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.GET_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createOAuthClientApplications Action.
   * Creates a new instance in oAuthClientApplications of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createOAuthClientApplications: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createOAuthClientApplicationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createOAuthClientApplicationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createOAuthClientApplicationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteOAuthClientApplications Action.
   * Deletes all oAuthClientApplications of this model.
   *
   * @param {any} id Organization id
   * @param {any} meta (optional).
   * 
   */
  deleteOAuthClientApplications: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteOAuthClientApplicationsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteOAuthClientApplicationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteOAuthClientApplicationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * s3PUTSignedUrl Action.
   * Get a S3 Signed URL for direct file uploads.
   *
   * @param {any} id Organization id
   * @param {string} key 
   * @param {object} options 
   * @param {any} meta (optional).
   * 
   */
  s3PUTSignedUrl: class implements Action {
    public readonly type = OrganizationActionTypes.S3_P_U_T_SIGNED_URL;
      public payload: {id: any, key: any, options: any};

    constructor(id: any, key: any = {}, options: any = {}, public meta?: any) {
      this.payload = {id, key, options};
    }
  },
  /**
   * s3PUTSignedUrlSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  s3PUTSignedUrlSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.S3_P_U_T_SIGNED_URL_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * s3PUTSignedUrlFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  s3PUTSignedUrlFail: class implements Action {
    public readonly type = OrganizationActionTypes.S3_P_U_T_SIGNED_URL_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * s3GETSignedUrl Action.
   * Get a S3 Signed URL for direct file access.
   *
   * @param {any} id Organization id
   * @param {string} key 
   * @param {any} meta (optional).
   * 
   */
  s3GETSignedUrl: class implements Action {
    public readonly type = OrganizationActionTypes.S3_G_E_T_SIGNED_URL;
      public payload: {id: any, key: any};

    constructor(id: any, key: any = {}, public meta?: any) {
      this.payload = {id, key};
    }
  },
  /**
   * s3GETSignedUrlSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  s3GETSignedUrlSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.S3_G_E_T_SIGNED_URL_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * s3GETSignedUrlFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  s3GETSignedUrlFail: class implements Action {
    public readonly type = OrganizationActionTypes.S3_G_E_T_SIGNED_URL_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyS3Photo Action.
   * Creates a new instance in s3Photo of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyS3Photo: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_S3PHOTO;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyS3PhotoSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyS3PhotoSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_S3PHOTO_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyS3PhotoFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyS3PhotoFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyUsers Action.
   * Creates a new instance in users of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyUsers: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_USERS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyUsersSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyUsersSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_USERS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyUsersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyUsersFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_USERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyRoles Action.
   * Creates a new instance in roles of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyRoles: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_ROLES;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyRolesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyRolesSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_ROLES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyRolesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyRolesFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyApps Action.
   * Creates a new instance in apps of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyApps: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_APPS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyAppsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyAppsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_APPS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyAppsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyAppsFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyOAuthClientApplications Action.
   * Creates a new instance in oAuthClientApplications of this model.
   *
   * @param {any} id Organization id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyOAuthClientApplications: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyOAuthClientApplicationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyOAuthClientApplicationsSuccess: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyOAuthClientApplicationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyOAuthClientApplicationsFail: class implements Action {
    public readonly type = OrganizationActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});