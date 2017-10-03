import { AsyncSubject } from 'rxjs/AsyncSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConfigService } from '@ngx-config/core';

import { Orm } from 'shared/api/orm';

import {
  Organization,
  OrganizationApi
} from 'shared/api';

@Component({
  selector: 'app-organizations-settings-profile',
  styleUrls: [ './profile.component.scss' ],
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsProfileComponent implements OnDestroy {
  public config: any;
  public formModel: Organization;
  public formModel$: ReplaySubject<Organization> = new ReplaySubject(1);

  private organizationId: string;

  private destroyStream$: AsyncSubject<any> = new AsyncSubject();

  constructor(
    private configService: ConfigService,
    private route: ActivatedRoute,
    private orm: Orm,
    private organization: OrganizationApi
  ) {
    this.config = this.configService.getSettings();

    route.parent.parent.parent.params.take(1).subscribe((params) => {
      this.organizationId = params.id;

      this.orm.Organization.findById(params.id)
        .takeUntil(this.destroyStream$)
        .subscribe((org: Organization) => {
          if (org) {
            this.formModel = org;
            this.formModel$.next(this.formModel);
          }
        });
    });

    this.fileNameRewrite = this.fileNameRewrite.bind(this);
    this.getUploadUrl = this.getUploadUrl.bind(this);
    this.onUploadComplete = this.onUploadComplete.bind(this);
  }

  public ngOnDestroy() {
    this.destroyStream$.next(1);
    this.destroyStream$.complete();
  }

  public submitUpdate() {
    this.orm.Organization.updateAttributes(this.organizationId, this.formModel, {
      alert: {
        success: {
          message: 'Profile updated successfully.',
          type: 'info'
        }
      }
    });
  }

  public fileNameRewrite(fileName: string): string {
    return 'organization/' + this.organizationId + '/avatar';
  }

  public getUploadUrl(fileName: string, fileType: string, options: any = {}) {
    options.fileType = fileType;
    return this.organization.s3PUTSignedUrl(this.organizationId, fileName, options);
  }

  public onUploadComplete(item: any) {
    this.orm.Organization.updateS3Photo(this.organizationId, {
      url: item.url.split('?')[0],
      key: item.file.name
    });
  }
}
