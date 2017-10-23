import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialNetworkTopBarComponent } from './top-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SocialNetworkTopBarComponent],
  exports: [SocialNetworkTopBarComponent]
})
export class SocialNetworkTopBarModule { }
