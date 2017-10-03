/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, Subscription } from '../models';

export const SubscriptionActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('Subscription'), {
  GET_ORGANIZATION: type('[Subscription] getOrganization'),
  GET_ORGANIZATION_SUCCESS: type('[Subscription] getOrganization success'),
  GET_ORGANIZATION_FAIL: type('[Subscription] getOrganization fail'),

});
export const SubscriptionActions =
Object.assign(BaseLoopbackActionsFactory<Subscription>(SubscriptionActionTypes), {

  /**
   * getOrganization Action.
   * Fetches belongsTo relation organization.
   *
   * @param {any} id Subscription id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getOrganization: class implements Action {
    public readonly type = SubscriptionActionTypes.GET_ORGANIZATION;
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
    public readonly type = SubscriptionActionTypes.GET_ORGANIZATION_SUCCESS;
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
    public readonly type = SubscriptionActionTypes.GET_ORGANIZATION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});