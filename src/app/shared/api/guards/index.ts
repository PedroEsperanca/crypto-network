/* tslint:disable */
import { AuthGuard } from './auth.guard';
import { UserExistsGuard } from './User';
import { OrganizationExistsGuard } from './Organization';
import { ContactExistsGuard } from './Contact';
import { FollowExistsGuard } from './Follow';
import { VoteExistsGuard } from './Vote';
import { PostExistsGuard } from './Post';
import { ReplyExistsGuard } from './Reply';
import { ShareExistsGuard } from './Share';
import { StripeCustomerExistsGuard } from './StripeCustomer';
import { StripeSourceExistsGuard } from './StripeSource';
import { StripeChargeExistsGuard } from './StripeCharge';
import { StripeStoreIdentityExistsGuard } from './StripeStoreIdentity';
import { ProductExistsGuard } from './Product';
import { SubscriptionExistsGuard } from './Subscription';
import { OAuthAppExistsGuard } from './OAuthApp';

export const LOOPBACK_GUARDS_PROVIDERS = [
  AuthGuard,
	UserExistsGuard,
	OrganizationExistsGuard,
	ContactExistsGuard,
	FollowExistsGuard,
	VoteExistsGuard,
	PostExistsGuard,
	ReplyExistsGuard,
	ShareExistsGuard,
	StripeCustomerExistsGuard,
	StripeSourceExistsGuard,
	StripeChargeExistsGuard,
	StripeStoreIdentityExistsGuard,
	ProductExistsGuard,
	SubscriptionExistsGuard,
	OAuthAppExistsGuard,
];

export * from './auth.guard';
export * from './User';
export * from './Organization';
export * from './Contact';
export * from './Follow';
export * from './Vote';
export * from './Post';
export * from './Reply';
export * from './Share';
export * from './StripeCustomer';
export * from './StripeSource';
export * from './StripeCharge';
export * from './StripeStoreIdentity';
export * from './Product';
export * from './Subscription';
export * from './OAuthApp';
