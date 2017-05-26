/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, User } from '../models';

export const UserActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('User'), {
  SEND_VERIFICATION_CODE: type('[User] sendVerificationCode'),
  SEND_VERIFICATION_CODE_SUCCESS: type('[User] sendVerificationCode success'),
  SEND_VERIFICATION_CODE_FAIL: type('[User] sendVerificationCode fail'),

  FIND_BY_ID_EMAILS: type('[User] findByIdEmails'),
  FIND_BY_ID_EMAILS_SUCCESS: type('[User] findByIdEmails success'),
  FIND_BY_ID_EMAILS_FAIL: type('[User] findByIdEmails fail'),

  DESTROY_BY_ID_EMAILS: type('[User] destroyByIdEmails'),
  DESTROY_BY_ID_EMAILS_SUCCESS: type('[User] destroyByIdEmails success'),
  DESTROY_BY_ID_EMAILS_FAIL: type('[User] destroyByIdEmails fail'),

  UPDATE_BY_ID_EMAILS: type('[User] updateByIdEmails'),
  UPDATE_BY_ID_EMAILS_SUCCESS: type('[User] updateByIdEmails success'),
  UPDATE_BY_ID_EMAILS_FAIL: type('[User] updateByIdEmails fail'),

  FIND_BY_ID_PHONES: type('[User] findByIdPhones'),
  FIND_BY_ID_PHONES_SUCCESS: type('[User] findByIdPhones success'),
  FIND_BY_ID_PHONES_FAIL: type('[User] findByIdPhones fail'),

  DESTROY_BY_ID_PHONES: type('[User] destroyByIdPhones'),
  DESTROY_BY_ID_PHONES_SUCCESS: type('[User] destroyByIdPhones success'),
  DESTROY_BY_ID_PHONES_FAIL: type('[User] destroyByIdPhones fail'),

  UPDATE_BY_ID_PHONES: type('[User] updateByIdPhones'),
  UPDATE_BY_ID_PHONES_SUCCESS: type('[User] updateByIdPhones success'),
  UPDATE_BY_ID_PHONES_FAIL: type('[User] updateByIdPhones fail'),

  GET_S3PHOTO: type('[User] getS3Photo'),
  GET_S3PHOTO_SUCCESS: type('[User] getS3Photo success'),
  GET_S3PHOTO_FAIL: type('[User] getS3Photo fail'),

  CREATE_S3PHOTO: type('[User] createS3Photo'),
  CREATE_S3PHOTO_SUCCESS: type('[User] createS3Photo success'),
  CREATE_S3PHOTO_FAIL: type('[User] createS3Photo fail'),

  UPDATE_S3PHOTO: type('[User] updateS3Photo'),
  UPDATE_S3PHOTO_SUCCESS: type('[User] updateS3Photo success'),
  UPDATE_S3PHOTO_FAIL: type('[User] updateS3Photo fail'),

  DESTROY_S3PHOTO: type('[User] destroyS3Photo'),
  DESTROY_S3PHOTO_SUCCESS: type('[User] destroyS3Photo success'),
  DESTROY_S3PHOTO_FAIL: type('[User] destroyS3Photo fail'),

  FIND_BY_ID_IDENTITIES: type('[User] findByIdIdentities'),
  FIND_BY_ID_IDENTITIES_SUCCESS: type('[User] findByIdIdentities success'),
  FIND_BY_ID_IDENTITIES_FAIL: type('[User] findByIdIdentities fail'),

  DESTROY_BY_ID_IDENTITIES: type('[User] destroyByIdIdentities'),
  DESTROY_BY_ID_IDENTITIES_SUCCESS: type('[User] destroyByIdIdentities success'),
  DESTROY_BY_ID_IDENTITIES_FAIL: type('[User] destroyByIdIdentities fail'),

  UPDATE_BY_ID_IDENTITIES: type('[User] updateByIdIdentities'),
  UPDATE_BY_ID_IDENTITIES_SUCCESS: type('[User] updateByIdIdentities success'),
  UPDATE_BY_ID_IDENTITIES_FAIL: type('[User] updateByIdIdentities fail'),

  FIND_BY_ID_CREDENTIALS: type('[User] findByIdCredentials'),
  FIND_BY_ID_CREDENTIALS_SUCCESS: type('[User] findByIdCredentials success'),
  FIND_BY_ID_CREDENTIALS_FAIL: type('[User] findByIdCredentials fail'),

  DESTROY_BY_ID_CREDENTIALS: type('[User] destroyByIdCredentials'),
  DESTROY_BY_ID_CREDENTIALS_SUCCESS: type('[User] destroyByIdCredentials success'),
  DESTROY_BY_ID_CREDENTIALS_FAIL: type('[User] destroyByIdCredentials fail'),

  UPDATE_BY_ID_CREDENTIALS: type('[User] updateByIdCredentials'),
  UPDATE_BY_ID_CREDENTIALS_SUCCESS: type('[User] updateByIdCredentials success'),
  UPDATE_BY_ID_CREDENTIALS_FAIL: type('[User] updateByIdCredentials fail'),

  FIND_BY_ID_ACCESSTOKENS: type('[User] findByIdAccessTokens'),
  FIND_BY_ID_ACCESSTOKENS_SUCCESS: type('[User] findByIdAccessTokens success'),
  FIND_BY_ID_ACCESSTOKENS_FAIL: type('[User] findByIdAccessTokens fail'),

  DESTROY_BY_ID_ACCESSTOKENS: type('[User] destroyByIdAccessTokens'),
  DESTROY_BY_ID_ACCESSTOKENS_SUCCESS: type('[User] destroyByIdAccessTokens success'),
  DESTROY_BY_ID_ACCESSTOKENS_FAIL: type('[User] destroyByIdAccessTokens fail'),

  UPDATE_BY_ID_ACCESSTOKENS: type('[User] updateByIdAccessTokens'),
  UPDATE_BY_ID_ACCESSTOKENS_SUCCESS: type('[User] updateByIdAccessTokens success'),
  UPDATE_BY_ID_ACCESSTOKENS_FAIL: type('[User] updateByIdAccessTokens fail'),

  FIND_BY_ID_ROLES: type('[User] findByIdRoles'),
  FIND_BY_ID_ROLES_SUCCESS: type('[User] findByIdRoles success'),
  FIND_BY_ID_ROLES_FAIL: type('[User] findByIdRoles fail'),

  DESTROY_BY_ID_ROLES: type('[User] destroyByIdRoles'),
  DESTROY_BY_ID_ROLES_SUCCESS: type('[User] destroyByIdRoles success'),
  DESTROY_BY_ID_ROLES_FAIL: type('[User] destroyByIdRoles fail'),

  UPDATE_BY_ID_ROLES: type('[User] updateByIdRoles'),
  UPDATE_BY_ID_ROLES_SUCCESS: type('[User] updateByIdRoles success'),
  UPDATE_BY_ID_ROLES_FAIL: type('[User] updateByIdRoles fail'),

  FIND_BY_ID_ORGANIZATIONS: type('[User] findByIdOrganizations'),
  FIND_BY_ID_ORGANIZATIONS_SUCCESS: type('[User] findByIdOrganizations success'),
  FIND_BY_ID_ORGANIZATIONS_FAIL: type('[User] findByIdOrganizations fail'),

  DESTROY_BY_ID_ORGANIZATIONS: type('[User] destroyByIdOrganizations'),
  DESTROY_BY_ID_ORGANIZATIONS_SUCCESS: type('[User] destroyByIdOrganizations success'),
  DESTROY_BY_ID_ORGANIZATIONS_FAIL: type('[User] destroyByIdOrganizations fail'),

  UPDATE_BY_ID_ORGANIZATIONS: type('[User] updateByIdOrganizations'),
  UPDATE_BY_ID_ORGANIZATIONS_SUCCESS: type('[User] updateByIdOrganizations success'),
  UPDATE_BY_ID_ORGANIZATIONS_FAIL: type('[User] updateByIdOrganizations fail'),

  LINK_ORGANIZATIONS: type('[User] linkOrganizations'),
  LINK_ORGANIZATIONS_SUCCESS: type('[User] linkOrganizations success'),
  LINK_ORGANIZATIONS_FAIL: type('[User] linkOrganizations fail'),

  UNLINK_ORGANIZATIONS: type('[User] unlinkOrganizations'),
  UNLINK_ORGANIZATIONS_SUCCESS: type('[User] unlinkOrganizations success'),
  UNLINK_ORGANIZATIONS_FAIL: type('[User] unlinkOrganizations fail'),

  FIND_BY_ID_APPS: type('[User] findByIdApps'),
  FIND_BY_ID_APPS_SUCCESS: type('[User] findByIdApps success'),
  FIND_BY_ID_APPS_FAIL: type('[User] findByIdApps fail'),

  DESTROY_BY_ID_APPS: type('[User] destroyByIdApps'),
  DESTROY_BY_ID_APPS_SUCCESS: type('[User] destroyByIdApps success'),
  DESTROY_BY_ID_APPS_FAIL: type('[User] destroyByIdApps fail'),

  UPDATE_BY_ID_APPS: type('[User] updateByIdApps'),
  UPDATE_BY_ID_APPS_SUCCESS: type('[User] updateByIdApps success'),
  UPDATE_BY_ID_APPS_FAIL: type('[User] updateByIdApps fail'),

  FIND_BY_ID_OAUTHCLIENTAPPLICATIONS: type('[User] findByIdOAuthClientApplications'),
  FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[User] findByIdOAuthClientApplications success'),
  FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL: type('[User] findByIdOAuthClientApplications fail'),

  DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS: type('[User] destroyByIdOAuthClientApplications'),
  DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[User] destroyByIdOAuthClientApplications success'),
  DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL: type('[User] destroyByIdOAuthClientApplications fail'),

  UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS: type('[User] updateByIdOAuthClientApplications'),
  UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[User] updateByIdOAuthClientApplications success'),
  UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL: type('[User] updateByIdOAuthClientApplications fail'),

  GET_EMAILS: type('[User] getEmails'),
  GET_EMAILS_SUCCESS: type('[User] getEmails success'),
  GET_EMAILS_FAIL: type('[User] getEmails fail'),

  CREATE_EMAILS: type('[User] createEmails'),
  CREATE_EMAILS_SUCCESS: type('[User] createEmails success'),
  CREATE_EMAILS_FAIL: type('[User] createEmails fail'),

  DELETE_EMAILS: type('[User] deleteEmails'),
  DELETE_EMAILS_SUCCESS: type('[User] deleteEmails success'),
  DELETE_EMAILS_FAIL: type('[User] deleteEmails fail'),

  GET_PHONES: type('[User] getPhones'),
  GET_PHONES_SUCCESS: type('[User] getPhones success'),
  GET_PHONES_FAIL: type('[User] getPhones fail'),

  CREATE_PHONES: type('[User] createPhones'),
  CREATE_PHONES_SUCCESS: type('[User] createPhones success'),
  CREATE_PHONES_FAIL: type('[User] createPhones fail'),

  DELETE_PHONES: type('[User] deletePhones'),
  DELETE_PHONES_SUCCESS: type('[User] deletePhones success'),
  DELETE_PHONES_FAIL: type('[User] deletePhones fail'),

  GET_IDENTITIES: type('[User] getIdentities'),
  GET_IDENTITIES_SUCCESS: type('[User] getIdentities success'),
  GET_IDENTITIES_FAIL: type('[User] getIdentities fail'),

  CREATE_IDENTITIES: type('[User] createIdentities'),
  CREATE_IDENTITIES_SUCCESS: type('[User] createIdentities success'),
  CREATE_IDENTITIES_FAIL: type('[User] createIdentities fail'),

  DELETE_IDENTITIES: type('[User] deleteIdentities'),
  DELETE_IDENTITIES_SUCCESS: type('[User] deleteIdentities success'),
  DELETE_IDENTITIES_FAIL: type('[User] deleteIdentities fail'),

  GET_CREDENTIALS: type('[User] getCredentials'),
  GET_CREDENTIALS_SUCCESS: type('[User] getCredentials success'),
  GET_CREDENTIALS_FAIL: type('[User] getCredentials fail'),

  CREATE_CREDENTIALS: type('[User] createCredentials'),
  CREATE_CREDENTIALS_SUCCESS: type('[User] createCredentials success'),
  CREATE_CREDENTIALS_FAIL: type('[User] createCredentials fail'),

  DELETE_CREDENTIALS: type('[User] deleteCredentials'),
  DELETE_CREDENTIALS_SUCCESS: type('[User] deleteCredentials success'),
  DELETE_CREDENTIALS_FAIL: type('[User] deleteCredentials fail'),

  GET_ACCESSTOKENS: type('[User] getAccessTokens'),
  GET_ACCESSTOKENS_SUCCESS: type('[User] getAccessTokens success'),
  GET_ACCESSTOKENS_FAIL: type('[User] getAccessTokens fail'),

  CREATE_ACCESSTOKENS: type('[User] createAccessTokens'),
  CREATE_ACCESSTOKENS_SUCCESS: type('[User] createAccessTokens success'),
  CREATE_ACCESSTOKENS_FAIL: type('[User] createAccessTokens fail'),

  DELETE_ACCESSTOKENS: type('[User] deleteAccessTokens'),
  DELETE_ACCESSTOKENS_SUCCESS: type('[User] deleteAccessTokens success'),
  DELETE_ACCESSTOKENS_FAIL: type('[User] deleteAccessTokens fail'),

  GET_ROLES: type('[User] getRoles'),
  GET_ROLES_SUCCESS: type('[User] getRoles success'),
  GET_ROLES_FAIL: type('[User] getRoles fail'),

  CREATE_ROLES: type('[User] createRoles'),
  CREATE_ROLES_SUCCESS: type('[User] createRoles success'),
  CREATE_ROLES_FAIL: type('[User] createRoles fail'),

  DELETE_ROLES: type('[User] deleteRoles'),
  DELETE_ROLES_SUCCESS: type('[User] deleteRoles success'),
  DELETE_ROLES_FAIL: type('[User] deleteRoles fail'),

  GET_ORGANIZATIONS: type('[User] getOrganizations'),
  GET_ORGANIZATIONS_SUCCESS: type('[User] getOrganizations success'),
  GET_ORGANIZATIONS_FAIL: type('[User] getOrganizations fail'),

  CREATE_ORGANIZATIONS: type('[User] createOrganizations'),
  CREATE_ORGANIZATIONS_SUCCESS: type('[User] createOrganizations success'),
  CREATE_ORGANIZATIONS_FAIL: type('[User] createOrganizations fail'),

  DELETE_ORGANIZATIONS: type('[User] deleteOrganizations'),
  DELETE_ORGANIZATIONS_SUCCESS: type('[User] deleteOrganizations success'),
  DELETE_ORGANIZATIONS_FAIL: type('[User] deleteOrganizations fail'),

  GET_APPS: type('[User] getApps'),
  GET_APPS_SUCCESS: type('[User] getApps success'),
  GET_APPS_FAIL: type('[User] getApps fail'),

  CREATE_APPS: type('[User] createApps'),
  CREATE_APPS_SUCCESS: type('[User] createApps success'),
  CREATE_APPS_FAIL: type('[User] createApps fail'),

  DELETE_APPS: type('[User] deleteApps'),
  DELETE_APPS_SUCCESS: type('[User] deleteApps success'),
  DELETE_APPS_FAIL: type('[User] deleteApps fail'),

  GET_OAUTHCLIENTAPPLICATIONS: type('[User] getOAuthClientApplications'),
  GET_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[User] getOAuthClientApplications success'),
  GET_OAUTHCLIENTAPPLICATIONS_FAIL: type('[User] getOAuthClientApplications fail'),

  CREATE_OAUTHCLIENTAPPLICATIONS: type('[User] createOAuthClientApplications'),
  CREATE_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[User] createOAuthClientApplications success'),
  CREATE_OAUTHCLIENTAPPLICATIONS_FAIL: type('[User] createOAuthClientApplications fail'),

  DELETE_OAUTHCLIENTAPPLICATIONS: type('[User] deleteOAuthClientApplications'),
  DELETE_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[User] deleteOAuthClientApplications success'),
  DELETE_OAUTHCLIENTAPPLICATIONS_FAIL: type('[User] deleteOAuthClientApplications fail'),

  LOGIN: type('[User] login'),
  LOGIN_SUCCESS: type('[User] login success'),
  LOGIN_FAIL: type('[User] login fail'),

  LOGOUT: type('[User] logout'),
  LOGOUT_SUCCESS: type('[User] logout success'),
  LOGOUT_FAIL: type('[User] logout fail'),

  VERIFY: type('[User] verify'),
  VERIFY_SUCCESS: type('[User] verify success'),
  VERIFY_FAIL: type('[User] verify fail'),

  CONFIRM: type('[User] confirm'),
  CONFIRM_SUCCESS: type('[User] confirm success'),
  CONFIRM_FAIL: type('[User] confirm fail'),

  RESET_PASSWORD: type('[User] resetPassword'),
  RESET_PASSWORD_SUCCESS: type('[User] resetPassword success'),
  RESET_PASSWORD_FAIL: type('[User] resetPassword fail'),

  CHANGE_PASSWORD: type('[User] changePassword'),
  CHANGE_PASSWORD_SUCCESS: type('[User] changePassword success'),
  CHANGE_PASSWORD_FAIL: type('[User] changePassword fail'),

  SET_PASSWORD: type('[User] setPassword'),
  SET_PASSWORD_SUCCESS: type('[User] setPassword success'),
  SET_PASSWORD_FAIL: type('[User] setPassword fail'),

  SET_PRIMARY_EMAIL: type('[User] setPrimaryEmail'),
  SET_PRIMARY_EMAIL_SUCCESS: type('[User] setPrimaryEmail success'),
  SET_PRIMARY_EMAIL_FAIL: type('[User] setPrimaryEmail fail'),

  SET_PRIMARY_PHONE: type('[User] setPrimaryPhone'),
  SET_PRIMARY_PHONE_SUCCESS: type('[User] setPrimaryPhone success'),
  SET_PRIMARY_PHONE_FAIL: type('[User] setPrimaryPhone fail'),

  S3_P_U_T_SIGNED_URL: type('[User] s3PUTSignedUrl'),
  S3_P_U_T_SIGNED_URL_SUCCESS: type('[User] s3PUTSignedUrl success'),
  S3_P_U_T_SIGNED_URL_FAIL: type('[User] s3PUTSignedUrl fail'),

  S3_G_E_T_SIGNED_URL: type('[User] s3GETSignedUrl'),
  S3_G_E_T_SIGNED_URL_SUCCESS: type('[User] s3GETSignedUrl success'),
  S3_G_E_T_SIGNED_URL_FAIL: type('[User] s3GETSignedUrl fail'),

  CREATE_MANY_S3PHOTO: type('[User] createManyS3Photo'),
  CREATE_MANY_S3PHOTO_SUCCESS: type('[User] createManyS3Photo success'),
  CREATE_MANY_S3PHOTO_FAIL: type('[User] createManyS3Photo fail'),

  CREATE_MANY_EMAILS: type('[User] createManyEmails'),
  CREATE_MANY_EMAILS_SUCCESS: type('[User] createManyEmails success'),
  CREATE_MANY_EMAILS_FAIL: type('[User] createManyEmails fail'),

  CREATE_MANY_PHONES: type('[User] createManyPhones'),
  CREATE_MANY_PHONES_SUCCESS: type('[User] createManyPhones success'),
  CREATE_MANY_PHONES_FAIL: type('[User] createManyPhones fail'),

  CREATE_MANY_IDENTITIES: type('[User] createManyIdentities'),
  CREATE_MANY_IDENTITIES_SUCCESS: type('[User] createManyIdentities success'),
  CREATE_MANY_IDENTITIES_FAIL: type('[User] createManyIdentities fail'),

  CREATE_MANY_CREDENTIALS: type('[User] createManyCredentials'),
  CREATE_MANY_CREDENTIALS_SUCCESS: type('[User] createManyCredentials success'),
  CREATE_MANY_CREDENTIALS_FAIL: type('[User] createManyCredentials fail'),

  CREATE_MANY_ACCESSTOKENS: type('[User] createManyAccessTokens'),
  CREATE_MANY_ACCESSTOKENS_SUCCESS: type('[User] createManyAccessTokens success'),
  CREATE_MANY_ACCESSTOKENS_FAIL: type('[User] createManyAccessTokens fail'),

  CREATE_MANY_ROLES: type('[User] createManyRoles'),
  CREATE_MANY_ROLES_SUCCESS: type('[User] createManyRoles success'),
  CREATE_MANY_ROLES_FAIL: type('[User] createManyRoles fail'),

  CREATE_MANY_ORGANIZATIONS: type('[User] createManyOrganizations'),
  CREATE_MANY_ORGANIZATIONS_SUCCESS: type('[User] createManyOrganizations success'),
  CREATE_MANY_ORGANIZATIONS_FAIL: type('[User] createManyOrganizations fail'),

  CREATE_MANY_APPS: type('[User] createManyApps'),
  CREATE_MANY_APPS_SUCCESS: type('[User] createManyApps success'),
  CREATE_MANY_APPS_FAIL: type('[User] createManyApps fail'),

  CREATE_MANY_OAUTHCLIENTAPPLICATIONS: type('[User] createManyOAuthClientApplications'),
  CREATE_MANY_OAUTHCLIENTAPPLICATIONS_SUCCESS: type('[User] createManyOAuthClientApplications success'),
  CREATE_MANY_OAUTHCLIENTAPPLICATIONS_FAIL: type('[User] createManyOAuthClientApplications fail'),

}, {
  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * User specific action types
   */
  SIGNUP: type('[User] Signup'),
  SIGNUP_SUCCESS: type('[User] Signup success'),
  SIGNUP_FAIL: type('[User] Signup fail'),
});
export const UserActions =
Object.assign(BaseLoopbackActionsFactory<User>('User', UserActionTypes), {

  /**
   * sendVerificationCode Action.
   * Send verification code
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   *  - `data` – `{object}` - email or phone id
   * @param {any} meta (optional).
   * 
   */
  sendVerificationCode: class implements Action {
    public readonly type = UserActionTypes.SEND_VERIFICATION_CODE;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * sendVerificationCodeSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  sendVerificationCodeSuccess: class implements Action {
    public readonly type = UserActionTypes.SEND_VERIFICATION_CODE_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * sendVerificationCodeFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  sendVerificationCodeFail: class implements Action {
    public readonly type = UserActionTypes.SEND_VERIFICATION_CODE_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdEmails Action.
   * Find a related item by id for emails.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for emails
   * @param {any} meta (optional).
   * 
   */
  findByIdEmails: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_EMAILS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdEmailsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdEmailsSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_EMAILS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdEmailsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdEmailsFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_EMAILS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdEmails Action.
   * Delete a related item by id for emails.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for emails
   * @param {any} meta (optional).
   * 
   */
  destroyByIdEmails: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_EMAILS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdEmailsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdEmailsSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_EMAILS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdEmailsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdEmailsFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_EMAILS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdEmails Action.
   * Update a related item by id for emails.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for emails
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdEmails: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_EMAILS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdEmailsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdEmailsSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_EMAILS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdEmailsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdEmailsFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_EMAILS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdPhones Action.
   * Find a related item by id for phones.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for phones
   * @param {any} meta (optional).
   * 
   */
  findByIdPhones: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_PHONES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdPhonesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdPhonesSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_PHONES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdPhonesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdPhonesFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_PHONES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdPhones Action.
   * Delete a related item by id for phones.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for phones
   * @param {any} meta (optional).
   * 
   */
  destroyByIdPhones: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_PHONES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdPhonesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdPhonesSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_PHONES_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdPhonesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdPhonesFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_PHONES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdPhones Action.
   * Update a related item by id for phones.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for phones
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdPhones: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_PHONES;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdPhonesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdPhonesSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_PHONES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdPhonesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdPhonesFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_PHONES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getS3Photo Action.
   * Fetches hasOne relation s3Photo.
   *
   * @param {any} id user id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getS3Photo: class implements Action {
    public readonly type = UserActionTypes.GET_S3PHOTO;
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
    public readonly type = UserActionTypes.GET_S3PHOTO_SUCCESS;
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
    public readonly type = UserActionTypes.GET_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createS3Photo Action.
   * Creates a new instance in s3Photo of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createS3Photo: class implements Action {
    public readonly type = UserActionTypes.CREATE_S3PHOTO;
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
    public readonly type = UserActionTypes.CREATE_S3PHOTO_SUCCESS;
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
    public readonly type = UserActionTypes.CREATE_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateS3Photo Action.
   * Update s3Photo of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateS3Photo: class implements Action {
    public readonly type = UserActionTypes.UPDATE_S3PHOTO;
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
    public readonly type = UserActionTypes.UPDATE_S3PHOTO_SUCCESS;
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
    public readonly type = UserActionTypes.UPDATE_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyS3Photo Action.
   * Deletes s3Photo of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  destroyS3Photo: class implements Action {
    public readonly type = UserActionTypes.DESTROY_S3PHOTO;
      
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
    public readonly type = UserActionTypes.DESTROY_S3PHOTO_SUCCESS;
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
    public readonly type = UserActionTypes.DESTROY_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdIdentities Action.
   * Find a related item by id for identities.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for identities
   * @param {any} meta (optional).
   * 
   */
  findByIdIdentities: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_IDENTITIES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdIdentitiesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdIdentitiesSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_IDENTITIES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdIdentitiesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdIdentitiesFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_IDENTITIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdIdentities Action.
   * Delete a related item by id for identities.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for identities
   * @param {any} meta (optional).
   * 
   */
  destroyByIdIdentities: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_IDENTITIES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdIdentitiesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdIdentitiesSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_IDENTITIES_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdIdentitiesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdIdentitiesFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_IDENTITIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdIdentities Action.
   * Update a related item by id for identities.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for identities
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdIdentities: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_IDENTITIES;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdIdentitiesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdIdentitiesSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_IDENTITIES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdIdentitiesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdIdentitiesFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_IDENTITIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdCredentials Action.
   * Find a related item by id for credentials.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for credentials
   * @param {any} meta (optional).
   * 
   */
  findByIdCredentials: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_CREDENTIALS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdCredentialsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdCredentialsSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_CREDENTIALS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdCredentialsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdCredentialsFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_CREDENTIALS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdCredentials Action.
   * Delete a related item by id for credentials.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for credentials
   * @param {any} meta (optional).
   * 
   */
  destroyByIdCredentials: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_CREDENTIALS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdCredentialsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdCredentialsSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_CREDENTIALS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdCredentialsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdCredentialsFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_CREDENTIALS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdCredentials Action.
   * Update a related item by id for credentials.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for credentials
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdCredentials: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_CREDENTIALS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdCredentialsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdCredentialsSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_CREDENTIALS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdCredentialsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdCredentialsFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_CREDENTIALS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdAccessTokens Action.
   * Find a related item by id for accessTokens.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for accessTokens
   * @param {any} meta (optional).
   * 
   */
  findByIdAccessTokens: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_ACCESSTOKENS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdAccessTokensSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdAccessTokensSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_ACCESSTOKENS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdAccessTokensFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdAccessTokensFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_ACCESSTOKENS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdAccessTokens Action.
   * Delete a related item by id for accessTokens.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for accessTokens
   * @param {any} meta (optional).
   * 
   */
  destroyByIdAccessTokens: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_ACCESSTOKENS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdAccessTokensSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdAccessTokensSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_ACCESSTOKENS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdAccessTokensFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdAccessTokensFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_ACCESSTOKENS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdAccessTokens Action.
   * Update a related item by id for accessTokens.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for accessTokens
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdAccessTokens: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_ACCESSTOKENS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdAccessTokensSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdAccessTokensSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_ACCESSTOKENS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdAccessTokensFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdAccessTokensFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_ACCESSTOKENS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdRoles Action.
   * Find a related item by id for roles.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for roles
   * @param {any} meta (optional).
   * 
   */
  findByIdRoles: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_ROLES;
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
    public readonly type = UserActionTypes.FIND_BY_ID_ROLES_SUCCESS;
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
    public readonly type = UserActionTypes.FIND_BY_ID_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdRoles Action.
   * Delete a related item by id for roles.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for roles
   * @param {any} meta (optional).
   * 
   */
  destroyByIdRoles: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_ROLES;
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
    public readonly type = UserActionTypes.DESTROY_BY_ID_ROLES_SUCCESS;
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
    public readonly type = UserActionTypes.DESTROY_BY_ID_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdRoles Action.
   * Update a related item by id for roles.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for roles
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdRoles: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_ROLES;
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
    public readonly type = UserActionTypes.UPDATE_BY_ID_ROLES_SUCCESS;
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
    public readonly type = UserActionTypes.UPDATE_BY_ID_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdOrganizations Action.
   * Find a related item by id for organizations.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for organizations
   * @param {any} meta (optional).
   * 
   */
  findByIdOrganizations: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_ORGANIZATIONS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdOrganizationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_ORGANIZATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdOrganizationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdOrganizations Action.
   * Delete a related item by id for organizations.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for organizations
   * @param {any} meta (optional).
   * 
   */
  destroyByIdOrganizations: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_ORGANIZATIONS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdOrganizationsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_ORGANIZATIONS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdOrganizationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdOrganizations Action.
   * Update a related item by id for organizations.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for organizations
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdOrganizations: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_ORGANIZATIONS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdOrganizationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_ORGANIZATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdOrganizationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * linkOrganizations Action.
   * Add a related item by id for organizations.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for organizations
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  linkOrganizations: class implements Action {
    public readonly type = UserActionTypes.LINK_ORGANIZATIONS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * linkOrganizationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  linkOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.LINK_ORGANIZATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * linkOrganizationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  linkOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.LINK_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * unlinkOrganizations Action.
   * Remove the organizations relation to an item by id.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for organizations
   * @param {any} meta (optional).
   * 
   */
  unlinkOrganizations: class implements Action {
    public readonly type = UserActionTypes.UNLINK_ORGANIZATIONS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkOrganizationsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  unlinkOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.UNLINK_ORGANIZATIONS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkOrganizationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  unlinkOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.UNLINK_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdApps Action.
   * Find a related item by id for apps.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for apps
   * @param {any} meta (optional).
   * 
   */
  findByIdApps: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_APPS;
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
    public readonly type = UserActionTypes.FIND_BY_ID_APPS_SUCCESS;
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
    public readonly type = UserActionTypes.FIND_BY_ID_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdApps Action.
   * Delete a related item by id for apps.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for apps
   * @param {any} meta (optional).
   * 
   */
  destroyByIdApps: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_APPS;
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
    public readonly type = UserActionTypes.DESTROY_BY_ID_APPS_SUCCESS;
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
    public readonly type = UserActionTypes.DESTROY_BY_ID_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdApps Action.
   * Update a related item by id for apps.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for apps
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdApps: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_APPS;
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
    public readonly type = UserActionTypes.UPDATE_BY_ID_APPS_SUCCESS;
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
    public readonly type = UserActionTypes.UPDATE_BY_ID_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdOAuthClientApplications Action.
   * Find a related item by id for oAuthClientApplications.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for oAuthClientApplications
   * @param {any} meta (optional).
   * 
   */
  findByIdOAuthClientApplications: class implements Action {
    public readonly type = UserActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS;
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
    public readonly type = UserActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS;
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
    public readonly type = UserActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdOAuthClientApplications Action.
   * Delete a related item by id for oAuthClientApplications.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for oAuthClientApplications
   * @param {any} meta (optional).
   * 
   */
  destroyByIdOAuthClientApplications: class implements Action {
    public readonly type = UserActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS;
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
    public readonly type = UserActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS;
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
    public readonly type = UserActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdOAuthClientApplications Action.
   * Update a related item by id for oAuthClientApplications.
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for oAuthClientApplications
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdOAuthClientApplications: class implements Action {
    public readonly type = UserActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS;
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
    public readonly type = UserActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_SUCCESS;
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
    public readonly type = UserActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getEmails Action.
   * Queries emails of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getEmails: class implements Action {
    public readonly type = UserActionTypes.GET_EMAILS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getEmailsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getEmailsSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_EMAILS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getEmailsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getEmailsFail: class implements Action {
    public readonly type = UserActionTypes.GET_EMAILS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createEmails Action.
   * Creates a new instance in emails of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createEmails: class implements Action {
    public readonly type = UserActionTypes.CREATE_EMAILS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createEmailsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createEmailsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_EMAILS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createEmailsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createEmailsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_EMAILS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteEmails Action.
   * Deletes all emails of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deleteEmails: class implements Action {
    public readonly type = UserActionTypes.DELETE_EMAILS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteEmailsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteEmailsSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_EMAILS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteEmailsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteEmailsFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_EMAILS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getPhones Action.
   * Queries phones of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getPhones: class implements Action {
    public readonly type = UserActionTypes.GET_PHONES;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getPhonesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getPhonesSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_PHONES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getPhonesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getPhonesFail: class implements Action {
    public readonly type = UserActionTypes.GET_PHONES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createPhones Action.
   * Creates a new instance in phones of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createPhones: class implements Action {
    public readonly type = UserActionTypes.CREATE_PHONES;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createPhonesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createPhonesSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_PHONES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createPhonesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createPhonesFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_PHONES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deletePhones Action.
   * Deletes all phones of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deletePhones: class implements Action {
    public readonly type = UserActionTypes.DELETE_PHONES;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deletePhonesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deletePhonesSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_PHONES_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deletePhonesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deletePhonesFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_PHONES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getIdentities Action.
   * Queries identities of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getIdentities: class implements Action {
    public readonly type = UserActionTypes.GET_IDENTITIES;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getIdentitiesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getIdentitiesSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_IDENTITIES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getIdentitiesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getIdentitiesFail: class implements Action {
    public readonly type = UserActionTypes.GET_IDENTITIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createIdentities Action.
   * Creates a new instance in identities of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createIdentities: class implements Action {
    public readonly type = UserActionTypes.CREATE_IDENTITIES;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createIdentitiesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createIdentitiesSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_IDENTITIES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createIdentitiesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createIdentitiesFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_IDENTITIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteIdentities Action.
   * Deletes all identities of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deleteIdentities: class implements Action {
    public readonly type = UserActionTypes.DELETE_IDENTITIES;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteIdentitiesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteIdentitiesSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_IDENTITIES_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteIdentitiesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteIdentitiesFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_IDENTITIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getCredentials Action.
   * Queries credentials of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getCredentials: class implements Action {
    public readonly type = UserActionTypes.GET_CREDENTIALS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getCredentialsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getCredentialsSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_CREDENTIALS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getCredentialsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getCredentialsFail: class implements Action {
    public readonly type = UserActionTypes.GET_CREDENTIALS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createCredentials Action.
   * Creates a new instance in credentials of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createCredentials: class implements Action {
    public readonly type = UserActionTypes.CREATE_CREDENTIALS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createCredentialsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createCredentialsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_CREDENTIALS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createCredentialsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createCredentialsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_CREDENTIALS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteCredentials Action.
   * Deletes all credentials of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deleteCredentials: class implements Action {
    public readonly type = UserActionTypes.DELETE_CREDENTIALS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteCredentialsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteCredentialsSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_CREDENTIALS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteCredentialsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteCredentialsFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_CREDENTIALS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getAccessTokens Action.
   * Queries accessTokens of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getAccessTokens: class implements Action {
    public readonly type = UserActionTypes.GET_ACCESSTOKENS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getAccessTokensSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getAccessTokensSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_ACCESSTOKENS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getAccessTokensFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getAccessTokensFail: class implements Action {
    public readonly type = UserActionTypes.GET_ACCESSTOKENS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createAccessTokens Action.
   * Creates a new instance in accessTokens of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createAccessTokens: class implements Action {
    public readonly type = UserActionTypes.CREATE_ACCESSTOKENS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createAccessTokensSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createAccessTokensSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_ACCESSTOKENS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createAccessTokensFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createAccessTokensFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_ACCESSTOKENS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteAccessTokens Action.
   * Deletes all accessTokens of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deleteAccessTokens: class implements Action {
    public readonly type = UserActionTypes.DELETE_ACCESSTOKENS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteAccessTokensSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteAccessTokensSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_ACCESSTOKENS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteAccessTokensFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteAccessTokensFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_ACCESSTOKENS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getRoles Action.
   * Queries roles of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getRoles: class implements Action {
    public readonly type = UserActionTypes.GET_ROLES;
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
    public readonly type = UserActionTypes.GET_ROLES_SUCCESS;
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
    public readonly type = UserActionTypes.GET_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createRoles Action.
   * Creates a new instance in roles of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createRoles: class implements Action {
    public readonly type = UserActionTypes.CREATE_ROLES;
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
    public readonly type = UserActionTypes.CREATE_ROLES_SUCCESS;
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
    public readonly type = UserActionTypes.CREATE_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteRoles Action.
   * Deletes all roles of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deleteRoles: class implements Action {
    public readonly type = UserActionTypes.DELETE_ROLES;
      
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
    public readonly type = UserActionTypes.DELETE_ROLES_SUCCESS;
  
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
    public readonly type = UserActionTypes.DELETE_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getOrganizations Action.
   * Queries organizations of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getOrganizations: class implements Action {
    public readonly type = UserActionTypes.GET_ORGANIZATIONS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getOrganizationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.GET_ORGANIZATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getOrganizationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.GET_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createOrganizations Action.
   * Creates a new instance in organizations of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createOrganizations: class implements Action {
    public readonly type = UserActionTypes.CREATE_ORGANIZATIONS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createOrganizationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_ORGANIZATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createOrganizationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteOrganizations Action.
   * Deletes all organizations of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deleteOrganizations: class implements Action {
    public readonly type = UserActionTypes.DELETE_ORGANIZATIONS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteOrganizationsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_ORGANIZATIONS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteOrganizationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getApps Action.
   * Queries apps of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getApps: class implements Action {
    public readonly type = UserActionTypes.GET_APPS;
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
    public readonly type = UserActionTypes.GET_APPS_SUCCESS;
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
    public readonly type = UserActionTypes.GET_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createApps Action.
   * Creates a new instance in apps of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createApps: class implements Action {
    public readonly type = UserActionTypes.CREATE_APPS;
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
    public readonly type = UserActionTypes.CREATE_APPS_SUCCESS;
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
    public readonly type = UserActionTypes.CREATE_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteApps Action.
   * Deletes all apps of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deleteApps: class implements Action {
    public readonly type = UserActionTypes.DELETE_APPS;
      
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
    public readonly type = UserActionTypes.DELETE_APPS_SUCCESS;
  
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
    public readonly type = UserActionTypes.DELETE_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getOAuthClientApplications Action.
   * Queries oAuthClientApplications of user.
   *
   * @param {any} id user id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getOAuthClientApplications: class implements Action {
    public readonly type = UserActionTypes.GET_OAUTHCLIENTAPPLICATIONS;
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
    public readonly type = UserActionTypes.GET_OAUTHCLIENTAPPLICATIONS_SUCCESS;
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
    public readonly type = UserActionTypes.GET_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createOAuthClientApplications Action.
   * Creates a new instance in oAuthClientApplications of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createOAuthClientApplications: class implements Action {
    public readonly type = UserActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS;
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
    public readonly type = UserActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS_SUCCESS;
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
    public readonly type = UserActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteOAuthClientApplications Action.
   * Deletes all oAuthClientApplications of this model.
   *
   * @param {any} id user id
   * @param {any} meta (optional).
   * 
   */
  deleteOAuthClientApplications: class implements Action {
    public readonly type = UserActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS;
      
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
    public readonly type = UserActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS_SUCCESS;
  
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
    public readonly type = UserActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * login Action.
   * Login a user with username/email and password.
   *
   * @param {string} include Related objects to include in the response. See the description of return value for more details.
   *   Default value: `user`.
   *  - `rememberMe` - `boolean` - Whether the authentication credentials
   *     should be remembered in localStorage across app/browser restarts.
   *     Default: `true`.
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  login: class implements Action {
    public readonly type = UserActionTypes.LOGIN;
      public payload: {credentials: any, include: any};

    constructor(credentials: any, include: any = 'user', rememberMe: boolean = true, public meta?: any) {
      this.payload = {credentials, include};
    }
  },
  /**
   * loginSuccess Action.
   * 
   * @param {any} id 
   * The response body contains properties of the AccessToken created on login.
   * Depending on the value of `include` parameter, the body may contain additional properties:
   * 
   *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
   * 
   *
   * @param {any} meta (optional).
   * 
   */
  loginSuccess: class implements Action {
    public readonly type = UserActionTypes.LOGIN_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * loginFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  loginFail: class implements Action {
    public readonly type = UserActionTypes.LOGIN_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * logout Action.
   * Logout a user with access token.
   *
   * @param {object} data Request data.
   *
   * This method does not accept any data. Supply an empty object.
   * @param {any} meta (optional).
   * 
   */
  logout: class implements Action {
    public readonly type = UserActionTypes.LOGOUT;
      
    constructor(public meta?: any) {}
  },
  /**
   * logoutSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  logoutSuccess: class implements Action {
    public readonly type = UserActionTypes.LOGOUT_SUCCESS;
  
    constructor(public meta?: any) {}
  },
  /**
   * logoutFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  logoutFail: class implements Action {
    public readonly type = UserActionTypes.LOGOUT_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * verify Action.
   * Trigger user's identity verification with configured verifyOptions
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method does not accept any data. Supply an empty object.
   * @param {any} meta (optional).
   * 
   */
  verify: class implements Action {
    public readonly type = UserActionTypes.VERIFY;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * verifySuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  verifySuccess: class implements Action {
    public readonly type = UserActionTypes.VERIFY_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * verifyFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  verifyFail: class implements Action {
    public readonly type = UserActionTypes.VERIFY_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * confirm Action.
   * Confirm a user registration with identity verification token.
   *
   * @param {string} uid 
   * @param {string} token 
   * @param {string} redirect 
   * @param {any} meta (optional).
   * 
   */
  confirm: class implements Action {
    public readonly type = UserActionTypes.CONFIRM;
      public payload: {uid: any, token: any, redirect: any};

    constructor(uid: any, token: any, redirect: any = {}, public meta?: any) {
      this.payload = {uid, token, redirect};
    }
  },
  /**
   * confirmSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  confirmSuccess: class implements Action {
    public readonly type = UserActionTypes.CONFIRM_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * confirmFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  confirmFail: class implements Action {
    public readonly type = UserActionTypes.CONFIRM_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * resetPassword Action.
   * Reset password for a user with email.
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  resetPassword: class implements Action {
    public readonly type = UserActionTypes.RESET_PASSWORD;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * resetPasswordSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  resetPasswordSuccess: class implements Action {
    public readonly type = UserActionTypes.RESET_PASSWORD_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * resetPasswordFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  resetPasswordFail: class implements Action {
    public readonly type = UserActionTypes.RESET_PASSWORD_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * changePassword Action.
   * Change a user's password.
   *
   * @param {object} data Request data.
   *
   *  - `oldPassword` – `{string}` - 
   *
   *  - `newPassword` – `{string}` - 
   * @param {any} meta (optional).
   * 
   */
  changePassword: class implements Action {
    public readonly type = UserActionTypes.CHANGE_PASSWORD;
      public payload: {oldPassword: any, newPassword: any};

    constructor(oldPassword: any, newPassword: any, public meta?: any) {
      this.payload = {oldPassword, newPassword};
    }
  },
  /**
   * changePasswordSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  changePasswordSuccess: class implements Action {
    public readonly type = UserActionTypes.CHANGE_PASSWORD_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * changePasswordFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  changePasswordFail: class implements Action {
    public readonly type = UserActionTypes.CHANGE_PASSWORD_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * setPassword Action.
   * Reset user's password via a password-reset token.
   *
   * @param {object} data Request data.
   *
   *  - `newPassword` – `{string}` - 
   * @param {any} meta (optional).
   * 
   */
  setPassword: class implements Action {
    public readonly type = UserActionTypes.SET_PASSWORD;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * setPasswordSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  setPasswordSuccess: class implements Action {
    public readonly type = UserActionTypes.SET_PASSWORD_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * setPasswordFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  setPasswordFail: class implements Action {
    public readonly type = UserActionTypes.SET_PASSWORD_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * setPrimaryEmail Action.
   * Set the primary email address
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for emailAddress
   * @param {object} data Request data.
   *
   * This method does not accept any data. Supply an empty object.
   * @param {any} meta (optional).
   * 
   */
  setPrimaryEmail: class implements Action {
    public readonly type = UserActionTypes.SET_PRIMARY_EMAIL;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * setPrimaryEmailSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  setPrimaryEmailSuccess: class implements Action {
    public readonly type = UserActionTypes.SET_PRIMARY_EMAIL_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * setPrimaryEmailFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  setPrimaryEmailFail: class implements Action {
    public readonly type = UserActionTypes.SET_PRIMARY_EMAIL_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * setPrimaryPhone Action.
   * Set the primary phone number
   *
   * @param {any} id user id
   * @param {any} fk Foreign key for phoneNumber
   * @param {object} data Request data.
   *
   * This method does not accept any data. Supply an empty object.
   * @param {any} meta (optional).
   * 
   */
  setPrimaryPhone: class implements Action {
    public readonly type = UserActionTypes.SET_PRIMARY_PHONE;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * setPrimaryPhoneSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  setPrimaryPhoneSuccess: class implements Action {
    public readonly type = UserActionTypes.SET_PRIMARY_PHONE_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * setPrimaryPhoneFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  setPrimaryPhoneFail: class implements Action {
    public readonly type = UserActionTypes.SET_PRIMARY_PHONE_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * s3PUTSignedUrl Action.
   * Get a S3 Signed URL for direct file uploads.
   *
   * @param {any} id user id
   * @param {string} key 
   * @param {object} options 
   * @param {any} meta (optional).
   * 
   */
  s3PUTSignedUrl: class implements Action {
    public readonly type = UserActionTypes.S3_P_U_T_SIGNED_URL;
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
    public readonly type = UserActionTypes.S3_P_U_T_SIGNED_URL_SUCCESS;
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
    public readonly type = UserActionTypes.S3_P_U_T_SIGNED_URL_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * s3GETSignedUrl Action.
   * Get a S3 Signed URL for direct file access.
   *
   * @param {any} id user id
   * @param {string} key 
   * @param {any} meta (optional).
   * 
   */
  s3GETSignedUrl: class implements Action {
    public readonly type = UserActionTypes.S3_G_E_T_SIGNED_URL;
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
    public readonly type = UserActionTypes.S3_G_E_T_SIGNED_URL_SUCCESS;
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
    public readonly type = UserActionTypes.S3_G_E_T_SIGNED_URL_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyS3Photo Action.
   * Creates a new instance in s3Photo of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyS3Photo: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_S3PHOTO;
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
    public readonly type = UserActionTypes.CREATE_MANY_S3PHOTO_SUCCESS;
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
    public readonly type = UserActionTypes.CREATE_MANY_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyEmails Action.
   * Creates a new instance in emails of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyEmails: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_EMAILS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyEmailsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyEmailsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_EMAILS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyEmailsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyEmailsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_EMAILS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyPhones Action.
   * Creates a new instance in phones of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyPhones: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_PHONES;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyPhonesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyPhonesSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_PHONES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyPhonesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyPhonesFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_PHONES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyIdentities Action.
   * Creates a new instance in identities of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyIdentities: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_IDENTITIES;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyIdentitiesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyIdentitiesSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_IDENTITIES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyIdentitiesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyIdentitiesFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_IDENTITIES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyCredentials Action.
   * Creates a new instance in credentials of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyCredentials: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_CREDENTIALS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyCredentialsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyCredentialsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_CREDENTIALS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyCredentialsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyCredentialsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_CREDENTIALS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyAccessTokens Action.
   * Creates a new instance in accessTokens of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyAccessTokens: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_ACCESSTOKENS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyAccessTokensSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyAccessTokensSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_ACCESSTOKENS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyAccessTokensFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyAccessTokensFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_ACCESSTOKENS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyRoles Action.
   * Creates a new instance in roles of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyRoles: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_ROLES;
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
    public readonly type = UserActionTypes.CREATE_MANY_ROLES_SUCCESS;
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
    public readonly type = UserActionTypes.CREATE_MANY_ROLES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyOrganizations Action.
   * Creates a new instance in organizations of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyOrganizations: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_ORGANIZATIONS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyOrganizationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyOrganizationsSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_ORGANIZATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyOrganizationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyOrganizationsFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_ORGANIZATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyApps Action.
   * Creates a new instance in apps of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyApps: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_APPS;
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
    public readonly type = UserActionTypes.CREATE_MANY_APPS_SUCCESS;
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
    public readonly type = UserActionTypes.CREATE_MANY_APPS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyOAuthClientApplications Action.
   * Creates a new instance in oAuthClientApplications of this model.
   *
   * @param {any} id user id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyOAuthClientApplications: class implements Action {
    public readonly type = UserActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS;
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
    public readonly type = UserActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS_SUCCESS;
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
    public readonly type = UserActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
}, {
  /**
   * User specific actions
   */
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
});