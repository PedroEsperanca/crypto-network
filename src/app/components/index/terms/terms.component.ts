import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ConfigService } from 'ng2-config';

@Component({
  selector: 'indexTerms',
  styleUrls: [ './terms.component.scss' ],
  templateUrl: './terms.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexTermsComponent {
  public config: any;

  constructor(public configService: ConfigService) {
    this.config = this.configService.getSettings();
  }
}
