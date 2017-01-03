import { BaseComponent } from 'frameworks/core';

import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { UserApi, LoopBackConfig } from 'frameworks/api';
import { SDKStorage } from 'frameworks/api/storage/storage.swaps';

@BaseComponent({
  selector: 'user.signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  private registerForm: FormGroup;
  private emailVerificationToken: string;

  constructor(
    private router: Router,
    private user: UserApi,
    private fb: FormBuilder,
    @Inject(SDKStorage) protected storage: SDKStorage
  ) {
    try {
      this.emailVerificationToken = this.storage.get(`$LoopBackSDK$emailVerificationToken`);
    } catch (err) {
      console.error('Cannot access local/session storage:', err);
    }

    this.registerForm = fb.group({
      name: '',
      email: '',
      password: ['', this.passwordComplexity],
    });
  }

  signup() {
    this.user.create({
      name: this.registerForm.controls['name'].value,
      email: this.registerForm.controls['email'].value,
      password: this.registerForm.controls['password'].value
    }).subscribe(
      response => {
        this.login();
      }
    );
  }

  login() {
    this.user.login({
      email: this.registerForm.controls['email'].value,
      password: this.registerForm.controls['password'].value
    }).subscribe(
      response => {
        if (this.emailVerificationToken) {
          this.router.navigate(['/user/verify-email/' + this.emailVerificationToken]);
        } else {
          this.router.navigate(['/apps']);
        }
      }
    );
  }

  goTo(provider: string) {
    window.location.href = LoopBackConfig.getPath() + provider;
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
