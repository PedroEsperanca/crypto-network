import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { ModalActionTypes, IModalActions, ModalActions } from '../actions/modal';

export interface ModalState {
  open: string | boolean;
}

const initialState: ModalState = {
  open: false
};

export function reducer(state = initialState, action: IModalActions | any): ModalState {
  switch (action.type) {

    case ModalActionTypes.OPEN: {
      return {
        open: action.payload || false
      };
    }

    case ModalActionTypes.CLOSE: {
      return {
        open: false
      };
    }

    default: {
      return state;
    }
  }
}
