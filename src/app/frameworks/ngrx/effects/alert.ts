import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable, Inject } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { AlertActions } from '../actions/alert';
import { ErrorActions } from 'frameworks/api';

@Injectable()
export class AlertEffects {

  @Effect()
  public error$ = this.actions$
    .ofType(ErrorActions.ERROR)
    .map((action) => this.alertActions.setAlert(action.payload, 'error'));

  constructor(
    private actions$: Actions,
    private alertActions: AlertActions
  ) {}
}
