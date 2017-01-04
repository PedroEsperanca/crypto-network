import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule }       from '@angular/common';

import {
  ScrollSpyIndexDirective,
  ScrollSpyIndexRenderComponent
} from 'ng2-scrollspy/dist/plugin/index';
import { ScrollSpyAffixDirective } from 'ng2-scrollspy/dist/plugin/affix';

import { IndexSecurityComponent } from './security.component';

export const routes = [
  { path: '', component: IndexSecurityComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    IndexSecurityComponent,
    ScrollSpyIndexDirective,
    ScrollSpyIndexRenderComponent,
    ScrollSpyAffixDirective
  ]
})
export default class IndexSecurityModule { }
