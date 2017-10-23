import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialNetworkPostCreatorComponent } from './post-creator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SocialNetworkPostCreatorComponent],
  exports: [SocialNetworkPostCreatorComponent]
})
export class SocialNetworkPostCreatorModule { }
