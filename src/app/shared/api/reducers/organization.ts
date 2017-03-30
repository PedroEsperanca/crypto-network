/* tslint:disable */
import { Observable } from 'rxjs/Observable';
import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { BaseReducerFactory } from './base';
import { Organization } from '../models/organization';
import { OrganizationActionTypes } from '../actions/organization';

export interface OrganizationState {
  ids: string[];
  entities: { [id: string]: Organization };
  selectedIds: string | string[];
  selectedAppsIds: string | string[];
  selectedUsersIds: string | string[];
  selectedOAuthClientApplicationsIds: string | string[];
  selectedRolesIds: string | string[];
};

const initialState: OrganizationState = {
  ids: [],
  entities: {},
  selectedIds: [],
  selectedAppsIds: [],
  selectedUsersIds: [],
  selectedOAuthClientApplicationsIds: [],
  selectedRolesIds: [],
};

function ReducerFactory() {
  let cases = {};

  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Apps relation reducer methods
   */
  cases[OrganizationActionTypes.FIND_BY_ID_APPS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].apps =
      Array.from(new Set([ ...state.entities[action.payload.id].apps, action.payload.data]));

    return Object.assign({}, state, {
      entities: state.entities,
      selectedAppsIds: action.payload.data.id,
    });
  };

  cases[OrganizationActionTypes.DESTROY_BY_ID_APPS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].apps =
      state.entities[action.payload.id].apps.filter((item) => item.id !== action.payload.fk);

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[OrganizationActionTypes.UPDATE_BY_ID_APPS] =
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

  cases[OrganizationActionTypes.CREATE_APPS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].apps =
      Array.from(new Set([ ...state.entities[action.payload.id].apps, ...action.payload.data]));

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[OrganizationActionTypes.DELETE_APPS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].apps = [];

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[OrganizationActionTypes.CREATE_MANY_APPS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].apps =
      Array.from(new Set([ ...state.entities[action.payload.id].apps, ...action.payload.data]));

    return Object.assign({}, state, {entities: state.entities});
  };

  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Users relation reducer methods
   */
  cases[OrganizationActionTypes.FIND_BY_ID_USERS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].users =
      Array.from(new Set([ ...state.entities[action.payload.id].users, action.payload.data]));

    return Object.assign({}, state, {
      entities: state.entities,
      selectedUsersIds: action.payload.data.id,
    });
  };

  cases[OrganizationActionTypes.DESTROY_BY_ID_USERS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].users =
      state.entities[action.payload.id].users.filter((item) => item.id !== action.payload.fk);

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[OrganizationActionTypes.UPDATE_BY_ID_USERS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].users =
      state.entities[action.payload.id].users.map((item) => {
        if (item.id === action.payload.data.id) {
          return action.payload.data;
        } else {
          return item;
        }
      });

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[OrganizationActionTypes.CREATE_USERS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].users =
      Array.from(new Set([ ...state.entities[action.payload.id].users, ...action.payload.data]));

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[OrganizationActionTypes.DELETE_USERS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].users = [];

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[OrganizationActionTypes.CREATE_MANY_USERS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].users =
      Array.from(new Set([ ...state.entities[action.payload.id].users, ...action.payload.data]));

    return Object.assign({}, state, {entities: state.entities});
  };

  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * OAuthClientApplications relation reducer methods
   */
  cases[OrganizationActionTypes.FIND_BY_ID_OAUTHCLIENTAPPLICATIONS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].oAuthClientApplications =
      Array.from(new Set([ ...state.entities[action.payload.id].oAuthClientApplications, action.payload.data]));

    return Object.assign({}, state, {
      entities: state.entities,
      selectedOAuthClientApplicationsIds: action.payload.data.id,
    });
  };

  cases[OrganizationActionTypes.DESTROY_BY_ID_OAUTHCLIENTAPPLICATIONS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].oAuthClientApplications =
      state.entities[action.payload.id].oAuthClientApplications.filter((item) => item.id !== action.payload.fk);

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[OrganizationActionTypes.UPDATE_BY_ID_OAUTHCLIENTAPPLICATIONS] =
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

  cases[OrganizationActionTypes.CREATE_OAUTHCLIENTAPPLICATIONS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].oAuthClientApplications =
      Array.from(new Set([ ...state.entities[action.payload.id].oAuthClientApplications, ...action.payload.data]));

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[OrganizationActionTypes.DELETE_OAUTHCLIENTAPPLICATIONS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].oAuthClientApplications = [];

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[OrganizationActionTypes.CREATE_MANY_OAUTHCLIENTAPPLICATIONS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].oAuthClientApplications =
      Array.from(new Set([ ...state.entities[action.payload.id].oAuthClientApplications, ...action.payload.data]));

    return Object.assign({}, state, {entities: state.entities});
  };

  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Roles relation reducer methods
   */
  cases[OrganizationActionTypes.FIND_BY_ID_ROLES] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].roles =
      Array.from(new Set([ ...state.entities[action.payload.id].roles, action.payload.data]));

    return Object.assign({}, state, {
      entities: state.entities,
      selectedRolesIds: action.payload.data.id,
    });
  };

  cases[OrganizationActionTypes.DESTROY_BY_ID_ROLES] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].roles =
      state.entities[action.payload.id].roles.filter((item) => item.id !== action.payload.fk);

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[OrganizationActionTypes.UPDATE_BY_ID_ROLES] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].roles =
      state.entities[action.payload.id].roles.map((item) => {
        if (item.id === action.payload.data.id) {
          return action.payload.data;
        } else {
          return item;
        }
      });

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[OrganizationActionTypes.CREATE_ROLES] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].roles =
      Array.from(new Set([ ...state.entities[action.payload.id].roles, ...action.payload.data]));

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[OrganizationActionTypes.DELETE_ROLES] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].roles = [];

    return Object.assign({}, state, {entities: state.entities});
  };

  cases[OrganizationActionTypes.CREATE_MANY_ROLES] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].roles =
      Array.from(new Set([ ...state.entities[action.payload.id].roles, ...action.payload.data]));

    return Object.assign({}, state, {entities: state.entities});
  };

  return cases;
};

const cases = Object.assign(BaseReducerFactory<OrganizationState, Organization>(OrganizationActionTypes), ReducerFactory());

/**
 * @module OrganizationsReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible Organization reducer.
 */
export function OrganizationsReducer(state = initialState, action: Action): OrganizationState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export function getOrganizationsState() {
  return (state$: Observable<any>) => state$
    .select((s) => s.organizations);
}

export function getOrganizationsEntities() {
  return (state$: Observable<any>) => state$
    .select((s) => s.organizations.entities);
}

export function getOrganizationsIds() {
  return (state$: Observable<any>) => state$
    .select((s) => s.organizations.ids);
}

export function getOrganizationsSelectedIds() {
  return (state$: Observable<any>) => state$
    .select((s) => s.organizations.selectedIds);
}

export function getOrganizations() {
  return (state$: Observable<any>) =>
    createSelector(getOrganizationsEntities(), getOrganizationsIds(), (entities, ids) =>
      ids.map((id) => entities[id])
    );
}

export function getOrganizationById(id: string) {
  return (state$: Observable<any>) => state$
    .select((s) => s.organizations.entities[id]);
}

export function getOrganizationsById(ids: string[]) {
  return (state$: Observable<any>) =>
    createSelector(getOrganizationsEntities(), (entities) =>
      ids.map((id) => entities[id])
    );
}

export function getOrganizationsSelected() {
  return (state$: Observable<any>) =>
    createSelector(getOrganizationsEntities(), getOrganizationsSelectedIds(), (entities, selectedIds) =>
      selectedIds.map((id) => entities[id]).map((ents) => ents.length > 1 ? ents : ents[0])
    );
}

/**
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @description
 * Apps relation helper methods
 */
export function getOrganizationsSelectedAppsIds() {
  return (state$: Observable<any>) => state$
    .select((s) => s.organizations.selectedAppsIds);
}

export function getOrganizationsApps(id: string) {
  return (state$: Observable<any>) => state$
    .select((s) => s.organizations.entities[id].apps);
}

export function getOrganizationsSelectedApps(id: string) {
  return (state$: Observable<any>) =>
    createSelector(getOrganizationsApps(id), getOrganizationsSelectedAppsIds(), (apps, selectedAppsIds) =>
      selectedAppsIds.map((appId) => apps[appId]).map((ents) =>
        ents.length > 1 ? ents : ents[0])
    );
}

/**
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @description
 * Users relation helper methods
 */
export function getOrganizationsSelectedUsersIds() {
  return (state$: Observable<any>) => state$
    .select((s) => s.organizations.selectedUsersIds);
}

export function getOrganizationsUsers(id: string) {
  return (state$: Observable<any>) => state$
    .select((s) => s.organizations.entities[id].users);
}

export function getOrganizationsSelectedUsers(id: string) {
  return (state$: Observable<any>) =>
    createSelector(getOrganizationsUsers(id), getOrganizationsSelectedUsersIds(), (users, selectedUsersIds) =>
      selectedUsersIds.map((userId) => users[userId]).map((ents) =>
        ents.length > 1 ? ents : ents[0])
    );
}

/**
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @description
 * OAuthClientApplications relation helper methods
 */
export function getOrganizationsSelectedOAuthClientApplicationsIds() {
  return (state$: Observable<any>) => state$
    .select((s) => s.organizations.selectedOAuthClientApplicationsIds);
}

export function getOrganizationsOAuthClientApplications(id: string) {
  return (state$: Observable<any>) => state$
    .select((s) => s.organizations.entities[id].oAuthApps);
}

export function getOrganizationsSelectedOAuthClientApplications(id: string) {
  return (state$: Observable<any>) =>
    createSelector(getOrganizationsOAuthClientApplications(id), getOrganizationsSelectedOAuthClientApplicationsIds(), (oAuthApps, selectedOAuthClientApplicationsIds) =>
      selectedOAuthClientApplicationsIds.map((oAuthAppId) => oAuthApps[oAuthAppId]).map((ents) =>
        ents.length > 1 ? ents : ents[0])
    );
}

/**
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @description
 * Roles relation helper methods
 */
export function getOrganizationsSelectedRolesIds() {
  return (state$: Observable<any>) => state$
    .select((s) => s.organizations.selectedRolesIds);
}

export function getOrganizationsRoles(id: string) {
  return (state$: Observable<any>) => state$
    .select((s) => s.organizations.entities[id].roles);
}

export function getOrganizationsSelectedRoles(id: string) {
  return (state$: Observable<any>) =>
    createSelector(getOrganizationsRoles(id), getOrganizationsSelectedRolesIds(), (roles, selectedRolesIds) =>
      selectedRolesIds.map((roleId) => roles[roleId]).map((ents) =>
        ents.length > 1 ? ents : ents[0])
    );
}
