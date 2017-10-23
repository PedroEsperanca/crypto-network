import { NgModule } from '@angular/core';

import { SocialNetworkTopBarModule } from './top-bar/top-bar.module';
import { SocialNetworkProfilePreviewModule } from './profile-preview/profile-preview.module';
import { SocialNetworkPostCreatorModule } from './post-creator/post-creator.module';
import { SocialNetworkPostModule } from './post/post.module';


@NgModule({
  exports: [
    SocialNetworkTopBarModule,
    SocialNetworkProfilePreviewModule,
    SocialNetworkPostCreatorModule,
    SocialNetworkPostModule
  ]
})
export class SocialNetworkSharedModule { }
