import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ConfigService } from '@nglibs/config';

@Component({
  selector: 'indexSecurity',
  styleUrls: [ './security.component.scss' ],
  templateUrl: './security.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexSecurityComponent {
  public config: any;

  constructor(public configService: ConfigService) {
    this.config = this.configService.getSettings();
  }
}
