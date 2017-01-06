import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ConfigService } from 'ng2-config';

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
