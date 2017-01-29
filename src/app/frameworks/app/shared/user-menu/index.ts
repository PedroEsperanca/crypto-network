import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CloudtasksModule } from 'angular2-cloudtasks';
import { DropdownModule } from 'ng2-bootstrap/dropdown';

import { MultilingualModule } from 'frameworks/i18n/multilingual.module';

import { UserMenuComponent } from './user-menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CloudtasksModule,
    DropdownModule,
    MultilingualModule
  ],
  declarations: [ UserMenuComponent ],
  exports: [ UserMenuComponent ]
})
export class UserMenuModule { }
