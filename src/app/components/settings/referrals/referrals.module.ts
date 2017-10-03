import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CloudtasksModule } from '@cloudtasks/ngx-image';

import { MultilingualModule } from 'shared/i18n/multilingual.module';

import { routing } from './referrals.routing';
import { SettingsReferralsComponent } from './referrals.component';

import { SettingsReferralsHomeComponent } from './home/home.component';
import { SettingsReferralsPaymentComponent } from './payment/payment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    TooltipModule,
    CloudtasksModule,
    MultilingualModule
  ],
  declarations: [
    SettingsReferralsComponent,
    SettingsReferralsHomeComponent,
    SettingsReferralsPaymentComponent,
  ]
})
export class ReferralsModule { }
