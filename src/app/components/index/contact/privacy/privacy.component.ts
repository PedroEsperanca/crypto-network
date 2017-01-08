import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ConfigService } from 'ng2-config';

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
  selector: 'contactPrivacy',
  styleUrls: [ './privacy.component.scss' ],
  templateUrl: './privacy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPrivacyComponent {
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
