import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'index',
  styleUrls: [ './index.component.scss' ],
  templateUrl: './index.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent {}
