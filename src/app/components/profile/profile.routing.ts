import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ProfileHomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: ProfileHomeComponent
      },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
