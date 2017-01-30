import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { IAppState, AlertActions } from 'shared/ngrx';
import { LoopbackAuthActions } from 'shared/api/actions';
import { User, UserApi } from 'shared/api';

@Component({
  selector: 'user.reset-password',
  templateUrl: './reset-password.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetPasswordComponent implements OnDestroy {
  public resetPasswordForm: FormGroup;

  public goto: string;

  public userId: string;

  constructor(
    private store: Store<IAppState>,
    private loopbackAuthActions: LoopbackAuthActions,
    private alertActions: AlertActions,
    private user: UserApi,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: any) => {
      this.userId = params.userId;

      this.store.dispatch(this.loopbackAuthActions.setToken({
        id: params.token,
        ttl: 1000,
        issuedAt: new Date(),
        created: new Date(),
        userId: params.userId,
        user: {},
        rememberMe: false
      }));
    });

    this.resetPasswordForm = fb.group({
      password: ['', this.passwordComplexity],
      confirmPassword: ''
    }, {
      validator: this.matchingPasswords('password', 'confirmPassword')
    });
  }

  public ngOnDestroy() {
    this.store.dispatch(this.loopbackAuthActions.clearToken());
  }

  public resetPassword() {
    this.user.updateAttributes(this.userId, {
      password: this.resetPasswordForm.controls['password'].value
    }).subscribe(
      (response: any) => {
        if (response.error) {
          this.store.dispatch(this.alertActions.setAlert(response.error_description, 'error'));
        }

        this.goto = 'login';
        this.cd.markForCheck();
      },
      (error) => this.store.dispatch(this.alertActions.setAlert(error.message, 'error'))
    );
  }

  public matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value && confirmPassword.value !== '') {
        return {
          mismatchedPasswords: true
        };
      }
    };
  }

  private passwordComplexity(control: any) {
    const password = control.value;

    const anUpperCase = /[A-Z]/;
    const aLowerCase = /[a-z]/;
    const aNumber = /[0-9]/;
    const aSpecial = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

    let passwordComplexityReport: any = {};

    let numUpper = 0;
    let numLower = 0;
    let numNums = 0;
    let numSpecials = 0;

    for (let character of password) {
      if (anUpperCase.test(character)) {
        numUpper++;
      }

      if (aLowerCase.test(character)) {
        numLower++;
      }

      if (aNumber.test(character)) {
        numNums++;
      }

      if (aSpecial.test(character)) {
        numSpecials++;
      }
    }

    if (password.length < 8 ||
      numUpper < 1 ||
      numLower < 1 ||
      numNums < 1 ||
      numSpecials < 1
    ) {
      if (password.length <= 8) {
        passwordComplexityReport.length = true;
      }

      if (numUpper < 1) {
        passwordComplexityReport.numUpper = true;
      }

      if (numLower < 1) {
        passwordComplexityReport.numLower = true;
      }

      if (numNums < 1) {
        passwordComplexityReport.numNums = true;
      }

      if (numSpecials < 1) {
        passwordComplexityReport.numSpecials = true;
      }

      return passwordComplexityReport;
    } else {
      return true;
    }
  }
}
