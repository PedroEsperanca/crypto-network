import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ConfigService } from 'ng2-config';

@Component({
  selector: 'indexHome',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexHomeComponent {
  public config: any;

  constructor(
    private configService: ConfigService
  ) {
    this.config = this.configService.getSettings();
  }
}
