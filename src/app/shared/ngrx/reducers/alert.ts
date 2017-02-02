import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { AlertActionTypes } from '../actions/alert';

export interface IAlertState {
  success: string;
  info: string;
  warning: string;
  error: string;
};

const initialState: IAlertState = {
  success: null,
  info: null,
  warning: null,
  error: null
};

export function reducer(state = initialState, action: Action): IAlertState {
  switch (action.type) {
    case AlertActionTypes.SET_ALERT: {
      let newState = Object.assign({}, initialState);

      if (action.payload.type === 'error' && action.payload.message.constructor === Object) {
        newState[action.payload.type] = action.payload.message.message;
      } else {
        newState[action.payload.type] = action.payload.message;
      }

      return newState;
    }

    case AlertActionTypes.CLEAR_ALERT: {
      return Object.assign({}, initialState);
    }

    default: {
      return state;
    }
  }
}
