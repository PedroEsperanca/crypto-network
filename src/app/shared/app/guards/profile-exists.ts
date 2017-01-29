import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { ConfigService } from 'ng2-config';

import { LoopBackAuth, UserApi, OrganizationApi } from 'shared/api';

@Injectable()
export class ProfileExistsGuard implements CanActivate {
  constructor(
    private configService: ConfigService,
    private router: Router,
    private user: UserApi,
    private organization: OrganizationApi,
    private auth: LoopBackAuth
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.user.exists(route.params['id'])
      .map((user: any) => {
        if (!user.exists) {
          return this.organization.exists(route.params['id'])
            .map((org: any) => {
              if (!org.exists) {
                this.router.navigate(['/not-found']);
              }
              return org.exists;
            })
            .catch(() => {
              this.router.navigate(['/not-found']);
              return Observable.of(false);
            });
        } else {
          return user.exists;
        }
      })
      .catch(() => {
        this.router.navigate(['/not-found']);
        return Observable.of(false);
      });
  }
}
