import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'settingsProfile',
  styleUrls: [ './profile.component.scss' ],
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsProfileComponent {
  public USER: any = {};
}
