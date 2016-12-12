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
        loadChildren: () => System.import('./home').then((comp: any) => comp.default)
      },
      {
        path: 'about',
        loadChildren: () => System.import('./about').then((comp: any) => comp.default)
      },
      {
        path: 'legal',
        loadChildren: () => System.import('./legal').then((comp: any) => comp.default)
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
