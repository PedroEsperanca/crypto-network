import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialNetworkPostComponent } from './post.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SocialNetworkPostComponent],
  exports: [SocialNetworkPostComponent]
})
export class SocialNetworkPostModule { }
