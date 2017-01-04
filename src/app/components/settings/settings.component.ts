import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'settings.settings',
  styleUrls: [ './settings.component.scss' ],
  templateUrl: './settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent {
  public USER: any = {};

  public logout() {
    console.log();
  }
}
