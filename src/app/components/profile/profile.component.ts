import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  styleUrls: [ './profile.component.scss' ],
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  public type: string;

  constructor(private route: ActivatedRoute) {}

  public ngOnInit() {
    this.route.data
      .subscribe((data: any) => {
        if (typeof data.profile.email !== 'undefined' ||
          typeof data.profile.emailAddresses !== 'undefined') {
          this.type = 'user';
        } else {
          this.type = 'organization';
        }
      });
  }
}
