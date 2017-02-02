import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ConfigService } from 'ng2-config';
import { ModalDirective } from 'ng2-bootstrap';

import {
  User,
  UserApi,
  LoopbackAuthActions,
  getLoopbackAuthUser
} from 'shared/api';
import { IAppState, AlertActions } from 'shared/ngrx';

@Component({
  selector: 'settingsApplicationsApplication',
  styleUrls: [ './application.component.scss' ],
  templateUrl: './application.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsApplicationsApplicationComponent implements OnInit, OnDestroy  {
  public config: any;
  public formModel: any = {};
  public owner: any = {};

  public currentUser: User;

  public transferModel: any = {};
  public deleteModel: any = {};

  public modalMessage: any = {};

  public transferModal: ModalDirective;
  public removeModal: ModalDirective;
  public resetModal: ModalDirective;
  public deleteModal: ModalDirective;

  private subscriptions: Subscription[] = [];

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private route: ActivatedRoute,
    private user: UserApi,
    private configService: ConfigService,
    private cd: ChangeDetectorRef,
  ) {
    this.config = this.configService.getSettings();
  }

  public ngOnInit() {
    this.subscriptions.push(this.store.let(getLoopbackAuthUser()).subscribe((currentUser: User) => {
      if (!currentUser) { return; }

      this.currentUser = (<any> Object).assign({}, currentUser);

      this.formModel =
        (<any> Object).assign({}, currentUser.oAuthClientApplications.filter((app) => {
          return app.id === this.route.snapshot.params['id'];
        })[0]);

      if (this.formModel.userId) {
        this.owner = currentUser;
      } else if (this.formModel.organizationId) {
        this.owner = currentUser.organizations.filter((org) => {
          return org.id === this.formModel.organizationId;
        })[0];
      }
    }));
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public updateApp() {
    this.user.createOAuthClientApplications(this.currentUser.id, {
      name: this.formModel.name,
      clientURI: this.formModel.clientURI,
      logoURI: this.formModel.logoURI,
      description: this.formModel.description,
      redirectURIs: this.formModel.redirectURIs.replace(', ', ',').split(',')
    }).subscribe(
      (response: any) => {
        if (response.error) {
          this.store.dispatch(new AlertActions.setAlert({
            message: response.error_description,
            type: 'error'
          }));
        } else {
          this.store.dispatch(new LoopbackAuthActions.updateUserProperties({
            oAuthClientApplications: this.currentUser.oAuthClientApplications.push(response)
          }));

          this.router.navigate(['/settings/applications/' + response.id]);
        }
      },
      (error) => this.store.dispatch(new AlertActions.setAlert({
        message: error.message,
        type: 'error'
      }))
    );
  }

  public transferApp() {
    // TODO: transfer flow
    if (this.transferModel.name !== this.formModel.name) {
      this.modalMessage = {warning: 'Application name mismatch!'};
      return this.cd.markForCheck();
    }
    console.log(this.transferModel);
  }

  public revokeApp() {
    // TODO: revoke flow
  }

  public resetApp() {
    // TODO: reset flow
  }

  public deleteApp() {
    // TODO: delete flow
    // TODO: transfer flow
    if (this.deleteModel.name !== this.formModel.name) {
      this.modalMessage = {warning: 'Application name mismatch!'};
      return this.cd.markForCheck();
    }
    console.log(this.deleteModel);
  }
}
