import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { User, UserApi } from 'frameworks/api';

@Injectable()
export class ProfileResolver implements Resolve<User> {
  constructor(
    private user: UserApi,
    private router: Router
  ) {}

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<User> | User {
    return this.user.findOne({
      where: {
        id: route.params['id']
      }
    }).map((user) => {
      if (user) {
        return user;
      } else {
        this.router.navigate(['/not-found']);
        return false;
      }
    }).catch(() => {
      this.router.navigate(['/not-found']);
      return Observable.of(false);
    }).first();
  }
}
