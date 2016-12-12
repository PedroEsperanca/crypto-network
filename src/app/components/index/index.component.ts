import { BaseComponent } from 'frameworks/core';
import { Location } from '@angular/common';

import { UserApi, LoopBackAuth } from 'frameworks/api';

@BaseComponent({
  selector: 'index',
  styleUrls: [ './index.component.scss' ],
  templateUrl: './index.component.html'
})
export class IndexComponent {
  constructor(
    private location: Location,
    private auth: LoopBackAuth,
    private user: UserApi
  ) {}

  logout() {
    this.user.logout().subscribe(response => this.location.replaceState(''));
  }
}
