import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/last';
import '@ngrx/core/add/operator/select';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';

import { ModalDirective } from 'ng2-bootstrap';

import { AppInterface } from 'frameworks/api';
import { LoopBackFilter } from 'frameworks/api/models';
import { IAppState } from 'frameworks/ngrx';
import {
  getSearchAppsResults,
  getSearchAppsFilter
} from 'frameworks/app/reducers';
import { AppActions } from 'frameworks/app/actions';

@Component({
  selector: 'appsHome',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppsHomeComponent {
  @ViewChild('childModal') public childModal: ModalDirective;

  public searchFilter$: Observable<LoopBackFilter>;
  public apps$: Observable<AppInterface[]>;
  public selectedApp: any = {};
  public tempSearch: Subscription;

  constructor(
    private store: Store<IAppState>,
    private appActions: AppActions
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
    this.searchFilter$ = store.let(getSearchAppsFilter()).take(1);
    this.apps$ = store.let(getSearchAppsResults());

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

    this.store.dispatch(this.appActions.search(filter));
  }

  public deleteApp(app: AppInterface) {
    this.store.dispatch(this.appActions.removeFromCollection(app));
  }

  public showChildModal(app: any): void {
    this.childModal.show(app);
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }
}
