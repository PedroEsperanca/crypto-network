import { Observable } from 'rxjs/Observable';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Component, ChangeDetectionStrategy, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '@ngx-config/core';
import { Store } from '@ngrx/store';

import { Orm } from 'shared/api/orm';

import {
  User,
  UserApi,
  OrganizationApi
} from 'shared/api';
import { IAppState, AlertActions } from 'shared/ngrx';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'app-organizations-settings-subscriptions-home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubscriptionsHomeComponent implements OnDestroy {
  @ViewChild('selectInvite') public selectInvite;

  public config: any;

  public users$: Observable<User[]>;
  public users: User[];

  private organizationId: string;

  private searchUsers$: ReplaySubject<string> = new ReplaySubject(1);

  private destroyStream$: AsyncSubject<any> = new AsyncSubject();

  constructor(
    private store: Store<IAppState>,
    private configService: ConfigService,
    private route: ActivatedRoute,
    private orm: Orm,
    private user: UserApi,
    private organization: OrganizationApi
  ) {
    this.config = this.configService.getSettings();

    route.parent.parent.parent.params.take(1).subscribe((params) => {
      this.organizationId = params.id;
      this.search();

      this.organization.getUsers(this.organizationId)
        .takeUntil(this.destroyStream$)
        .subscribe((users) => {
          this.users = users;
          console.log(this.users);
        });
    });

    this.searchUsers$
      .auditTime(1000)
      .takeUntil(this.destroyStream$)
      .subscribe((value) => {
        if (value.length < 3) {
          this.selectInvite.items = [];

          (this.selectInvite as any).open();
          return;
        }

        this.user.find({
          where: {
            or: [
              {
                name: { like: value }
              },
              {
                email: { like: value }
              },
              {
                'emailAddresses.email': { like: value }
              }
            ]
          }
        }).subscribe(
          (response: any) => {
            if (response.error) {
              this.store.dispatch(new AlertActions.SetAlert({
                message: response.error_description,
                type: 'error'
              }));
            } else {
              if (response.length) {
                this.selectInvite.items = response.map((key) => {
                  if (this.users.find((el) => el.id === key.id)) {
                    return {
                      id: 'alreadyMember',
                      text: `<img src="${key.photo.url}"> ${key.name} <i class="fa fa-lg fa-check"></i><p>Already in this organization</p>`
                    };
                  } else {
                    return {
                      id: key,
                      text: `<img src="${key.photo.url}"> ${key.name} <i class="fa fa-lg fa-plus"></i>`
                    };
                  }
                });

                (this.selectInvite as any).open();
              } else if (emailRegex.test(value)) {
                this.selectInvite.items = [{
                  id: value,
                  text: `<i class="fa fa-lg fa-envelope-o"></i> invite ${value} <i class="fa fa-lg fa-plus"></i>`,
                }];

                (this.selectInvite as any).open();
              } else {
                this.selectInvite.items = [{
                  id: 'nomember',
                  text: `${value} isn't a member`,
                }];

                (this.selectInvite as any).open();
              }
              console.log(this.selectInvite);
            }
          },
          (error) => this.store.dispatch(new AlertActions.SetAlert({
            message: error.message,
            type: 'error'
          }))
        );
      });
  }

  public ngOnDestroy() {
    this.destroyStream$.next(1);
    this.destroyStream$.complete();
  }

  public search() {
    let filter = {};

    this.users$ = this.organization.getUsers(this.organizationId, filter);
  }

  public searchUsers(value: any): void {
    this.searchUsers$.next(value);
  }

  public inviteUser(value: any): void {
    console.log(value);
    if (typeof value.id === 'string') {
      if (value.id === 'nomember' || value.id === 'alreadyMember') {
        this.selectInvite.active = [];
        (this.selectInvite as any).open();
      } else {
        // TODO: invite with email address SYSTEM
      }
    } else {
      this.orm.Organization.linkUsers(this.organizationId, value.id.id);
    }
  }
}

