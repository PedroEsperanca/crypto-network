/* tslint:disable */
import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { BaseReducerFactory } from './base';
import { UserProduct } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { UserProductActionTypes } from '../actions';

export interface UserProductsState {
  ids: string[];
  entities: { [id: string]: UserProduct };
};

const initialState: UserProductsState = {
  ids: [],
  entities: {},
};

const cases = BaseReducerFactory<UserProductsState, UserProduct>(UserProductActionTypes);

/**
 * @module UserProductsReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible UserProduct reducer.
 */
export function UserProductsReducer(state = initialState, action: LoopbackAction): UserProductsState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getUserProductsState = (state: any) => state.UserProducts;
export const getUserProductsEntities = (state: any) => state.UserProducts.entities;
export const getUserProductsIds = (state: any) => state.UserProducts.ids;

export const getUserProducts =
  createSelector(getUserProductsEntities, getUserProductsIds, (entities, ids) => ids.map((id) => entities[id]));

export function getUserProductById(id: string) {
  return (state: any) => state.UserProducts.entities[id];
}

export function getUserProductsById(ids: string[]) {
  return createSelector(getUserProductsEntities, (entities) => ids.map((id) => entities[id]));
}