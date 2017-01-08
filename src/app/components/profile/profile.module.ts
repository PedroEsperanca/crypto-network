import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';

import { MultilingualModule } from 'frameworks/i18n/multilingual.module';
import { HeaderModule } from 'frameworks/shared/header';
import { FooterModule } from 'frameworks/shared/footer';

import { ProfileComponent } from './profile.component';
import { routing } from './profile.routing';

import { ProfileHomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    MultilingualModule,
    HeaderModule,
    FooterModule,
    routing,
  ],
  declarations: [
    ProfileComponent,
    ProfileHomeComponent
  ]
})
export class ProfileModule {}
