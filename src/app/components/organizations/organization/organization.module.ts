import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MultilingualModule } from 'shared/i18n/multilingual.module';

import { TooltipModule } from 'ng2-bootstrap/tooltip';

import { routing } from './organization.routing';
import { OrganizationComponent } from './organization.component';

import { OrganizationHomeComponent } from './home/home.component';
import { OrganizationNotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MultilingualModule,
    routing,
    TooltipModule
  ],
  declarations: [
    OrganizationComponent,

    OrganizationHomeComponent,
    OrganizationNotFoundComponent
  ],
  providers: []
})
export class OrganizationModule { }
