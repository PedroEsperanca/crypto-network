import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/last';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ConfigService } from '@ngx-config/core';

import {
  SDKToken,
  LoopBackAuth,
  UserApi,
  LoopbackAuthActions,
  getLoopbackAuthToken
} from 'shared/api';
import { IAppState, AlertActions } from 'shared/ngrx';
import { SDKStorage } from 'shared/api/storage/storage.swaps';


@Component({
  selector: 'app-user-invited',
  templateUrl: './invited.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvitedComponent {
  public config: any;

  constructor(
    private store: Store<IAppState>,
    private configService: ConfigService,
    private auth: LoopBackAuth,
    private user: UserApi,
    private route: ActivatedRoute,
    private router: Router,
    @Inject(SDKStorage) protected storage: SDKStorage
  ) {
    this.config = this.configService.getSettings();

    this.route.params.subscribe((params: any) => {
      if (params.token) {
        try {
          this.storage.set(`$LoopBackSDK$invitationToken`, params.token);
        } catch (err) {
          console.error('Cannot access local/session storage:', err);
        }

        if (this.auth.getCurrentUserId() && !this.auth.getCurrentUserData().active) {
          this.activate(params.token);
        } else {
          this.router.navigate(['/user/login']);
        }
      } else if (!this.auth.getCurrentUserId()) {
        this.router.navigate(['/']);
      }
    });
  }

  public activate(token: string) {
    this.user.activate(this.auth.getCurrentUserId(), token).subscribe(
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
      () => this.router.navigate(['/'])
    );
  }
}
