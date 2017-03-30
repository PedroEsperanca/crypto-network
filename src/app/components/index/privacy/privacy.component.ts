import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ConfigService } from '@nglibs/config';

@Component({
  selector: 'indexPrivacy',
  styleUrls: [ './privacy.component.scss' ],
  templateUrl: './privacy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexPrivacyComponent {
  public config: any;

  constructor(public configService: ConfigService) {
    this.config = this.configService.getSettings();
  }
}
