import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable, Inject } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { AlertActions } from '../actions/alert';
import { LoopbackErrorActionTypes, LoopbackErrorActions } from 'shared/api';

@Injectable()
export class AlertEffects {

  @Effect()
  public error$ = this.actions$
    .ofType(LoopbackErrorActionTypes.ERROR)
    .map((action) => new AlertActions.setAlert({
      message: action.payload,
      type: 'error'
    }));

  constructor(
    private actions$: Actions
  ) {}
}
