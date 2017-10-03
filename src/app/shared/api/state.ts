/* tslint:disable */
import { SDKToken } from './models/BaseModels';

import * as reducers from './reducers/index';

import { LoopbackAuthEffects } from './effects/auth';
import { UserEffects } from './effects/User';
import { OrganizationEffects } from './effects/Organization';
import { ContactEffects } from './effects/Contact';
import { StripeCustomerEffects } from './effects/StripeCustomer';
import { StripeSourceEffects } from './effects/StripeSource';
import { StripeChargeEffects } from './effects/StripeCharge';
import { AppEffects } from './effects/App';
import { ProductEffects } from './effects/Product';
import { SubscriptionEffects } from './effects/Subscription';
import { OAuthAppEffects } from './effects/OAuthApp';

export interface LoopbackStateInterface {
  LoopbackAuth: SDKToken;
  Users: reducers.UsersState;
  Organizations: reducers.OrganizationsState;
  Contacts: reducers.ContactsState;
  StripeCustomers: reducers.StripeCustomersState;
  StripeSources: reducers.StripeSourcesState;
  StripeCharges: reducers.StripeChargesState;
  Apps: reducers.AppsState;
  Products: reducers.ProductsState;
  Subscriptions: reducers.SubscriptionsState;
  OAuthApps: reducers.OAuthAppsState;
};

export const LoopbackReducer = {
  LoopbackAuth: reducers.LoopbackAuthReducer,
	Users: reducers.UsersReducer,
	Organizations: reducers.OrganizationsReducer,
	Contacts: reducers.ContactsReducer,
	StripeCustomers: reducers.StripeCustomersReducer,
	StripeSources: reducers.StripeSourcesReducer,
	StripeCharges: reducers.StripeChargesReducer,
	Apps: reducers.AppsReducer,
	Products: reducers.ProductsReducer,
	Subscriptions: reducers.SubscriptionsReducer,
	OAuthApps: reducers.OAuthAppsReducer,
};

export const LoopbackEffects = [
  LoopbackAuthEffects,
  UserEffects,
  OrganizationEffects,
  ContactEffects,
  StripeCustomerEffects,
  StripeSourceEffects,
  StripeChargeEffects,
  AppEffects,
  ProductEffects,
  SubscriptionEffects,
  OAuthAppEffects,
];
