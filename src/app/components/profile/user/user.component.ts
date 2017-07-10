import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConfigService } from '@ngx-config/core';

import { User, LoopBackAuth } from 'shared/api';
import { Orm } from 'shared/api/orm';

@Component({
  selector: 'app-profile-user',
  styleUrls: [ './user.component.scss' ],
  templateUrl: './user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileUserComponent implements OnInit {
  public config: any;
  public profile$: Observable<User>;
  public currentUserId: string;

  constructor(
    public auth: LoopBackAuth,
    private route: ActivatedRoute,
    private orm: Orm,
    private configService: ConfigService
  ) {
    this.config = this.configService.getSettings();
  }

  public ngOnInit() {
    this.route.params
      .take(1)
      .subscribe((params) => {
        this.profile$ = this.orm.User.findById(params['id'], {
          include: {
            relation: 'organizations',
            scope: {
              fields: ['name', 'photo']
            }
          }
        });

        this.profile$.subscribe((data) => console.log(data))
      });

    this.currentUserId = this.auth.getCurrentUserId();
  }
}
