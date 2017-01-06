import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MultilingualModule } from 'frameworks/i18n/multilingual.module';

import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MultilingualModule
  ],
  declarations: [ FooterComponent ],
  exports: [ FooterComponent ]
})
export class FooterModule { }
