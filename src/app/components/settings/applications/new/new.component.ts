import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Component, ChangeDetectionStrategy, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { ConfigService } from '@ngx-config/core';

import { FileUploaderComponent } from 'shared/app/modules/file-uploader/file-uploader.component';

import {
  User,
  OAuthApp,
  UserApi,
  OAuthAppApi,
  LoopbackAuthActions,
  getLoopbackAuthAccount
} from 'shared/api';
import { IAppState, AlertActions } from 'shared/ngrx';

interface FormI {
  name: string;
  photo: string;
  clientURI: string;
  logo?: string;
  description?: string;
  redirectURIs: string;
}

@Component({
  selector: 'app-settings-applications-new',
  styleUrls: [ './new.component.scss' ],
  templateUrl: './new.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsApplicationsNewComponent implements OnDestroy {
  @ViewChild('fileUploader') public fileUploader: FileUploaderComponent;

  public config: any;
  public formModel: FormI = {
    name: '',
    photo: '',
    clientURI: '',
    logo: '',
    description: '',
    redirectURIs: ''
  };

  public currenUser: User;

  private app: OAuthApp;

  private subscriptions: Subscription[] = [];

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private user: UserApi,
    private application: OAuthAppApi,
    private configService: ConfigService
  ) {
    this.config = this.configService.getSettings();

    this.subscriptions.push(this.store.select(getLoopbackAuthAccount).subscribe((currentUser: User) => {
      if (!currentUser) { return; }
      this.currenUser = (<any> Object).assign({}, currentUser);
    }));
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public newApp() {
    this.user.createOAuthClientApplications(this.currenUser.id, {
      name: this.formModel.name,
      clientURI: this.formModel.clientURI,
      logo: this.formModel.logo,
      description: this.formModel.description,
      redirectURIs: this.formModel.redirectURIs.replace(', ', ',').split(',')
    }).subscribe(
      (response: any) => {
        if (response.error) {
          this.store.dispatch(new AlertActions.SetAlert({
            message: response.error_description,
            type: 'error'
          }));
        } else {
          if (this.fileUploader.uploader.queue.length > 0) {
            this.app = response;

            this.fileUploader.uploadAll();
          } else {
            this.store.dispatch(new LoopbackAuthActions.updateUserState({
              oAuthClientApplications: [...this.currenUser.oAuthClientApplications, response]
            }));

            this.router.navigate(['/settings/applications/' + response.id]);
          }
        }
      },
      (error) => this.store.dispatch(new AlertActions.SetAlert({
        message: error.message,
        type: 'error'
      }))
    );
  }

  public fileNameRewrite(fileName: string): string {
    return 'application/' + this.app.id + '/avatar';
  }

  public getUploadUrl(fileName: string, fileType: string, options: any = {}) {
    options.fileType = fileType;
    return this.user.s3PUTSignedUrl(this.app.id, fileName, options);
  }

  public onUploadComplete(item: any) {
    this.application.updateS3Logo(this.app.id, {
      url: item.url.split('?')[0],
      key: item.file.name
    }).subscribe(
      (response: any) => {
        if (response.error) {
          this.store.dispatch(new AlertActions.SetAlert({
            message: response.error_description,
            type: 'error'
          }));
        } else {
          this.store.dispatch(new LoopbackAuthActions.updateUserState({
            oAuthClientApplications: [...this.currenUser.oAuthClientApplications, this.app]
          }));

          this.router.navigate(['/settings/applications/' + this.app.id]);
        }
      },
      (error) => this.store.dispatch(new AlertActions.SetAlert({
        message: error.message,
        type: 'error'
      }))
    );
  }
}
