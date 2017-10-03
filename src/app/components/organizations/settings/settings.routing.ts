import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';

import { SettingsProfileComponent } from './profile/profile.component';
import { SettingsStoreComponent } from './store/store.component';

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
        path: 'billing',
        loadChildren: './billing/billing.module#BillingModule',
      },
      {
        path: 'store',
        component: SettingsStoreComponent,
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
