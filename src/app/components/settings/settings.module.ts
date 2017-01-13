import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TooltipModule } from 'ng2-bootstrap/tooltip';
import { CloudtasksModule } from 'angular2-cloudtasks';

import { MultilingualModule } from 'frameworks/i18n/multilingual.module';
import { HeaderModule } from 'frameworks/shared/header';
import { FooterModule } from 'frameworks/shared/footer';

import { routing } from './settings.routing';
import { SettingsComponent } from './settings.component';

import { SettingsProfileComponent } from './profile/profile.component';
import { SettingsAccountComponent } from './account/account.component';
import { SettingsEmailsComponent } from './emails/emails.component';
import { SettingsLinkedAccountsComponent } from './linked-accounts/linked-accounts.component';
import { SettingsNotificationsComponent } from './notifications/notifications.component';
import { SettingsBillingComponent } from './billing/billing.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    TooltipModule,
    CloudtasksModule,
    MultilingualModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [
    SettingsComponent,
    SettingsProfileComponent,
    SettingsAccountComponent,
    SettingsEmailsComponent,
    SettingsLinkedAccountsComponent,
    SettingsNotificationsComponent,
    SettingsBillingComponent
  ]
})
export class SettingsModule { }
