/* tslint:disable */
import { Observable } from 'rxjs/Observable';
import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { BaseReducerFactory } from './base';
import { Organization } from '../models';
import { OrganizationActionTypes } from '../actions';

export interface OrganizationsState {
  ids: string[];
  entities: { [id: string]: Organization };
};

const initialState: OrganizationsState = {
  ids: [],
  entities: {},
};

const cases = BaseReducerFactory<OrganizationsState, Organization>(OrganizationActionTypes);

/**
 * @module OrganizationsReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible Organization reducer.
 */
export function OrganizationsReducer(state = initialState, action: Action): OrganizationsState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getOrganizationsState = (state: any) => state.Organizations;
export const getOrganizationsEntities = (state: any) => state.Organizations.entities;
export const getOrganizationsIds = (state: any) => state.Organizations.ids;

export const getOrganizations =
  createSelector(getOrganizationsEntities, getOrganizationsIds, (entities, ids) => ids.map((id) => entities[id]));

export function getOrganizationById(id: string) {
  return (state: any) => state.Organizations.entities[id];
}

export function getOrganizationsById(ids: string[]) {
  return createSelector(getOrganizationsEntities, (entities) => ids.map((id) => entities[id]));
}