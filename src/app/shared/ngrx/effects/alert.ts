import { Injectable, Inject } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { NotificationsService } from 'angular2-notifications';

import { AlertActionTypes, AlertActions } from '../actions/alert';
import { LoopbackErrorActionTypes, LoopbackAction } from 'shared/api';

@Injectable()
export class AlertEffects {

  @Effect()
  public error$ = this.actions$
    .ofType(LoopbackErrorActionTypes.ERROR)
    .map((action: LoopbackAction) => new AlertActions.SetAlert({
      message: action.payload,
      type: 'error'
    }));

  @Effect({dispatch: false})
  public setAlert$ = this.actions$
    .ofType(AlertActionTypes.SET_ALERT)
    .do((action: AlertActions.SetAlert) => {
      this.notificationsService[action.payload.type](
        action.payload.title || action.payload.type.toUpperCase(),
        action.payload.message.message || action.payload.message,
        {
          timeOut: action.payload.type === 'error' ? 0 : 5000,
          showProgressBar: true
        }
      );
    });

  constructor(
    private actions$: Actions,
    private notificationsService: NotificationsService
  ) {}
}
