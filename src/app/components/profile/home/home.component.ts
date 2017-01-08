import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConfigService } from 'ng2-config';

import { User, UserApi, LoopBackAuth } from 'frameworks/api';

@Component({
  selector: 'profileHome',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileHomeComponent implements OnInit {
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
