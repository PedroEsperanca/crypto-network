import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orm } from 'shared/api/orm';

import {
  StripeSource,
  StripeCharge
} from 'shared/api';

@Component({
  selector: 'app-organization-settings-billing-home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsBillingHomeComponent {
  public sources$: Observable<StripeSource[]>;
  public charges$: Observable<StripeCharge[]>;
  public organizationId$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private orm: Orm
  ) {
    this.organizationId$ = route.parent.parent.parent.parent.parent.params;
    this.sources$ = this.organizationId$.switchMap((params) => this.orm.Organization.getStripeSources(params.id));
    this.charges$ = this.organizationId$.switchMap((params) => this.orm.Organization.getStripeCharges(params.id));
  }
}
