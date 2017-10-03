import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ConfigService } from '@ngx-config/core';

@Component({
  selector: 'app-index-store',
  styleUrls: [ './store.component.scss' ],
  templateUrl: './store.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexStoreComponent {
  public config: any;

  constructor(
    private configService: ConfigService
  ) {
    this.config = this.configService.getSettings();
  }
}
