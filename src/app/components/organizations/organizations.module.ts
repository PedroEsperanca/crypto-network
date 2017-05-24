import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { TagInputModule } from 'ng2-tag-input';

import { MultilingualModule } from 'shared/i18n/multilingual.module';
import { FileUploaderModule } from 'shared/app/modules/file-uploader';
import { AlertModule } from 'shared/app/modules/alert';
import { HeaderModule } from 'shared/app/modules/header';
import { FooterModule } from 'shared/app/modules/footer';

import { routing } from './organizations.routing';
import { OrganizationsComponent } from './organizations.component';

import { OrganizationsNewComponent } from './new/new.component';
import { OrganizationsNotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlertModule,
    MultilingualModule,
    FileUploaderModule,
    HeaderModule,
    FooterModule,
    routing,
    ModalModule,
    TooltipModule,
    // TagInputModule
  ],
  declarations: [
    OrganizationsComponent,
    OrganizationsNewComponent,
    OrganizationsNotFoundComponent
  ]
})
export class OrganizationsModule { }
