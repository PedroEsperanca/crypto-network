import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  AuthGuard,
  OrganizationExistsGuard
} from 'shared/api/guards';

import { OrganizationsComponent } from './organizations.component';
import { OrganizationsHomeComponent } from './home/home.component';

import { OrganizationsNewComponent } from './new/new.component';
import { OrganizationsNotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'new',
    component: OrganizationsNewComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: ':id',
    component: OrganizationsComponent,
    canActivate: [ OrganizationExistsGuard ],
    children: [
      {
        path: '',
        component: OrganizationsHomeComponent
      },
      {
        path: 'people',
        loadChildren: './people/people.module#PeopleModule',
        canActivate: [ AuthGuard ]
      },
      /*{
        path: 'teams',
        loadChildren: './teams/teams.module#TeamsModule',
        canActivate: [ AuthGuard ]
      },*/
      {
        path: 'settings',
        loadChildren: './settings/settings.module#SettingsModule',
        canActivate: [ AuthGuard ]
      },
      {
        path: 'products',
        loadChildren: './products/products.module#ProductsModule',
        canActivate: [ AuthGuard ]
      },
      {
        path: 'subscriptions',
        loadChildren: './subscriptions/subscriptions.module#SubscriptionsModule',
        canActivate: [ AuthGuard ]
      }
    ]
  },
  {
    path: 'not-found',
    component: OrganizationsNotFoundComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
