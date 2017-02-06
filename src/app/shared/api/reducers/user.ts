import { Observable } from 'rxjs/Observable';
import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { BaseReducerFactory } from './base';
import { User } from '../models/user';
import { UserActionTypes } from '../actions/user';

export interface UserState {
  ids: string[];
  entities: { [id: string]: User };
  selectedIds: string | string[];
  selectedAppsIds: string | string[];
};

const initialState: UserState = {
  ids: [],
  entities: {},
  selectedIds: [],
  selectedAppsIds: [],
};

function ReducerFactory() {
  let cases = {};

  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Apps relation reducer methods
   */
  cases[UserActionTypes.FIND_BY_ID_APPS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].apps =
      Array.from(new Set([ ...state.entities[action.payload.id].apps, action.payload.data]));

    return Object.assign({}, state, {
      entities: state.entities,
      selectedAppsIds: action.payload.data.id,
    });
  };

  cases[UserActionTypes.DESTROY_BY_ID_APPS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].apps =
      state.entities[action.payload.id].apps.filter((item) => item.id !== action.payload.fk);

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[UserActionTypes.UPDATE_BY_ID_APPS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].apps =
      state.entities[action.payload.id].apps.map((item) => {
        if (item.id === action.payload.data.id) {
          return action.payload.data;
        } else {
          return item;
        }
      });

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[UserActionTypes.CREATE_APPS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].apps =
      Array.from(new Set([ ...state.entities[action.payload.id].apps, ...action.payload.data]));

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[UserActionTypes.DELETE_APPS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].apps = [];

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[UserActionTypes.CREATE_MANY_APPS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].apps =
      Array.from(new Set([ ...state.entities[action.payload.id].apps, ...action.payload.data]));

    return Object.assign({}, state, {entities: state.entities});
  };

  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * OAuthClientApplications relation reducer methods
   */
  cases[UserActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].oAuthClientApplications =
      Array.from(new Set([ ...state.entities[action.payload.id].oAuthClientApplications, action.payload.data]));

    return Object.assign({}, state, {
      entities: state.entities,
      selectedOAuthClientApplicationsIds: action.payload.data.id,
    });
  };

  cases[UserActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].oAuthClientApplications =
      state.entities[action.payload.id].oAuthClientApplications.filter((item) => item.id !== action.payload.fk);

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[UserActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].oAuthClientApplications =
      state.entities[action.payload.id].oAuthClientApplications.map((item) => {
        if (item.id === action.payload.data.id) {
          return action.payload.data;
        } else {
          return item;
        }
      });

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[UserActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].oAuthClientApplications =
      Array.from(new Set([ ...state.entities[action.payload.id].oAuthClientApplications, ...action.payload.data]));

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[UserActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].oAuthClientApplications = [];

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[UserActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].oAuthClientApplications =
      Array.from(new Set([ ...state.entities[action.payload.id].oAuthClientApplications, ...action.payload.data]));

    return Object.assign({}, state, {entities: state.entities});
  };

  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Organizations relation reducer methods
   */
  cases[UserActionTypes.FIND_BY_ID_ORGANIZATIONS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].organizations =
      Array.from(new Set([ ...state.entities[action.payload.id].organizations, action.payload.data]));

    return Object.assign({}, state, {
      entities: state.entities,
      selectedOrganizationsIds: action.payload.data.id,
    });
  };

  cases[UserActionTypes.DESTROY_BY_ID_ORGANIZATIONS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].organizations =
      state.entities[action.payload.id].organizations.filter((item) => item.id !== action.payload.fk);

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[UserActionTypes.UPDATE_BY_ID_ORGANIZATIONS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].organizations =
      state.entities[action.payload.id].organizations.map((item) => {
        if (item.id === action.payload.data.id) {
          return action.payload.data;
        } else {
          return item;
        }
      });

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[UserActionTypes.CREATE_ORGANIZATIONS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].organizations =
      Array.from(new Set([ ...state.entities[action.payload.id].organizations, ...action.payload.data]));

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[UserActionTypes.DELETE_ORGANIZATIONS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].organizations = [];

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[UserActionTypes.CREATE_MANY_ORGANIZATIONS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].organizations =
      Array.from(new Set([ ...state.entities[action.payload.id].organizations, ...action.payload.data]));

    return Object.assign({}, state, {entities: state.entities});
  };

  return cases;
};

const cases = Object.assign(BaseReducerFactory<UserState, User>(UserActionTypes), ReducerFactory());

/**
 * @module UsersReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible User reducer.
 */
export function UsersReducer(state = initialState, action: Action): UserState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export function getUsersState() {
  return (state$: Observable<any>) => state$
    .select((s) => s.users);
}

export function getUsersEntities() {
  return (state$: Observable<any>) => state$
    .select((s) => s.users.entities);
}

export function getUsersIds() {
  return (state$: Observable<any>) => state$
    .select((s) => s.users.ids);
}

export function getUsersSelectedIds() {
  return (state$: Observable<any>) => state$
    .select((s) => s.users.selectedIds);
}

export function getUsers() {
  return (state$: Observable<any>) =>
    createSelector(getUsersEntities(), getUsersIds(), (entities, ids) =>
      ids.map((id) => entities[id])
    );
}

export function getUserById(id: string) {
  return (state$: Observable<any>) => state$
    .select((s) => s.users.entities[id]);
}

export function getUsersById(ids: string[]) {
  return (state$: Observable<any>) =>
    createSelector(getUsersEntities(), (entities) =>
      ids.map((id) => entities[id])
    );
}

export function getUsersSelected() {
  return (state$: Observable<any>) =>
    createSelector(getUsersEntities(), getUsersSelectedIds(), (entities, selectedIds) =>
      selectedIds.map((id) => entities[id]).map((ents) => ents.length > 1 ? ents : ents[0])
    );
}

/**
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @description
 * Apps relation helper methods
 */
export function getUsersSelectedAppsIds() {
  return (state$: Observable<any>) => state$
    .select((s) => s.users.selectedAppsIds);
}

export function getUsersApps(id: string) {
  return (state$: Observable<any>) => state$
    .select((s) => s.users.entities[id].apps);
}

export function getUsersSelectedApps(id: string) {
  return (state$: Observable<any>) =>
    createSelector(getUsersApps(id), getUsersSelectedAppsIds(), (apps, selectedAppsIds) =>
      selectedAppsIds.map((appId) => apps[appId]).map((ents) =>
        ents.length > 1 ? ents : ents[0])
    );
}

/**
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @description
 * OAuthClientApplications relation helper methods
 */
export function getUsersSelectedOAuthClientApplicationsIds() {
  return (state$: Observable<any>) => state$
    .select((s) => s.users.selectedOAuthClientApplicationsIds);
}

export function getUsersOAuthClientApplications(id: string) {
  return (state$: Observable<any>) => state$
    .select((s) => s.users.entities[id].oAuthClientApplicationss);
}

export function getUsersSelectedOAuthClientApplications(id: string) {
  return (state$: Observable<any>) =>
    createSelector(getUsersOAuthClientApplications(id), getUsersSelectedOAuthClientApplicationsIds(), (oAuthClientApplicationss, selectedOAuthClientApplicationsIds) =>
      selectedOAuthClientApplicationsIds.map((oAuthClientApplicationsId) => oAuthClientApplicationss[oAuthClientApplicationsId]).map((ents) =>
        ents.length > 1 ? ents : ents[0])
    );
}

/**
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @description
 * Organizations relation helper methods
 */
export function getUsersSelectedOrganizationsIds() {
  return (state$: Observable<any>) => state$
    .select((s) => s.users.selectedOrganizationsIds);
}

export function getUsersOrganizations(id: string) {
  return (state$: Observable<any>) => state$
    .select((s) => s.users.entities[id].organizations);
}

export function getUsersSelectedOrganizations(id: string) {
  return (state$: Observable<any>) =>
    createSelector(getUsersOrganizations(id), getUsersSelectedOrganizationsIds(), (organizations, selectedOrganizationsIds) =>
      selectedOrganizationsIds.map((organizationsId) => organizations[organizationsId]).map((ents) =>
        ents.length > 1 ? ents : ents[0])
    );
}
