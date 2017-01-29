import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { IAppState } from 'shared/ngrx';
import { LoopbackAuthActions } from 'shared/api/actions';
import { LoopBackAuth, User, UserApi } from 'shared/api';

@Component({
  selector: 'user.login',
  templateUrl: './passport.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PassportComponent {

  constructor(
    private store: Store<IAppState>,
    private loopbackAuthActions: LoopbackAuthActions,
    private auth: LoopBackAuth,
    private user: UserApi,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((token: any) => {
      if (token.id && token.userId && token.ttl && token.created) {
        this.store.dispatch(this.loopbackAuthActions.setToken({
          id: token.id,
          ttl: parseInt(token.ttl, 10),
          issuedAt: new Date().setTime(token.created),
          created: new Date().setTime(token.created),
          userId: token.userId,
          user: {},
          rememberMe: true
        }));

        this.user.findById(token.userId, {
          include: [
            'oAuthClientApplications',
            'identities',
            'organizations'
          ]
        }).subscribe(
          (result: User) => {
            this.store.dispatch(this.loopbackAuthActions.setToken({
              id: token.id,
              ttl: parseInt(token.ttl, 10),
              issuedAt: new Date().setTime(token.created),
              created: new Date().setTime(token.created),
              userId: token.userId,
              user: result,
              rememberMe: true
            }));

            this.router.navigate(['/' + token.userId]);
          },
          (error) => {
            this.router.navigate(['/' + token.userId]);
          }
        );
      }
    });
  }
}
