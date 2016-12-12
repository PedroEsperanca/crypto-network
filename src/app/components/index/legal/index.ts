import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule }       from '@angular/common';

import {
  ScrollSpyIndexDirective,
  ScrollSpyIndexRenderComponent
} from 'ng2-scrollspy/dist/plugin/index';
import { ScrollSpyAffixDirective } from 'ng2-scrollspy/dist/plugin/affix';

import { IndexLegalComponent } from './legal.component';

export const routes = [
  { path: '', component: IndexLegalComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    IndexLegalComponent,
    ScrollSpyIndexDirective,
    ScrollSpyIndexRenderComponent,
    ScrollSpyAffixDirective
  ]
})
export default class IndexLegalModule { }
