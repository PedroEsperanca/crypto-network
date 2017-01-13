import { UserLoggedGuard } from './user-logged';
import { UserExistsGuard } from './user-exists';
import { OrganizationExistsGuard } from './organization-exists';
import { OrganizationCanDeactivateGuard } from './organization-can-deactivate';

export const GUARDS_PROVIDERS = [
  UserLoggedGuard,
  UserExistsGuard,
  OrganizationExistsGuard,
  OrganizationCanDeactivateGuard
];

export { UserLoggedGuard } from './user-logged';
export { UserExistsGuard } from './user-exists';
export { OrganizationExistsGuard } from './organization-exists';
export { OrganizationCanDeactivateGuard } from './organization-can-deactivate';
