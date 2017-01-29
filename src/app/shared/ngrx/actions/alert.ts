import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class AlertActions {
  public static SET_ALERT = '[Alert] Set Alert';
  public static CLEAR_ALERT = '[Alert] Clear Alert';

  public setAlert(message: string = '', type: string = 'info'): Action {
    return {
      type: AlertActions.SET_ALERT,
      payload: {
        message,
        type
      }
    };
  }

  public clearAlert(): Action {
    return {
      type: AlertActions.CLEAR_ALERT
    };
  }
}
