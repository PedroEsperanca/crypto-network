import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { ConfigService } from 'ng2-config';

import { UserApi, LoopBackAuth, LoopBackConfig } from 'frameworks/api';
import { SDKStorage } from 'frameworks/api/storage/storage.swaps';

@Component({
  selector: 'user.signup',
  templateUrl: './signup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent {
  public config: any;
  public registerForm: FormGroup;
  public emailVerificationToken: string;

  constructor(
    private configService: ConfigService,
    private auth: LoopBackAuth,
    private router: Router,
    private user: UserApi,
    private fb: FormBuilder,
    @Inject(SDKStorage) protected storage: SDKStorage
  ) {
    this.config = this.configService.getSettings();

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

  public signup() {
    this.user.create({
      name: this.registerForm.controls['name'].value,
      email: this.registerForm.controls['email'].value,
      password: this.registerForm.controls['password'].value
    }).subscribe(
      (response) => {
        this.login();
      }
    );
  }

  public login() {
    this.user.login({
      email: this.registerForm.controls['email'].value,
      password: this.registerForm.controls['password'].value
    }, [
      'user',
      'user.oAuthClientApplications',
      'user.identities',
      'user.organizations'
    ]).subscribe(
      (response) => {
        let currentUser = this.auth.getCurrentUserData();

        /*if (currentUser && currentUser.twoSetAuthentication) {
          this.router.navigate(['/user/two-step-authentication']);
        }*/

        if (this.emailVerificationToken) {
          this.router.navigate(['/user/verify-email/' + this.emailVerificationToken]);
        } else {
          this.router.navigate(['/' + currentUser.id]);
        }
      }
    );
  }

  public goTo(provider: string) {
    window.location.href = LoopBackConfig.getPath() + provider;
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
