import { UserLoggedGuard } from './user-logged';
import { UserExistsGuard } from './user-exists';
import { OrganizationExistsGuard } from './organization-exists';
import { OrganizationCanDeactivateGuard } from './organization-can-deactivate';
import { AppExistsGuard } from './app-exists';
import { AppCanDeactivateGuard } from './app-can-deactivate';
import { ProfileExistsGuard } from './profile-exists';

export const GUARDS_PROVIDERS = [
  UserLoggedGuard,
  UserExistsGuard,
  OrganizationExistsGuard,
  OrganizationCanDeactivateGuard,
  AppExistsGuard,
  AppCanDeactivateGuard,
  ProfileExistsGuard
];

export { UserLoggedGuard } from './user-logged';
export { UserExistsGuard } from './user-exists';
export { OrganizationExistsGuard } from './organization-exists';
export { OrganizationCanDeactivateGuard } from './organization-can-deactivate';
export { AppExistsGuard } from './app-exists';
export { AppCanDeactivateGuard } from './app-can-deactivate';
export { ProfileExistsGuard } from './profile-exists';
