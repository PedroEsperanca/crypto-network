/* tslint:disable */
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';

import { Organization } from '../models/organization';
import { getOrganizationById } from '../reducers/organization';

@Injectable()
export class OrganizationResolver implements Resolve<Organization> {
  constructor(private store: Store<any>) {}

  public resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.store.let(getOrganizationById(route.params['organizationId'] || route.params['id']));
  }
}
