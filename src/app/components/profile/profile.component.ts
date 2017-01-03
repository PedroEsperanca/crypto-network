import { BaseComponent } from 'frameworks/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { User, UserApi, LoopBackAuth } from 'frameworks/api';

@BaseComponent({
  selector: 'profile',
  styleUrls: [ './profile.component.scss' ],
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private auth: LoopBackAuth,
    private user: UserApi
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: { user: User }) => {
        console.log(data.user);
      });
  }

  logout() {
    this.user.logout().subscribe(response => this.location.replaceState(''));
  }
}
