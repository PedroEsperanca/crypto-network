import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ChangeDetectorRef } from '@angular/core';

import { UserApi } from 'shared/api';

interface FormI {
  email: string;
}

@Component({
  selector: 'user.recover-account',
  templateUrl: './recover-account.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecoverAccountComponent {
  public formModel: FormI = {
    email: ''
  };

  public submited: boolean = false;
  public message: any = {};

  constructor(
    private user: UserApi,
    private cd: ChangeDetectorRef
  ) {}

  public recover() {
    this.user.resetPassword(this.formModel).subscribe(
      (response) => {
        this.message = {};
        this.submited = true;
        this.cd.markForCheck();
      },
      (error) => {
        this.message = {
          error: error.message
        };
        this.cd.markForCheck();
      }
    );
  }
}
