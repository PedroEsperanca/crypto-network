import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'indexAbout',
  styleUrls: [`
    h1 {
      font-family: Arial, Helvetica, sans-serif
    }
  `],
  template: `
  <md-card>
    <h1>
      patrick@AngularClass.com
    </h1>
  </md-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexAboutComponent {
}
