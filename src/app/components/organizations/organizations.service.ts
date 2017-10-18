import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Orm } from 'shared/api/orm';

import { Organization } from 'shared/api';

@Injectable()
export class OrganizationsService {
  public organization$: Observable<Organization>

  constructor(
    private location: Location,
    private router: Router,
    private orm: Orm
  ) {}

  public getOrganization(id?: string): Observable<Organization> {
    if (!this.organization$ && id) {
      this.organization$ = this.orm.Organization.findOne(<any>{
        where: {
          or: [
           {
             id: id
           }, {
             slug: id
           }
          ]
        },
        counts: ['users', 'products', 'subscriptions'],
        include: ['stripeStoreIdentity']
      })
      .auditTime(0)
      .filter((org: Organization) => !!org)
      .do((org: Organization) => {
        if (org.slug && org.slug !== id) {
          this.router.navigate([this.location.path().replace(id, org.slug)], {replaceUrl: true});
        }
      })
      .publishReplay(1).refCount()
    }

    return this.organization$
  }
}
