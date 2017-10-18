/* tslint:disable */
import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { BaseReducerFactory } from './base';
import { Reply } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { ReplyActionTypes } from '../actions';

export interface ReplysState {
  ids: string[];
  entities: { [id: string]: Reply };
};

const initialState: ReplysState = {
  ids: [],
  entities: {},
};

const cases = BaseReducerFactory<ReplysState, Reply>(ReplyActionTypes);

/**
 * @module ReplysReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible Reply reducer.
 */
export function ReplysReducer(state = initialState, action: LoopbackAction): ReplysState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getReplysState = (state: any) => state.Replys;
export const getReplysEntities = (state: any) => state.Replys.entities;
export const getReplysIds = (state: any) => state.Replys.ids;

export const getReplys =
  createSelector(getReplysEntities, getReplysIds, (entities, ids) => ids.map((id) => entities[id]));

export function getReplyById(id: string) {
  return (state: any) => state.Replys.entities[id];
}

export function getReplysById(ids: string[]) {
  return createSelector(getReplysEntities, (entities) => ids.map((id) => entities[id]));
}