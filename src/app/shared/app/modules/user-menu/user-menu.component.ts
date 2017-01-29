import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { ConfigService } from 'ng2-config';

import { LoopBackAuth, User, UserApi } from 'shared/api';

@Component({
  selector: 'user-menu',
  styleUrls: [ './user-menu.component.scss' ],
  templateUrl: './user-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserMenuComponent {
  public config: any;
  public currentUser: User;

  constructor(
    public auth: LoopBackAuth,
    private configService: ConfigService,
    private router: Router,
    private user: UserApi
  ) {
    this.config = this.configService.getSettings();
    this.currentUser = this.auth.getCurrentUserData();
  }

  public logout() {
    this.user.logout().subscribe(
      (response) => {
        this.auth.clear();
        this.router.navigate(['/']);
      },
      () => {
        this.auth.clear();
        this.router.navigate(['/']);
      }
    );
  }
}
