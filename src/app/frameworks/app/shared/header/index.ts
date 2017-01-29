import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CloudtasksModule } from 'angular2-cloudtasks';

import { MultilingualModule } from 'frameworks/i18n/multilingual.module';
import { UserMenuModule } from '../user-menu';

import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CloudtasksModule,
    MultilingualModule,
    UserMenuModule
  ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
