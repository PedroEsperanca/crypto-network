import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { ConfigService } from '@ngx-config/core';

import {
  User,
  UserApi,
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
  selector: 'app-organizations-settings-applications-new',
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
    logo: '',
    description: '',
    redirectURIs: ''
  };

  public currenUser: User;

  private subscriptions: Subscription[] = [];

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private user: UserApi,
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
          this.store.dispatch(new AlertActions.setAlert({
            message: response.error_description,
            type: 'error'
          }));
        } else {
          this.store.dispatch(new LoopbackAuthActions.updateUserState({
            oAuthClientApplications: [...this.currenUser.oAuthClientApplications, response]
          }));

          this.router.navigate(['/settings/applications/' + response.id]);
        }
      },
      (error) => this.store.dispatch(new AlertActions.setAlert({
        message: error.message,
        type: 'error'
      }))
    );
  }
}
