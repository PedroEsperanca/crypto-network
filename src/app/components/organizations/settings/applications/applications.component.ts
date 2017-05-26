import 'rxjs/add/operator/let';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ConfigService } from '@ngx-config/core';

import { IAppState } from 'shared/ngrx';
import { User, getLoopbackAuthAccount } from 'shared/api';

@Component({
  selector: 'app-organizations-settings-applications',
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
    this.currentUser$ = this.store.select(getLoopbackAuthAccount());
  }
}
