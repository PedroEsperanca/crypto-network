import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TooltipModule } from 'ng2-bootstrap/tooltip';
import { ModalModule } from 'ng2-bootstrap/modal';
import { CloudtasksModule } from 'angular2-cloudtasks';

import { MultilingualModule } from 'shared/i18n/multilingual.module';
import { HeaderModule } from 'shared/app/shared/header';
import { FooterModule } from 'shared/app/shared/footer';
import { FileUploaderModule } from 'shared/app/shared/file-uploader';

import { routing } from './settings.routing';
import { SettingsComponent } from './settings.component';

import { SettingsProfileComponent } from './profile/profile.component';
import { SettingsAccountComponent } from './account/account.component';
import { SettingsEmailsComponent } from './emails/emails.component';
import { SettingsNotificationsComponent } from './notifications/notifications.component';
import { SettingsBillingComponent } from './billing/billing.component';
import { SettingsOrganizationsComponent } from './organizations/organizations.component';

import { SettingsApplicationsComponent } from './applications/applications.component';
import { SettingsApplicationsNewComponent } from './applications/new/new.component';
import {
  SettingsApplicationsApplicationComponent
} from './applications/application/application.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    TooltipModule,
    ModalModule,
    CloudtasksModule,
    MultilingualModule,
    HeaderModule,
    FooterModule,
    FileUploaderModule
  ],
  declarations: [
    SettingsComponent,
    SettingsProfileComponent,
    SettingsAccountComponent,
    SettingsEmailsComponent,
    SettingsNotificationsComponent,
    SettingsBillingComponent,
    SettingsOrganizationsComponent,

    SettingsApplicationsComponent,
    SettingsApplicationsNewComponent,
    SettingsApplicationsApplicationComponent
  ]
})
export class SettingsModule { }
