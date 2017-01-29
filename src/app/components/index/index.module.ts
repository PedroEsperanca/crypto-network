import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from 'frameworks/app/shared/header';
import { FooterModule } from 'frameworks/app/shared/footer';

import { IndexComponent } from './index.component';
import { routing } from './index.routing';

// import { CloudtasksDirective } from 'angular2-cloudtasks';

@NgModule({
  imports: [
    CommonModule,
    routing,
    HeaderModule,
    FooterModule
  ],
  declarations: [
    IndexComponent
    // CloudtasksDirective
  ]
})
export class IndexModule { }
