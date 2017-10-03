import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { ConfigService } from '@ngx-config/core';

import { LoopBackConfig } from 'shared/api';
import { Orm } from 'shared/api/orm';

@Component({
  selector: 'app-user-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  public config: any;
  public formModel: any = {
    email: '',
    password: ''
  };

  constructor(
    private orm: Orm,
    private configService: ConfigService
  ) {
    this.config = this.configService.getSettings();
  }

  public login() {
    this.orm.User.login(this.formModel, [
      'user',
      'user.oAuthClientApplications',
      'user.identities',
      'user.organizations'
    ]);
  }

  public goTo(provider: string) {
    window.location.href = LoopBackConfig.getPath() + provider;
  }
}
