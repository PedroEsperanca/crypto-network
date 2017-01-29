import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MultilingualModule } from 'frameworks/i18n/multilingual.module';

import { AlertComponent } from './alert.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MultilingualModule
  ],
  declarations: [ AlertComponent ],
  exports: [ AlertComponent ]
})
export class AlertModule { }
