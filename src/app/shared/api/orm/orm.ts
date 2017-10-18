/* tslint:disable */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as OrmModels from './models';
import * as models from '../models';

import { RealTime } from '../services';


@Injectable()
export class Orm {
  public User: OrmModels.OrmUser;
  public Organization: OrmModels.OrmOrganization;
  public Contact: OrmModels.OrmContact;
  public StripeCustomer: OrmModels.OrmStripeCustomer;
  public StripeSource: OrmModels.OrmStripeSource;
  public StripeCharge: OrmModels.OrmStripeCharge;
  public StripeStoreIdentity: OrmModels.OrmStripeStoreIdentity;
  public App: OrmModels.OrmApp;
  public Product: OrmModels.OrmProduct;
  public Subscription: OrmModels.OrmSubscription;
  public OAuthApp: OrmModels.OrmOAuthApp;

  constructor(public store: Store<any>, protected realTime?: RealTime) {
    this.User = new OrmModels.OrmUser(store, realTime);
    this.Organization = new OrmModels.OrmOrganization(store, realTime);
    this.Contact = new OrmModels.OrmContact(store, realTime);
    this.StripeCustomer = new OrmModels.OrmStripeCustomer(store, realTime);
    this.StripeSource = new OrmModels.OrmStripeSource(store, realTime);
    this.StripeCharge = new OrmModels.OrmStripeCharge(store, realTime);
    this.StripeStoreIdentity = new OrmModels.OrmStripeStoreIdentity(store, realTime);
    this.App = new OrmModels.OrmApp(store, realTime);
    this.Product = new OrmModels.OrmProduct(store, realTime);
    this.Subscription = new OrmModels.OrmSubscription(store, realTime);
    this.OAuthApp = new OrmModels.OrmOAuthApp(store, realTime);
  }
}
