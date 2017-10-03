/* tslint:disable */
import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { BaseReducerFactory } from './base';
import { OAuthApp } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { OAuthAppActionTypes } from '../actions';

export interface OAuthAppsState {
  ids: string[];
  entities: { [id: string]: OAuthApp };
};

const initialState: OAuthAppsState = {
  ids: [],
  entities: {},
};

const cases = BaseReducerFactory<OAuthAppsState, OAuthApp>(OAuthAppActionTypes);

/**
 * @module OAuthAppsReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible OAuthApp reducer.
 */
export function OAuthAppsReducer(state = initialState, action: LoopbackAction): OAuthAppsState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getOAuthAppsState = (state: any) => state.OAuthApps;
export const getOAuthAppsEntities = (state: any) => state.OAuthApps.entities;
export const getOAuthAppsIds = (state: any) => state.OAuthApps.ids;

export const getOAuthApps =
  createSelector(getOAuthAppsEntities, getOAuthAppsIds, (entities, ids) => ids.map((id) => entities[id]));

export function getOAuthAppById(id: string) {
  return (state: any) => state.OAuthApps.entities[id];
}

export function getOAuthAppsById(ids: string[]) {
  return createSelector(getOAuthAppsEntities, (entities) => ids.map((id) => entities[id]));
}