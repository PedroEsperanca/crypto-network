import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';

import { SettingsProfileComponent } from './profile/profile.component';
import { SettingsAccountComponent } from './account/account.component';
import { SettingsEmailsComponent } from './emails/emails.component';
import { SettingsLinkedAccountsComponent } from './linked-accounts/linked-accounts.component';
import { SettingsNotificationsComponent } from './notifications/notifications.component';
import { SettingsBillingComponent } from './billing/billing.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      {
        path: 'profile',
        component: SettingsProfileComponent,
      },
      {
        path: 'account',
        component: SettingsAccountComponent,
      },
      {
        path: 'emails',
        component: SettingsEmailsComponent,
      },
      {
        path: 'linkedAccounts',
        component: SettingsLinkedAccountsComponent,
      },
      {
        path: 'notifications',
        component: SettingsNotificationsComponent,
      },
      {
        path: 'billing',
        component: SettingsBillingComponent,
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
