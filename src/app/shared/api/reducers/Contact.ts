/* tslint:disable */
import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { BaseReducerFactory } from './base';
import { Contact } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { ContactActionTypes } from '../actions';

export interface ContactsState {
  ids: string[];
  entities: { [id: string]: Contact };
};

const initialState: ContactsState = {
  ids: [],
  entities: {},
};

const cases = BaseReducerFactory<ContactsState, Contact>(ContactActionTypes);

/**
 * @module ContactsReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible Contact reducer.
 */
export function ContactsReducer(state = initialState, action: LoopbackAction): ContactsState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getContactsState = (state: any) => state.Contacts;
export const getContactsEntities = (state: any) => state.Contacts.entities;
export const getContactsIds = (state: any) => state.Contacts.ids;

export const getContacts =
  createSelector(getContactsEntities, getContactsIds, (entities, ids) => ids.map((id) => entities[id]));

export function getContactById(id: string) {
  return (state: any) => state.Contacts.entities[id];
}

export function getContactsById(ids: string[]) {
  return createSelector(getContactsEntities, (entities) => ids.map((id) => entities[id]));
}