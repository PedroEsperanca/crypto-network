import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ConfigService } from 'ng2-config';

import { LoopBackAuth } from 'frameworks/api';

@Component({
  selector: 'app-header',
  styleUrls: [ './header.component.scss' ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public config: any;

  constructor(
    public auth: LoopBackAuth,
    private configService: ConfigService
  ) {
    this.config = this.configService.getSettings();
  }
}
