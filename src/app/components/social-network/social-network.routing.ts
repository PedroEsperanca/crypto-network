import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialNetworkComponent } from './social-network.component';

const routes: Routes = [
  {
    path: '',
    component: SocialNetworkComponent,
    children: [
      {
        path: 'style-guide',
        loadChildren: './style-guide/style-guide.module#SocialNetworkStyleGuideModule'
      },
      {
        path: 'profile',
        loadChildren: './profile/profile.module#SocialNetworkProfileModule'
      },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
