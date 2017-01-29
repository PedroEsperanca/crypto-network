import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { ConfigService } from 'ng2-config';

import { UserApi, LoopBackAuth } from 'frameworks/api';

interface FormI {
  name: string;
  photo: string;
  clientURI: string;
  logoURI?: string;
  description?: string;
  redirectURIs: string;
}

@Component({
  selector: 'settingsApplicationsNew',
  styleUrls: [ './new.component.scss' ],
  templateUrl: './new.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsApplicationsNewComponent {
  public config: any;
  public formModel: FormI = {
    name: '',
    photo: '',
    clientURI: '',
    logoURI: '',
    description: '',
    redirectURIs: ''
  };

  public message: any = {};

  constructor(
    public auth: LoopBackAuth,
    private router: Router,
    private user: UserApi,
    private configService: ConfigService,
    private cd: ChangeDetectorRef,
  ) {
    this.config = this.configService.getSettings();
  }

  public newApp() {
    this.user.createOAuthClientApplications(this.auth.getCurrentUserId(), {
      name: this.formModel.name,
      clientURI: this.formModel.clientURI,
      logoURI: this.formModel.logoURI,
      description: this.formModel.description,
      redirectURIs: this.formModel.redirectURIs.replace(', ', ',').split(',')
    }).subscribe(
      (response: any) => {
        if (response.error) {
          this.message = {
            error: response.error_description
          };

          this.cd.markForCheck();
        } else {

          let token = this.auth.getToken();
          token.user.oAuthClientApplications.push(response);
          this.auth.setUser(token);
          this.auth.save();

          this.router.navigate(['/settings/applications/' + response.id]);
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
        this.cd.markForCheck();
      }
    );
  }
}
