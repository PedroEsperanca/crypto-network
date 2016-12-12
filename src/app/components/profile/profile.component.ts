import { BaseComponent } from 'frameworks/core';
import { Location } from '@angular/common';

import { UserApi, LoopBackAuth } from 'frameworks/api';

@BaseComponent({
  selector: 'profile',
  styleUrls: [ './profile.component.scss' ],
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  constructor(
    private location: Location,
    private auth: LoopBackAuth,
    private user: UserApi
  ) {}

  logout() {
    this.user.logout().subscribe(response => this.location.replaceState(''));
  }
}
