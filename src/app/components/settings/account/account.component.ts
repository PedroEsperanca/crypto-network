import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { ConfigService } from 'ng2-config';

import {
  SDKToken,
  User,
  LoopBackAuth,
  UserApi,
  UserActions,
  LoopBackConfig,
  LoopbackAuthActions,
  getLoopbackAuthToken
} from 'shared/api';
import { IAppState, AlertActions } from 'shared/ngrx';

@Component({
  selector: 'settingsAccount',
  styleUrls: [ './account.component.scss' ],
  templateUrl: './account.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsAccountComponent implements OnDestroy {
  public config: any;
  public resetPasswordForm: FormGroup;

  public currentToken: SDKToken;
  public currenUser: User;

  private subscriptions: Subscription[] = [];

  constructor(
    private store: Store<IAppState>,
    private configService: ConfigService,
    private auth: LoopBackAuth,
    private user: UserApi,
    private fb: FormBuilder
  ) {
    this.config = this.configService.getSettings();

    this.subscriptions.push(this.store.let(getLoopbackAuthToken()).subscribe((token: SDKToken) => {
      if (!token) { return; }

      this.currentToken = (<any> Object).assign({}, token);
      this.currenUser = (<any> Object).assign({}, token.user);
    }));

    this.resetPasswordForm = fb.group({
      password: ['', this.passwordComplexity],
      confirmPassword: ''
    }, {
      validator: this.matchingPasswords('password', 'confirmPassword')
    });
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public resetPassword() {
    this.store.dispatch(new UserActions.updateAttributes({
      id: this.currenUser.id,
      data: {
        password: this.resetPasswordForm.controls['password'].value
      }
    }));
  }

  public goTo(provider: string) {
    window.location.href = LoopBackConfig.getPath() + provider +
      '?access_token=' + this.currentToken.id;
  }

  public isLinked(provider: string): boolean {
    return this.currenUser.identities.filter((entity: any) => {
      return entity.provider === provider;
    }).length > 0;
  }

  public unlink(provider: string) {
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

        this.store.dispatch(new LoopbackAuthActions.updateUserProperties({
          identities: this.currenUser.identities
        }));
      },
      (error) => this.store.dispatch(new AlertActions.setAlert({
        message: error.message,
        type: 'error'
      }))
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
