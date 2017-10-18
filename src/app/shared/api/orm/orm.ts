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
  public Follow: OrmModels.OrmFollow;
  public Vote: OrmModels.OrmVote;
  public Post: OrmModels.OrmPost;
  public Reply: OrmModels.OrmReply;
  public Share: OrmModels.OrmShare;
  public StripeCustomer: OrmModels.OrmStripeCustomer;
  public StripeSource: OrmModels.OrmStripeSource;
  public StripeCharge: OrmModels.OrmStripeCharge;
  public StripeStoreIdentity: OrmModels.OrmStripeStoreIdentity;
  public Product: OrmModels.OrmProduct;
  public Subscription: OrmModels.OrmSubscription;
  public OAuthApp: OrmModels.OrmOAuthApp;

  constructor(public store: Store<any>, protected realTime?: RealTime) {
    this.User = new OrmModels.OrmUser(store, realTime);
    this.Organization = new OrmModels.OrmOrganization(store, realTime);
    this.Contact = new OrmModels.OrmContact(store, realTime);
    this.Follow = new OrmModels.OrmFollow(store, realTime);
    this.Vote = new OrmModels.OrmVote(store, realTime);
    this.Post = new OrmModels.OrmPost(store, realTime);
    this.Reply = new OrmModels.OrmReply(store, realTime);
    this.Share = new OrmModels.OrmShare(store, realTime);
    this.StripeCustomer = new OrmModels.OrmStripeCustomer(store, realTime);
    this.StripeSource = new OrmModels.OrmStripeSource(store, realTime);
    this.StripeCharge = new OrmModels.OrmStripeCharge(store, realTime);
    this.StripeStoreIdentity = new OrmModels.OrmStripeStoreIdentity(store, realTime);
    this.Product = new OrmModels.OrmProduct(store, realTime);
    this.Subscription = new OrmModels.OrmSubscription(store, realTime);
    this.OAuthApp = new OrmModels.OrmOAuthApp(store, realTime);
  }
}
