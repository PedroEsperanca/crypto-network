import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ConfigService } from 'ng2-config';

@Component({
  selector: 'user.user',
  styleUrls: [ './user.component.scss' ],
  templateUrl: './user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  public config: any;

  constructor(
    private configService: ConfigService
  ) {
    this.config = this.configService.getSettings();
  }
}
