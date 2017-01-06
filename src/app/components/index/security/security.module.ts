import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ScrollSpyIndexModule } from 'ng2-scrollspy/dist/plugin/index';
import { ScrollSpyAffixModule } from 'ng2-scrollspy/dist/plugin/affix';

import { IndexSecurityComponent } from './security.component';

export const routes = [
  { path: '', component: IndexSecurityComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ScrollSpyIndexModule,
    ScrollSpyAffixModule
  ],
  declarations: [
    IndexSecurityComponent
  ]
})
export class IndexSecurityModule { }
