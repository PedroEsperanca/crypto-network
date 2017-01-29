import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { ConfigService } from 'ng2-config';

import { User, UserApi, LoopBackAuth } from 'frameworks/api';

@Component({
  selector: 'settingsProfile',
  styleUrls: [ './profile.component.scss' ],
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsProfileComponent {
  public config: any;
  public formModel: User;

  public message: any = {};

  constructor(
    public auth: LoopBackAuth,
    private user: UserApi,
    private configService: ConfigService,
    private cd: ChangeDetectorRef
  ) {
    this.config = this.configService.getSettings();
    this.formModel = this.auth.getCurrentUserData();
    console.log(this.auth.getCurrentUserData());
    this.fileNameRewrite = this.fileNameRewrite.bind(this);
    this.getUploadUrl = this.getUploadUrl.bind(this);
    this.onUploadComplete = this.onUploadComplete.bind(this);
  }

  public submitUpdate() {
    this.user.patchAttributes(this.auth.getCurrentUserId(), {
      name: this.formModel.name,
      photoUrl: this.formModel.photoUrl,
      username: this.formModel.username || null
    }).subscribe(
      (response: any) => {
        if (response.error) {
          this.message = {
            error: response.error_description
          };
        } else {
          this.message = {
            info: 'Profile updated successfully'
          };

          let token = this.auth.getToken();
          token.user = Object.assign(token.user, response);
          this.formModel = token.user;
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

  public fileNameRewrite(fileName: string): string {
    return 'user/' + this.auth.getCurrentUserId() + '/avatar';
  }

  public getUploadUrl(fileName: string, fileType: string, options: any = {}) {
    options.fileType = fileType;
    return this.user.s3PUTSignedUrl(this.auth.getCurrentUserId(), fileName, options);
  }

  public onUploadComplete(item: any) {
    this.user.updateS3Photo(this.auth.getCurrentUserId(), {
      url: item.url.split('?')[0],
      key: item.file.name
    }).subscribe(
      (response: any) => {
        if (response.error) {
          this.message = {
            error: response.error_description
          };
        } else {

          let token = this.auth.getToken();
          token.user.photo = response;
          this.formModel = token.user;
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
