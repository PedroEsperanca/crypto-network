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
  public static SET_IDLE = '[App] Set App as Idle';
  public static SET_ACTIVE = '[App] Set App as Active';

  public static SELECT_ORGANIZATION = '[App] Select Organization';
  public static SELECT_APP = '[App] Select App';

  public setIddle(): Action {
    return {
      type: ApplicationActions.SET_IDLE
    };
  }

  public setActive(): Action {
    return {
      type: ApplicationActions.SET_ACTIVE
    };
  }

  public selectOrganization(id: string): Action {
    return {
      type: ApplicationActions.SELECT_ORGANIZATION,
      payload: id
    };
  }

  public selectApp(id: string): Action {
    return {
      type: ApplicationActions.SELECT_APP,
      payload: id
    };
  }
}
