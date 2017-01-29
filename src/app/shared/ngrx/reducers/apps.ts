import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { AppInterface } from 'shared/api/models';
import { AppActions } from '../actions';

export interface AppsState {
  ids: string[];
  entities: { [id: string]: AppInterface };
};

const initialState: AppsState = {
  ids: [],
  entities: {}
};

export function reducer(state = initialState, action: Action): AppsState {
  switch (action.type) {
    case AppActions.SEARCH_COMPLETE:
    case AppActions.LOAD_COLLECTION_SUCCESS: {
      const apps: AppInterface[] = action.payload;
      const newApps = apps.filter((app) => !state.entities[app.id]);

      const newAppIds = newApps.map((app) => app.id);
      const newAppEntities = newApps.reduce((
        entities: {
          [id: string]: AppInterface
        },
        app: AppInterface
      ) => {
        return Object.assign(entities, {
          [app.id]: app
        });
      }, {});

      return {
        ids: [...state.ids, ...newAppIds],
        entities: Object.assign({}, state.entities, newAppEntities)
      };
    }

    case AppActions.LOAD_APP: {
      const app: AppInterface = action.payload;

      if (state.ids.includes(app.id)) {
        return state;
      }

      return {
        ids: [...state.ids, app.id],
        entities: Object.assign({}, state.entities, {
          [app.id]: app
        })
      };
    }

    case AppActions.REMOVE_FROM_COLLECTION_SUCCESS: {
      const app: AppInterface = action.payload;

      delete state.entities[app.id];

      return {
        ids: state.ids.filter((item) => item !== app.id),
        entities: Object.assign({}, state.entities)
      };
    }

    default: {
      return state;
    }
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */
export function getAppEntities() {
  return (state$: Observable<AppsState>) => state$
    .select((s) => s.entities);
};

export function getApp(id: string) {
  return (state$: Observable<AppsState>) => state$
    .select((s) => s.entities[id]);
}

export function getApps(appIds: string[]) {
  return (state$: Observable<AppsState>) => state$
    .let(getAppEntities())
    .map((entities) => appIds.map((id) => entities[id]));
}

export function hasApp(id: string) {
  return (state$: Observable<AppsState>) => state$
    .select((s) => s.ids.includes(id));
}
