import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ConfigService } from 'ng2-config';

@Component({
  selector: 'settings.settings',
  styleUrls: [ './settings.component.scss' ],
  templateUrl: './settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent {
  public config: any;

  constructor(
    private configService: ConfigService
  ) {
    this.config = this.configService.getSettings();
  }
}
