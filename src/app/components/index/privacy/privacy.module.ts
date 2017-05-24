import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ScrollSpyIndexModule } from 'ngx-scrollspy/dist/plugin/index';
import { ScrollSpyAffixModule } from 'ngx-scrollspy/dist/plugin/affix';

import { IndexPrivacyComponent } from './privacy.component';

export const routes = [
  { path: '', component: IndexPrivacyComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ScrollSpyIndexModule,
    ScrollSpyAffixModule
  ],
  declarations: [
    IndexPrivacyComponent
  ]
})
export class IndexPrivacyModule { }
