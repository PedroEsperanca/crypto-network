import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { AppInterface } from 'frameworks/api/models';
import { AppActions } from '../actions/app';

export interface SearchAppsState {
  ids: string[];
  loading: boolean;
  filter: string;
};

const initialState: SearchAppsState = {
  ids: [],
  loading: false,
  filter: ''
};

export default function(state = initialState, action: Action): SearchAppsState {
  switch (action.type) {
    case AppActions.SEARCH: {
      const filter = action.payload;

      return Object.assign(state, {
        filter,
        loading: true
      });
    }

    case AppActions.SEARCH_COMPLETE: {
      const apps: AppInterface[] = action.payload;

      return {
        ids: apps.map((app) => app.id),
        loading: false,
        filter: state.filter
      };
    }

    case AppActions.REMOVE_FROM_COLLECTION_SUCCESS: {
      const app: AppInterface = action.payload;

      return {
        ids: state.ids.filter((item) => item !== app.id),
        loading: false,
        filter: state.filter
      };
    }

    default: {
      return state;
    }
  }
}

export function getStatus() {
  return (state$: Observable<SearchAppsState>) => state$
    .select((s) => s.loading);
}

export function getAppIds() {
  return (state$: Observable<SearchAppsState>) => state$
    .select((s) => s.ids);
}

export function getFilter() {
  return (state$: Observable<SearchAppsState>) => state$
    .select((s) => s.filter);
}
