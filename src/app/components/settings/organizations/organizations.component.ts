import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ConfigService } from 'ng2-config';

import { User, UserApi, LoopBackAuth } from 'frameworks/api';

@Component({
  selector: 'settingsOrganizations',
  styleUrls: [ './organizations.component.scss' ],
  templateUrl: './organizations.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsOrganizationsComponent {
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
