import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ScrollSpySharedModule } from 'frameworks/shared/scrollSpy.shared.module';

import { IndexSecurityComponent } from './security.component';

export const routes = [
  { path: '', component: IndexSecurityComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ScrollSpySharedModule
  ],
  declarations: [
    IndexSecurityComponent
  ]
})
export class IndexSecurityModule { }
