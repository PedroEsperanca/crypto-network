/* tslint:disable */
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { SDKToken } from '../models/BaseModels';
import { LoopbackAuthActionTypes } from '../actions/auth';
import { UserActionTypes } from '../actions/User';

const initialState: SDKToken = {
  id: null,
  user: null,
  userId: null,
  issuedAt: null,
  created: null,
  ttl: null,
  rememberMe: null,
  scopes: null
};

/**
 * @module LoopbackAuthReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible authentication reducer.
 */
export function LoopbackAuthReducer(state = initialState, action: Action): SDKToken {
  switch (action.type) {
    case UserActionTypes.LOGIN_SUCCESS:
    case LoopbackAuthActionTypes.SET_TOKEN:
    case LoopbackAuthActionTypes.LOAD_TOKEN_SUCCESS: {
      const token: SDKToken = action.payload;

      return Object.assign({}, token);
    }

    case LoopbackAuthActionTypes.SET_USER: {
      const user: any = action.payload;
      let updateState = Object.assign({}, state);

      updateState.user = user;
      updateState.userId = user.id;

      return updateState;
    }

    case UserActionTypes.LOGOUT_SUCCESS:
    case UserActionTypes.LOGOUT_FAIL: {
      return Object.assign({}, initialState);
    }

    case LoopbackAuthActionTypes.UPDATE_USER_PROPERTIES_SUCCESS:
    case LoopbackAuthActionTypes.UPDATE_USER_STATE_SUCCESS: {
      const userProperties: any = action.payload;
      let updateState = Object.assign({}, state);

      updateState.user = Object.assign(updateState.user, userProperties);

      return updateState;
    }

    default: {
      return state;
    }
  }
}

export const getLoopbackAuthState = (state: any) => state.loopbackAuth;
export const getLoopbackAuthToken = (state: any) => state.loopbackAuth;
export const getLoopbackAuthAccount = (state: any) => state.loopbackAuth.user;
export const getLoopbackAuthAccountId = (state: any) => state.loopbackAuth.userId;
