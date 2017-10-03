/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Organization } from '../../models/Organization';
import { Contact } from '../../models/Contact';
import { StripeCustomer } from '../../models/StripeCustomer';
import { StripeSource } from '../../models/StripeSource';
import { StripeCharge } from '../../models/StripeCharge';
import { App } from '../../models/App';
import { Product } from '../../models/Product';
import { Subscription } from '../../models/Subscription';
import { OAuthApp } from '../../models/OAuthApp';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Organization: Organization,
    Contact: Contact,
    StripeCustomer: StripeCustomer,
    StripeSource: StripeSource,
    StripeCharge: StripeCharge,
    App: App,
    Product: Product,
    Subscription: Subscription,
    OAuthApp: OAuthApp,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
