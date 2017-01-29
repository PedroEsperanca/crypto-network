import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { OrganizationInterface } from 'shared/api/models';
import { OrganizationActions } from '../actions/organization';

export interface SearchOrganizationsState {
  ids: string[];
  loading: boolean;
  filter: string;
};

const initialState: SearchOrganizationsState = {
  ids: [],
  loading: false,
  filter: ''
};

export function reducer(state = initialState, action: Action): SearchOrganizationsState {
  switch (action.type) {
    case OrganizationActions.SEARCH: {
      const filter = action.payload;

      return Object.assign(state, {
        filter,
        loading: true
      });
    }

    case OrganizationActions.SEARCH_COMPLETE: {
      const organizations: OrganizationInterface[] = action.payload;

      return {
        ids: organizations.map((organization) => organization.id),
        loading: false,
        filter: state.filter
      };
    }

    case OrganizationActions.REMOVE_FROM_COLLECTION_SUCCESS: {
      const organization: OrganizationInterface = action.payload;

      return {
        ids: state.ids.filter((item) => item !== organization.id),
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
  return (state$: Observable<SearchOrganizationsState>) => state$
    .select((s) => s.loading);
}

export function getOrganizationIds() {
  return (state$: Observable<SearchOrganizationsState>) => state$
    .select((s) => s.ids);
}

export function getFilter() {
  return (state$: Observable<SearchOrganizationsState>) => state$
    .select((s) => s.filter);
}
