import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface IMultilingualState {
  lang: string;
}

export const initialState: IMultilingualState = {
  lang: 'en'
};

export const getMultilingualState = createFeatureSelector<IMultilingualState>('i18n');
export const getLang = createSelector(getMultilingualState, (state: IMultilingualState) => state.lang);