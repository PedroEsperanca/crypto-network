import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/last';
import '@ngrx/core/add/operator/select';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';

import { ModalDirective } from 'ng2-bootstrap';

import { OrganizationInterface } from 'frameworks/api';
import { LoopBackFilter } from 'frameworks/api/models';
import { IAppState } from 'frameworks/ngrx';
import {
  getSearchOrganizationsResults,
  getSearchOrganizationsFilter
} from 'frameworks/app/reducers';
import { OrganizationActions } from 'frameworks/app/actions';

@Component({
  selector: 'organizationsHome',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationsHomeComponent {
  @ViewChild('childModal') public childModal: ModalDirective;

  public searchFilter$: Observable<LoopBackFilter>;
  public organizations$: Observable<OrganizationInterface[]>;
  public selectedOrganization: any = {};
  public tempSearch: Subscription;

  constructor(
    private store: Store<IAppState>,
    private organizationActions: OrganizationActions
  ) {
    /**
     * Selectors can be applied with the `let` operator, which passes the source
     * observable to the provided function. This allows us an expressive,
     * composable technique for creating view projections.
     *
     * More on `let`: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35#let
     * More on selectors:
     * https://gist.github.com/btroncone/a6e4347326749f938510#extracting-selectors-for-reuse
     */
    this.searchFilter$ = store.let(getSearchOrganizationsFilter()).take(1);
    this.organizations$ = store.let(getSearchOrganizationsResults());

    this.search('');
  }

  public search(query: string) {
    /**
     * All state updates are handled through dispatched actions in 'smart'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our application.
     */
    let filter: LoopBackFilter = null;

    if (query !== '') {
      filter = {
        where: {
          name: query
        },
        include: 'nodes'
      };
    }

    this.store.dispatch(this.organizationActions.search(filter));
  }

  public deleteOrganization(organization: OrganizationInterface) {
    this.store.dispatch(this.organizationActions.removeFromCollection(organization));
  }

  public showChildModal(organization: any): void {
    // this.childModal.show(organization);
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }
}
