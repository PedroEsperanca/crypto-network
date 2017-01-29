import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { LoopBackFilter, AppInterface } from 'frameworks/api/models';

/**
 * Instead of passing around action string constants and manually recreating
 * action objects at the point of dispatch, we create services encapsulating
 * each appropriate action group. Action types are included as static
 * members and kept next to their action creator. This promotes a
 * uniform interface and single import for appropriate actions
 * within your application components.
 */
@Injectable()
export class AppActions {
  public static SEARCH = '[App] Search';
  public static SEARCH_COMPLETE = '[App] Search Complete';

  public static ADD_TO_COLLECTION = '[App] Add to Collection';
  public static ADD_TO_COLLECTION_SUCCESS = '[App] Add to Collection Success';
  public static ADD_TO_COLLECTION_FAIL = '[App] Add to Collection Fail';

  public static UPDATE_IN_COLLECTION = '[App] Update in Collection';
  public static UPDATE_IN_COLLECTION_SUCCESS = '[App] Update in Collection Success';
  public static UPDATE_IN_COLLECTION_FAIL = '[App] Update in Collection Fail';

  public static REMOVE_FROM_COLLECTION = '[App] Remove from Collection';
  public static REMOVE_FROM_COLLECTION_SUCCESS = '[App] Remove From Collection Success';
  public static REMOVE_FROM_COLLECTION_FAIL = '[App] Remove From Collection Fail';

  public static LOAD_COLLECTION = '[App] Load Collection';
  public static LOAD_COLLECTION_SUCCESS = '[App] Load Collection Success';
  public static LOAD_APP = '[App] Load App';

  public search(filter: LoopBackFilter): Action {
    return {
      type: AppActions.SEARCH,
      payload: filter
    };
  }

  // TODO: fix typing
  public searchComplete(results: AppInterface[] | any): Action {
    return {
      type: AppActions.SEARCH_COMPLETE,
      payload: results
    };
  }

  public addToCollection(app: AppInterface): Action {
    return {
      type: AppActions.ADD_TO_COLLECTION,
      payload: app
    };
  }

  public addToCollectionSuccess(app: AppInterface): Action {
    return {
      type: AppActions.ADD_TO_COLLECTION_SUCCESS,
      payload: app
    };
  }

  public addToCollectionFail(app: AppInterface): Action {
    return {
      type: AppActions.ADD_TO_COLLECTION_FAIL,
      payload: app
    };
  }

  public updateInCollection(app: AppInterface): Action {
    return {
      type: AppActions.UPDATE_IN_COLLECTION,
      payload: app
    };
  }

  public updateInCollectionSuccess(app: AppInterface): Action {
    return {
      type: AppActions.UPDATE_IN_COLLECTION_SUCCESS,
      payload: app
    };
  }

  public updateInCollectionFail(app: AppInterface): Action {
    return {
      type: AppActions.UPDATE_IN_COLLECTION_FAIL,
      payload: app
    };
  }

  public removeFromCollection(app: AppInterface): Action {
    return {
      type: AppActions.REMOVE_FROM_COLLECTION,
      payload: app
    };
  }

  public removeFromCollectionSuccess(app: AppInterface): Action {
    return {
      type: AppActions.REMOVE_FROM_COLLECTION_SUCCESS,
      payload: app
    };
  }

  public removeFromCollectionFail(app: AppInterface): Action {
    return {
      type: AppActions.REMOVE_FROM_COLLECTION_FAIL,
      payload: app
    };
  }

  public loadCollection(): Action {
    return {
      type: AppActions.LOAD_COLLECTION
    };
  }

  public loadCollectionSuccess(apps: AppInterface[]): Action {
    return {
      type: AppActions.LOAD_COLLECTION_SUCCESS,
      payload: apps
    };
  }

  public loadApp(app: AppInterface): Action {
    return {
      type: AppActions.LOAD_APP,
      payload: app
    };
  }
}
