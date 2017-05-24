import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  OnInit
} from '@angular/core';
import { UrlSerializer } from '@angular/router';

import { FileUploader, FileItem } from 'ng2-file-upload';

@Component({
  selector: 'file-uploader',
  styleUrls: [ './file-uploader.component.scss' ],
  templateUrl: './file-uploader.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploaderComponent implements OnInit {
  @Input('type') public type: string;
  @Input('title') public title: string;
  @Input('uploadButton') public uploadButton: string;
  @Input('uploadingButton') public uploadingButton: string;

  @Input('maxFileSize') public maxFileSize: number;
  @Input('allowedMimeType') public allowedMimeType: string[];

  @Input('currentFile') public currentFile: string;

  @Input('autoUpload') public autoUpload = false;

  @Input('fileNameRewrite') public fileNameRewrite: any;
  @Input('getUploadUrl') public getUploadUrl: any;

  @Input('onCompleteItem') public onCompleteItem: any;
  @Input('onCompleteAll') public onCompleteAll: any;

  public uploader: FileUploader;

  public hasDropZoneOver = false;

  public errorName: string;
  public uploading = false;
  public progress = 0;

  constructor(
    private cd: ChangeDetectorRef,
    private urlSerializer: UrlSerializer
  ) {}

  public ngOnInit() {
    const params: any = {
      disableMultipart: true,
      method: 'PUT',
      maxFileSize: this.maxFileSize || 1024 * 1024, // 1 MB
      allowedMimeType: this.allowedMimeType || ['image/png', 'image/jpg', 'image/jpeg']
    };

    this.uploader = new FileUploader(params);

    this.uploader.onAfterAddingAll = (fileItems: any): any => {
      return {fileItems};
    };

    this.uploader.onBuildItemForm = (fileItem: FileItem, form: any): any => {
      return {fileItem, form};
    };

    this.uploader.onAfterAddingFile = (fileItem: FileItem): any => {
      this.uploading = true;
      this.cd.markForCheck();

      const fileName = this.fileNameRewrite(fileItem.file.name);
      if (fileName !== fileItem.file.name) {
        fileItem.file.name = fileName;
        // fileItem.some.name = fileName;
        // fileItem._file.name = fileName;
      }

      fileItem.url = this.getUploadUrl(fileItem.file.name, fileItem.file.type).subscribe(
        (response: string) => {
          fileItem.url = response;

          const parsedUrl = this.parseUrl(response);
          if (parsedUrl.query['Cache-Control']) {
            fileItem.headers.push({
              name: 'Cache-Control',
              value: parsedUrl.query['Cache-Control']
            });
          }

          if (this.autoUpload) {
            fileItem.upload();
          }
          return {fileItem};
        },
        (error) => {
          return error;
        }
      );
    };

    this.uploader.onWhenAddingFileFailed = (item: any, filter: any, options: any): any => {
      if (filter) {
        this.errorName = filter.name;
      }
      return {item, filter, options};
    };

    this.uploader.onBeforeUploadItem = (fileItem: FileItem): any => {
      return {fileItem};
    };

    this.uploader.onProgressItem = (fileItem: FileItem, progress: any): any => {
      return {fileItem, progress};
    };

    this.uploader.onProgressAll = (progress: any): any => {
      this.progress = progress;
      this.cd.markForCheck();
      return {progress};
    };

    this.uploader.onSuccessItem =
      (item: FileItem, response: string, status: number, headers: any): any => {
      return {item, response, status, headers};
    };

    this.uploader.onErrorItem =
      (item: FileItem, response: string, status: number, headers: any): any => {
      this.errorName = '404';
      this.cd.markForCheck();
      return {item, response, status, headers};
    };

    this.uploader.onCancelItem =
      (item: FileItem, response: string, status: number, headers: any): any => {
      return {item, response, status, headers};
    };

    this.uploader.onCompleteItem =
      (item: FileItem, response: string, status: number, headers: any): any => {
      if (status === 200 && this.onCompleteItem) {
        this.onCompleteItem(item);
      }
      return {item, response, status, headers};
    };

    this.uploader.onCompleteAll = (): any => {
      this.uploading = false;
      this.cd.markForCheck();

      if (this.onCompleteAll) {
        this.onCompleteAll();
      }
      return void 0;
    };
  }

  public uploadAll(): void {
    this.uploader.uploadAll();
  }

  public fileOverBase(e: any): void {
    this.hasDropZoneOver = e;
  }

  private parseUrl(url) {
    const pattern = RegExp('^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?');
    const matches = url.match(pattern);

    const query = {};
    matches[7].split('&').map((q: string) => {
      const index = q.indexOf('=');
      query[q.substring(0, index)] = decodeURIComponent(q.substring(index + 1, q.length));
      return;
    });

    return {
      scheme: matches[2],
      authority: matches[4],
      path: matches[5],
      query,
      fragment: matches[9]
    };
  }

}
