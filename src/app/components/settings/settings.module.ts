import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MultilingualModule } from 'frameworks/i18n/multilingual.module';

import { TooltipModule } from 'ng2-bootstrap/components/tooltip';

import { routing } from './settings.routing';
import { SettingsComponent } from './settings.component';

import { SettingsProfileComponent } from './profile/profile.component';
import { SettingsAccountComponent } from './account/account.component';
import { SettingsNotificationsComponent } from './notifications/notifications.component';
import { SettingsBillingComponent } from './billing/billing.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MultilingualModule,
    routing,
    TooltipModule
  ],
  declarations: [
    SettingsComponent,
    SettingsProfileComponent,
    SettingsAccountComponent,
    SettingsNotificationsComponent,
    SettingsBillingComponent
  ]
})
export default class SettingsModule { }
