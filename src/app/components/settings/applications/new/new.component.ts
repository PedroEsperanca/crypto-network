import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { ConfigService } from 'ng2-config';

import {
  User,
  UserApi,
  LoopbackAuthActions,
  getLoopbackAuthUser
} from 'shared/api';
import { IAppState, AlertActions } from 'shared/ngrx';

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
export class SettingsApplicationsNewComponent implements OnDestroy {
  public config: any;
  public formModel: FormI = {
    name: '',
    photo: '',
    clientURI: '',
    logoURI: '',
    description: '',
    redirectURIs: ''
  };

  public currenUser: User;

  private subscriptions: Subscription[] = [];

  constructor(
    private store: Store<IAppState>,
    private alertActions: AlertActions,
    private loopbackAuthActions: LoopbackAuthActions,
    private router: Router,
    private user: UserApi,
    private configService: ConfigService
  ) {
    this.config = this.configService.getSettings();

    this.subscriptions.push(this.store.let(getLoopbackAuthUser()).subscribe((currentUser: User) => {
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
      logoURI: this.formModel.logoURI,
      description: this.formModel.description,
      redirectURIs: this.formModel.redirectURIs.replace(', ', ',').split(',')
    }).subscribe(
      (response: any) => {
        if (response.error) {
          this.store.dispatch(this.alertActions.setAlert(response.error_description, 'error'));
        } else {
          this.store.dispatch(this.loopbackAuthActions.updateUserProperties({
            oAuthClientApplications: this.currenUser.oAuthClientApplications.push(response)
          }));

          this.router.navigate(['/settings/applications/' + response.id]);
        }
      },
      (error) => this.store.dispatch(this.alertActions.setAlert(error.message, 'error'))
    );
  }
}
