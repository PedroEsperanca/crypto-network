import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { SDKToken } from '../models/BaseModels';

@Injectable()
export class UserActions {
  public static LOGIN = '[User] Login user';
  public static LOGIN_SUCCESS = '[User] Login user success';
  public static LOGIN_FAIL = '[User] Login user fail';

  public static LOGOUT = '[User] Logout user';
  public static LOGOUT_SUCCESS = '[User] Logout user success';
  public static LOGOUT_FAIL = '[User] Logout user fail';

  public login(credentials: any, include: any = 'user', rememberMe: boolean = true): Action {
    return {
      type: UserActions.LOGIN,
      payload: {
        credentials,
        include,
        rememberMe
      }
    };
  }
  public loginSuccess(token: SDKToken): Action {
    return {
      type: UserActions.LOGIN_SUCCESS,
      payload: token
    };
  }
  public loginFail(error: any): Action {
    return {
      type: UserActions.LOGIN_FAIL,
      payload: error
    };
  }

  public logout(): Action {
    return {
      type: UserActions.LOGOUT
    };
  }
  public logoutSuccess(): Action {
    return {
      type: UserActions.LOGOUT_SUCCESS
    };
  }
  public logoutFail(): Action {
    return {
      type: UserActions.LOGOUT_FAIL
    };
  }
}
