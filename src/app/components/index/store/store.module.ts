import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// import { CloudtasksDirective } from '@cloudtasks/ngx-image';

import { IndexStoreComponent } from './store.component';

export const routes = [
  { path: '', component: IndexStoreComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    IndexStoreComponent
    // CloudtasksDirective
  ]
})
export class IndexStoreModule { }
