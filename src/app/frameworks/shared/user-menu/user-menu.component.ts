import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';

import { ConfigService } from 'ng2-config';

import { LoopBackAuth, UserApi } from 'frameworks/api';

@Component({
  selector: 'user-menu',
  styleUrls: [ './user-menu.component.scss' ],
  templateUrl: './user-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserMenuComponent {
  public config: any;

  constructor(
    public auth: LoopBackAuth,
    private configService: ConfigService,
    private location: Location,
    private user: UserApi
  ) {
    this.config = this.configService.getSettings();
    console.log();
  }

  public gotoProfile() {
    this.location.replaceState('/' + this.auth.getCurrentUserId());
  }

  public logout() {
    this.user.logout().subscribe((response) => this.location.replaceState(''));
  }
}
