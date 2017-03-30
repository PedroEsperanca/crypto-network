import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { ConfigService } from '@nglibs/config';

import { UserInterface, LoopBackConfig } from 'shared/api';
import { IAppState } from 'shared/ngrx';
import { UserActions } from 'shared/api/actions';

@Component({
  selector: 'user.login',
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
