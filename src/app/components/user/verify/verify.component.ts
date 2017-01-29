import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ConfigService } from 'ng2-config';

import { LoopBackAuth, UserApi } from 'shared/api';
import { SDKStorage } from 'shared/api/storage/storage.swaps';

interface FormI {
  token: string;
}

@Component({
  selector: 'user.verify',
  templateUrl: './verify.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerifyComponent {
  public config: any;
  public formModel: FormI = {
    token: ''
  };

  public confirming: boolean = false;
  public message: any = {};

  constructor(
    private configService: ConfigService,
    private auth: LoopBackAuth,
    private user: UserApi,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef,
    @Inject(SDKStorage) protected storage: SDKStorage
  ) {
    this.config = this.configService.getSettings();

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

  public confirm() {
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

        this.confirming = false;
        this.cd.markForCheck();
      }
    );
  }

  public resend() {
    let data: any = {};
    if (this.config.settings.login.multipleEmailsAndPhones) {
      const emailToVerify = this.auth.getCurrentUserData()
            .emailAddresses.filter((e) => { return !e.verified; })[0];

      const phoneToVerify = this.auth.getCurrentUserData()
            .phoneNumbers.filter((e) => { return !e.verified; })[0];

      if (emailToVerify) {
        data.type = 'email';
        data.id = emailToVerify.id;
      } else if (phoneToVerify) {
        data.type = 'phone';
        data.id = phoneToVerify.id;
      }
    }

    this.user.sendVerificationCode(this.auth.getCurrentUserId(), data).subscribe(
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
}
