import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ng2-bootstrap/modal';
import { TooltipModule } from 'ng2-bootstrap/tooltip';
// import { TagInputModule } from 'ng2-tag-input';

import { MultilingualModule } from 'frameworks/i18n/multilingual.module';
import { UserMenuModule } from 'frameworks/shared/user-menu';

import { routing } from './apps.routing';
import { AppsComponent } from './apps.component';

import { AppsHomeComponent } from './home/home.component';
import { AppsCreateComponent } from './create/create.component';
import { AppsEditComponent } from './edit/edit.component';
import { AppsNotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MultilingualModule,
    UserMenuModule,
    routing,
    ModalModule,
    TooltipModule,
    // TagInputModule
  ],
  declarations: [
    AppsComponent,
    AppsHomeComponent,
    AppsCreateComponent,
    AppsEditComponent,
    AppsNotFoundComponent
  ]
})
export class AppsModule { }
