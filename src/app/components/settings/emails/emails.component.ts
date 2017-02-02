import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

import { ConfigService } from 'ng2-config';

import {
  User,
  UserApi,
  LoopbackAuthActions,
  getLoopbackAuthUser
} from 'shared/api';
import { IAppState, AlertActions } from 'shared/ngrx';

@Component({
  selector: 'settingsEmails',
  styleUrls: [ './emails.component.scss' ],
  templateUrl: './emails.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsEmailsComponent implements OnDestroy  {
  public config: any;
  public currenUser: User;

  public addEmailModel: any = {
    email: ''
  };
  public editEmailModel: any = {
    email: ''
  };
  public updatePreferencesModel: any = 'marketing';

  private subscriptions: Subscription[] = [];

  constructor(
    private store: Store<IAppState>,
    private user: UserApi,
    private configService: ConfigService
  ) {
    this.config = this.configService.getSettings();

    this.subscriptions.push(this.store.let(getLoopbackAuthUser()).subscribe((currentUser: User) => {
      if (!currentUser) { return; }

      this.updatePreferencesModel = (<any> Object).assign({}, currentUser.emailPreferences);
      this.currenUser = (<any> Object).assign({}, currentUser);
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

    this.user.sendVerificationCode(this.currenUser.id, data).subscribe(
      (response: any) => {
        if (response.error) {
          this.store.dispatch(new AlertActions.setAlert({
            message: response.error_description,
            type: 'error'
          }));
        } else {
          this.store.dispatch(new AlertActions.setAlert({
            message: 'Verification Code sent to ' +
              this.currenUser.emailAddresses.filter((e) => { return e.id === emailId; })[0].masked,
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
    this.user.setPrimaryEmail(this.currenUser.id, emailId).subscribe(
      (response: any) => {
        if (response.error) {
          this.store.dispatch(new AlertActions.setAlert({
            message: response.error_description,
            type: 'error'
          }));
        } else {
          for (let email of this.currenUser.emailAddresses) {
            if (email.id === emailId) {
              email.primary = true;
            } else {
              email.primary = false;
            }
          }

          this.store.dispatch(new LoopbackAuthActions.updateUserProperties({
            emailAddresses: this.currenUser.emailAddresses
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
    this.user.patchAttributes(this.currenUser.id, {
      email: this.editEmailModel.email,
      emailVerified: false
    }).subscribe(
      (response: any) => {
        if (response.error) {
          this.store.dispatch(new AlertActions.setAlert({
            message: response.error_description,
            type: 'error'
          }));
        } else {
          this.store.dispatch(new AlertActions.setAlert({
            message: 'Email updated successfully',
            type: 'info'
          }));

          this.store.dispatch(new LoopbackAuthActions.updateUserProperties({
            email: this.editEmailModel.email,
            emailVerified: false
          }));
        }
      },
      (error) => this.store.dispatch(new AlertActions.setAlert({
        message: error.message,
        type: 'error'
      }))
    );
  }

  public removeEmail(emailId: string) {
    this.user.destroyByIdEmails(this.currenUser.id, emailId).subscribe(
      (response: any) => {
        if (response.error) {
          this.store.dispatch(new AlertActions.setAlert({
            message: response.error_description,
            type: 'error'
          }));
        } else {
          for (let i = 0; i < this.currenUser.emailAddresses.length; ++i) {
            if (this.currenUser.emailAddresses[i].id === emailId) {
              this.currenUser.emailAddresses.splice(i, 1);
              break;
            }
          }

          this.store.dispatch(new LoopbackAuthActions.updateUserProperties({
            emailAddresses: this.currenUser.emailAddresses
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
    this.user.createEmails(this.currenUser.id, this.addEmailModel).subscribe(
      (response: any) => {
        if (response.error) {
          this.store.dispatch(new AlertActions.setAlert({
            message: response.error_description,
            type: 'error'
          }));
        } else {
          this.store.dispatch(new LoopbackAuthActions.updateUserProperties({
            emailAddresses: this.currenUser.emailAddresses.push(response)
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
    this.user.patchAttributes(this.currenUser.id, {
      emailPreferences: this.updatePreferencesModel
    }).subscribe(
      (response: any) => {
        if (response.error) {
          this.store.dispatch(new AlertActions.setAlert({
            message: response.error_description,
            type: 'error'
          }));
        } else {
          this.store.dispatch(
            new AlertActions.setAlert({
              message: 'Email preferences updated successfully',
              type: 'info'
            })
          );

          this.store.dispatch(new LoopbackAuthActions.updateUserProperties({
            emailPreferences: this.updatePreferencesModel
          }));
        }
      },
      (error) => this.store.dispatch(new AlertActions.setAlert({
        message: error.message,
        type: 'error'
      }))
    );
  }
}
