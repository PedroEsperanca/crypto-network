import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { ConfigService } from 'ng2-config';

import { UserInterface, LoopBackConfig } from 'frameworks/api';
import { IAppState } from 'frameworks/ngrx';
import { UserActions } from 'frameworks/api/actions';
import { SDKStorage } from 'frameworks/api/storage/storage.swaps';

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
    private configService: ConfigService,
    private userActions: UserActions
  ) {
    this.config = this.configService.getSettings();
  }

  public login() {
    this.store.dispatch(this.userActions.login(this.formModel, [
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
