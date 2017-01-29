import 'rxjs/add/operator/let';
import { Store } from '@ngrx/store';
import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

import { OrganizationInterface } from 'shared/api';
import { IAppState, getCurrentOrganization } from 'shared/ngrx';
import { OrganizationActions } from 'shared/ngrx/actions';

@Component({
  selector: 'organizationsEdit',
  styleUrls: [ './edit.component.scss' ],
  templateUrl: './edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationsEditComponent implements OnInit, OnDestroy {
  public formModel: OrganizationInterface;

  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<IAppState>,
    private organizationActions: OrganizationActions
  ) {}

  public ngOnInit() {
    this.subscriptions.push(this.store.let(getCurrentOrganization()).subscribe((organization) => {
      if (!organization) { return; }

      this.formModel = (<any> Object).assign({}, organization);
    }));
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public editOrganization() {
    this.store.dispatch(
      this.organizationActions.updateInCollection((<any> Object).assign({}, this.formModel))
    );
    // this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
