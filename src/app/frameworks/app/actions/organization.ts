import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { LoopBackFilter, OrganizationInterface } from 'frameworks/api/models';

/**
 * Instead of passing around action string constants and manually recreating
 * action objects at the point of dispatch, we create services encapsulating
 * each appropriate action group. Action types are included as static
 * members and kept next to their action creator. This promotes a
 * uniform interface and single import for appropriate actions
 * within your application components.
 */
@Injectable()
export class OrganizationActions {
  public static SEARCH = '[Organization] Search';
  public static SEARCH_COMPLETE = '[Organization] Search Complete';

  public static ADD_TO_COLLECTION = '[Organization] Add to Collection';
  public static ADD_TO_COLLECTION_SUCCESS = '[Organization] Add to Collection Success';
  public static ADD_TO_COLLECTION_FAIL = '[Organization] Add to Collection Fail';

  public static UPDATE_IN_COLLECTION = '[Organization] Update in Collection';
  public static UPDATE_IN_COLLECTION_SUCCESS = '[Organization] Update in Collection Success';
  public static UPDATE_IN_COLLECTION_FAIL = '[Organization] Update in Collection Fail';

  public static REMOVE_FROM_COLLECTION = '[Organization] Remove from Collection';
  public static REMOVE_FROM_COLLECTION_SUCCESS = '[Organization] Remove From Collection Success';
  public static REMOVE_FROM_COLLECTION_FAIL = '[Organization] Remove From Collection Fail';

  public static LOAD_COLLECTION = '[Organization] Load Collection';
  public static LOAD_COLLECTION_SUCCESS = '[Organization] Load Collection Success';
  public static LOAD_CLUSTER = '[Organization] Load Organization';

  public search(filter: LoopBackFilter): Action {
    return {
      type: OrganizationActions.SEARCH,
      payload: filter
    };
  }

  // TODO: fix typing
  public searchComplete(results: OrganizationInterface[] | any): Action {
    return {
      type: OrganizationActions.SEARCH_COMPLETE,
      payload: results
    };
  }

  public addToCollection(organization: OrganizationInterface): Action {
    return {
      type: OrganizationActions.ADD_TO_COLLECTION,
      payload: organization
    };
  }

  public addToCollectionSuccess(organization: OrganizationInterface): Action {
    return {
      type: OrganizationActions.ADD_TO_COLLECTION_SUCCESS,
      payload: organization
    };
  }

  public addToCollectionFail(organization: OrganizationInterface): Action {
    return {
      type: OrganizationActions.ADD_TO_COLLECTION_FAIL,
      payload: organization
    };
  }

  public updateInCollection(organization: OrganizationInterface): Action {
    return {
      type: OrganizationActions.UPDATE_IN_COLLECTION,
      payload: organization
    };
  }

  public updateInCollectionSuccess(organization: OrganizationInterface): Action {
    return {
      type: OrganizationActions.UPDATE_IN_COLLECTION_SUCCESS,
      payload: organization
    };
  }

  public updateInCollectionFail(organization: OrganizationInterface): Action {
    return {
      type: OrganizationActions.UPDATE_IN_COLLECTION_FAIL,
      payload: organization
    };
  }

  public removeFromCollection(organization: OrganizationInterface): Action {
    return {
      type: OrganizationActions.REMOVE_FROM_COLLECTION,
      payload: organization
    };
  }

  public removeFromCollectionSuccess(organization: OrganizationInterface): Action {
    return {
      type: OrganizationActions.REMOVE_FROM_COLLECTION_SUCCESS,
      payload: organization
    };
  }

  public removeFromCollectionFail(organization: OrganizationInterface): Action {
    return {
      type: OrganizationActions.REMOVE_FROM_COLLECTION_FAIL,
      payload: organization
    };
  }

  public loadCollection(): Action {
    return {
      type: OrganizationActions.LOAD_COLLECTION
    };
  }

  public loadCollectionSuccess(organizations: OrganizationInterface[]): Action {
    return {
      type: OrganizationActions.LOAD_COLLECTION_SUCCESS,
      payload: organizations
    };
  }

  public loadOrganization(organization: OrganizationInterface): Action {
    return {
      type: OrganizationActions.LOAD_CLUSTER,
      payload: organization
    };
  }
}
