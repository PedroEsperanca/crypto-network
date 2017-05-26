/* tslint:disable */
import { Observable } from 'rxjs/Observable';
import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { BaseReducerFactory } from './base';
import { App } from '../models';
import { AppActionTypes } from '../actions';

export interface AppsState {
  ids: string[];
  entities: { [id: string]: App };
};

const initialState: AppsState = {
  ids: [],
  entities: {},
};

const cases = BaseReducerFactory<AppsState, App>(AppActionTypes);

/**
 * @module AppsReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible App reducer.
 */
export function AppsReducer(state = initialState, action: Action): AppsState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getAppsState = (state: any) => state.Apps;
export const getAppsEntities = (state: any) => state.Apps.entities;
export const getAppsIds = (state: any) => state.Apps.ids;

export const getApps =
  createSelector(getAppsEntities, getAppsIds, (entities, ids) => ids.map((id) => entities[id]));

export function getAppById(id: string) {
  return (state: any) => state.Apps.entities[id];
}

export function getAppsById(ids: string[]) {
  return createSelector(getAppsEntities, (entities) => ids.map((id) => entities[id]));
}