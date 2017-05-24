import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { IAppState, AlertActions } from 'shared/ngrx';
import { LoopbackAuthActions } from 'shared/api/actions';
import { User, UserApi } from 'shared/api';

@Component({
  selector: 'app-user-passport',
  templateUrl: './passport.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PassportComponent {

  constructor(
    private store: Store<IAppState>,
    private user: UserApi,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((token: any) => {
      if (token.id && token.userId && token.ttl && token.created) {
        this.store.dispatch(new LoopbackAuthActions.setToken({
          id: token.id,
          ttl: parseInt(token.ttl, 10),
          issuedAt: new Date().setTime(token.created),
          created: new Date().setTime(token.created),
          userId: token.userId,
          user: {},
          rememberMe: true,
          scopes: null
        }));

        this.user.findById(token.userId, {
          include: [
            'oAuthClientApplications',
            'identities',
            'organizations'
          ]
        }).subscribe(
          (result: User) => {
            this.store.dispatch(new LoopbackAuthActions.setToken({
              id: token.id,
              ttl: parseInt(token.ttl, 10),
              issuedAt: new Date().setTime(token.created),
              created: new Date().setTime(token.created),
              userId: token.userId,
              user: result,
              rememberMe: true,
              scopes: null
            }));

            this.router.navigate(['/' + token.userId]);
          },
          (error) => {
            this.router.navigate(['/' + token.userId]);
          }
        );
      } else if (token.error) {
        this.store.dispatch(new AlertActions.setAlert({
          message: token.error,
          type: 'error'
        }));

        // TODO: redirect to last page
        this.router.navigate(['/']);
      }
    });
  }
}
