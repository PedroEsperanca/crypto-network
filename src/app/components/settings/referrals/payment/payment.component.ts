import { Component, ChangeDetectionStrategy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { StripeService } from 'ngx-stripe';
import { Elements, Element as StripeElement } from 'ngx-stripe';

import { Orm } from 'shared/api/orm';

import {
  User,
  getLoopbackAuthAccount
} from 'shared/api';
import { IAppState } from 'shared/ngrx';

@Component({
  selector: 'app-settings-referrals-payment',
  styleUrls: [ './payment.component.scss' ],
  templateUrl: './payment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsReferralsPaymentComponent implements OnInit {
  public elements: Elements;
  public card: StripeElement;
  @ViewChild('card') public cardRef: ElementRef;

  public formModel: any = {};
  public currentUser: User;

  constructor(
    private store: Store<IAppState>,
    private orm: Orm,
    private stripeService: StripeService,
    private router: Router
  ) {
    this.store.select(getLoopbackAuthAccount)
      .take(1)
      .subscribe((currentUser: User) => {
        if (!currentUser) { return; }
        this.currentUser = (<any> Object).assign({}, currentUser);
      });
  }

  ngOnInit() {
    this.stripeService.elements()
      .subscribe(elements => {
        this.elements = elements;
        // Only mount the element the first time
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                iconColor: '#666EE8',
                color: '#31325F',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                  color: '#CFD7E0'
                }
              }
            }
          });
          this.card.mount(this.cardRef.nativeElement);
        }
      });
  }

  submit() {
    this.stripeService
      .createSource(this.card, {
        type: 'card',
        metadata: {
          userId: this.currentUser.id,
          vat: this.formModel.vat
        },
        owner: {
          name: this.currentUser.name
        }
      })
      .take(1)
      .subscribe((source) => {
        this.orm.User.createStripeSources(this.currentUser.id, source.source);
        this.router.navigate(['../']);
      })
  }
}
