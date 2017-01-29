// libs
import { Observable } from 'rxjs/Observable';
// import { combineLatest } from 'rxjs/observable/combineLatest';
import { ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, routerReducer } from '@ngrx/router-store';
import '@ngrx/core/add/operator/select';

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
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers } from '@ngrx/store';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import { LoopbackReducer } from 'frameworks/api/index';

import * as fromMultilingual from '../../i18n/index';

import * as fromApplication from '../reducers/application';
import * as fromSearchOrganizations from '../reducers/searchOrganizations';
import * as fromOrganizations from '../reducers/organizations';
import * as fromSearchApps from '../reducers/searchApps';
import * as fromApps from '../reducers/apps';
import * as fromAlert from '../reducers/alert';

import { AlertEffects } from 'frameworks/ngrx/effects/alert';
import { AppEffects } from 'frameworks/ngrx/effects/app';
import { OrganizationEffects } from 'frameworks/ngrx/effects/organization';
/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface IAppState {
  router: RouterState;

  i18n: fromMultilingual.IMultilingualState;

  application: fromApplication.ApplicationState;
  searchOrganizations: fromSearchOrganizations.SearchOrganizationsState;
  organizations: fromOrganizations.OrganizationsState;
  searchApps: fromSearchApps.SearchAppsState;
  apps: fromApps.AppsState;
  alert: fromAlert.IAlertState;
};

export const Effects = [
  EffectsModule.run(AlertEffects),
  EffectsModule.run(AppEffects),
  EffectsModule.run(OrganizationEffects)
];

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
const reducers = Object.assign({
  router: routerReducer,

  i18n: fromMultilingual.reducer,

  application: fromApplication.reducer,
  searchOrganizations: fromSearchOrganizations.reducer,
  organizations: fromOrganizations.reducer,
  searchApps: fromSearchApps.reducer,
  apps: fromApps.reducer,
  alert: fromAlert.reducer
}, LoopbackReducer);

const developmentReducer: ActionReducer<IAppState> =
  compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<IAppState> = combineReducers(reducers);

export function Reducer(state: any, action: any) {
  if (String('<%= BUILD_TYPE %>') === 'dev') {
    return developmentReducer(state, action);
  } else {
    return productionReducer(state, action);
  }
}

export function getMultilingualState(state$: Observable<IAppState>) {
  return state$.select((s) => s.i18n);
}

export const getLang: any = compose(fromMultilingual.getLang, getMultilingualState);

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
 *   constructor(state$: Observable<IAppState>) {
 *     this.appsState$ = state$.let(getOrganizationsState());
 *   }
 * }
 * ```
 */
export function getApplicationState() {
  return (state$: Observable<IAppState>) => state$
    .select((s) => s.application);
}

export function getOrganizationsState() {
  return (state$: Observable<IAppState>) => state$
    .select((s) => s.organizations);
}

export function getAppsState() {
  return (state$: Observable<IAppState>) => state$
    .select((s) => s.apps);
}

export function getAlertState() {
  return (state$: Observable<IAppState>) => state$
    .select((s) => s.alert);
}

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * Once again our compose function comes in handy. From right to left, we
 * first select the organizations state then we pass the state to the organization
 * reducer's getOrganizations selector, finally returning an observable
 * of searchOrganizations results.
 */
export function getOrganizationEntities() {
  return compose(fromOrganizations.getOrganizationEntities(), getOrganizationsState());
}

export function getOrganization(id: string) {
  return compose(fromOrganizations.getOrganization(id), getOrganizationsState());
}

export function hasOrganization(id: string) {
  return compose(fromOrganizations.hasOrganization(id), getOrganizationsState());
}

export function getOrganizations(organizationIds: string[]) {
  return compose(fromOrganizations.getOrganizations(organizationIds), getOrganizationsState());
}

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
 * Just like with the organizations selectors, we also have to compose the searchOrganizations
 * reducer's and collection reducer's selectors.
 */
export function getSearchOrganizationsState() {
  return (state$: Observable<IAppState>) => state$
    .select((s) => s.searchOrganizations);
}

export function getSearchOrganizationsIds() {
  return compose(fromSearchOrganizations.getOrganizationIds(), getSearchOrganizationsState());
}

export function getSearchOrganizationsStatus() {
  return compose(fromSearchOrganizations.getStatus(), getSearchOrganizationsState());
}

export function getSearchOrganizationsFilter() {
  return compose(fromSearchOrganizations.getFilter(), getSearchOrganizationsState());
}

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
 * composes the searchOrganizations result IDs to return an array of organizations in the store.
 */
export function getSearchOrganizationsResults() {
  return (state$: Observable<IAppState>) => state$
    .let(getSearchOrganizationsIds())
    .switchMap((organizationIds) => state$.let(getOrganizations(organizationIds)));
}

export function getCurrentOrganization() {
  return (state$: Observable<IAppState>) => state$
    .let(getApplicationState())
    .switchMap((s) => state$.let(getOrganization(s.selectedOrganizationId)));
}

export function getCurrentOrganizationId() {
  return (state$: Observable<IAppState>) => state$
    .let(getApplicationState())
    .select((s) => s.selectedOrganizationId);
}

export function getSearchAppsResults() {
  return (state$: Observable<IAppState>) => state$
    .let(getSearchAppsIds())
    .switchMap((appIds) => state$.let(getApps(appIds)));
}

export function getCurrentApp() {
  return (state$: Observable<IAppState>) => state$
    .let(getApplicationState())
    .switchMap((s) => state$.let(getApp(s.selectedAppId)));
}

export function getCurrentAppId() {
  return (state$: Observable<IAppState>) => state$
    .let(getApplicationState())
    .select((s) => s.selectedAppId);
}
