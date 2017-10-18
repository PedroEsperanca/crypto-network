import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductsHomeComponent } from './home/home.component';
import { ProductsNewComponent } from './new/new.component';
import { ProductsProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'new',
        component: ProductsNewComponent,
      },
      {
        path: ':id',
        component: ProductsProductComponent,
      },
      {
        path: '',
        component: ProductsHomeComponent,
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
