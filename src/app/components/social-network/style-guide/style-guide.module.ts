import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialNetworkStyleGuideComponent } from './style-guide.component';
import { SocialNetworkSharedModule } from '../shared/shared.module';

import { SocialNetworkProfileHeaderModule } from '../profile/social-network-profile-header/social-network-profile-header.module';
import { SocialNetworkProfileSideModule } from '../profile/social-network-profile-side/social-network-profile-side.module';

import { routing } from './style-guide.routing';

@NgModule({
  imports: [
    CommonModule,
    routing,
    SocialNetworkSharedModule,

    SocialNetworkProfileHeaderModule,
    SocialNetworkProfileSideModule
  ],
  declarations: [SocialNetworkStyleGuideComponent]
})
export class SocialNetworkStyleGuideModule { }
