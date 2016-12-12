import { BaseComponent } from 'frameworks/core';

import { ChangeDetectorRef, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoopBackAuth, UserApi } from 'frameworks/api';
import { InternalStorage } from 'frameworks/api/storage/internal.storage';

interface FormI {
  token: string;
}

@BaseComponent({
  selector: 'user.verify-email',
  templateUrl: './verify-email.component.html'
})
export class VerifyEmailComponent {
  private formModel: FormI = {
    token: ''
  };

  private confirming: boolean = false;
  private message: any = {};

  constructor(
    private auth: LoopBackAuth,
    private user: UserApi,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef,
    @Inject(InternalStorage) protected storage: InternalStorage
  ) {
    this.route.params.subscribe((params: any) => {
      if (params.token) {
        try {
          this.storage.set(`$LoopBackSDK$emailVerificationToken`, params.token);
        } catch (err) {
          console.error('Cannot access local/session storage:', err);
        }

        this.formModel.token = params.token;

        if (this.auth.getCurrentUserId()) {
          this.confirm();
        } else {
          this.router.navigate(['/user/login']);
        }
      } else if (!this.auth.getCurrentUserId()) {
        this.router.navigate(['/user/login']);
      }
    });
  }

  confirm() {
    this.confirming = true;
    this.message = {};
    this.cd.markForCheck();

    this.user.confirm(this.auth.getCurrentUserId(), this.formModel.token).subscribe(
      (response: any) => {
        if (response.error) {
          this.message = {
            error: response.error_description
          };
          this.confirming = false;
          this.cd.markForCheck();
        } else {
          try {
            this.storage.remove(`$LoopBackSDK$emailVerificationToken`);
          } catch (err) {
            console.error('Cannot access local/session storage:', err);
          }

          let currentToken = this.auth.getToken();
          currentToken.user.emailVerified = true;
          this.auth.setUser(currentToken);
          this.auth.setRememberMe(true);
          this.auth.save();

          setTimeout(() => {
            this.router.navigate(['/apps']);
          });
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

        this.confirming = false;
        this.cd.markForCheck();
      }
    );
  }

  resend() {
    this.user.sendVerificationEmail(this.auth.getCurrentUserId()).subscribe(
      (response: any) => {
        if (response.error) {
          this.message = {
            error: response.error_description
          };
        } else {
          this.message = {
            info: 'New email sent!'
          };
        }
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
        } else {
          this.message = {
            error: error.message || error.error_description
          };
        }
        this.cd.markForCheck();
      }
    );
  }
}
