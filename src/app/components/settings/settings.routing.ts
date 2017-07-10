import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';

import { SettingsProfileComponent } from './profile/profile.component';
import { SettingsAccountComponent } from './account/account.component';
import { SettingsEmailsComponent } from './emails/emails.component';
import { SettingsNotificationsComponent } from './notifications/notifications.component';
import { SettingsOrganizationsComponent } from './organizations/organizations.component';

import { SettingsApplicationsComponent } from './applications/applications.component';
import { SettingsApplicationsNewComponent } from './applications/new/new.component';
import {
  SettingsApplicationsApplicationComponent
} from './applications/application/application.component';

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
        path: 'notifications',
        component: SettingsNotificationsComponent,
      },
      {
        path: 'billing',
        loadChildren: './billing/billing.module#BillingModule',
      },
      {
        path: 'organizations',
        component: SettingsOrganizationsComponent,
      },

      {
        path: 'applications',
        children: [
          {
            path: 'new',
            component: SettingsApplicationsNewComponent,
          },
          {
            path: ':id',
            component: SettingsApplicationsApplicationComponent,
          },
          {
            path: '',
            component: SettingsApplicationsComponent,
          }
        ]
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
