import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';

import { UserApi } from 'shared/api';
import { IAppState, AlertActions } from 'shared/ngrx';

interface FormI {
  email: string;
}

@Component({
  selector: 'app-user-recover-account',
  templateUrl: './recover-account.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecoverAccountComponent {
  public formModel: FormI = {
    email: ''
  };

  public submited = false;

  constructor(
    private store: Store<IAppState>,
    private user: UserApi,
    private cd: ChangeDetectorRef
  ) {}

  public recover() {
    this.user.resetPassword(this.formModel).subscribe(
      (response) => {
        this.submited = true;
        this.cd.markForCheck();
      },
      (error) => this.store.dispatch(new AlertActions.setAlert({
        message: error.message,
        type: 'error'
      }))
    );
  }
}
