/* tslint:disable */
import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { BaseReducerFactory } from './base';
import { Follow } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { FollowActionTypes } from '../actions';

export interface FollowsState {
  ids: string[];
  entities: { [id: string]: Follow };
};

const initialState: FollowsState = {
  ids: [],
  entities: {},
};

const cases = BaseReducerFactory<FollowsState, Follow>(FollowActionTypes);

/**
 * @module FollowsReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible Follow reducer.
 */
export function FollowsReducer(state = initialState, action: LoopbackAction): FollowsState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getFollowsState = (state: any) => state.Follows;
export const getFollowsEntities = (state: any) => state.Follows.entities;
export const getFollowsIds = (state: any) => state.Follows.ids;

export const getFollows =
  createSelector(getFollowsEntities, getFollowsIds, (entities, ids) => ids.map((id) => entities[id]));

export function getFollowById(id: string) {
  return (state: any) => state.Follows.entities[id];
}

export function getFollowsById(ids: string[]) {
  return createSelector(getFollowsEntities, (entities) => ids.map((id) => entities[id]));
}