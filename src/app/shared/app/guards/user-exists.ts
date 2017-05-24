import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { ConfigService } from '@ngx-config/core';

import { LoopBackAuth, UserApi } from 'shared/api';

@Injectable()
export class UserExistsGuard implements CanActivate {
  constructor(
    private configService: ConfigService,
    private router: Router,
    private user: UserApi,
    private auth: LoopBackAuth
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.user.exists(route.params['id'])
      .map((result: any) => {
        if (!result.exists) {
          this.router.navigate(['/not-found']);
        }
        return result.exists;
      })
      .catch(() => {
        this.router.navigate(['/not-found']);
        return Observable.of(false);
      });
  }
}
