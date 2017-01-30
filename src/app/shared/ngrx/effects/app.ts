import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/observable/of';
import { Injectable, Inject } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { go } from '@ngrx/router-store';

import { AppActions } from '../actions/app';
import { UserActions } from 'shared/api';
import { SDKStorage } from 'shared/api/storage/storage.swaps';

@Injectable()
export class AppEffects {

  @Effect()
  public loginSuccess$ = this.actions$
    .ofType(UserActions.LOGIN_SUCCESS)
    .map((action) => {
      let emailVerificationToken;
      try {
        emailVerificationToken = this.storage.get(`$LoopBackSDK$emailVerificationToken`);
      } catch (err) {
        console.error('Cannot access local/session storage:', err);
      }

      if (emailVerificationToken) {
        return go(['/user/verify-email/' + emailVerificationToken]);
      } else {
        return go(['/' + action.payload.userId]);
      }
    });

  @Effect()
  public logoutSuccess$ = this.actions$
    .ofType(UserActions.LOGOUT_SUCCESS)
    .map(() => go(['/']));

  @Effect()
  public logoutFail$ = this.actions$
    .ofType(UserActions.LOGOUT_FAIL)
    .map(() => go(['/']));

  constructor(
    private actions$: Actions,
    private appActions: AppActions,
    @Inject(SDKStorage) protected storage: SDKStorage
  ) {}
}
