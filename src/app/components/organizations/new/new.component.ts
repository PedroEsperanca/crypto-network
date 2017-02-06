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
  logo?: string;
  description?: string;
  redirectURIs: string;
}

@Component({
  selector: 'organizationNew',
  styleUrls: [ './new.component.scss' ],
  templateUrl: './new.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationsNewComponent implements OnDestroy {
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

  public newOrganization() {
    this.user.createOrganizations(this.currenUser.id, this.formModel).subscribe(
      (response: any) => {
        if (response.error) {
          this.store.dispatch(new AlertActions.setAlert({
            message: response.error_description,
            type: 'error'
          }));
        } else {
          this.store.dispatch(new LoopbackAuthActions.updateUserState({
            organizations: [...this.currenUser.organizations, response]
          }));

          this.router.navigate(['organizations/' + response.id + '/settings/']);
        }
      },
      (error) => this.store.dispatch(new AlertActions.setAlert({
        message: error.message,
        type: 'error'
      }))
    );
  }
}
