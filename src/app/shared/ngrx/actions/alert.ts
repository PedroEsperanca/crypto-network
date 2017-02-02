import { Action } from '@ngrx/store';
import { type } from '../util';

export const AlertActionTypes = {
  SET_ALERT: type('[Alert] Set Alert'),
  CLEAR_ALERT: type('[Alert] Clear Alert'),
};

export const AlertActions = {
  setAlert: class implements Action {
    public type = AlertActionTypes.SET_ALERT;

    constructor(public payload: {message: string, type: string}) { }
  },

  clearAlert: class implements Action {
    public type = AlertActionTypes.CLEAR_ALERT;
  },
};
