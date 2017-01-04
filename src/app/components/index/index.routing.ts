import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        loadChildren: './home/home.module#IndexHomeModule'
      },
      {
        path: 'about',
        loadChildren: './about/about.module#IndexAboutModule'
      },
      {
        path: 'contact',
        loadChildren: './contact/contact.module#IndexContactModule'
      },
      {
        path: 'terms',
        loadChildren: './terms/terms.module#IndexTermsModule'
      },
      {
        path: 'privacy',
        loadChildren: './privacy/privacy.module#IndexPrivacyModule'
      },
      {
        path: 'security',
        loadChildren: './security/security.module#IndexSecurityModule'
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
