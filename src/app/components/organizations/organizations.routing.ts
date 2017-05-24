import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  OrganizationExistsGuard
} from 'shared/api/guards/Organization';

import { OrganizationsComponent } from './organizations.component';

import { OrganizationsNewComponent } from './new/new.component';
import { OrganizationsNotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: OrganizationsComponent,
    children: [
      {
        path: 'new',
        component: OrganizationsNewComponent
      },
      {
        path: 'not-found',
        component: OrganizationsNotFoundComponent
      },
      {
        path: ':id/settings',
        loadChildren: './settings/settings.module#SettingsModule',
        canActivate: [ OrganizationExistsGuard ]
      },
      {
        path: ':id',
        loadChildren: './settings/settings.module#SettingsModule',
        canActivate: [ OrganizationExistsGuard ]
      }
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
