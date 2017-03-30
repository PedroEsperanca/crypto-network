/* tslint:disable */
import { Observable } from 'rxjs/Observable';
import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { BaseReducerFactory } from './base';
import { App } from '../models/app';
import { AppActionTypes } from '../actions/app';

export interface AppState {
  ids: string[];
  entities: { [id: string]: App };
  selectedIds: string | string[];
};

const initialState: AppState = {
  ids: [],
  entities: {},
  selectedIds: []
};

function ReducerFactory() {
  let cases = {};

  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Apps relation reducer methods
   */
  cases[AppActionTypes.GET_USER_SUCCESS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].user = action.payload.data;

    return Object.assign({}, state, {
      entities: Object.assign({}, state.entities),
    });
  };

  /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Organization relation reducer methods
   */
  cases[AppActionTypes.GET_ORGANIZATION_SUCCESS] =
  (state = initialState, action: Action) => {
    state.entities[action.payload.id].organization = action.payload.data;

    return Object.assign({}, state, {
      entities: Object.assign({}, state.entities),
    });
  };

  return cases;
};

const cases = Object.assign(BaseReducerFactory<AppState, App>(AppActionTypes), ReducerFactory());

/**
 * @module AppsReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible App reducer.
 */
export function AppsReducer(state = initialState, action: Action): AppState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export function getAppsState() {
  return (state$: Observable<any>) => state$
    .select((s) => s.apps);
}

export function getAppsEntities() {
  return (state$: Observable<any>) => state$
    .select((s) => s.apps.entities);
}

export function getAppsIds() {
  return (state$: Observable<any>) => state$
    .select((s) => s.apps.ids);
}

export function getAppsSelectedIds() {
  return (state$: Observable<any>) => state$
    .select((s) => s.apps.selectedIds);
}

export function getApps() {
  return (state$: Observable<any>) =>
    createSelector(getAppsEntities(), getAppsIds(), (entities, ids) =>
      ids.map((id) => entities[id])
    );
}

export function getAppById(id: string) {
  return (state$: Observable<any>) => state$
    .select((s) => s.apps.entities[id]);
}

export function getAppsById(ids: string[]) {
  return (state$: Observable<any>) =>
    createSelector(getAppsEntities(), (entities) =>
      ids.map((id) => entities[id])
    );
}

export function getAppsSelected() {
  return (state$: Observable<any>) =>
    createSelector(getAppsEntities(), getAppsSelectedIds(), (entities, selectedIds) =>
      selectedIds.map((id) => entities[id]).map((ents) => ents.length > 1 ? ents : ents[0])
    );
}

/**
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @description
 * Apps relation helper methods
 */
export function getAppsSelectedAppsIds() {
  return (state$: Observable<any>) => state$
    .select((s) => s.apps.selectedAppsIds);
}

export function getAppsApps(id: string) {
  return (state$: Observable<any>) => state$
    .select((s) => s.apps.entities[id].apps);
}

export function getAppsSelectedApps(id: string) {
  return (state$: Observable<any>) =>
    createSelector(getAppsApps(id), getAppsSelectedAppsIds(), (apps, selectedAppsIds) =>
      selectedAppsIds.map((appId) => apps[appId]).map((ents) =>
        ents.length > 1 ? ents : ents[0])
    );
}
