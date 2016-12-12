import { UserLoggedGuard } from './user-logged';
import { AppExistsGuard } from './app-exists';
import { AppCanDeactivateGuard } from './app-can-deactivate';

export const GUARDS_PROVIDERS = [
  UserLoggedGuard,
  AppExistsGuard,
  AppCanDeactivateGuard
];

export { UserLoggedGuard } from './user-logged';
export { AppExistsGuard } from './app-exists';
export { AppCanDeactivateGuard } from './app-can-deactivate';
