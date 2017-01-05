import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule }       from '@angular/common';

import { ScrollSpySharedModule } from 'frameworks/shared/scrollSpy.shared.module';

import { IndexTermsComponent } from './terms.component';

export const routes = [
  { path: '', component: IndexTermsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ScrollSpySharedModule
  ],
  declarations: [
    IndexTermsComponent
  ]
})
export class IndexTermsModule { }
