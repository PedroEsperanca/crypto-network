import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { SDKToken } from '../models/BaseModels';

@Injectable()
export class ErrorActions {
  public static ERROR = '[ERROR] Error';

  public error(error: any): Action {
    return {
      type: ErrorActions.ERROR,
      payload: error
    };
  }
}
