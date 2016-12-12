import 'rxjs/add/operator/let';
import { Store } from '@ngrx/store';
import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

import { BaseComponent } from 'frameworks/core';

import { AppInterface } from 'frameworks/api';
import { AppState, getCurrentApp } from 'frameworks/app/reducers';
import { AppActions } from 'frameworks/app/actions';

@BaseComponent({
  selector: 'appsEdit',
  styleUrls: [ './edit.component.scss' ],
  templateUrl: './edit.component.html'
})
export class AppsEditComponent implements OnInit, OnDestroy {
  private formModel: AppInterface;

  private subscriptions: Array<Subscription> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
    private appActions: AppActions
  ) {}

  ngOnInit() {
    this.subscriptions.push(this.store.let(getCurrentApp()).subscribe(app => {
      if (!app) return;

      this.formModel = (<any>Object).assign({}, app);
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  editApp() {
    this.store.dispatch(
      this.appActions.updateInCollection((<any>Object).assign({}, this.formModel))
    );
    // this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
