import { UserLoggedGuard } from './user-logged';
import { UserExistsGuard } from './user-exists';
import { AppExistsGuard } from './app-exists';
import { AppCanDeactivateGuard } from './app-can-deactivate';

export const GUARDS_PROVIDERS = [
  UserLoggedGuard,
  UserExistsGuard,
  AppExistsGuard,
  AppCanDeactivateGuard
];

export { UserLoggedGuard } from './user-logged';
export { UserExistsGuard } from './user-exists';
export { AppExistsGuard } from './app-exists';
export { AppCanDeactivateGuard } from './app-can-deactivate';
