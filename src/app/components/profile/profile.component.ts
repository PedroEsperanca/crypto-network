import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { User, UserApi, LoopBackAuth } from 'frameworks/api';

@Component({
  selector: 'profile',
  styleUrls: [ './profile.component.scss' ],
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  constructor(
    public auth: LoopBackAuth,
    private route: ActivatedRoute,
    private location: Location,
    private user: UserApi
  ) {}

  public ngOnInit() {
    this.route.data
      .subscribe((data: { user: User }) => {
        console.log(data.user);
      });
  }

  public logout() {
    this.user.logout().subscribe((response) => this.location.replaceState(''));
  }
}
