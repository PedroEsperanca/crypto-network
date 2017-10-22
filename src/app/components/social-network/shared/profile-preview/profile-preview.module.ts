import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialNetworkProfilePreviewComponent } from './profile-preview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SocialNetworkProfilePreviewComponent],
  exports: [SocialNetworkProfilePreviewComponent]
})
export class SocialNetworkProfilePreviewModule { }
