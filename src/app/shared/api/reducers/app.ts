/* tslint:disable */
import { Observable } from 'rxjs/Observable';
import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { BaseReducerFactory } from './base';
import { App } from '../models';
import { AppActionTypes } from '../actions';

export interface AppState {
  ids: string[];
  entities: { [id: string]: App };
};

const initialState: AppState = {
  ids: [],
  entities: {},
};

const cases = BaseReducerFactory<AppState, App>(AppActionTypes);

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

export const getAppsState = (state: any) => state.App;
export const getAppsEntities = (state: any) => state.App.entities;
export const getAppsIds = (state: any) => state.App.ids;

export const getApps =
  createSelector(getAppsEntities, getAppsIds, (entities, ids) => ids.map((id) => entities[id]));

export function getAppById(id: string) {
  return (state: any) => state.App.entities[id];
}

export function getAppsById(ids: string[]) {
  return createSelector(getAppsEntities, (entities) => ids.map((id) => entities[id]));
}