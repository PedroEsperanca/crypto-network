import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { ApplicationActions } from '../actions/application';

export interface ApplicationState {
  idle: boolean;
  selectedOrganizationId: string;
  selectedAppId: string;
};

const initialState: ApplicationState = {
  idle: false,
  selectedOrganizationId: null,
  selectedAppId: null
};

export function reducer(state = initialState, action: Action): ApplicationState {
  switch (action.type) {

    case ApplicationActions.SET_IDLE: {
      return {
        idle: true,
        selectedOrganizationId: state.selectedOrganizationId,
        selectedAppId: state.selectedAppId
      };
    }

    case ApplicationActions.SET_ACTIVE: {
      return {
        idle: false,
        selectedOrganizationId: state.selectedOrganizationId,
        selectedAppId: state.selectedAppId
      };
    }

    case ApplicationActions.SELECT_ORGANIZATION: {
      const id: string = action.payload;

      return {
        idle: state.idle,
        selectedOrganizationId: id,
        selectedAppId: state.selectedAppId
      };
    }

    case ApplicationActions.SELECT_APP: {
      const id: string = action.payload;

      return {
        idle: state.idle,
        selectedOrganizationId: state.selectedOrganizationId,
        selectedAppId: id
      };
    }

    default: {
      return state;
    }
  }
}
