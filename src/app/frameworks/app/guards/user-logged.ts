import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { LoopBackAuth } from 'frameworks/api';

@Injectable()
export class UserLoggedGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: LoopBackAuth
  ) {}

  canActivate() {
    if (this.auth.getCurrentUserId()) {
      if (!this.auth.getCurrentUserData() ||
        this.auth.getCurrentUserData().emailAddresses.filter(e => { return !e.verified; }).length) {
        this.router.navigate(['/user/verify']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
