/* tslint:disable */
import { SDKToken } from './models/BaseModels';

import * as reducers from './reducers/index';

import { LoopbackAuthEffects } from './effects/auth';
import { UserEffects } from './effects/User';
import { OrganizationEffects } from './effects/Organization';
import { ContactEffects } from './effects/Contact';
import { FollowEffects } from './effects/Follow';
import { VoteEffects } from './effects/Vote';
import { PostEffects } from './effects/Post';
import { ReplyEffects } from './effects/Reply';
import { ShareEffects } from './effects/Share';
import { StripeCustomerEffects } from './effects/StripeCustomer';
import { StripeSourceEffects } from './effects/StripeSource';
import { StripeChargeEffects } from './effects/StripeCharge';
import { StripeStoreIdentityEffects } from './effects/StripeStoreIdentity';
import { ProductEffects } from './effects/Product';
import { SubscriptionEffects } from './effects/Subscription';
import { OAuthAppEffects } from './effects/OAuthApp';

export interface LoopbackStateInterface {
  LoopbackAuth: SDKToken;
  Users: reducers.UsersState;
  Organizations: reducers.OrganizationsState;
  Contacts: reducers.ContactsState;
  Follows: reducers.FollowsState;
  Votes: reducers.VotesState;
  Posts: reducers.PostsState;
  Replys: reducers.ReplysState;
  Shares: reducers.SharesState;
  StripeCustomers: reducers.StripeCustomersState;
  StripeSources: reducers.StripeSourcesState;
  StripeCharges: reducers.StripeChargesState;
  StripeStoreIdentitys: reducers.StripeStoreIdentitysState;
  Products: reducers.ProductsState;
  Subscriptions: reducers.SubscriptionsState;
  OAuthApps: reducers.OAuthAppsState;
};

export const LoopbackReducer = {
  LoopbackAuth: reducers.LoopbackAuthReducer,
	Users: reducers.UsersReducer,
	Organizations: reducers.OrganizationsReducer,
	Contacts: reducers.ContactsReducer,
	Follows: reducers.FollowsReducer,
	Votes: reducers.VotesReducer,
	Posts: reducers.PostsReducer,
	Replys: reducers.ReplysReducer,
	Shares: reducers.SharesReducer,
	StripeCustomers: reducers.StripeCustomersReducer,
	StripeSources: reducers.StripeSourcesReducer,
	StripeCharges: reducers.StripeChargesReducer,
	StripeStoreIdentitys: reducers.StripeStoreIdentitysReducer,
	Products: reducers.ProductsReducer,
	Subscriptions: reducers.SubscriptionsReducer,
	OAuthApps: reducers.OAuthAppsReducer,
	UserRoles: reducers.UserRolesReducer,
	UserProducts: reducers.UserProductsReducer,
};

export const LoopbackEffects = [
  LoopbackAuthEffects,
  UserEffects,
  OrganizationEffects,
  ContactEffects,
  FollowEffects,
  VoteEffects,
  PostEffects,
  ReplyEffects,
  ShareEffects,
  StripeCustomerEffects,
  StripeSourceEffects,
  StripeChargeEffects,
  StripeStoreIdentityEffects,
  ProductEffects,
  SubscriptionEffects,
  OAuthAppEffects,
];
