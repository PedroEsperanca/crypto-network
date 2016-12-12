import { BaseComponent } from 'frameworks/core';

import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { LoopBackAuth, UserApi } from 'frameworks/api';

@BaseComponent({
  selector: 'user.reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnDestroy {
  private resetPasswordForm: FormGroup;

  private message: any = {};
  private goto: string;

  private userId: string;

  constructor(
    private auth: LoopBackAuth,
    private user: UserApi,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params: any) => {
      this.userId = params.userId;

      this.auth.setUser({
        id: params.token,
        ttl: 1000,
        created: new Date(),
        userId: params.userId,
        user: {},
        rememberMe: false
      });
    });

    this.resetPasswordForm = fb.group({
      password: ['', this.passwordComplexity],
      confirmPassword: ''
    }, {
      validator: this.matchingPasswords('password', 'confirmPassword')
    });
  }

  ngOnDestroy() {
    this.user.logout();
  }

  resetPassword() {
    this.user.updateAttributes(this.userId, {
      password: this.resetPasswordForm.controls['password'].value
    }).subscribe(
      (response: any) => {
        if (response.error) {
          this.message = {
            error: response.error_description
          };
        } else {
          this.message = {};
        }
        this.goto = 'login';
        this.cd.markForCheck();
      },
      error => {
        if (error.message === 'Unexpected token U in JSON at position 0') {
          this.message = {
            error: 'Unauthorized'
          };
        } else if (error === 'invalid_grant') {
          this.message = {
            error: 'Access token is expired'
          };

          this.goto = 'recover';
        } else {
          this.message = {
            error: error.message || error.error_description
          };
        }
        this.cd.markForCheck();
      }
    );
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
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

  passwordComplexity(control: any) {
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

    for (let i = 0; i < password.length; i++) {
      if (anUpperCase.test(password[i])) {
        numUpper++;
      }

      if (aLowerCase.test(password[i])) {
        numLower++;
      }

      if (aNumber.test(password[i])) {
        numNums++;
      }

      if (aSpecial.test(password[i])) {
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
