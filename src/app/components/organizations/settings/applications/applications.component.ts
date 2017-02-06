import 'rxjs/add/operator/let';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ConfigService } from 'ng2-config';

import { IAppState } from 'shared/ngrx';
import { User, getLoopbackAuthUser } from 'shared/api';

@Component({
  selector: 'settingsApplications',
  styleUrls: [ './applications.component.scss' ],
  templateUrl: './applications.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsApplicationsComponent {
  public config: any;
  public currentUser$: Observable<User>;

  constructor(
    private store: Store<IAppState>,
    private configService: ConfigService,
  ) {
    this.config = this.configService.getSettings();
    this.currentUser$ = this.store.let(getLoopbackAuthUser());
  }
}
