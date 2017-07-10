import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '@ngx-config/core';

import { Orm } from 'shared/api/orm';

import {
  User,
} from 'shared/api';

@Component({
  selector: 'app-organizations-settings-people-home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleHomeComponent {
  public config: any;

  public users$: Observable<User[]>;

  private organizationId: string;

  constructor(
    private configService: ConfigService,
    private route: ActivatedRoute,
    private orm: Orm
  ) {
    this.config = this.configService.getSettings();

    route.parent.parent.parent.params.take(1).subscribe((params) => {
      this.organizationId = params.id;
      this.search();
    });
  }

  public search() {
    let filter = {};
    
    this.users$ = this.orm.Organization.getUsers(this.organizationId, filter);
  }
}

