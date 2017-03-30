import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConfigService } from '@nglibs/config';

import { User, UserApi, LoopBackAuth } from 'shared/api';

@Component({
  selector: 'profile-user',
  styleUrls: [ './user.component.scss' ],
  templateUrl: './user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileUserComponent implements OnInit {
  public config: any;
  public profile: User;
  public isMe: boolean = false;

  constructor(
    public auth: LoopBackAuth,
    private route: ActivatedRoute,
    private user: UserApi,
    private configService: ConfigService
  ) {
    this.config = this.configService.getSettings();
  }

  public ngOnInit() {
    this.route.data
      .subscribe((data: { profile: User }) => {
        this.profile = data.profile;

        if (this.profile.id === this.auth.getCurrentUserId()) {
          this.isMe = true;
        }
      });
  }
}
