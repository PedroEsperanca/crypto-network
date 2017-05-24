import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Component, ChangeDetectionStrategy, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { ConfigService } from '@ngx-config/core';

import { FileUploaderComponent } from 'shared/app/modules/file-uploader/file-uploader.component';

import {
  User,
  Organization,
  UserApi,
  OrganizationApi,
  LoopbackAuthActions,
  getLoopbackAuthAccount
} from 'shared/api';
import { IAppState, AlertActions } from 'shared/ngrx';

interface FormI {
  name: string;
  displayName: string;
  photo: string;
  clientURI: string;
  logo?: string;
  description?: string;
  redirectURIs: string;
}

@Component({
  selector: 'app-organization-new',
  styleUrls: [ './new.component.scss' ],
  templateUrl: './new.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationsNewComponent implements OnDestroy {
  @ViewChild('fileUploader') public fileUploader: FileUploaderComponent;

  public config: any;
  public formModel: FormI = {
    name: '',
    displayName: '',
    photo: '',
    clientURI: '',
    logo: '',
    description: '',
    redirectURIs: ''
  };

  public currenUser: User;

  private org: Organization;

  private subscriptions: Subscription[] = [];

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private user: UserApi,
    private organization: OrganizationApi,
    private configService: ConfigService
  ) {
    this.config = this.configService.getSettings();

    this.subscriptions.push(this.store.let(getLoopbackAuthAccount()).subscribe((currentUser: User) => {
      if (!currentUser) { return; }
      this.currenUser = (<any> Object).assign({}, currentUser);
    }));
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public newOrganization() {
    this.user.createOrganizations(this.currenUser.id, this.formModel).subscribe(
      (response: any) => {
        if (response.error) {
          this.store.dispatch(new AlertActions.setAlert({
            message: response.error_description,
            type: 'error'
          }));
        } else {
          if (this.fileUploader.uploader.queue.length > 0) {
            this.org = response;

            this.fileUploader.uploadAll();
          } else {
            this.store.dispatch(new LoopbackAuthActions.updateUserState({
              organizations: [...this.currenUser.organizations, response]
            }));

            this.router.navigate(['organizations/' + response.id + '/settings/']);
          }
        }
      },
      (error) => this.store.dispatch(new AlertActions.setAlert({
        message: error.message,
        type: 'error'
      }))
    );
  }

  public fileNameRewrite(fileName: string): string {
    return 'organization/' + this.org.id + '/avatar';
  }

  public getUploadUrl(fileName: string, fileType: string, options: any = {}) {
    options.fileType = fileType;
    return this.user.s3PUTSignedUrl(this.org.id, fileName, options);
  }

  public onUploadComplete(item: any) {
    this.organization.updateS3Photo(this.org.id, {
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
          this.store.dispatch(new LoopbackAuthActions.updateUserState({
            organizations: [...this.currenUser.organizations, this.org]
          }));

          this.router.navigate(['organizations/' + this.org.id + '/settings/']);
        }
      },
      (error) => this.store.dispatch(new AlertActions.setAlert({
        message: error.message,
        type: 'error'
      }))
    );
  }
}
