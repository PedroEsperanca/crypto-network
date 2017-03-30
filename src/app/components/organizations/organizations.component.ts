import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ConfigService } from '@nglibs/config';

import {
  SDKToken,
  User,
  Organization,
} from 'shared/api';
import {
  IAppState,
} from 'shared/ngrx';

@Component({
  selector: 'organizations',
  styleUrls: [ './organizations.component.scss' ],
  templateUrl: './organizations.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationsComponent implements OnDestroy {
  public config: any;

  public organization$: Observable<Organization>;
  public isNew: boolean = true;

  private subscriptions: Subscription[] = [];

  constructor(
    private configService: ConfigService,
    private store: Store<IAppState>,
    private route: ActivatedRoute
  ) {
    this.config = this.configService.getSettings();

    this.subscriptions.push(this.store.select('router').subscribe((router: any) => {
      if (!router) { return; }
      console.log(router);
      this.isNew = /\/(new|not-found)$/.test(router.path);
    }));

    this.organization$ = this.route.data;
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
