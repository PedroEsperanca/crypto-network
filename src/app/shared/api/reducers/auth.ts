import { Observable } from 'rxjs/Observable';
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

    case LoopbackAuthActions.UPDATE_USER_PROPERTIES_SUCCESS: {
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

export function getLoopbackAuthState() {
  return (state$: Observable<any>) => state$
    .select((s) => s.loopbackAuth);
}

export function getLoopbackAuthToken() {
  return (state$: Observable<any>) => state$
    .select((s) => s.loopbackAuth);
}

export function getLoopbackAuthUser() {
  return (state$: Observable<any>) => state$
    .select((s) => s.loopbackAuth.user);
}

export function getLoopbackAuthUserId() {
  return (state$: Observable<any>) => state$
    .select((s) => s.loopbackAuth.userId);
}
