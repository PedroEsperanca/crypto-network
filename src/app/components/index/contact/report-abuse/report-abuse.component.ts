import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ConfigService } from '@nglibs/config';

interface FormI {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface AlertI {
  success?: string;
  info?: string;
  warning?: string;
  error?: string;
}

@Component({
  selector: 'contactReportAbuse',
  styleUrls: [ './report-abuse.component.scss' ],
  templateUrl: './report-abuse.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactReportAbuseComponent {
  public config: any;

  public formModel: FormI = {
    name: '',
    email: '',
    subject: 'Privacy Concern',
    message: ''
  };

  public alert: AlertI = {};
  public submited: boolean = false;

  constructor(public configService: ConfigService) {
    this.config = this.configService.getSettings();
  }

  public send() {
    this.alert = {};
    console.log(this.formModel);
  }
}
