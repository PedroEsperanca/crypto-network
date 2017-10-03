import { Action } from '@ngrx/store';
import { type } from '../util';

export const AlertActionTypes = {
  SET_ALERT: type('[Alert] Set Alert'),
  CLEAR_ALERT: type('[Alert] Clear Alert'),
};

export module AlertActions {
  export class SetAlert implements Action {
    public readonly type = AlertActionTypes.SET_ALERT;

    constructor(public payload: {title?: string, message?: string | any, type?: string}) { }
  }

  export class ClearAlert implements Action {
    public readonly type = AlertActionTypes.CLEAR_ALERT;
  }
};

export type IAlertActions =
  | AlertActions.SetAlert
  | AlertActions.ClearAlert;
