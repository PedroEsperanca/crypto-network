import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { SDKStorage } from 'shared/api/storage/storage.swaps';
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
    @Inject(SDKStorage) protected storage: SDKStorage,
    private store: Store<IAppState>,
    private user: UserApi,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.take(1).subscribe((token: any) => {
      if (token.id && token.userId && token.ttl && token.created) {
        this.store.dispatch(new LoopbackAuthActions.setToken({
          id: token.id,
          ttl: parseInt(token.ttl, 10),
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
        }).take(1).subscribe(
          (result: User) => {
            this.store.dispatch(new LoopbackAuthActions.setToken({
              id: token.id,
              ttl: parseInt(token.ttl, 10),
              created: new Date().setTime(token.created),
              userId: token.userId,
              user: result,
              rememberMe: true,
              scopes: null
            }));

            if (this.storage.get(`$LoopBackSDK$invitationToken`)) {
              this.user.activate(result.id, this.storage.get(`$LoopBackSDK$invitationToken`))
                .take(1)
                .subscribe(
                  (response: any) => {
                    if (response.error) {
                      this.store.dispatch(new AlertActions.SetAlert({
                        message: response.error_description,
                        type: 'error'
                      }));
                    } else {
                      try {
                        this.storage.remove(`$LoopBackSDK$invitationToken`);
                      } catch (err) {
                        console.error('Cannot access local/session storage:', err);
                      }

                      this.store.dispatch(new LoopbackAuthActions.updateUserProperties({
                        active: true
                      }));
                    }
                  },
                  (error) => this.store.dispatch(new AlertActions.SetAlert({
                    message: error.message,
                    type: 'error'
                  })),
                  () => this.router.navigate(['/' + token.userId])
                );
            } else {
              this.router.navigate(['/' + token.userId]);
            }
          },
          (error) => {
            this.router.navigate(['/' + token.userId]);
          }
        );
      } else if (token.error) {
        this.store.dispatch(new AlertActions.SetAlert({
          message: token.error,
          type: 'error'
        }));

        // TODO: redirect to last page
        this.router.navigate(['/']);
      }
    });
  }
}
