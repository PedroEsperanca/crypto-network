import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule }       from '@angular/common';

import { IndexAboutComponent } from './about.component';

export const routes = [
  { path: '', component: IndexAboutComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
  	CommonModule,
  	RouterModule.forChild(routes)
  ],
  declarations: [
    IndexAboutComponent
  ]
})
export default class IndexAboutModule { }
