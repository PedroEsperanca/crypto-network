import { Observable } from 'rxjs/Observable';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface IMultilingualState {
  lang: string;
}

export const initialState: IMultilingualState = {
  lang: ''
};

export const getMultilingualState = createFeatureSelector<IMultilingualState>('i18n');
export const getLang = createSelector(getMultilingualState, (state: IMultilingualState) => state.lang);
