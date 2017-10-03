import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsReferralsComponent } from './referrals.component';

import { SettingsReferralsHomeComponent } from './home/home.component';
import { SettingsReferralsPaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsReferralsComponent,
    children: [
      { path: '',
        component: SettingsReferralsHomeComponent
      },
      {
        path: 'payment',
        component: SettingsReferralsPaymentComponent
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
