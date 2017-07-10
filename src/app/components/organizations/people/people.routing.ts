import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleComponent } from './people.component';
import { PeopleHomeComponent } from './home/home.component';
import { PeopleUserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleComponent,
    children: [
      {
        path: '',
        component: PeopleHomeComponent,
      },
      {
        path: ':id',
        component: PeopleUserComponent,
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
