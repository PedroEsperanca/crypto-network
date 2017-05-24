import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { ConfigService } from '@ngx-config/core';

import { UserInterface, LoopBackConfig } from 'shared/api';
import { IAppState } from 'shared/ngrx';
import { UserActions } from 'shared/api/actions';

@Component({
  selector: 'app-user-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  public config: any;
  public formModel: UserInterface = {
    email: '',
    password: ''
  };

  constructor(
    private store: Store<IAppState>,
    private configService: ConfigService
  ) {
    this.config = this.configService.getSettings();
    console.log(this.config);
  }

  public login() {
    this.store.dispatch(new UserActions.login(this.formModel, [
      'user',
      'user.oAuthClientApplications',
      'user.identities',
      'user.organizations'
    ]));
  }

  public goTo(provider: string) {
    window.location.href = LoopBackConfig.getPath() + provider;
  }
}
