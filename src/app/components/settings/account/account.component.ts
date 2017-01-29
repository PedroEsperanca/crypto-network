import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { ConfigService } from 'ng2-config';

import { LoopBackAuth, User, UserApi, LoopBackConfig } from 'frameworks/api';

@Component({
  selector: 'settingsAccount',
  styleUrls: [ './account.component.scss' ],
  templateUrl: './account.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsAccountComponent {
  public config: any;
  public resetPasswordForm: FormGroup;
  public currenUser: User;

  public message: any = {};

  public userId: string;

  constructor(
    private configService: ConfigService,
    private auth: LoopBackAuth,
    private user: UserApi,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) {
    this.config = this.configService.getSettings();
    this.currenUser = this.auth.getCurrentUserData();

    this.resetPasswordForm = fb.group({
      password: ['', this.passwordComplexity],
      confirmPassword: ''
    }, {
      validator: this.matchingPasswords('password', 'confirmPassword')
    });
  }

  public resetPassword() {
    this.message = {};

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
        this.cd.markForCheck();
      },
      (error) => {
        if (error.message === 'Unexpected token U in JSON at position 0') {
          this.message = {
            error: 'Unauthorized'
          };
        } else if (error === 'invalid_grant') {
          this.message = {
            error: 'Access token is expired'
          };
        } else {
          this.message = {
            error: error.message || error.error_description
          };
        }
        this.cd.markForCheck();
      }
    );
  }

  public goTo(provider: string) {
    window.location.href = LoopBackConfig.getPath() + provider +
      '?access_token=' + this.auth.getToken().id;
  }

  public isLinked(provider: string): boolean {
    return this.currenUser.identities.filter((entity: any) => {
      return entity.provider === provider;
    }).length > 0;
  }

  public unlink(provider: string) {
    this.message = {};

    const identityId: string = this.currenUser.identities.filter((entity: any) => {
      return entity.provider === provider;
    })[0].id;

    this.user.destroyByIdIdentities(this.currenUser.id, identityId).subscribe(
      (response: any) => {
        for (let i = 0; i < this.currenUser.identities.length; ++i) {
          if (this.currenUser.identities[i].id === identityId) {
            this.currenUser.identities.splice(i, 1);
            break;
          }
        }

        let token = this.auth.getToken();
        token.user = this.currenUser;
        this.auth.setUser(token);
        this.auth.save();

        this.cd.markForCheck();
      },
      (error) => {
        if (error.message === 'Unexpected token U in JSON at position 0') {
          this.message = {
            error: 'Unauthorized'
          };
        } else if (error === 'invalid_grant') {
          this.message = {
            error: 'Access token is expired'
          };
        } else {
          this.message = {
            error: error.message || error.error_description
          };
        }
        this.cd.markForCheck();
      }
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
