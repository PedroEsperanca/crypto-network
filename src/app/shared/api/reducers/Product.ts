/* tslint:disable */
import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { BaseReducerFactory } from './base';
import { Product } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { ProductActionTypes } from '../actions';

export interface ProductsState {
  ids: string[];
  entities: { [id: string]: Product };
};

const initialState: ProductsState = {
  ids: [],
  entities: {},
};

const cases = BaseReducerFactory<ProductsState, Product>(ProductActionTypes);

/**
 * @module ProductsReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible Product reducer.
 */
export function ProductsReducer(state = initialState, action: LoopbackAction): ProductsState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getProductsState = (state: any) => state.Products;
export const getProductsEntities = (state: any) => state.Products.entities;
export const getProductsIds = (state: any) => state.Products.ids;

export const getProducts =
  createSelector(getProductsEntities, getProductsIds, (entities, ids) => ids.map((id) => entities[id]));

export function getProductById(id: string) {
  return (state: any) => state.Products.entities[id];
}

export function getProductsById(ids: string[]) {
  return createSelector(getProductsEntities, (entities) => ids.map((id) => entities[id]));
}