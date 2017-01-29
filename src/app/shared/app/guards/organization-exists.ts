import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/combineLatest';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { UserApi, OrganizationApi, LoopBackAuth } from 'shared/api';
import { IAppState, hasOrganization } from 'shared/ngrx';
import { ApplicationActions, OrganizationActions } from 'shared/ngrx/actions';

/**
 * Guards are hooks into the route resolution process, providing an opportunity
 * to inform the router's traversal process whether the route should continue
 * to be considered a candidate route. Guards must return an observable of
 * true or false.
 *
 * More on guards: https://github.com/ngrx/router/blob/master/docs/overview/guards.md
 */
@Injectable()
export class OrganizationExistsGuard implements CanActivate {
  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private auth: LoopBackAuth,
    private user: UserApi,
    private app: OrganizationApi,
    private applicationActions: ApplicationActions,
    private appActions: OrganizationActions
  ) { }

  /**
   * This is the actual method the router will call when our guard is run.
   *
   * Our guard waits for the collection to load, then it checks if we need
   * to request a app from the API or if we already have it in our cache.
   * If it finds it in the cache or in the API, it returns an Observable
   * of `true` and the route is rendered successfully.
   *
   * If it was unable to find it in our cache or in the API, this guard
   * will return an Observable of `false`, causing the router to move
   * on to the next candidate route. In this case, it will move on
   * to the 404 page.
   */
  public canActivate(
    // Not using but worth knowing about
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    console.log('OrganizationExistsGuard', 'asDSGSADGSDGSAFGDAFHDGHSD');
    return this.hasOrganization(route.params['id'])
      .switchMap((result) => {
        if (result) {
          this.store.dispatch(this.applicationActions.selectOrganization(route.params['id']));
          return Observable.of(true);
        } else {
          this.router.navigate(['/not-found']);
          return Observable.of(false);
        }
      });
  }

  /**
   * This method checks if a app with the given ID is already registered
   * in the Store
   */
  private hasOrganizationInStore(id: string) {
    return this.store.let(hasOrganization(id)).take(1);
  }

  /**
   * This method loads a app with the given ID from the API and caches
   * it in the store, returning `true` or `false` if it was found.
   */
  private hasOrganizationInApi(id: string) {
    return this.user.findByIdOrganizations(this.auth.getCurrentUserId(), id)
      .map((app) => this.appActions.loadOrganization(app))
      .do((action) => this.store.dispatch(action))
      .map((app) => !!app)
      .catch(() => Observable.of(false));
  }

  /**
   * `hasOrganization` composes `hasOrganizationInStore` and `hasOrganizationInApi`. It first checks
   * if the app is in store, and if not it then checks if it is in the
   * API.
   */
  private hasOrganization(id: string) {
    return this.hasOrganizationInStore(id)
      .switchMap((inStore) => {
        if (inStore) {
          return Observable.of(inStore);
        }

        return this.hasOrganizationInApi(id);
      });
  }
}
