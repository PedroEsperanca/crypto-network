import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialNetworkStyleGuideComponent } from './style-guide.component';
import { SocialNetworkSharedModule } from '../shared/shared.module'

import { routing } from './style-guide.routing';

@NgModule({
  imports: [
    CommonModule,
    routing,
    SocialNetworkSharedModule
  ],
  declarations: [SocialNetworkStyleGuideComponent]
})
export class SocialNetworkStyleGuideModule { }
