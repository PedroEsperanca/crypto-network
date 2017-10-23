import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialNetworkProfileSideComponent } from './social-network-profile-side.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SocialNetworkProfileSideComponent],
  exports: [SocialNetworkProfileSideComponent]
})
export class SocialNetworkProfileSideModule { }
