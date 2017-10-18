/* tslint:disable */
import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { BaseReducerFactory } from './base';
import { UserRole } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { UserRoleActionTypes } from '../actions';

export interface UserRolesState {
  ids: string[];
  entities: { [id: string]: UserRole };
};

const initialState: UserRolesState = {
  ids: [],
  entities: {},
};

const cases = BaseReducerFactory<UserRolesState, UserRole>(UserRoleActionTypes);

/**
 * @module UserRolesReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible UserRole reducer.
 */
export function UserRolesReducer(state = initialState, action: LoopbackAction): UserRolesState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getUserRolesState = (state: any) => state.UserRoles;
export const getUserRolesEntities = (state: any) => state.UserRoles.entities;
export const getUserRolesIds = (state: any) => state.UserRoles.ids;

export const getUserRoles =
  createSelector(getUserRolesEntities, getUserRolesIds, (entities, ids) => ids.map((id) => entities[id]));

export function getUserRoleById(id: string) {
  return (state: any) => state.UserRoles.entities[id];
}

export function getUserRolesById(ids: string[]) {
  return createSelector(getUserRolesEntities, (entities) => ids.map((id) => entities[id]));
}