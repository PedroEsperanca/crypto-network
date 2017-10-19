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
        loadChildren: './about/about.module#IndexAboutModule',
        data: {
          meta: {
            title: 'About us'
          }
        }
      },
      {
        path: 'contact',
        loadChildren: './contact/contact.module#IndexContactModule',
        data: {
          meta: {
            title: 'Contact us'
          }
        }
      },
      {
        path: 'terms',
        loadChildren: './terms/terms.module#IndexTermsModule',
        data: {
          meta: {
            title: 'Terms of Service'
          }
        }
      },
      {
        path: 'privacy',
        loadChildren: './privacy/privacy.module#IndexPrivacyModule',
        data: {
          meta: {
            title: 'Privacy Policy'
          }
        }
      },
      {
        path: 'security',
        loadChildren: './security/security.module#IndexSecurityModule',
        data: {
          meta: {
            title: 'Security Policy'
          }
        }
      },
      {
        path: 'store',
        loadChildren: './store/store.module#IndexStoreModule',
        data: {
          meta: {
            title: 'Store'
          }
        }
      },
      {
        path: 'pricing',
        loadChildren: './pricing/pricing.module#IndexPricingModule',
        data: {
          meta: {
            title: 'Pricing'
          }
        }
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
