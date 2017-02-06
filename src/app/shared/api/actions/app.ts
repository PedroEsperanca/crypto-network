/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { SDKToken, App } from '../models';

export const AppActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('App'), {
  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Users relation action types
   */
  GET_USER: type('[App] GetUser user'),
  GET_USER_SUCCESS: type('[App] GetUser user success'),
  GET_USER_FAIL: type('[App] GetUser user fail'),

  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Organization relation action types
   */
  GET_ORGANIZATION: type('[App] GetOrganization user'),
  GET_ORGANIZATION_SUCCESS: type('[App] GetOrganization user success'),
  GET_ORGANIZATION_FAIL: type('[App] GetOrganization user fail'),
});

export const AppActions =
Object.assign(BaseLoopbackActionsFactory<App>('App', AppActionTypes), {
  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Organizations relation actions
   */
  getOrganization: class implements Action {
    public readonly type = AppActionTypes.GET_ORGANIZATION;
    public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, public meta?: any) {
      this.payload = {id, refresh};
    }
  },

  getOrganizationSuccess: class implements Action {
    public readonly type = AppActionTypes.GET_ORGANIZATION_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  getOrganizationFail: class implements Action {
    public readonly type = AppActionTypes.GET_ORGANIZATION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Users relation actions
   */
  getUser: class implements Action {
    public readonly type = AppActionTypes.GET_USER;
    public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any, public meta?: any) {
      this.payload = {id, refresh};
    }
  },

  getUserSuccess: class implements Action {
    public readonly type = AppActionTypes.GET_USER_SUCCESS;
    public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },

  getUserFail: class implements Action {
    public readonly type = AppActionTypes.GET_USER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});
