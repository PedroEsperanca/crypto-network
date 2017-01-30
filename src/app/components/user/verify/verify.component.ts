import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/last';
import '@ngrx/core/add/operator/select';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ConfigService } from 'ng2-config';

import {
  SDKToken,
  LoopBackAuth,
  UserApi,
  LoopbackAuthActions,
  getLoopbackAuthToken
} from 'shared/api';
import { IAppState, AlertActions } from 'shared/ngrx';
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

  constructor(
    private store: Store<IAppState>,
    private alertActions: AlertActions,
    private loopbackAuthActions: LoopbackAuthActions,
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
    this.cd.markForCheck();

    this.user.confirm(this.auth.getCurrentUserId(), this.formModel.token).subscribe(
      (response: any) => {
        if (response.error) {
          this.store.dispatch(this.alertActions.setAlert(response.error_description, 'error'));
          this.confirming = false;
          this.cd.markForCheck();
        } else {
          try {
            this.storage.remove(`$LoopBackSDK$emailVerificationToken`);
          } catch (err) {
            console.error('Cannot access local/session storage:', err);
          }

          // TODO: make sure this is working for multiple Emails/Phones
          this.store.dispatch(this.loopbackAuthActions.updateUserProperties({
            emailVerified: true
          }));

          this.router.navigate(['/apps']);
        }
      },
      (error) => this.store.dispatch(this.alertActions.setAlert(error.message, 'error'))
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
          this.store.dispatch(this.alertActions.setAlert(response.error_description, 'error'));
        } else {
          this.store.dispatch(this.alertActions.setAlert('New email sent!', 'info'));
        }
      },
      (error) => this.store.dispatch(this.alertActions.setAlert(error.message, 'error'))
    );
  }
}
