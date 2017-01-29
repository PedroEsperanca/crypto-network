import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { SDKToken } from '../models/BaseModels';
import { LoopbackAuthActions } from '../actions/auth';
import { UserActions } from '../actions/user';

const initialState: SDKToken = {
  id: null,
  user: null,
  userId: null,
  issuedAt: null,
  created: null,
  ttl: null,
  rememberMe: null
};

export function reducer(state = initialState, action: Action): SDKToken {
  switch (action.type) {
    case UserActions.LOGIN_SUCCESS:
    case LoopbackAuthActions.SET_TOKEN:
    case LoopbackAuthActions.LOAD_TOKEN_SUCCESS: {
      const token: SDKToken = action.payload;

      return Object.assign({}, token);
    }

    case LoopbackAuthActions.SET_USER: {
      const user: any = action.payload;
      let updateState = Object.assign({}, state);

      updateState.user = user;
      updateState.userId = user.id;

      return updateState;
    }

    case UserActions.LOGOUT_SUCCESS:
    case UserActions.LOGOUT_FAIL: {
      return Object.assign({}, initialState);
    }

    default: {
      return state;
    }
  }
}

export const getLoopbackAuthState = (state: any) => state.loopbackAuth;

export const getLoopbackAuthToken = (state: any) => state.loopbackAuth;

export const getLoopbackAuthUser = (state: any) => state.loopbackAuth.user;

export const getLoopbackAuthUserId = (state: any) => state.loopbackAuth.userId;
