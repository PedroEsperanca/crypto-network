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
import * as fromOrganizationlication from 'frameworks/app/reducers/application';
import * as fromSearchOrganizations from 'frameworks/app/reducers/searchOrganizations';
import * as fromOrganizations from 'frameworks/app/reducers/organizations';

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
/*export interface OrganizationState {
  // router: RouterState;
  organization: fromOrganizationlication.OrganizationlicationState;
  searchOrganizations: fromSearchOrganizations.SearchOrganizationsState;
  apps: fromOrganizations.OrganizationsState;
}*/

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
/*export compose(storeLogger(), stateSetter, combineReducers)({
  i18n: multilingualReducer,
  // router: routerReducer,
  app: applicationReducer,
  searchOrganizations: searchOrganizationsReducer,
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
 * 	  this.appsState$ = state$.let(getOrganizationsState());
 * 	}
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
