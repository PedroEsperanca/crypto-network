import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizationComponent } from './organization.component';

import { OrganizationHomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: OrganizationComponent,
    children: [
      {
        path: '',
        component: OrganizationHomeComponent
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
