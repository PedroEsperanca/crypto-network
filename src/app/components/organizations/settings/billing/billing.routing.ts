import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsBillingComponent } from './billing.component';

import { SettingsBillingHomeComponent } from './home/home.component';
import { SettingsBillingPaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsBillingComponent,
    children: [
      { path: '',
        component: SettingsBillingHomeComponent
      },
      {
        path: 'payment',
        component: SettingsBillingPaymentComponent
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
