/* tslint:disable */
import { LoopbackAuthActions } from './auth';
import { ErrorActions } from './error';
import { UserActions } from './user';

export {
  LoopbackAuthActions,
  ErrorActions,
  UserActions
};

export const LOOPBACK_ACTIONS: any[] = [
  LoopbackAuthActions,
  ErrorActions,
  UserActions
];
