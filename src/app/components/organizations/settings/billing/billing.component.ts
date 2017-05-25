import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-organizations-settings-billing',
  styleUrls: [ './billing.component.scss' ],
  templateUrl: './billing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsBillingComponent {
  public USER: any = {};
}
