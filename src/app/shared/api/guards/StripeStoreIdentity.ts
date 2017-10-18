/* tslint:disable */
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { StripeStoreIdentityApi } from '../services/index';
import { getStripeStoreIdentityById } from '../reducers/StripeStoreIdentity';
import { StripeStoreIdentityActions } from '../actions/StripeStoreIdentity';

@Injectable()
export class StripeStoreIdentityExistsGuard implements CanActivate {
  constructor(
    private store: Store<any>,
    private StripeStoreIdentity: StripeStoreIdentityApi
  ) {}

  public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.hasEntity(route.params['StripeStoreIdentityId'] || route.params['id']);
  }

  protected hasEntityInStore(id: string): Observable<boolean> {
    return this.store.select(getStripeStoreIdentityById(id))
      .map((entitie) => !!entitie)
      .take(1);
  }

  protected hasEntityInApi(id: string): Observable<boolean> {
    return this.StripeStoreIdentity.exists(id)
      .map((response: any) => !!response.exists)
      .catch(() => {
        this.store.dispatch(new StripeStoreIdentityActions.guardFail());
        return of(false);
      });
  }

  protected hasEntity(id: string): Observable<boolean> {
    return this.hasEntityInStore(id)
      .switchMap((inStore) => {
        if (inStore) {
          return of(inStore);
        }

        return this.hasEntityInApi(id);
      });
  }
}
