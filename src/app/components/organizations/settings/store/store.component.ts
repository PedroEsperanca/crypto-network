import { AsyncSubject } from 'rxjs/AsyncSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConfigService } from '@ngx-config/core';

import { Orm } from 'shared/api/orm';

import {
  Organization,
  OrganizationApi
} from 'shared/api';

@Component({
  selector: 'app-organizations-settings-store',
  styleUrls: [ './store.component.scss' ],
  templateUrl: './store.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsStoreComponent implements OnDestroy {
  public config: any;
  public formModel: Organization;
  public formModel$: ReplaySubject<Organization> = new ReplaySubject(1);

  private organizationId: string;

  private destroyStream$: AsyncSubject<any> = new AsyncSubject();

  constructor(
    private configService: ConfigService,
    private route: ActivatedRoute,
    private orm: Orm,
    private organization: OrganizationApi
  ) {
    this.config = this.configService.getSettings();

    route.parent.parent.parent.params.take(1).subscribe((params) => {
      this.organizationId = params.id;
    });
  }

  public ngOnDestroy() {
    this.destroyStream$.next(1);
    this.destroyStream$.complete();
  }
}
