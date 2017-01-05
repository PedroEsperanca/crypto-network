import 'rxjs/add/operator/let';
import { Store } from '@ngrx/store';
import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

import { AppInterface } from 'frameworks/api';
import { IAppState } from 'frameworks/ngrx';
import { getCurrentApp } from 'frameworks/app/reducers';
import { AppActions } from 'frameworks/app/actions';

@Component({
  selector: 'appsEdit',
  styleUrls: [ './edit.component.scss' ],
  templateUrl: './edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppsEditComponent implements OnInit, OnDestroy {
  public formModel: AppInterface;

  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<IAppState>,
    private appActions: AppActions
  ) {}

  public ngOnInit() {
    this.subscriptions.push(this.store.let(getCurrentApp()).subscribe((app) => {
      if (!app) { return; }

      this.formModel = (<any> Object).assign({}, app);
    }));
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public editApp() {
    this.store.dispatch(
      this.appActions.updateInCollection((<any> Object).assign({}, this.formModel))
    );
    // this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
