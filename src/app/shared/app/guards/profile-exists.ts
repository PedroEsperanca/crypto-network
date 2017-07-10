/* tslint:disable */
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/let';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { UserApi, OrganizationApi } from 'shared/api/services/index';
import { getUserById, getOrganizationById } from 'shared/api/reducers';

@Injectable()
export class ProfileExistsGuard implements CanActivate {
  public id: string;

  constructor(
    private store: Store<any>,
    private router: Router,
    private User: UserApi,
    private Organization: OrganizationApi
  ) {}

  public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    this.id = route.params['UserId'] || route.params['OrganizationId'] || route.params['id'];

    return this.hasUserInStore(route.params['UserId'] || route.params['id'])
      .switchMap((inStore) => {
        if (inStore) {
          return of(inStore);
        }

        return this.hasOrganizationInStore(route.params['OrganizationId'] || route.params['id'])
          .switchMap((inStore) => {
            if (inStore) {
              this.router.navigate(['/organizations/'+ this.id]);
              return of(false);
            }

            return this.hasUserInApi(route.params['UserId'] || route.params['id'])
              .switchMap((inApi) => {
                if (inApi) {
                  return of(true);
                }

                return this.hasOrganizationInApi(route.params['OrganizationId'] || route.params['id']);
              });
          });
      });
  }

  protected hasOrganizationInStore(id: string): Observable<boolean> {
    return this.store.select(getOrganizationById(id))
      .map((entitie) => !!entitie)
      .take(1);
  }

  protected hasOrganizationInApi(id: string): Observable<boolean> {
    return this.Organization.exists(id)
      .map((response: any) => {
        this.router.navigate(['/organizations/'+ this.id]);
        return false;
      })
      .catch(() => {
        this.router.navigate(['/not-found']);
        return of(false);
      });
  }

  protected hasUserInStore(id: string): Observable<boolean> {
    return this.store.select(getUserById(id))
      .map((entitie) => !!entitie)
      .take(1);
  }

  protected hasUserInApi(id: string): Observable<boolean> {
    return this.User.exists(id)
      .map((response: any) => !!response.exists)
      .catch(() => {
        return of(false);
      });
  }
}
