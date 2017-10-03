import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ConfigService } from '@ngx-config/core';

@Component({
  selector: 'app-index-pricing',
  styleUrls: [ './pricing.component.scss' ],
  templateUrl: './pricing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexPricingComponent {
  public config: any;

  constructor(
    private configService: ConfigService
  ) {
    this.config = this.configService.getSettings();
  }
}
