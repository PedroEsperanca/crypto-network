import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionsComponent } from './subscriptions.component';
import { SubscriptionsHomeComponent } from './home/home.component';
import { SubscriptionsUserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionsComponent,
    children: [
      {
        path: '',
        component: SubscriptionsHomeComponent,
      },
      {
        path: ':id',
        component: SubscriptionsUserComponent,
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
