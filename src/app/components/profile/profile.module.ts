import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';

import { MultilingualModule } from 'shared/i18n/multilingual.module';
import { HeaderModule } from 'shared/app/modules/header';
import { FooterModule } from 'shared/app/modules/footer';

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
