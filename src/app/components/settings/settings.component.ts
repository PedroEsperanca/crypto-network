import { Observable } from 'rxjs/Observable';

import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { ConfigService } from 'ng2-config';

import { LoopBackAuth, OrganizationInterface } from 'shared/api';
import { LoopBackFilter } from 'shared/api/models';
import {
  IAppState,
  getOrganizationsState,
  getOrganizations
} from 'shared/ngrx';

@Component({
  selector: 'settings.settings',
  styleUrls: [ './settings.component.scss' ],
  templateUrl: './settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent {
  public config: any;
  public organizations$: Observable<OrganizationInterface[]>;

  constructor(
    public auth: LoopBackAuth,
    private configService: ConfigService,
    private store: Store<IAppState>
  ) {
    this.config = this.configService.getSettings();

    this.organizations$ = store.let(getOrganizationsState())
      .switchMap((organizations) => store.let(getOrganizations(organizations.ids)));
  }

  public needToVerifyEmail(): boolean {
    return this.auth.getCurrentUserData().emailAddresses.filter((email: any) => {
      return !email.verified;
    }).length > 0;
  }
}
