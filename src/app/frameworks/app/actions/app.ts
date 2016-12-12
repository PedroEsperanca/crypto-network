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
  static SEARCH = '[App] Search';
  search(filter: LoopBackFilter): Action {
    return {
      type: AppActions.SEARCH,
      payload: filter
    };
  }

  // TODO: fix typing
  static SEARCH_COMPLETE = '[App] Search Complete';
  searchComplete(results: AppInterface[] | any): Action {
    return {
      type: AppActions.SEARCH_COMPLETE,
      payload: results
    };
  }

  static ADD_TO_COLLECTION = '[App] Add to Collection';
  addToCollection(app: AppInterface): Action {
    return {
      type: AppActions.ADD_TO_COLLECTION,
      payload: app
    };
  }

  static ADD_TO_COLLECTION_SUCCESS = '[App] Add to Collection Success';
  addToCollectionSuccess(app: AppInterface): Action {
    return {
      type: AppActions.ADD_TO_COLLECTION_SUCCESS,
      payload: app
    };
  }

  static ADD_TO_COLLECTION_FAIL = '[App] Add to Collection Fail';
  addToCollectionFail(app: AppInterface): Action {
    return {
      type: AppActions.ADD_TO_COLLECTION_FAIL,
      payload: app
    };
  }

  static REMOVE_FROM_COLLECTION = '[App] Remove from Collection';
  removeFromCollection(app: AppInterface): Action {
    return {
      type: AppActions.REMOVE_FROM_COLLECTION,
      payload: app
    };
  }

  static REMOVE_FROM_COLLECTION_SUCCESS = '[App] Remove From Collection Success';
  removeFromCollectionSuccess(app: AppInterface): Action {
    return {
      type: AppActions.REMOVE_FROM_COLLECTION_SUCCESS,
      payload: app
    };
  }

  static REMOVE_FROM_COLLECTION_FAIL = '[App] Remove From Collection Fail';
  removeFromCollectionFail(app: AppInterface): Action {
    return {
      type: AppActions.REMOVE_FROM_COLLECTION_FAIL,
      payload: app
    };
  }

  static LOAD_COLLECTION = '[App] Load Collection';
  loadCollection(): Action {
    return {
      type: AppActions.LOAD_COLLECTION
    };
  }

  static LOAD_COLLECTION_SUCCESS = '[App] Load Collection Success';
  loadCollectionSuccess(apps: AppInterface[]): Action {
    return {
      type: AppActions.LOAD_COLLECTION_SUCCESS,
      payload: apps
    };
  }

  static LOAD_CLUSTER = '[App] Load App';
  loadApp(app: AppInterface): Action {
    return {
      type: AppActions.LOAD_CLUSTER,
      payload: app
    };
  }
}
