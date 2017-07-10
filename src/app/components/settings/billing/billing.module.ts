import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CloudtasksModule } from '@cloudtasks/ngx-image';

import { MultilingualModule } from 'shared/i18n/multilingual.module';

import { routing } from './billing.routing';
import { SettingsBillingComponent } from './billing.component';

import { SettingsBillingHomeComponent } from './home/home.component';
import { SettingsBillingPaymentComponent } from './payment/payment.component';

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
    SettingsBillingComponent,
    SettingsBillingHomeComponent,
    SettingsBillingPaymentComponent,
  ]
})
export class BillingModule { }
