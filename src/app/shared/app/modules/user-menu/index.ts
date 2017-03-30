import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CloudtasksModule } from 'angular2-cloudtasks';
import { BsDropdownModule } from 'ng2-bootstrap/dropdown';

import { MultilingualModule } from 'shared/i18n/multilingual.module';

import { UserMenuComponent } from './user-menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CloudtasksModule,
    BsDropdownModule,
    MultilingualModule
  ],
  declarations: [ UserMenuComponent ],
  exports: [ UserMenuComponent ]
})
export class UserMenuModule { }
