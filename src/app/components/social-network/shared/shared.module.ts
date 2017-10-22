import { NgModule } from '@angular/core';

import { SocialNetworkTopBarModule } from './top-bar/top-bar.module';
import { SocialNetworkProfilePreviewModule } from './profile-preview/profile-preview.module';

@NgModule({
  exports: [
    SocialNetworkTopBarModule,
    SocialNetworkProfilePreviewModule
  ]
})
export class SocialNetworkSharedModule { }
