/* tslint:disable */
import { AuthGuard } from './auth.guard';
import { UserExistsGuard } from './User';
import { OrganizationExistsGuard } from './Organization';
import { ContactExistsGuard } from './Contact';
import { StripeCustomerExistsGuard } from './StripeCustomer';
import { StripeSourceExistsGuard } from './StripeSource';
import { StripeChargeExistsGuard } from './StripeCharge';
import { AppExistsGuard } from './App';
import { ProductExistsGuard } from './Product';
import { SubscriptionExistsGuard } from './Subscription';
import { OAuthAppExistsGuard } from './OAuthApp';

export const LOOPBACK_GUARDS_PROVIDERS = [
  AuthGuard,
	UserExistsGuard,
	OrganizationExistsGuard,
	ContactExistsGuard,
	StripeCustomerExistsGuard,
	StripeSourceExistsGuard,
	StripeChargeExistsGuard,
	AppExistsGuard,
	ProductExistsGuard,
	SubscriptionExistsGuard,
	OAuthAppExistsGuard,
];

export * from './auth.guard';
export * from './User';
export * from './Organization';
export * from './Contact';
export * from './StripeCustomer';
export * from './StripeSource';
export * from './StripeCharge';
export * from './App';
export * from './Product';
export * from './Subscription';
export * from './OAuthApp';
