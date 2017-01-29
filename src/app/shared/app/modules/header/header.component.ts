import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ConfigService } from 'ng2-config';

import { LoopBackAuth, User } from 'shared/api';

@Component({
  selector: 'app-header',
  styleUrls: [ './header.component.scss' ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public config: any;
  public currentUser: User;

  constructor(
    public auth: LoopBackAuth,
    private configService: ConfigService
  ) {
    this.config = this.configService.getSettings();
    this.currentUser = this.auth.getCurrentUserData();
  }
}
