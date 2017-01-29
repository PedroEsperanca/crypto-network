import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ConfigService } from 'ng2-config';
import { ModalDirective } from 'ng2-bootstrap';

import { UserApi, LoopBackAuth } from 'frameworks/api';

@Component({
  selector: 'settingsApplicationsApplication',
  styleUrls: [ './application.component.scss' ],
  templateUrl: './application.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsApplicationsApplicationComponent implements OnInit {
  public config: any;
  public formModel: any = {};
  public owner: any = {};

  public transferModel: any = {};
  public deleteModel: any = {};

  public message: any = {};
  public modalMessage: any = {};

  public transferModal: ModalDirective;
  public removeModal: ModalDirective;
  public resetModal: ModalDirective;
  public deleteModal: ModalDirective;

  constructor(
    public auth: LoopBackAuth,
    private router: Router,
    private route: ActivatedRoute,
    private user: UserApi,
    private configService: ConfigService,
    private cd: ChangeDetectorRef,
  ) {
    this.config = this.configService.getSettings();
  }

  public ngOnInit() {
    this.formModel = this.auth.getCurrentUserData().oAuthClientApplications.filter((app) => {
      return app.id === this.route.snapshot.params['id'];
    })[0];

    if (this.formModel.userId) {
      this.owner = this.auth.getCurrentUserData();
    } else if (this.formModel.organizationId) {
      this.owner = this.auth.getCurrentUserData().organizations.filter((org) => {
        return org.id === this.formModel.organizationId;
      })[0];
    }
    this.cd.markForCheck();
  }

  public updateApp() {
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

  public transferApp() {
    // TODO: transfer flow
    if (this.transferModel.name !== this.formModel.name) {
      this.modalMessage = {warning: 'Application name mismatch!'};
      return this.cd.markForCheck();
    }
    console.log(this.transferModel);
  }

  public revokeApp() {
    // TODO: revoke flow
  }

  public resetApp() {
    // TODO: reset flow
  }

  public deleteApp() {
    // TODO: delete flow
    // TODO: transfer flow
    if (this.deleteModel.name !== this.formModel.name) {
      this.modalMessage = {warning: 'Application name mismatch!'};
      return this.cd.markForCheck();
    }
    console.log(this.deleteModel);
  }
}
