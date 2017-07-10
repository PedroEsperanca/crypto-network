import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CloudtasksModule } from '@cloudtasks/ngx-image';

import { MultilingualModule } from 'shared/i18n/multilingual.module';

import { routing } from './people.routing';
import { PeopleComponent } from './people.component';
import { PeopleHomeComponent } from './home/home.component';
import { PeopleUserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    TooltipModule,
    ModalModule,
    BsDropdownModule,
    CloudtasksModule,
    MultilingualModule
  ],
  declarations: [
    PeopleComponent,
    PeopleHomeComponent,
    PeopleUserComponent
  ]
})
export class PeopleModule { }
