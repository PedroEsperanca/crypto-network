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
import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';

import { IAppState } from '../state/app.state';
import { AlertActions } from '../actions/alert';
import { ApplicationActions } from '../actions/application';
import { LoopbackAction, LoopbackAuthActionTypes, UserActionTypes, UserActions } from 'shared/api';
import { SDKStorage } from 'shared/api/storage/storage.swaps';

@Injectable()
export class ApplicationEffects {

  @Effect()
  public loginSuccess$ = this.actions$
    .ofType(UserActionTypes.LOGIN_SUCCESS)
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
  public signupSuccess$ = this.actions$
    .ofType(UserActionTypes.SIGNUP_SUCCESS)
    .map((action) =>
      new UserActions.login({
        email: action.payload.credentials.email,
        password: action.payload.credentials.password
      }, [
        'user',
        'user.oAuthClientApplications',
        'user.identities',
        'user.organizations'
      ])
    );

  @Effect()
  public logoutSuccess$ = this.actions$
    .ofType(UserActionTypes.LOGOUT_SUCCESS)
    .map(() => go(['/']));

  @Effect()
  public logoutFail$ = this.actions$
    .ofType(UserActionTypes.LOGOUT_FAIL)
    .map(() => go(['/']));

  @Effect({dispatch: false})
  public updateUserPropertiesSuccess = this.actions$
    .ofType(LoopbackAuthActionTypes.UPDATE_USER_PROPERTIES_SUCCESS)
    .do((action: LoopbackAction) => {
      if (action.meta && action.meta.alert && action.meta.alert.success) {
        this.store.dispatch(new AlertActions.setAlert(action.meta.alert.success));
      }
    });

  constructor(
    private store: Store<IAppState>,
    private actions$: Actions,
    @Inject(SDKStorage) protected storage: SDKStorage
  ) {}
}
