import { Injectable, Inject } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { IAppState } from '../state/app.state';
import { AlertActions } from '../actions/alert';
import { ApplicationActions } from '../actions/application';
import {
  LoopbackAction,
  LoopbackAuthActionTypes,
  LoopbackAuthActions,
  UserActionTypes,
  UserActions,
  UserApi
} from 'shared/api';
import { SDKStorage } from 'shared/api/storage/storage.swaps';

@Injectable()
export class ApplicationEffects {

  @Effect({dispatch: false})
  public loginSuccess$ = this.actions$
    .ofType(UserActionTypes.LOGIN_SUCCESS)
    .do((action: LoopbackAction) => {
      let emailVerificationToken;
      try {
        emailVerificationToken = this.storage.get(`$LoopBackSDK$emailVerificationToken`);
      } catch (err) {
        console.error('Cannot access local/session storage:', err);
      }

      if (this.storage.get(`$LoopBackSDK$invitationToken`)) {
        return this.user.activate(action.payload.user.id, this.storage.get(`$LoopBackSDK$invitationToken`))
          .take(1)
          .subscribe(
            (response: any) => {
              if (response.error) {
                this.store.dispatch(new AlertActions.SetAlert({
                  message: response.error_description,
                  type: 'error'
                }));
              } else {
                try {
                  this.storage.remove(`$LoopBackSDK$invitationToken`);
                } catch (err) {
                  console.error('Cannot access local/session storage:', err);
                }

                this.store.dispatch(new LoopbackAuthActions.updateUserProperties({
                  active: true
                }));
              }
            },
            (error) => this.store.dispatch(new AlertActions.SetAlert({
              message: error.message,
              type: 'error'
            })),
            () => {
              if (emailVerificationToken) {
                return this.router.navigate(['/user/verify-email/' + emailVerificationToken]);
              } else {
                return this.router.navigate(['/' + action.payload.userId]);
              }
            }
          );
      } else {
        if (emailVerificationToken) {
          return this.router.navigate(['/user/verify-email/' + emailVerificationToken]);
        } else {
          return this.router.navigate(['/' + action.payload.userId]);
        }
      }
    });

  @Effect()
  public signupSuccess$ = this.actions$
    .ofType(UserActionTypes.SIGNUP_SUCCESS)
    .map((action: LoopbackAction) =>
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

  @Effect({dispatch: false})
  public logoutSuccess$ = this.actions$
    .ofType(UserActionTypes.LOGOUT_SUCCESS)
    .do(() => (<any>window).location.href = '/');

  @Effect({dispatch: false})
  public logoutFail$ = this.actions$
    .ofType(UserActionTypes.LOGOUT_FAIL)
    .do(() => (<any>window).location.href = '/');

  @Effect({dispatch: false})
  public updateUserPropertiesSuccess = this.actions$
    .ofType(LoopbackAuthActionTypes.UPDATE_USER_PROPERTIES_SUCCESS)
    .do((action: LoopbackAction) => {
      if (action.meta && action.meta.alert && action.meta.alert.success) {
        this.store.dispatch(new AlertActions.SetAlert(action.meta.alert.success));
      }
    });

  @Effect()
  public authGuardFail$ = this.actions$
    .ofType(LoopbackAuthActionTypes.GUARD_FAIL)
    .map(() => this.router.navigate(['/user/login']));

  constructor(
    private store: Store<IAppState>,
    private actions$: Actions,
    private router: Router,
    @Inject(SDKStorage) protected storage: SDKStorage,
    private user: UserApi
  ) {}
}
