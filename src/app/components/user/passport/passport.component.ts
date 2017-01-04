import { Component, ChangeDetectionStrategy } from '@angular/core';

import { LoopBackAuth } from 'frameworks/api';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user.login',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PassportComponent {

  constructor(
    private auth: LoopBackAuth,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((token: any) => {
      if (token.id && token.userId && token.ttl && token.issuedAt) {
        this.auth.setUser({
          id: token.id,
          ttl: parseInt(token.ttl, 10),
          created: new Date().setTime(token.issuedAt),
          userId: token.userId,
          user: {},
          rememberMe: true
        });
        this.auth.setRememberMe(true);
        this.auth.save();
        this.router.navigate(['/apps']);
      }
    });
  }
}
