/* tslint:disable */
import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { BaseReducerFactory } from './base';
import { Share } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { ShareActionTypes } from '../actions';

export interface SharesState {
  ids: string[];
  entities: { [id: string]: Share };
};

const initialState: SharesState = {
  ids: [],
  entities: {},
};

const cases = BaseReducerFactory<SharesState, Share>(ShareActionTypes);

/**
 * @module SharesReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible Share reducer.
 */
export function SharesReducer(state = initialState, action: LoopbackAction): SharesState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getSharesState = (state: any) => state.Shares;
export const getSharesEntities = (state: any) => state.Shares.entities;
export const getSharesIds = (state: any) => state.Shares.ids;

export const getShares =
  createSelector(getSharesEntities, getSharesIds, (entities, ids) => ids.map((id) => entities[id]));

export function getShareById(id: string) {
  return (state: any) => state.Shares.entities[id];
}

export function getSharesById(ids: string[]) {
  return createSelector(getSharesEntities, (entities) => ids.map((id) => entities[id]));
}