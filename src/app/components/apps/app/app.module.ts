import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MultilingualModule } from 'frameworks/i18n/multilingual.module';

import { TooltipModule } from 'ng2-bootstrap/components/tooltip';

import { routing } from './app.routing';
import { AppComponent } from './app.component';

import { AppHomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MultilingualModule,
    routing,
    TooltipModule
  ],
  declarations: [
    AppComponent,

    AppHomeComponent
  ],
  providers: []
})
export default class AppModule { }
