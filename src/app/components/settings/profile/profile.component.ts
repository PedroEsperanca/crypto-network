import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

import { ConfigService } from 'ng2-config';

import {
  User,
  UserApi,
  LoopbackAuthActions,
  UserActions,
  getLoopbackAuthUser
} from 'shared/api';
import { IAppState, AlertActions } from 'shared/ngrx';

@Component({
  selector: 'settingsProfile',
  styleUrls: [ './profile.component.scss' ],
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsProfileComponent implements OnDestroy {
  public config: any;
  public formModel: User;
  public getCurrentUserId: string;

  private subscriptions: Subscription[] = [];

  constructor(
    private store: Store<IAppState>,
    private user: UserApi,
    private configService: ConfigService
  ) {
    this.config = this.configService.getSettings();

    this.subscriptions.push(this.store.let(getLoopbackAuthUser()).subscribe((currentUser: User) => {
      if (!currentUser) { return; }

      this.formModel = (<any> Object).assign({}, currentUser);
      this.getCurrentUserId = currentUser.id;
    }));

    this.fileNameRewrite = this.fileNameRewrite.bind(this);
    this.getUploadUrl = this.getUploadUrl.bind(this);
    this.onUploadComplete = this.onUploadComplete.bind(this);
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public submitUpdate() {
    this.store.dispatch(new LoopbackAuthActions.updateUserProperties({
      name: this.formModel.name,
      photoUrl: this.formModel.photoUrl,
      username: this.formModel.username || null
    }));
  }

  public fileNameRewrite(fileName: string): string {
    return 'user/' + this.getCurrentUserId + '/avatar';
  }

  public getUploadUrl(fileName: string, fileType: string, options: any = {}) {
    options.fileType = fileType;
    return this.user.s3PUTSignedUrl(this.getCurrentUserId, fileName, options);
  }

  public onUploadComplete(item: any) {
    this.user.updateS3Photo(this.getCurrentUserId, {
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
          this.store.dispatch(new LoopbackAuthActions.updateUserProperties({
            photo: response
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
