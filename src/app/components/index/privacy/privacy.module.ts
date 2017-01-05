import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule }       from '@angular/common';

import { ScrollSpySharedModule } from 'frameworks/shared/scrollSpy.shared.module';

import { IndexPrivacyComponent } from './privacy.component';

export const routes = [
  { path: '', component: IndexPrivacyComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ScrollSpySharedModule
  ],
  declarations: [
    IndexPrivacyComponent
  ]
})
export class IndexPrivacyModule { }
