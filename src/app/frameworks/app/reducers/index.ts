import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 * 
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';

/**
 * storeLogger is a powerful metareducer that logs out each time we dispatch
 * an action.
 *
 * A metareducer wraps a reducer function and returns a new reducer function
 * with superpowers. They are handy for all sorts of tasks, including
 * logging, undo/redo, and more.
 */
import { storeLogger } from 'ngrx-store-logger';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 * 
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers, ActionReducer } from '@ngrx/store';

/**
 * @ngrx/router-store keeps the router in sync with @ngrx/store. To connect the
 * two, we need to use the routerReducer.
 */
// import { routerReducer, RouterState } from '@ngrx/router-store';

import { IAppState } from 'frameworks/ngrx';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import applicationReducer, * as fromApplication from './application';
import searchAppsReducer, * as fromSearchApps from './searchApps';
import appsReducer, * as fromApps from './apps';

// Generate a reducer to set the root state
function stateSetter(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action ) => {
    if (action.type === 'SET_ROOT_STATE') {
      return action.payload;
    }
    return reducer(state, action);
  };
};

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
/*export interface AppState {
  // router: RouterState;
  app: fromApplication.ApplicationState;
  searchApps: fromSearchApps.SearchAppsState;
  apps: fromApps.AppsState;
}*/

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
/*export default compose(storeLogger(), stateSetter, combineReducers)({
  i18n: multilingualReducer,
  // router: routerReducer,
  app: applicationReducer,
  searchApps: searchAppsReducer,
  apps: appsReducer
});*/

/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `apps` state.
 *
 * Selectors are used with the `let` operator. They take an input observable
 * and return a new observable. Here's how you would use this selector:
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<IAppState>) {
 * 	  this.appsState$ = state$.let(getAppsState());
 * 	}
 * }
 * ```
 */
export function getAppState() {
  return (state$: Observable<IAppState>) => state$
    .select((s) => s.app);
}

export function getAppsState() {
  return (state$: Observable<IAppState>) => state$
    .select((s) => s.apps);
}

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * Once again our compose function comes in handy. From right to left, we
 * first select the apps state then we pass the state to the app
 * reducer's getApps selector, finally returning an observable
 * of searchApps results.
 */
export function getAppEntities() {
  return compose(fromApps.getAppEntities(), getAppsState());
}

export function getApp(id: string) {
  return compose(fromApps.getApp(id), getAppsState());
}

export function hasApp(id: string) {
  return compose(fromApps.hasApp(id), getAppsState());
}

export function getApps(appIds: string[]) {
  return compose(fromApps.getApps(appIds), getAppsState());
}

/**
 * Just like with the apps selectors, we also have to compose the searchApps
 * reducer's and collection reducer's selectors.
 */
export function getSearchAppsState() {
  return (state$: Observable<IAppState>) => state$
    .select((s) => s.searchApps);
}

export function getSearchAppsIds() {
  return compose(fromSearchApps.getAppIds(), getSearchAppsState());
}

export function getSearchAppsStatus() {
  return compose(fromSearchApps.getStatus(), getSearchAppsState());
}

export function getSearchAppsFilter() {
  return compose(fromSearchApps.getFilter(), getSearchAppsState());
}

/**
 * Some selector functions create joins across parts of state. This selector
 * composes the searchApps result IDs to return an array of apps in the store.
 */
export function getSearchAppsResults() {
  return (state$: Observable<IAppState>) => state$
    .let(getSearchAppsIds())
    .switchMap((appIds) => state$.let(getApps(appIds)));
}

export function getCurrentApp() {
  return (state$: Observable<IAppState>) => state$
    .let(getAppState())
    .switchMap((s) => state$.let(getApp(s.selectedAppId)));
}

export function getCurrentAppId() {
  return (state$: Observable<IAppState>) => state$
    .let(getAppState())
    .select((s) => s.selectedAppId);
}
