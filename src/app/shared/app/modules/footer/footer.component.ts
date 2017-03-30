import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ConfigService } from '@nglibs/config';

@Component({
  selector: 'app-footer',
  styleUrls: [ './footer.component.scss' ],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  public config: any;
  public today: number = Date.now();

  constructor(public configService: ConfigService) {
    this.config = this.configService.getSettings();
  }
}
