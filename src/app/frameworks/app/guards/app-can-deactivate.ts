import 'rxjs/add/operator/take';
import 'rxjs/add/operator/first';
import 'rxjs/add/observable/concat';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  CanDeactivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { IAppState } from 'frameworks/ngrx';
import { ApplicationActions } from 'frameworks/ngrx/actions';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

/**
 * Guards are hooks into the route resolution process, providing an opportunity
 * to inform the router's traversal process whether the route should continue
 * to be considered a candidate route. Guards must return an observable of
 * true or false.
 *
 * More on guards: https://github.com/ngrx/router/blob/master/docs/overview/guards.md
 */
@Injectable()
export class AppCanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  constructor(
    private store: Store<IAppState>,
    private applicationActions: ApplicationActions
  ) { }

  public canDeactivate(component: CanComponentDeactivate): Observable<boolean> | boolean {
    this.store.dispatch(this.applicationActions.selectApp(null));
    return true;
  }
}
