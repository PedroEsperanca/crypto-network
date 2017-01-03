import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// import { CloudtasksDirective } from 'angular2-cloudtasks';

import { IndexContactComponent } from './contact.component';

export const routes = [
  { path: '', component: IndexContactComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    IndexContactComponent
    // CloudtasksDirective
  ]
})
export default class IndexContactModule { }
