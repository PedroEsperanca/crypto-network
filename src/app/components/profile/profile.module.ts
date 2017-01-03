import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';

import { ProfileComponent } from './profile.component';
import { routing } from './profile.routing';

import { ProfileHomeComponent } from './home/home.component';

// import { CloudtasksDirective } from 'angular2-cloudtasks';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [
    ProfileComponent,
    ProfileHomeComponent
    // CloudtasksDirective
  ]
})
export default class ProfileModule { }
