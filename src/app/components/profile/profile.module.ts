import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';

import { MultilingualModule } from 'frameworks/i18n/multilingual.module';
import { HeaderModule } from 'frameworks/app/shared/header';
import { FooterModule } from 'frameworks/app/shared/footer';

import { ProfileComponent } from './profile.component';
import { routing } from './profile.routing';

import { ProfileUserComponent } from './user/user.component';
import { ProfileOrganizationComponent } from './organization/organization.component';

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
    ProfileUserComponent,
    ProfileOrganizationComponent
  ]
})
export class ProfileModule {}
