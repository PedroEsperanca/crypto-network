import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule }       from '@angular/common';

import {
  ScrollSpyIndexDirective,
  ScrollSpyIndexRenderComponent
} from 'ng2-scrollspy/dist/plugin/index';
import { ScrollSpyAffixDirective } from 'ng2-scrollspy/dist/plugin/affix';

import { IndexPrivacyComponent } from './privacy.component';

export const routes = [
  { path: '', component: IndexPrivacyComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    IndexPrivacyComponent,
    ScrollSpyIndexDirective,
    ScrollSpyIndexRenderComponent,
    ScrollSpyAffixDirective
  ]
})
export default class IndexPrivacyModule { }
