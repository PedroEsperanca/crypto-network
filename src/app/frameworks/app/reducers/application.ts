import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { ApplicationActions } from '../actions/application';

export interface ApplicationState {
  idle: boolean;
  selectedOrganizationId: string;
};

const initialState: ApplicationState = {
  idle: false,
  selectedOrganizationId: null
};

export function reducer(state = initialState, action: Action): ApplicationState {
  switch (action.type) {

    case ApplicationActions.SET_IDLE: {
      return {
        idle: true,
        selectedOrganizationId: state.selectedOrganizationId
      };
    }

    case ApplicationActions.SET_ACTIVE: {
      return {
        idle: false,
        selectedOrganizationId: state.selectedOrganizationId
      };
    }

    case ApplicationActions.SELECT_VAULT: {
      const id: string = action.payload;

      return {
        idle: state.idle,
        selectedOrganizationId: id
      };
    }

    default: {
      return state;
    }
  }
}
