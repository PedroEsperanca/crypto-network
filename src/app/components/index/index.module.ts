import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterModule } from 'frameworks/shared/footer';

import { IndexComponent } from './index.component';
import { routing } from './index.routing';

// import { CloudtasksDirective } from 'angular2-cloudtasks';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FooterModule
  ],
  declarations: [
    IndexComponent
    // CloudtasksDirective
  ]
})
export class IndexModule { }
