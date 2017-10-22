import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialNetworkStyleGuideComponent } from './style-guide.component';

import { routing } from './style-guide.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [SocialNetworkStyleGuideComponent]
})
export class SocialNetworkStyleGuideModule { }
