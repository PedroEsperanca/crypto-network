import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CloudtasksModule } from '@cloudtasks/ngx-image';

import { MultilingualModule } from 'shared/i18n/multilingual.module';
import { FileUploaderModule } from 'shared/app/modules/file-uploader';

import { routing } from './settings.routing';
import { SettingsComponent } from './settings.component';

import { SettingsProfileComponent } from './profile/profile.component';
import { SettingsStoreComponent } from './store/store.component';

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
    SettingsStoreComponent,

    SettingsApplicationsComponent,
    SettingsApplicationsNewComponent,
    SettingsApplicationsApplicationComponent
  ]
})
export class SettingsModule { }
