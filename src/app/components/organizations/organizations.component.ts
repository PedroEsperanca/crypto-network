import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '@ngx-config/core';

import { OrganizationsService } from './organizations.service';

import {
  Organization,
} from 'shared/api';

@Component({
  selector: 'app-organizations',
  styleUrls: [ './organizations.component.scss' ],
  templateUrl: './organizations.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationsComponent {
  public config: any;

  public organization$: Observable<Organization>;

  constructor(
    private configService: ConfigService,
    private route: ActivatedRoute,
    private organizationService: OrganizationsService
  ) {
    this.config = this.configService.getSettings();

    route.params.take(1).subscribe((params) => {
      this.organization$ = this.organizationService.getOrganization(params.id);
    });
  }
}
