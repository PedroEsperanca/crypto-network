import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { User, UserApi } from 'frameworks/api';

@Injectable()
export class ProfileResolver implements Resolve<User> {
  constructor(
    private user: UserApi,
  ) {}

  public resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> | Promise<User> | User {
    return this.user.findOne({
      where: {
        id: route.params['id']
      }
    });
  }
}
