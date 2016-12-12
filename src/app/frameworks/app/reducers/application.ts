import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { ApplicationActions } from '../actions/application';

export interface ApplicationState {
  idle: boolean;
  selectedAppId: string;
};

const initialState: ApplicationState = {
  idle: false,
  selectedAppId: null
};

export default function(state = initialState, action: Action): ApplicationState {
  switch (action.type) {

    case ApplicationActions.SET_IDLE: {
      return {
        idle: true,
        selectedAppId: state.selectedAppId
      };
    }

    case ApplicationActions.SET_ACTIVE: {
      return {
        idle: false,
        selectedAppId: state.selectedAppId
      };
    }

    case ApplicationActions.SELECT_VAULT: {
      const id: string = action.payload;
      
      return {
        idle: state.idle,
        selectedAppId: id
      };
    }

    default: {
      return state;
    }
  }
}
