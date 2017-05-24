import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ConfigService } from '@ngx-config/core';
import { ModalDirective } from 'ngx-bootstrap';

import {
  User,
  UserApi,
  AppApi,
  LoopbackAuthActions,
  getLoopbackAuthAccount
} from 'shared/api';
import { IAppState, AlertActions } from 'shared/ngrx';

@Component({
  selector: 'app-settings-applications-application',
  styleUrls: [ './application.component.scss' ],
  templateUrl: './application.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsApplicationsApplicationComponent implements OnInit, OnDestroy  {
  public config: any;
  public formModel: any = {};
  public owner: any = {};

  public currentUser: User;

  public transferModel: any = {};
  public deleteModel: any = {};

  public modalMessage: any = {};

  public transferModal: ModalDirective;
  public removeModal: ModalDirective;
  public resetModal: ModalDirective;
  public deleteModal: ModalDirective;

  private subscriptions: Subscription[] = [];

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private route: ActivatedRoute,
    private user: UserApi,
    private application: AppApi,
    private configService: ConfigService,
    private cd: ChangeDetectorRef,
  ) {
    this.config = this.configService.getSettings();
  }

  public ngOnInit() {
    this.subscriptions.push(this.store.let(getLoopbackAuthAccount()).subscribe((currentUser: User) => {
      if (!currentUser) { return; }

      this.currentUser = (<any> Object).assign({}, currentUser);

      this.formModel =
        (<any> Object).assign({}, currentUser.oAuthClientApplications.filter((app) => {
          return app.id === this.route.snapshot.params['id'];
        })[0]);

      if (this.formModel.redirectURIs) {
        this.formModel.redirectURIs = this.formModel.redirectURIs.join(', ');
      }

      if (this.formModel.userId) {
        this.owner = currentUser;
      } else if (this.formModel.organizationId) {
        this.owner = currentUser.organizations.filter((org) => {
          return org.id === this.formModel.organizationId;
        })[0];
      }
    }));
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public updateApp() {
    const data = Object.assign({}, this.formModel);
    data.redirectURIs = data.redirectURIs.replace(', ', ',').split(',');

    this.user.updateByIdOAuthClientApplications(
      this.currentUser.id,
      this.formModel.id,
      data
    ).subscribe(
      (response: any) => {
        if (response.error) {
          this.store.dispatch(new AlertActions.setAlert({
            message: response.error_description,
            type: 'error'
          }));
        } else {
          this.store.dispatch(new LoopbackAuthActions.updateUserState({
            oAuthClientApplications: this.currentUser.oAuthClientApplications.map((item) => {
              if (item.id === response.id) {
                return response;
              } else {
                return item;
              }
            })
          }));
        }
      },
      (error) => this.store.dispatch(new AlertActions.setAlert({
        message: error.message,
        type: 'error'
      }))
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
    if (this.deleteModel.name !== this.formModel.name) {
      this.modalMessage = {warning: 'Application name mismatch!'};
      return this.cd.markForCheck();
    }

    this.user.destroyByIdOAuthClientApplications(this.currentUser.id, this.formModel.id)
      .subscribe(
        (response: any) => {
          if (response.error) {
            this.store.dispatch(new AlertActions.setAlert({
              message: response.error_description,
              type: 'error'
            }));
          } else {
            this.store.dispatch(new LoopbackAuthActions.updateUserState({
              oAuthClientApplications: this.currentUser.oAuthClientApplications.filter((item) => {
                return item.id !== this.formModel.id;
              })
            }));

            this.router.navigate(['/settings/applications']);
          }
        },
        (error) => this.store.dispatch(new AlertActions.setAlert({
          message: error.message,
          type: 'error'
        }))
      );
  }

  public fileNameRewrite(fileName: string): string {
    return 'application/' + this.formModel.id + '/avatar';
  }

  public getUploadUrl(fileName: string, fileType: string, options: any = {}) {
    options.fileType = fileType;
    return this.user.s3PUTSignedUrl(this.formModel.id, fileName, options);
  }

  public onUploadComplete(item: any) {
    this.application.updateS3Photo(this.formModel.id, {
      url: item.url.split('?')[0],
      key: item.file.name
    }).subscribe(
      (response: any) => {
        if (response.error) {
          this.store.dispatch(new AlertActions.setAlert({
            message: response.error_description,
            type: 'error'
          }));
        } else {

          // TODO: update store
          /*this.store.dispatch(new LoopbackAuthActions.updateUserProperties({
            photo: response
          }));*/
        }
      },
      (error) => this.store.dispatch(new AlertActions.setAlert({
        message: error.message,
        type: 'error'
      }))
    );
  }
}
