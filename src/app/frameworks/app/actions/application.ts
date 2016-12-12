import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

/**
 * Instead of passing around action string constants and manually recreating
 * action objects at the point of dispatch, we create services encapsulating
 * each appropriate action group. Action types are included as static
 * members and kept next to their action creator. This promotes a
 * uniform interface and single import for appropriate actions
 * within your application components.
 */
@Injectable()
export class ApplicationActions {

  static SET_IDLE = '[App] Set App as Idle';
  setIddle(): Action {
    return {
      type: ApplicationActions.SET_IDLE
    };
  }

  static SET_ACTIVE = '[App] Set App as Active';
  setActive(): Action {
    return {
      type: ApplicationActions.SET_ACTIVE
    };
  }

  static SELECT_VAULT = '[App] Select App';
  selectApp(id: string): Action {
    return {
      type: ApplicationActions.SELECT_VAULT,
      payload: id
    };
  }
  
}
