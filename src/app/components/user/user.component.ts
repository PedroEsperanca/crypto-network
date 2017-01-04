import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'user.user',
  styleUrls: [ './user.component.scss' ],
  templateUrl: './user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
}
