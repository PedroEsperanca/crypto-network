import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ConfigService } from '@nglibs/config';

@Component({
  selector: 'indexContact',
  styleUrls: [ './contact.component.scss' ],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexContactComponent {
  public config: any;

  constructor(public configService: ConfigService) {
    this.config = this.configService.getSettings();
  }
}
