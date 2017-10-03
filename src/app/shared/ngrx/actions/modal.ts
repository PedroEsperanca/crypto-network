import { Action } from '@ngrx/store';
import { type } from '../util';

export const ModalActionTypes = {
  OPEN: type('[Modal] Open Modal'),
  CLOSE: type('[Modal] Close Modal'),
};

export module ModalActions {
  export class Open implements Action {
    public readonly type = ModalActionTypes.OPEN;

    constructor(public payload: string) { }
  }

  export class Close implements Action {
    public readonly type = ModalActionTypes.CLOSE;
  }
};

export type IModalActions =
  | ModalActions.Open
  | ModalActions.Close;
