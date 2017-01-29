import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ConfigService } from 'ng2-config';

import { User, UserApi, LoopBackAuth } from 'shared/api';

@Component({
  selector: 'settingsApplications',
  styleUrls: [ './applications.component.scss' ],
  templateUrl: './applications.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsApplicationsComponent {
  public config: any;
  public currentUser: User;

  constructor(
    public auth: LoopBackAuth,
    private user: UserApi,
    private configService: ConfigService,
  ) {
    this.config = this.configService.getSettings();
    this.currentUser = this.auth.getCurrentUserData();
  }
}
