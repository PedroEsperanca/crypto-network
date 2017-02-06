import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'settingsBilling',
  styleUrls: [ './billing.component.scss' ],
  templateUrl: './billing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsBillingComponent {
  public USER: any = {};
}
