import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialNetworkComponent } from './social-network.component';

import { routing } from './social-network.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [SocialNetworkComponent]
})
export class SocialNetworkModule { }
