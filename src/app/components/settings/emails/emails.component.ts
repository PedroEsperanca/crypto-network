import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'settingsEmails',
  styleUrls: [ './emails.component.scss' ],
  templateUrl: './emails.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsEmailsComponent {
  public USER: any = {};
}
