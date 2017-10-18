import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

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
    private location: Location,
    private router: Router,
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
        this.profile$ = this.orm.User.findOne({
          where: {
            or: [
             {
               id: params['id']
             }, {
               slug: params['id']
             }
            ]
          },
          include: {
            relation: 'organizations',
            scope: {
              fields: ['id', 'name', 'photo']
            }
          }
        })
        .filter((user: User) => !!user)
        .do((user: User) => {
          if (user && user.slug && user.slug !== params['id']) {
            this.router.navigate([this.location.path().replace(params['id'], user.slug)], {replaceUrl: true});
          }
        });

        // this.profile$
        //   .subscribe((data) => console.log(data))
      });

    this.currentUserId = this.auth.getCurrentUserId();
  }
}
