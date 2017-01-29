import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { ConfigService } from 'ng2-config';

import { LoopBackAuth } from 'shared/api';

@Injectable()
export class UserLoggedGuard implements CanActivate {
  constructor(
    private configService: ConfigService,
    private router: Router,
    private auth: LoopBackAuth
  ) {}

  public canActivate() {
    if (this.auth.getCurrentUserId()) {
      if (this.configService.getSettings('settings').login.validateEmails) {
        if (!this.auth.getCurrentUserData() ||
          this.auth.getCurrentUserData()
            .emailAddresses.filter((e) => { return !e.verified; }).length) {
          this.router.navigate(['/user/verify']);
          return false;
        }
      }

      if (this.configService.getSettings('settings').login.validatePhones) {
        if (!this.auth.getCurrentUserData() ||
          this.auth.getCurrentUserData()
            .phoneNumbers.filter((e) => { return !e.verified; }).length) {
          this.router.navigate(['/user/verify']);
          return false;
        }
      }

      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
