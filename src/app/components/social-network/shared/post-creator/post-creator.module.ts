import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreatorComponent } from './post-creator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PostCreatorComponent],
  exports: [PostCreatorComponent]
})
export class PostCreatorModule { }
