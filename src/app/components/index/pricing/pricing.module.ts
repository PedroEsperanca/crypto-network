import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// import { CloudtasksDirective } from '@cloudtasks/ngx-image';

import { IndexPricingComponent } from './pricing.component';

export const routes = [
  { path: '', component: IndexPricingComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    IndexPricingComponent
    // CloudtasksDirective
  ]
})
export class IndexPricingModule { }
