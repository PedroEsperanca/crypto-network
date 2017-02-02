import { ApplicationActions } from './application';
import { OrganizationActions } from './organization';
import { AppActions } from './app';
import { AlertActionTypes, AlertActions } from './alert';

export {
  ApplicationActions,
  OrganizationActions,
  AppActions,
  AlertActionTypes, AlertActions
};

export const ACTIONS: any[] = [
  ApplicationActions,
  OrganizationActions,
  AppActions,
  AlertActions
];
