import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';

import { BaseComponent } from 'frameworks/core';

import { AppInterface } from 'frameworks/api';
import { AppState } from 'frameworks/app/reducers';
import { AppActions } from 'frameworks/app/actions';

@BaseComponent({
  selector: 'appsCreate',
  styleUrls: [ './create.component.scss' ],
  templateUrl: './create.component.html'
})
export class AppsCreateComponent {
  private formModel: AppInterface = {
    name: '',
    description: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
    private appActions: AppActions
  ) { }

  createApp() {
    this.store.dispatch(this.appActions.addToCollection(this.formModel));
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
