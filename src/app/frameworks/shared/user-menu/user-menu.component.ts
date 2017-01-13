import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

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
    private router: Router,
    private user: UserApi
  ) {
    this.config = this.configService.getSettings();
  }

  public logout() {
    this.user.logout().subscribe(
      (response) => this.router.navigate(['/']),
      () => this.router.navigate(['/'])
    );
  }
}
