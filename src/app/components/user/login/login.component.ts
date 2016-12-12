import { BaseComponent } from 'frameworks/core';

import { ChangeDetectorRef, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { UserInterface, UserApi, LoopBackAuth, LoopBackConfig } from 'frameworks/api';
import { InternalStorage } from 'frameworks/api/storage/internal.storage';

@BaseComponent({
  selector: 'user.login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  private formModel: UserInterface = {
    email: '',
    password: ''
  };

  private message: any = {};
  private emailVerificationToken: string;

  constructor(
    private auth: LoopBackAuth,
    private router: Router,
    private user: UserApi,
    private cd: ChangeDetectorRef,
    @Inject(InternalStorage) protected storage: InternalStorage
  ) {
    try {
      this.emailVerificationToken = this.storage.get(`$LoopBackSDK$emailVerificationToken`);
    } catch (err) {
      console.error('Cannot access local/session storage:', err);
    }
  }

  login() {
    this.message = {};
    this.cd.markForCheck();

    this.user.login(this.formModel).subscribe(
      (response: any) => {
        if (response.error) {
          this.message = {
            error: response.error_description
          };
          this.cd.markForCheck();
        } else {
          /*let currentUser = this.auth.getCurrentUserData();

          if (currentUser && currentUser.twoSetAuthentication) {
            this.router.navigate(['/user/two-step-authentication']);
          }*/

          if (this.emailVerificationToken) {
            this.router.navigate(['/user/verify-email/' + this.emailVerificationToken]);
          } else {
            this.router.navigate(['/apps']);
          }
        }
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
        } else {
          this.message = {
            error: error.message || error.error_description
          };
        }
        this.cd.markForCheck();
      }
    );
  }

  goTo(provider: string) {
    window.location.href = LoopBackConfig.getPath() + provider;
  }
}
