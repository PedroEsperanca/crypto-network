import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';

import { Component, ChangeDetectionStrategy } from '@angular/core';

import { AppInterface } from 'frameworks/api';
import { IAppState } from 'frameworks/ngrx';
import { AppActions } from 'frameworks/app/actions';

@Component({
  selector: 'appsCreate',
  styleUrls: [ './create.component.scss' ],
  templateUrl: './create.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppsCreateComponent {
  public formModel: AppInterface = {
    name: '',
    description: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<IAppState>,
    private appActions: AppActions
  ) { }

  public createApp() {
    this.store.dispatch(this.appActions.addToCollection(this.formModel));
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
