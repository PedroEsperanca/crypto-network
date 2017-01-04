import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// import { CloudtasksDirective } from 'angular2-cloudtasks';

import { IndexHomeComponent } from './home.component';

export const routes = [
  { path: '', component: IndexHomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    IndexHomeComponent
    // CloudtasksDirective
  ]
})
export class IndexHomeModule { }
