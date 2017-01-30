import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { SDKToken } from '../models/BaseModels';

@Injectable()
export class LoopbackAuthActions {
  public static LOAD_TOKEN = '[Auth] Load token from storage into store';
  public static LOAD_TOKEN_SUCCESS = '[Auth] Load token from storage into store success';
  public static LOAD_TOKEN_FAIL = '[Auth] Load token from storage into store fail';
  public static SET_TOKEN = '[Auth] Set token in store';
  public static SET_TOKEN_SUCCESS = '[Auth] Set token in store success';
  public static CLEAR_TOKEN = '[Auth] Clear token in store';
  public static SET_USER = '[Auth] Set user in store';
  public static SET_USER_SUCCESS = '[Auth] Set user in store success';
  public static UPDATE_USER_PROPERTIES = '[Auth] Update user properties in store';
  public static UPDATE_USER_PROPERTIES_SUCCESS = '[Auth] Update user properties in store success';

  public loadToken(): Action {
    return {
      type: LoopbackAuthActions.LOAD_TOKEN
    };
  }

  public loadTokenSuccess(token: SDKToken): Action {
    return {
      type: LoopbackAuthActions.LOAD_TOKEN_SUCCESS,
      payload: token
    };
  }

  public loadTokenFail(error: any): Action {
    return {
      type: LoopbackAuthActions.LOAD_TOKEN_FAIL,
      payload: error
    };
  }

  public setToken(token: SDKToken): Action {
    return {
      type: LoopbackAuthActions.SET_TOKEN,
      payload: token
    };
  }

  public setTokenSuccess(token: SDKToken): Action {
    return {
      type: LoopbackAuthActions.SET_TOKEN_SUCCESS,
      payload: token
    };
  }

  public clearToken(): Action {
    return {
      type: LoopbackAuthActions.CLEAR_TOKEN
    };
  }

  public setUser(user: any): Action {
    return {
      type: LoopbackAuthActions.SET_USER,
      payload: user
    };
  }

  public setUserSuccess(user: any): Action {
    return {
      type: LoopbackAuthActions.SET_USER_SUCCESS,
      payload: user
    };
  }

  public updateUserProperties(userProperties: any): Action {
    return {
      type: LoopbackAuthActions.UPDATE_USER_PROPERTIES,
      payload: userProperties
    };
  }

  public updateUserPropertiesSuccess(userProperties: any): Action {
    return {
      type: LoopbackAuthActions.UPDATE_USER_PROPERTIES_SUCCESS,
      payload: userProperties
    };
  }
}
