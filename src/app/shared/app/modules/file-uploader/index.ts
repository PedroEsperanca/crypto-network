import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FileUploadModule } from 'ng2-file-upload';
import { DndModule } from 'ng2-dnd';

import { MultilingualModule } from 'shared/i18n/multilingual.module';

import { FileUploaderComponent } from './file-uploader.component';

@NgModule({
  imports: [
    CommonModule,
    MultilingualModule,
    FileUploadModule,
    DndModule
  ],
  declarations: [ FileUploaderComponent ],
  exports: [ FileUploaderComponent ]
})
export class FileUploaderModule { }
