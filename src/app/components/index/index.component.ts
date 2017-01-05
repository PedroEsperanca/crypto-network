import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';

import { UserApi, LoopBackAuth } from 'frameworks/api';

@Component({
  selector: 'index',
  styleUrls: [ './index.component.scss' ],
  templateUrl: './index.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent {
  constructor(
    public auth: LoopBackAuth,
    private location: Location,
    private user: UserApi
  ) {}

  public logout() {
    this.user.logout().subscribe((response) => this.location.replaceState(''));
  }
}
