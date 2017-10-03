import { Component, ViewChild, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AsyncSubject } from 'rxjs/AsyncSubject';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { ModalActions } from 'shared/ngrx/actions/modal';
import { IAppState, getModalState } from 'shared/ngrx/index';

import { LoopBackAuth, User,  UserApi } from 'shared/api';

@Component({
  selector: 'app-modal-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalInviteComponent implements OnInit, OnDestroy {
  @ViewChild('inviteFriendsModal') inviteFriendsModal: ModalDirective;

  public form: FormGroup

  private currentUser: User;

  public invite1: any = {name: '', email: ''};
  public invite2: any = {name: '', email: ''};
  public invite3: any = {name: '', email: ''};
  public invite4: any = {name: '', email: ''};
  public invite5: any = {name: '', email: ''};

  public urlAppShort = 'goo.gl/XJG1kf';

  private urlsToFill: string[];

  private isInitialized = false;

  private isModalOpened: boolean

  public destroyStream$: AsyncSubject<any> = new AsyncSubject();

  constructor(
    private store: Store<IAppState>,
    private auth: LoopBackAuth,
    private userApi: UserApi
  ) { }

  ngOnInit() {

    this.currentUser = this.auth.getCurrentUserData();

    this.form = new FormGroup({
      invite1Name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      invite1Email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      invite2Name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      invite2Email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      invite3Name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      invite3Email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      invite4Name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      invite4Email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      invite5Name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      invite5Email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      urlAppToCopy: new FormControl('')
    })

    this.store.select(getModalState)
      .takeUntil(this.destroyStream$)
      .subscribe((modalState) => {
        console.log(modalState);
        if (modalState.open !== 'invite' && this.isModalOpened) {
          this.hideModal();
        } else if (modalState.open === 'invite' && !this.isModalOpened) {
          this.showModal();
        }
      });
  }

  public ngOnDestroy() {
    this.currentUser = null;
    this.form = undefined;
    this.destroyStream$.next(1);
    this.destroyStream$.complete();
  }

  public showModal(): void {
    this.isModalOpened = true;
    this.inviteFriendsModal.show()
  }


  public hideModal(): void {
    this.inviteFriendsModal.hide();
  }

  public onHidden(): void {
    this.isModalOpened = false;
    this.store.dispatch(new ModalActions.Close());
  }

  public onShow(): void {
    this.getInvitations()
  }

  private getInvitations() {
    const yesterday = new Date(Date.now() - 86400 * 1000).toISOString();
    const today = new Date().toISOString();

    this.userApi.getInvitations(this.currentUser.id,
      {
        where: {
          createdAt: {between: [yesterday, today]},
          admin: false
        }
      }
    )
    .subscribe((data: any) => {
      for (let i = 1; i <= 5; ++i) {
        if (data[i - 1] && this.form.controls['invite' + i + 'Name'] && this.form.controls['invite' + i + 'Email']) {
          this.form.controls['invite' + i + 'Name'].setValue(data[i - 1].name);
          this.form.controls['invite' + i + 'Email'].setValue(data[i - 1].email);
          this.form.controls['invite' + i + 'Name'].disable();
          this.form.controls['invite' + i + 'Email'].disable();
        }
      }
    })
  }

  public sendSingleInvitation(inviteData: any, i: number) {
    this.form.controls['invite' + i + 'Name'].disable();
    this.form.controls['invite' + i + 'Email'].disable();
    const invite = {
      name: inviteData.name,
      email: inviteData.email,
      userId: this.currentUser.id
    }

    this.userApi.createInvitations(this.currentUser.id, invite)
      .subscribe((data: any) => {
        this.getInvitations();
      })
  }

  public copyAppUrl(urlToInvite: string) {
  }
}
