import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialNetworkStyleGuideComponent } from './style-guide.component';

const routes: Routes = [
  {
    path: '',
    component: SocialNetworkStyleGuideComponent,
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
