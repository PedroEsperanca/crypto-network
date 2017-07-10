import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-settings-billing-payment',
  styleUrls: [ './payment.component.scss' ],
  templateUrl: './payment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsBillingPaymentComponent {
  public USER: any = {};
}
