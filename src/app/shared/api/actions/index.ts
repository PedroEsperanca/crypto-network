/* tslint:disable */
import { LoopbackAuthActionTypes, LoopbackAuthActions } from './auth';
import { LoopbackErrorActionTypes, LoopbackErrorActions } from './error';
import { UserActionTypes, UserActions } from './user';
import { OrganizationActionTypes, OrganizationActions } from './organization';
import { AppActionTypes, AppActions } from './app';

export {
  LoopbackAuthActionTypes, LoopbackAuthActions,
  LoopbackErrorActionTypes, LoopbackErrorActions,
  UserActionTypes, UserActions,
  OrganizationActionTypes, OrganizationActions,
  AppActionTypes, AppActions,
};

export const LOOPBACK_ACTIONS: any[] = [
  LoopbackAuthActions,
  LoopbackErrorActions,
  UserActions,
  OrganizationActions,
  AppActions,
];
