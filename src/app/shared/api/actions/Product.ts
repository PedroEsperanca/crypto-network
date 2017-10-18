/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, Product } from '../models';

export const ProductActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('Product'), {
  GET_ORGANIZATION: type('[Product] getOrganization'),
  GET_ORGANIZATION_SUCCESS: type('[Product] getOrganization success'),
  GET_ORGANIZATION_FAIL: type('[Product] getOrganization fail'),

  FIND_BY_ID_SHOPPINGCARD: type('[Product] findByIdShoppingCard'),
  FIND_BY_ID_SHOPPINGCARD_SUCCESS: type('[Product] findByIdShoppingCard success'),
  FIND_BY_ID_SHOPPINGCARD_FAIL: type('[Product] findByIdShoppingCard fail'),

  DESTROY_BY_ID_SHOPPINGCARD: type('[Product] destroyByIdShoppingCard'),
  DESTROY_BY_ID_SHOPPINGCARD_SUCCESS: type('[Product] destroyByIdShoppingCard success'),
  DESTROY_BY_ID_SHOPPINGCARD_FAIL: type('[Product] destroyByIdShoppingCard fail'),

  UPDATE_BY_ID_SHOPPINGCARD: type('[Product] updateByIdShoppingCard'),
  UPDATE_BY_ID_SHOPPINGCARD_SUCCESS: type('[Product] updateByIdShoppingCard success'),
  UPDATE_BY_ID_SHOPPINGCARD_FAIL: type('[Product] updateByIdShoppingCard fail'),

  LINK_SHOPPINGCARD: type('[Product] linkShoppingCard'),
  LINK_SHOPPINGCARD_SUCCESS: type('[Product] linkShoppingCard success'),
  LINK_SHOPPINGCARD_FAIL: type('[Product] linkShoppingCard fail'),

  UNLINK_SHOPPINGCARD: type('[Product] unlinkShoppingCard'),
  UNLINK_SHOPPINGCARD_SUCCESS: type('[Product] unlinkShoppingCard success'),
  UNLINK_SHOPPINGCARD_FAIL: type('[Product] unlinkShoppingCard fail'),

  FIND_BY_ID_WHISHLIST: type('[Product] findByIdWhishList'),
  FIND_BY_ID_WHISHLIST_SUCCESS: type('[Product] findByIdWhishList success'),
  FIND_BY_ID_WHISHLIST_FAIL: type('[Product] findByIdWhishList fail'),

  DESTROY_BY_ID_WHISHLIST: type('[Product] destroyByIdWhishList'),
  DESTROY_BY_ID_WHISHLIST_SUCCESS: type('[Product] destroyByIdWhishList success'),
  DESTROY_BY_ID_WHISHLIST_FAIL: type('[Product] destroyByIdWhishList fail'),

  UPDATE_BY_ID_WHISHLIST: type('[Product] updateByIdWhishList'),
  UPDATE_BY_ID_WHISHLIST_SUCCESS: type('[Product] updateByIdWhishList success'),
  UPDATE_BY_ID_WHISHLIST_FAIL: type('[Product] updateByIdWhishList fail'),

  LINK_WHISHLIST: type('[Product] linkWhishList'),
  LINK_WHISHLIST_SUCCESS: type('[Product] linkWhishList success'),
  LINK_WHISHLIST_FAIL: type('[Product] linkWhishList fail'),

  UNLINK_WHISHLIST: type('[Product] unlinkWhishList'),
  UNLINK_WHISHLIST_SUCCESS: type('[Product] unlinkWhishList success'),
  UNLINK_WHISHLIST_FAIL: type('[Product] unlinkWhishList fail'),

  GET_S3PHOTO: type('[Product] getS3Photo'),
  GET_S3PHOTO_SUCCESS: type('[Product] getS3Photo success'),
  GET_S3PHOTO_FAIL: type('[Product] getS3Photo fail'),

  CREATE_S3PHOTO: type('[Product] createS3Photo'),
  CREATE_S3PHOTO_SUCCESS: type('[Product] createS3Photo success'),
  CREATE_S3PHOTO_FAIL: type('[Product] createS3Photo fail'),

  UPDATE_S3PHOTO: type('[Product] updateS3Photo'),
  UPDATE_S3PHOTO_SUCCESS: type('[Product] updateS3Photo success'),
  UPDATE_S3PHOTO_FAIL: type('[Product] updateS3Photo fail'),

  DESTROY_S3PHOTO: type('[Product] destroyS3Photo'),
  DESTROY_S3PHOTO_SUCCESS: type('[Product] destroyS3Photo success'),
  DESTROY_S3PHOTO_FAIL: type('[Product] destroyS3Photo fail'),

  GET_SHOPPINGCARD: type('[Product] getShoppingCard'),
  GET_SHOPPINGCARD_SUCCESS: type('[Product] getShoppingCard success'),
  GET_SHOPPINGCARD_FAIL: type('[Product] getShoppingCard fail'),

  CREATE_SHOPPINGCARD: type('[Product] createShoppingCard'),
  CREATE_SHOPPINGCARD_SUCCESS: type('[Product] createShoppingCard success'),
  CREATE_SHOPPINGCARD_FAIL: type('[Product] createShoppingCard fail'),

  DELETE_SHOPPINGCARD: type('[Product] deleteShoppingCard'),
  DELETE_SHOPPINGCARD_SUCCESS: type('[Product] deleteShoppingCard success'),
  DELETE_SHOPPINGCARD_FAIL: type('[Product] deleteShoppingCard fail'),

  GET_WHISHLIST: type('[Product] getWhishList'),
  GET_WHISHLIST_SUCCESS: type('[Product] getWhishList success'),
  GET_WHISHLIST_FAIL: type('[Product] getWhishList fail'),

  CREATE_WHISHLIST: type('[Product] createWhishList'),
  CREATE_WHISHLIST_SUCCESS: type('[Product] createWhishList success'),
  CREATE_WHISHLIST_FAIL: type('[Product] createWhishList fail'),

  DELETE_WHISHLIST: type('[Product] deleteWhishList'),
  DELETE_WHISHLIST_SUCCESS: type('[Product] deleteWhishList success'),
  DELETE_WHISHLIST_FAIL: type('[Product] deleteWhishList fail'),

  S3_P_U_T_SIGNED_URL: type('[Product] s3PUTSignedUrl'),
  S3_P_U_T_SIGNED_URL_SUCCESS: type('[Product] s3PUTSignedUrl success'),
  S3_P_U_T_SIGNED_URL_FAIL: type('[Product] s3PUTSignedUrl fail'),

  S3_G_E_T_SIGNED_URL: type('[Product] s3GETSignedUrl'),
  S3_G_E_T_SIGNED_URL_SUCCESS: type('[Product] s3GETSignedUrl success'),
  S3_G_E_T_SIGNED_URL_FAIL: type('[Product] s3GETSignedUrl fail'),

  CREATE_MANY_S3PHOTO: type('[Product] createManyS3Photo'),
  CREATE_MANY_S3PHOTO_SUCCESS: type('[Product] createManyS3Photo success'),
  CREATE_MANY_S3PHOTO_FAIL: type('[Product] createManyS3Photo fail'),

  CREATE_MANY_SHOPPINGCARD: type('[Product] createManyShoppingCard'),
  CREATE_MANY_SHOPPINGCARD_SUCCESS: type('[Product] createManyShoppingCard success'),
  CREATE_MANY_SHOPPINGCARD_FAIL: type('[Product] createManyShoppingCard fail'),

  CREATE_MANY_WHISHLIST: type('[Product] createManyWhishList'),
  CREATE_MANY_WHISHLIST_SUCCESS: type('[Product] createManyWhishList success'),
  CREATE_MANY_WHISHLIST_FAIL: type('[Product] createManyWhishList fail'),

});
export const ProductActions =
Object.assign(BaseLoopbackActionsFactory<Product>(ProductActionTypes), {

  /**
   * getOrganization Action.
   * Fetches belongsTo relation organization.
   *
   * @param {any} id Product id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getOrganization: class implements Action {
    public readonly type = ProductActionTypes.GET_ORGANIZATION;
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
    public readonly type = ProductActionTypes.GET_ORGANIZATION_SUCCESS;
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
    public readonly type = ProductActionTypes.GET_ORGANIZATION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdShoppingCard Action.
   * Find a related item by id for shoppingCard.
   *
   * @param {any} id Product id
   * @param {any} fk Foreign key for shoppingCard
   * @param {any} meta (optional).
   * 
   */
  findByIdShoppingCard: class implements Action {
    public readonly type = ProductActionTypes.FIND_BY_ID_SHOPPINGCARD;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdShoppingCardSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdShoppingCardSuccess: class implements Action {
    public readonly type = ProductActionTypes.FIND_BY_ID_SHOPPINGCARD_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdShoppingCardFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdShoppingCardFail: class implements Action {
    public readonly type = ProductActionTypes.FIND_BY_ID_SHOPPINGCARD_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdShoppingCard Action.
   * Delete a related item by id for shoppingCard.
   *
   * @param {any} id Product id
   * @param {any} fk Foreign key for shoppingCard
   * @param {any} meta (optional).
   * 
   */
  destroyByIdShoppingCard: class implements Action {
    public readonly type = ProductActionTypes.DESTROY_BY_ID_SHOPPINGCARD;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdShoppingCardSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdShoppingCardSuccess: class implements Action {
    public readonly type = ProductActionTypes.DESTROY_BY_ID_SHOPPINGCARD_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdShoppingCardFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdShoppingCardFail: class implements Action {
    public readonly type = ProductActionTypes.DESTROY_BY_ID_SHOPPINGCARD_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdShoppingCard Action.
   * Update a related item by id for shoppingCard.
   *
   * @param {any} id Product id
   * @param {any} fk Foreign key for shoppingCard
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdShoppingCard: class implements Action {
    public readonly type = ProductActionTypes.UPDATE_BY_ID_SHOPPINGCARD;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdShoppingCardSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdShoppingCardSuccess: class implements Action {
    public readonly type = ProductActionTypes.UPDATE_BY_ID_SHOPPINGCARD_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdShoppingCardFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdShoppingCardFail: class implements Action {
    public readonly type = ProductActionTypes.UPDATE_BY_ID_SHOPPINGCARD_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * linkShoppingCard Action.
   * Add a related item by id for shoppingCard.
   *
   * @param {any} id Product id
   * @param {any} fk Foreign key for shoppingCard
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  linkShoppingCard: class implements Action {
    public readonly type = ProductActionTypes.LINK_SHOPPINGCARD;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * linkShoppingCardSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  linkShoppingCardSuccess: class implements Action {
    public readonly type = ProductActionTypes.LINK_SHOPPINGCARD_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * linkShoppingCardFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  linkShoppingCardFail: class implements Action {
    public readonly type = ProductActionTypes.LINK_SHOPPINGCARD_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * unlinkShoppingCard Action.
   * Remove the shoppingCard relation to an item by id.
   *
   * @param {any} id Product id
   * @param {any} fk Foreign key for shoppingCard
   * @param {any} meta (optional).
   * 
   */
  unlinkShoppingCard: class implements Action {
    public readonly type = ProductActionTypes.UNLINK_SHOPPINGCARD;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkShoppingCardSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  unlinkShoppingCardSuccess: class implements Action {
    public readonly type = ProductActionTypes.UNLINK_SHOPPINGCARD_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkShoppingCardFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  unlinkShoppingCardFail: class implements Action {
    public readonly type = ProductActionTypes.UNLINK_SHOPPINGCARD_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdWhishList Action.
   * Find a related item by id for whishList.
   *
   * @param {any} id Product id
   * @param {any} fk Foreign key for whishList
   * @param {any} meta (optional).
   * 
   */
  findByIdWhishList: class implements Action {
    public readonly type = ProductActionTypes.FIND_BY_ID_WHISHLIST;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdWhishListSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdWhishListSuccess: class implements Action {
    public readonly type = ProductActionTypes.FIND_BY_ID_WHISHLIST_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdWhishListFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdWhishListFail: class implements Action {
    public readonly type = ProductActionTypes.FIND_BY_ID_WHISHLIST_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdWhishList Action.
   * Delete a related item by id for whishList.
   *
   * @param {any} id Product id
   * @param {any} fk Foreign key for whishList
   * @param {any} meta (optional).
   * 
   */
  destroyByIdWhishList: class implements Action {
    public readonly type = ProductActionTypes.DESTROY_BY_ID_WHISHLIST;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdWhishListSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdWhishListSuccess: class implements Action {
    public readonly type = ProductActionTypes.DESTROY_BY_ID_WHISHLIST_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdWhishListFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdWhishListFail: class implements Action {
    public readonly type = ProductActionTypes.DESTROY_BY_ID_WHISHLIST_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdWhishList Action.
   * Update a related item by id for whishList.
   *
   * @param {any} id Product id
   * @param {any} fk Foreign key for whishList
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdWhishList: class implements Action {
    public readonly type = ProductActionTypes.UPDATE_BY_ID_WHISHLIST;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdWhishListSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdWhishListSuccess: class implements Action {
    public readonly type = ProductActionTypes.UPDATE_BY_ID_WHISHLIST_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdWhishListFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdWhishListFail: class implements Action {
    public readonly type = ProductActionTypes.UPDATE_BY_ID_WHISHLIST_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * linkWhishList Action.
   * Add a related item by id for whishList.
   *
   * @param {any} id Product id
   * @param {any} fk Foreign key for whishList
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  linkWhishList: class implements Action {
    public readonly type = ProductActionTypes.LINK_WHISHLIST;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * linkWhishListSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  linkWhishListSuccess: class implements Action {
    public readonly type = ProductActionTypes.LINK_WHISHLIST_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * linkWhishListFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  linkWhishListFail: class implements Action {
    public readonly type = ProductActionTypes.LINK_WHISHLIST_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * unlinkWhishList Action.
   * Remove the whishList relation to an item by id.
   *
   * @param {any} id Product id
   * @param {any} fk Foreign key for whishList
   * @param {any} meta (optional).
   * 
   */
  unlinkWhishList: class implements Action {
    public readonly type = ProductActionTypes.UNLINK_WHISHLIST;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkWhishListSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  unlinkWhishListSuccess: class implements Action {
    public readonly type = ProductActionTypes.UNLINK_WHISHLIST_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkWhishListFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  unlinkWhishListFail: class implements Action {
    public readonly type = ProductActionTypes.UNLINK_WHISHLIST_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getS3Photo Action.
   * Fetches hasOne relation s3Photo.
   *
   * @param {any} id Product id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getS3Photo: class implements Action {
    public readonly type = ProductActionTypes.GET_S3PHOTO;
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
    public readonly type = ProductActionTypes.GET_S3PHOTO_SUCCESS;
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
    public readonly type = ProductActionTypes.GET_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createS3Photo Action.
   * Creates a new instance in s3Photo of this model.
   *
   * @param {any} id Product id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createS3Photo: class implements Action {
    public readonly type = ProductActionTypes.CREATE_S3PHOTO;
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
    public readonly type = ProductActionTypes.CREATE_S3PHOTO_SUCCESS;
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
    public readonly type = ProductActionTypes.CREATE_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateS3Photo Action.
   * Update s3Photo of this model.
   *
   * @param {any} id Product id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateS3Photo: class implements Action {
    public readonly type = ProductActionTypes.UPDATE_S3PHOTO;
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
    public readonly type = ProductActionTypes.UPDATE_S3PHOTO_SUCCESS;
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
    public readonly type = ProductActionTypes.UPDATE_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyS3Photo Action.
   * Deletes s3Photo of this model.
   *
   * @param {any} id Product id
   * @param {any} meta (optional).
   * 
   */
  destroyS3Photo: class implements Action {
    public readonly type = ProductActionTypes.DESTROY_S3PHOTO;
      
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
    public readonly type = ProductActionTypes.DESTROY_S3PHOTO_SUCCESS;
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
    public readonly type = ProductActionTypes.DESTROY_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getShoppingCard Action.
   * Queries shoppingCard of Product.
   *
   * @param {any} id Product id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getShoppingCard: class implements Action {
    public readonly type = ProductActionTypes.GET_SHOPPINGCARD;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getShoppingCardSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getShoppingCardSuccess: class implements Action {
    public readonly type = ProductActionTypes.GET_SHOPPINGCARD_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getShoppingCardFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getShoppingCardFail: class implements Action {
    public readonly type = ProductActionTypes.GET_SHOPPINGCARD_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createShoppingCard Action.
   * Creates a new instance in shoppingCard of this model.
   *
   * @param {any} id Product id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createShoppingCard: class implements Action {
    public readonly type = ProductActionTypes.CREATE_SHOPPINGCARD;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createShoppingCardSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createShoppingCardSuccess: class implements Action {
    public readonly type = ProductActionTypes.CREATE_SHOPPINGCARD_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createShoppingCardFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createShoppingCardFail: class implements Action {
    public readonly type = ProductActionTypes.CREATE_SHOPPINGCARD_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteShoppingCard Action.
   * Deletes all shoppingCard of this model.
   *
   * @param {any} id Product id
   * @param {any} meta (optional).
   * 
   */
  deleteShoppingCard: class implements Action {
    public readonly type = ProductActionTypes.DELETE_SHOPPINGCARD;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteShoppingCardSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteShoppingCardSuccess: class implements Action {
    public readonly type = ProductActionTypes.DELETE_SHOPPINGCARD_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteShoppingCardFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteShoppingCardFail: class implements Action {
    public readonly type = ProductActionTypes.DELETE_SHOPPINGCARD_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getWhishList Action.
   * Queries whishList of Product.
   *
   * @param {any} id Product id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getWhishList: class implements Action {
    public readonly type = ProductActionTypes.GET_WHISHLIST;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getWhishListSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getWhishListSuccess: class implements Action {
    public readonly type = ProductActionTypes.GET_WHISHLIST_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getWhishListFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getWhishListFail: class implements Action {
    public readonly type = ProductActionTypes.GET_WHISHLIST_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createWhishList Action.
   * Creates a new instance in whishList of this model.
   *
   * @param {any} id Product id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createWhishList: class implements Action {
    public readonly type = ProductActionTypes.CREATE_WHISHLIST;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createWhishListSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createWhishListSuccess: class implements Action {
    public readonly type = ProductActionTypes.CREATE_WHISHLIST_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createWhishListFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createWhishListFail: class implements Action {
    public readonly type = ProductActionTypes.CREATE_WHISHLIST_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteWhishList Action.
   * Deletes all whishList of this model.
   *
   * @param {any} id Product id
   * @param {any} meta (optional).
   * 
   */
  deleteWhishList: class implements Action {
    public readonly type = ProductActionTypes.DELETE_WHISHLIST;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteWhishListSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteWhishListSuccess: class implements Action {
    public readonly type = ProductActionTypes.DELETE_WHISHLIST_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteWhishListFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteWhishListFail: class implements Action {
    public readonly type = ProductActionTypes.DELETE_WHISHLIST_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * s3PUTSignedUrl Action.
   * Get a S3 Signed URL for direct file uploads.
   *
   * @param {any} id Product id
   * @param {string} key 
   * @param {object} options 
   * @param {any} meta (optional).
   * 
   */
  s3PUTSignedUrl: class implements Action {
    public readonly type = ProductActionTypes.S3_P_U_T_SIGNED_URL;
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
    public readonly type = ProductActionTypes.S3_P_U_T_SIGNED_URL_SUCCESS;
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
    public readonly type = ProductActionTypes.S3_P_U_T_SIGNED_URL_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * s3GETSignedUrl Action.
   * Get a S3 Signed URL for direct file access.
   *
   * @param {any} id Product id
   * @param {string} key 
   * @param {any} meta (optional).
   * 
   */
  s3GETSignedUrl: class implements Action {
    public readonly type = ProductActionTypes.S3_G_E_T_SIGNED_URL;
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
    public readonly type = ProductActionTypes.S3_G_E_T_SIGNED_URL_SUCCESS;
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
    public readonly type = ProductActionTypes.S3_G_E_T_SIGNED_URL_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyS3Photo Action.
   * Creates a new instance in s3Photo of this model.
   *
   * @param {any} id Product id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyS3Photo: class implements Action {
    public readonly type = ProductActionTypes.CREATE_MANY_S3PHOTO;
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
    public readonly type = ProductActionTypes.CREATE_MANY_S3PHOTO_SUCCESS;
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
    public readonly type = ProductActionTypes.CREATE_MANY_S3PHOTO_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyShoppingCard Action.
   * Creates a new instance in shoppingCard of this model.
   *
   * @param {any} id Product id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyShoppingCard: class implements Action {
    public readonly type = ProductActionTypes.CREATE_MANY_SHOPPINGCARD;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyShoppingCardSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyShoppingCardSuccess: class implements Action {
    public readonly type = ProductActionTypes.CREATE_MANY_SHOPPINGCARD_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyShoppingCardFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyShoppingCardFail: class implements Action {
    public readonly type = ProductActionTypes.CREATE_MANY_SHOPPINGCARD_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyWhishList Action.
   * Creates a new instance in whishList of this model.
   *
   * @param {any} id Product id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyWhishList: class implements Action {
    public readonly type = ProductActionTypes.CREATE_MANY_WHISHLIST;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyWhishListSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyWhishListSuccess: class implements Action {
    public readonly type = ProductActionTypes.CREATE_MANY_WHISHLIST_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyWhishListFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyWhishListFail: class implements Action {
    public readonly type = ProductActionTypes.CREATE_MANY_WHISHLIST_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});