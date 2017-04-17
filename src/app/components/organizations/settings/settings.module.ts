import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TooltipModule } from 'ng2-bootstrap/tooltip';
import { ModalModule } from 'ng2-bootstrap/modal';
import { CloudtasksModule } from '@cloudtasks/ngx-image';

import { MultilingualModule } from 'shared/i18n/multilingual.module';
import { FileUploaderModule } from 'shared/app/modules/file-uploader';

import { routing } from './settings.routing';
import { SettingsComponent } from './settings.component';

import { SettingsProfileComponent } from './profile/profile.component';
import { SettingsBillingComponent } from './billing/billing.component';

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
    FileUploaderModule
  ],
  declarations: [
    SettingsComponent,
    SettingsProfileComponent,
    SettingsBillingComponent,

    SettingsApplicationsComponent,
    SettingsApplicationsNewComponent,
    SettingsApplicationsApplicationComponent
  ]
})
export class SettingsModule { }
