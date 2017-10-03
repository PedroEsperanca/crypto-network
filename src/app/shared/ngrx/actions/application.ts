import { Action } from '@ngrx/store';
import { type } from '../util';

export const ApplicationActionTypes = {
  SET_IDLE: type('[App] Set App as Idle'),
  SET_ACTIVE: type('[App] Set App as Active'),
  SELECT_ORGANIZATION: type('[App] Select Organization'),
  SELECT_APP: type('[App] Select App'),
};

export module ApplicationActions {
  export class SetIddle implements Action {
    public readonly type = ApplicationActionTypes.SET_IDLE;
  }

  export class SetActive implements Action {
    public readonly type = ApplicationActionTypes.SET_ACTIVE;
  }

  export class SelectOrganization implements Action {
    public readonly type = ApplicationActionTypes.SELECT_ORGANIZATION;

    constructor(public payload: string) { }
  }

  export class SelectApp implements Action {
    public readonly type = ApplicationActionTypes.SELECT_APP;

    constructor(public payload: string) { }
  }
}

export type IApplicationActions =
  | ApplicationActions.SetIddle
  | ApplicationActions.SetActive
  | ApplicationActions.SelectOrganization
  | ApplicationActions.SelectApp;
