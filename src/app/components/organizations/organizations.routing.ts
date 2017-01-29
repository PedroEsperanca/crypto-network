import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  OrganizationExistsGuard,
  OrganizationCanDeactivateGuard
} from 'shared/app/guards';

import { OrganizationsComponent } from './organizations.component';

import { OrganizationsHomeComponent } from './home/home.component';
import { OrganizationsCreateComponent } from './create/create.component';
import { OrganizationsNotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: OrganizationsComponent,
    children: [
      {
        path: '',
        component: OrganizationsHomeComponent
      },
      {
        path: 'create',
        component: OrganizationsCreateComponent
      },
      {
        path: 'not-found',
        component: OrganizationsNotFoundComponent
      },
      {
        path: ':id',
        loadChildren: './organization/organization.module#OrganizationModule',
        canActivate: [ OrganizationExistsGuard ],
        canDeactivate: [ OrganizationCanDeactivateGuard ]
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
