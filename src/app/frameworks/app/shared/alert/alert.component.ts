import 'rxjs/add/operator/let';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import {
  IAppState,
  getAlertState
} from 'frameworks/ngrx';
import { IAlertState } from 'frameworks/ngrx/reducers/alert';
import { ConfigService } from 'ng2-config';

@Component({
  selector: 'app-alert',
  styleUrls: [ './alert.component.scss' ],
  templateUrl: './alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent {
  public config: any;
  public alert$: Observable<IAlertState>;

  constructor(
  	public configService: ConfigService,
  	private store: Store<IAppState>,
  ) {
    this.config = this.configService.getSettings();

    this.alert$ = store.let(getAlertState());
  }
}
