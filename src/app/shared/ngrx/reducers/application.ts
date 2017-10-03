import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { ApplicationActionTypes, IApplicationActions, ApplicationActions } from '../actions/application';

export interface ApplicationState {
  idle: boolean;
  selectedOrganizationId: string;
  selectedAppId: string;
}

const initialState: ApplicationState = {
  idle: false,
  selectedOrganizationId: null,
  selectedAppId: null
};

export function reducer(state = initialState, action: IApplicationActions | any): ApplicationState {
  switch (action.type) {

    case ApplicationActionTypes.SET_IDLE: {
      return {
        idle: true,
        selectedOrganizationId: state.selectedOrganizationId,
        selectedAppId: state.selectedAppId
      };
    }

    case ApplicationActionTypes.SET_ACTIVE: {
      return {
        idle: false,
        selectedOrganizationId: state.selectedOrganizationId,
        selectedAppId: state.selectedAppId
      };
    }

    case ApplicationActionTypes.SELECT_ORGANIZATION: {
      return {
        idle: state.idle,
        selectedOrganizationId: action.payload,
        selectedAppId: state.selectedAppId
      };
    }

    case ApplicationActionTypes.SELECT_APP: {
      return {
        idle: state.idle,
        selectedOrganizationId: state.selectedOrganizationId,
        selectedAppId: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
