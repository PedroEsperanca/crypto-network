import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { User, UserApi, OrganizationApi } from 'shared/api';

@Injectable()
export class ProfileResolver implements Resolve<User> {
  constructor(
    private user: UserApi,
    private organization: OrganizationApi,
  ) {}

  public resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.user.findOne({
      where: {
        id: route.params['id']
      },
      include: {
        relation: 'organizations',
        scope: {
          fields: ['name', 'photo']
        }
      }
    }).map((result: User) => {
      if (!result) {
        return this.organization.findOne({
            where: {
              id: route.params['id']
            }
          });
      } else {
        return result;
      }
    })
    .catch(() => {
      return this.organization.findOne({
        where: {
          id: route.params['id']
        }
      });
    });
  }
}
