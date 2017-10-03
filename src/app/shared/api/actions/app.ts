/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, App } from '../models';

export const AppActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('App'), {
  GET_USER: type('[App] getUser'),
  GET_USER_SUCCESS: type('[App] getUser success'),
  GET_USER_FAIL: type('[App] getUser fail'),

  GET_ORGANIZATION: type('[App] getOrganization'),
  GET_ORGANIZATION_SUCCESS: type('[App] getOrganization success'),
  GET_ORGANIZATION_FAIL: type('[App] getOrganization fail'),

  GET_S3PHOTO: type('[App] getS3Photo'),
  GET_S3PHOTO_SUCCESS: type('[App] getS3Photo success'),
  GET_S3PHOTO_FAIL: type('[App] getS3Photo fail'),

  CREATE_S3PHOTO: type('[App] createS3Photo'),
  CREATE_S3PHOTO_SUCCESS: type('[App] createS3Photo success'),
  CREATE_S3PHOTO_FAIL: type('[App] createS3Photo fail'),

  UPDATE_S3PHOTO: type('[App] updateS3Photo'),
  UPDATE_S3PHOTO_SUCCESS: type('[App] updateS3Photo success'),
  UPDATE_S3PHOTO_FAIL: type('[App] updateS3Photo fail'),

  DESTROY_S3PHOTO: type('[App] destroyS3Photo'),
  DESTROY_S3PHOTO_SUCCESS: type('[App] destroyS3Photo success'),
  DESTROY_S3PHOTO_FAIL: type('[App] destroyS3Photo fail'),

  GET_OPTION: type('[App] getOption'),
  GET_OPTION_SUCCESS: type('[App] getOption success'),
  GET_OPTION_FAIL: type('[App] getOption fail'),

  CREATE_OPTION: type('[App] createOption'),
  CREATE_OPTION_SUCCESS: type('[App] createOption success'),
  CREATE_OPTION_FAIL: type('[App] createOption fail'),

  UPDATE_OPTION: type('[App] updateOption'),
  UPDATE_OPTION_SUCCESS: type('[App] updateOption success'),
  UPDATE_OPTION_FAIL: type('[App] updateOption fail'),

  DESTROY_OPTION: type('[App] destroyOption'),
  DESTROY_OPTION_SUCCESS: type('[App] destroyOption success'),
  DESTROY_OPTION_FAIL: type('[App] destroyOption fail'),

  S3_P_U_T_SIGNED_URL: type('[App] s3PUTSignedUrl'),
  S3_P_U_T_SIGNED_URL_SUCCESS: type('[App] s3PUTSignedUrl success'),
  S3_P_U_T_SIGNED_URL_FAIL: type('[App] s3PUTSignedUrl fail'),

  S3_G_E_T_SIGNED_URL: type('[App] s3GETSignedUrl'),
  S3_G_E_T_SIGNED_URL_SUCCESS: type('[App] s3GETSignedUrl success'),
  S3_G_E_T_SIGNED_URL_FAIL: type('[App] s3GETSignedUrl fail'),

  CREATE_MANY_S3PHOTO: type('[App] createManyS3Photo'),
  CREATE_MANY_S3PHOTO_SUCCESS: type('[App] createManyS3Photo success'),
  CREATE_MANY_S3PHOTO_FAIL: type('[App] createManyS3Photo fail'),

  CREATE_MANY_OPTION: type('[App] createManyOption'),
  CREATE_MANY_OPTION_SUCCESS: type('[App] createManyOption success'),
  CREATE_MANY_OPTION_FAIL: type('[App] createManyOption fail'),

});
export const AppActions =
Object.assign(BaseLoopbackActionsFactory<App>(AppActionTypes), {

  /**
   * getUser Action.
   * Fetches belongsTo relation user.
   *
   * @param {any} id App id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getUser: class implements Action {
    public readonly type = AppActionTypes.GET_USER;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getUserSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getUserSuccess: class implements Action {
    public readonly type = AppActionTypes.GET_USER_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getUserFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getUserFail: class implements Action {
    public readonly type = AppActionTypes.GET_USER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getOrganization Action.
   * Fetches belongsTo relation organization.
   *
   * @param {any} id App id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getOrganization: class implements Action {
    public readonly type = AppActionTypes.GET_ORGANIZATION;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getOrganizationSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getOrganizationSuccess: class implements Action {
    public readonly type = AppActionTypes.GET_ORGANIZATION_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getOrganizationFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getOrganizationFail: class implements Action {
    public readonly type = AppActionTypes.GET_ORGANIZATION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getS3Photo Action.
   * Fetches hasOne relation s3Photo.
   *
   * @param {any} id App id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getS3Photo: class implements Action {
    public readonly type = AppActionTypes.GET_S3PHOTO;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
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
    public readonly type = AppActionTypes.GET_S3PHOTO_SUCCESS;
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
    public readonly type = AppActionTypes.GET_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createS3Photo Action.
   * Creates a new instance in s3Photo of this model.
   *
   * @param {any} id App id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createS3Photo: class implements Action {
    public readonly type = AppActionTypes.CREATE_S3PHOTO;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
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
    public readonly type = AppActionTypes.CREATE_S3PHOTO_SUCCESS;
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
    public readonly type = AppActionTypes.CREATE_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateS3Photo Action.
   * Update s3Photo of this model.
   *
   * @param {any} id App id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateS3Photo: class implements Action {
    public readonly type = AppActionTypes.UPDATE_S3PHOTO;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
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
    public readonly type = AppActionTypes.UPDATE_S3PHOTO_SUCCESS;
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
    public readonly type = AppActionTypes.UPDATE_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyS3Photo Action.
   * Deletes s3Photo of this model.
   *
   * @param {any} id App id
   * @param {any} meta (optional).
   * 
   */
  destroyS3Photo: class implements Action {
    public readonly type = AppActionTypes.DESTROY_S3PHOTO;
      
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
    public readonly type = AppActionTypes.DESTROY_S3PHOTO_SUCCESS;
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
    public readonly type = AppActionTypes.DESTROY_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getOption Action.
   * Fetches hasOne relation option.
   *
   * @param {any} id App id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getOption: class implements Action {
    public readonly type = AppActionTypes.GET_OPTION;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getOptionSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getOptionSuccess: class implements Action {
    public readonly type = AppActionTypes.GET_OPTION_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getOptionFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getOptionFail: class implements Action {
    public readonly type = AppActionTypes.GET_OPTION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createOption Action.
   * Creates a new instance in option of this model.
   *
   * @param {any} id App id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createOption: class implements Action {
    public readonly type = AppActionTypes.CREATE_OPTION;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createOptionSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createOptionSuccess: class implements Action {
    public readonly type = AppActionTypes.CREATE_OPTION_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createOptionFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createOptionFail: class implements Action {
    public readonly type = AppActionTypes.CREATE_OPTION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateOption Action.
   * Update option of this model.
   *
   * @param {any} id App id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateOption: class implements Action {
    public readonly type = AppActionTypes.UPDATE_OPTION;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateOptionSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateOptionSuccess: class implements Action {
    public readonly type = AppActionTypes.UPDATE_OPTION_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateOptionFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateOptionFail: class implements Action {
    public readonly type = AppActionTypes.UPDATE_OPTION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyOption Action.
   * Deletes option of this model.
   *
   * @param {any} id App id
   * @param {any} meta (optional).
   * 
   */
  destroyOption: class implements Action {
    public readonly type = AppActionTypes.DESTROY_OPTION;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * destroyOptionSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyOptionSuccess: class implements Action {
    public readonly type = AppActionTypes.DESTROY_OPTION_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyOptionFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyOptionFail: class implements Action {
    public readonly type = AppActionTypes.DESTROY_OPTION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * s3PUTSignedUrl Action.
   * Get a S3 Signed URL for direct file uploads.
   *
   * @param {any} id App id
   * @param {string} key 
   * @param {object} options 
   * @param {any} meta (optional).
   * 
   */
  s3PUTSignedUrl: class implements Action {
    public readonly type = AppActionTypes.S3_P_U_T_SIGNED_URL;
      public payload: {id: any, key: any, options: any};

    constructor(id: any, key: any = {}, options: any = {}, customHeaders?: Function, public meta?: any) {
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
    public readonly type = AppActionTypes.S3_P_U_T_SIGNED_URL_SUCCESS;
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
    public readonly type = AppActionTypes.S3_P_U_T_SIGNED_URL_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * s3GETSignedUrl Action.
   * Get a S3 Signed URL for direct file access.
   *
   * @param {any} id App id
   * @param {string} key 
   * @param {any} meta (optional).
   * 
   */
  s3GETSignedUrl: class implements Action {
    public readonly type = AppActionTypes.S3_G_E_T_SIGNED_URL;
      public payload: {id: any, key: any};

    constructor(id: any, key: any = {}, customHeaders?: Function, public meta?: any) {
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
    public readonly type = AppActionTypes.S3_G_E_T_SIGNED_URL_SUCCESS;
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
    public readonly type = AppActionTypes.S3_G_E_T_SIGNED_URL_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyS3Photo Action.
   * Creates a new instance in s3Photo of this model.
   *
   * @param {any} id App id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyS3Photo: class implements Action {
    public readonly type = AppActionTypes.CREATE_MANY_S3PHOTO;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
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
    public readonly type = AppActionTypes.CREATE_MANY_S3PHOTO_SUCCESS;
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
    public readonly type = AppActionTypes.CREATE_MANY_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyOption Action.
   * Creates a new instance in option of this model.
   *
   * @param {any} id App id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyOption: class implements Action {
    public readonly type = AppActionTypes.CREATE_MANY_OPTION;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyOptionSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyOptionSuccess: class implements Action {
    public readonly type = AppActionTypes.CREATE_MANY_OPTION_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyOptionFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyOptionFail: class implements Action {
    public readonly type = AppActionTypes.CREATE_MANY_OPTION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});