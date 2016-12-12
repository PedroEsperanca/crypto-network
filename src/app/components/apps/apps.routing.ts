import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  AppExistsGuard,
  AppCanDeactivateGuard
} from 'frameworks/app/guards';

import { AppsComponent } from './apps.component';

import { AppsHomeComponent } from './home/home.component';
import { AppsCreateComponent } from './create/create.component';
import { AppsNotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: AppsComponent,
    children: [
      {
        path: '',
        component: AppsHomeComponent
      },
      {
        path: 'create',
        component: AppsCreateComponent
      },
      {
        path: 'not-found',
        component: AppsNotFoundComponent
      },
      {
        path: ':id',
        loadChildren: () => System.import('./app/app.module').then((comp: any) => comp.default),
        canActivate: [ AppExistsGuard ],
        canDeactivate: [ AppCanDeactivateGuard ]
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
