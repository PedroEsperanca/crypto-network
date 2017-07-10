import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

import { ConfigService } from '@ngx-config/core';

import {
  User,
  UserApi,
  LoopbackAuthActions,
  getLoopbackAuthAccount
} from 'shared/api';
import { IAppState, AlertActions } from 'shared/ngrx';

@Component({
  selector: 'app-settings-emails',
  styleUrls: [ './emails.component.scss' ],
  templateUrl: './emails.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsEmailsComponent implements OnDestroy  {
  public config: any;
  public currentUser: User;

  public emailModel = '';
  public updatePreferencesModel: any = 'marketing';

  private subscriptions: Subscription[] = [];

  constructor(
    private store: Store<IAppState>,
    private user: UserApi,
    private configService: ConfigService
  ) {
    this.config = this.configService.getSettings();

    this.subscriptions.push(this.store.select(getLoopbackAuthAccount).subscribe((currentUser: User) => {
      if (!currentUser) { return; }

      this.updatePreferencesModel = currentUser.emailPreferences;
      this.currentUser = (<any> Object).assign({}, currentUser);
    }));
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public verifyEmail(emailId: string) {
    let data: any = {};

    if (this.config.settings.multipleEmailsAndPhones) {
      data = {
        type: 'email',
        id: emailId
      };
    }

    this.user.sendVerificationCode(this.currentUser.id, data).subscribe(
      (response: any) => {
        if (response.error) {
          this.store.dispatch(new AlertActions.setAlert({
            message: response.error_description,
            type: 'error'
          }));
        } else {
          this.store.dispatch(new AlertActions.setAlert({
            message: 'Verification Code sent to ' +
              this.currentUser.emailAddresses.filter((e) => { return e.id === emailId; })[0].masked,
            type: 'info'
          }));
        }
      },
      (error) => this.store.dispatch(new AlertActions.setAlert({
        message: error.message,
        type: 'error'
      }))
    );
  }

  public setPrimary(emailId: string) {
    this.user.setPrimaryEmail(this.currentUser.id, emailId).subscribe(
      (response: any) => {
        if (response.error) {
          this.store.dispatch(new AlertActions.setAlert({
            message: response.error_description,
            type: 'error'
          }));
        } else {
          for (const email of this.currentUser.emailAddresses) {
            if (email.id === emailId) {
              email.primary = true;
            } else {
              email.primary = false;
            }
          }

          this.store.dispatch(new LoopbackAuthActions.updateUserProperties({
            emailAddresses: this.currentUser.emailAddresses
          }));
        }
      },
      (error) => this.store.dispatch(new AlertActions.setAlert({
        message: error.message,
        type: 'error'
      }))
    );
  }

  public editEmail() {
    this.store.dispatch(new LoopbackAuthActions.updateUserProperties({
      email: this.emailModel,
      emailVerified: false
    }, {
      alert: {
        success: {
          message: 'Email updated successfully',
          type: 'info'
        }
      }
    }));
  }

  public removeEmail(emailId: string) {
    this.user.destroyByIdEmails(this.currentUser.id, emailId).subscribe(
      (response: any) => {
        if (response.error) {
          this.store.dispatch(new AlertActions.setAlert({
            message: response.error_description,
            type: 'error'
          }));
        } else {
          for (let i = 0; i < this.currentUser.emailAddresses.length; ++i) {
            if (this.currentUser.emailAddresses[i].id === emailId) {
              this.currentUser.emailAddresses.splice(i, 1);
              break;
            }
          }

          this.store.dispatch(new LoopbackAuthActions.updateUserProperties({
            emailAddresses: this.currentUser.emailAddresses
          }));
        }
      },
      (error) => this.store.dispatch(new AlertActions.setAlert({
        message: error.message,
        type: 'error'
      }))
    );
  }

  public addEmail() {
    this.user.createEmails(this.currentUser.id, {email: this.emailModel}).subscribe(
      (response: any) => {
        if (response.error) {
          this.store.dispatch(new AlertActions.setAlert({
            message: response.error_description,
            type: 'error'
          }));
        } else {
          this.store.dispatch(new LoopbackAuthActions.updateUserProperties({
            emailAddresses: this.currentUser.emailAddresses.push(response)
          }));
        }
      },
      (error) => this.store.dispatch(new AlertActions.setAlert({
        message: error.message,
        type: 'error'
      }))
    );
  }

  public updatePreferences() {
    this.store.dispatch(new LoopbackAuthActions.updateUserProperties({
      emailPreferences: this.updatePreferencesModel
    }, {
      alert: {
        success: {
          message: 'Email preferences updated successfully.',
          type: 'info'
        }
      }
    }));
  }
}
