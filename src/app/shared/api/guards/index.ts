/* tslint:disable */
import { AuthGuard } from './auth.guard';
import { UserExistsGuard } from './User';
import { OrganizationExistsGuard } from './Organization';
import { AppExistsGuard } from './App';
import { OAuthAppExistsGuard } from './OAuthApp';

export const LOOPBACK_GUARDS_PROVIDERS = [
  AuthGuard,
	UserExistsGuard,
	OrganizationExistsGuard,
	AppExistsGuard,
	OAuthAppExistsGuard,
];

export * from './auth.guard';
export * from './User';
export * from './Organization';
export * from './App';
export * from './OAuthApp';
