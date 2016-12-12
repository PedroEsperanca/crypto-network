import { BaseComponent } from 'frameworks/core';

import { ChangeDetectorRef } from '@angular/core';

import { UserApi } from 'frameworks/api';

interface FormI {
  email: string;
}

@BaseComponent({
  selector: 'user.recover-account',
  templateUrl: './recover-account.component.html'
})
export class RecoverAccountComponent {
  private formModel: FormI = {
    email: ''
  };

  private submited: boolean = false;
  private message: any = {};

  constructor(
    private user: UserApi,
    private cd: ChangeDetectorRef
  ) {}

  recover() {
    this.user.resetPassword(this.formModel).subscribe(
      response => {
        this.message = {};
        this.submited = true;
        this.cd.markForCheck();
      },
      error => {
        this.message = {
          error: error.message
        };
        this.cd.markForCheck();
      }
    );
  }
}
