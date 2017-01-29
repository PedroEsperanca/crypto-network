import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ng2-bootstrap/modal';
import { TooltipModule } from 'ng2-bootstrap/tooltip';
// import { TagInputModule } from 'ng2-tag-input';

import { MultilingualModule } from 'shared/i18n/multilingual.module';
import { UserMenuModule } from 'shared/app/shared/user-menu';

import { routing } from './organizations.routing';
import { OrganizationsComponent } from './organizations.component';

import { OrganizationsHomeComponent } from './home/home.component';
import { OrganizationsCreateComponent } from './create/create.component';
import { OrganizationsEditComponent } from './edit/edit.component';
import { OrganizationsNotFoundComponent } from './not-found/not-found.component';

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
    OrganizationsComponent,
    OrganizationsHomeComponent,
    OrganizationsCreateComponent,
    OrganizationsEditComponent,
    OrganizationsNotFoundComponent
  ]
})
export class OrganizationsModule { }
