import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { ConfigService } from 'ng2-config';

import { User, UserApi, LoopBackAuth } from 'shared/api';

@Component({
  selector: 'settingsEmails',
  styleUrls: [ './emails.component.scss' ],
  templateUrl: './emails.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsEmailsComponent {
  public config: any;
  public currenUser: User;

  public addEmailModel: any = {
    email: ''
  };
  public editEmailModel: any = {
    email: ''
  };
  public updatePreferencesModel: any = 'marketing';

  public message: any = {};

  constructor(
    public auth: LoopBackAuth,
    private user: UserApi,
    private configService: ConfigService,
    private cd: ChangeDetectorRef,
  ) {
    this.config = this.configService.getSettings();
    this.currenUser = this.auth.getCurrentUserData();
    this.updatePreferencesModel = this.currenUser.emailPreferences;
  }

  public verifyEmail(emailId: string) {
    this.message = {};
    let data: any = {};

    if (this.config.settings.multipleEmailsAndPhones) {
      data = {
        type: 'email',
        id: emailId
      };
    }

    this.user.sendVerificationCode(this.auth.getCurrentUserId(), data).subscribe(
      (response: any) => {
        if (response.error) {
          this.message = {
            error: response.error_description
          };
        } else {
          this.message = {
            info: 'Verification Code sent to ' + this.auth.getCurrentUserData()
              .emailAddresses.filter((e) => { return e.id === emailId; })[0].masked
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

  public setPrimary(emailId: string) {
    this.message = {};

    this.user.setPrimaryEmail(this.auth.getCurrentUserId(), emailId).subscribe(
      (response: any) => {
        if (response.error) {
          this.message = {
            error: response.error_description
          };
        } else {
          for (let email of this.currenUser.emailAddresses) {
            if (email.id === emailId) {
              email.primary = true;
            } else {
              email.primary = false;
            }
          }

          let token = this.auth.getToken();
          token.user = this.currenUser;
          this.auth.setUser(token);
          this.auth.save();
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

  public editEmail() {
    this.message = {};

    this.user.patchAttributes(this.auth.getCurrentUserId(), {
      email: this.editEmailModel.email,
      emailVerified: false
    }).subscribe(
      (response: any) => {
        if (response.error) {
          this.message = {
            error: response.error_description
          };
        } else {
          this.message = {
            info: 'Email updated successfully'
          };

          this.currenUser.email = this.editEmailModel.email;
          this.currenUser.emailVerified = false;

          let token = this.auth.getToken();
          token.user = this.currenUser;
          this.auth.setUser(token);
          this.auth.save();
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

  public removeEmail(emailId: string) {
    this.message = {};

    this.user.destroyByIdEmails(this.auth.getCurrentUserId(), emailId).subscribe(
      (response: any) => {
        if (response.error) {
          this.message = {
            error: response.error_description
          };
        } else {
          for (let i = 0; i < this.currenUser.emailAddresses.length; ++i) {
            if (this.currenUser.emailAddresses[i].id === emailId) {
              this.currenUser.emailAddresses.splice(i, 1);
              break;
            }
          }

          let token = this.auth.getToken();
          token.user = this.currenUser;
          this.auth.setUser(token);
          this.auth.save();
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

  public addEmail() {
    this.message = {};

    this.user.createEmails(this.auth.getCurrentUserId(), this.addEmailModel).subscribe(
      (response: any) => {
        if (response.error) {
          this.message = {
            error: response.error_description
          };
        } else {
          this.currenUser.emailAddresses.push(response);

          let token = this.auth.getToken();
          token.user = this.currenUser;
          this.auth.setUser(token);
          this.auth.save();
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

  public updatePreferences() {
    this.message = {};

    this.user.patchAttributes(this.auth.getCurrentUserId(), {
      emailPreferences: this.updatePreferencesModel
    }).subscribe(
      (response: any) => {
        if (response.error) {
          this.message = {
            error: response.error_description
          };
        } else {
          this.message = {
            info: 'Email preferences updated successfully'
          };

          this.currenUser.emailPreferences = this.updatePreferencesModel;

          let token = this.auth.getToken();
          token.user = this.currenUser;
          this.auth.setUser(token);
          this.auth.save();
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
