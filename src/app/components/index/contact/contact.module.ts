import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Angulartics2Module } from 'angulartics2';

import { MultilingualModule } from 'frameworks/i18n/multilingual.module';

import { IndexContactComponent } from './contact.component';

import { ContactHomeComponent } from './home/home.component';
import { ContactReportAbuseComponent } from './report-abuse/report-abuse.component';
import { ContactPrivacyComponent } from './privacy/privacy.component';

export const routes = [
  { path: '',
    component: IndexContactComponent,
    children: [
      { path: '', component: ContactHomeComponent },
      { path: 'report-abuse', component: ContactReportAbuseComponent },
      { path: 'privacy', component: ContactPrivacyComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MultilingualModule,
    Angulartics2Module.forChild()
  ],
  declarations: [
    IndexContactComponent
    ContactHomeComponent,
    ContactReportAbuseComponent,
    ContactPrivacyComponent
  ]
})
export class IndexContactModule { }
