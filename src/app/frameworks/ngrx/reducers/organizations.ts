import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { OrganizationInterface } from 'frameworks/api/models';
import { OrganizationActions } from '../actions';

export interface OrganizationsState {
  ids: string[];
  entities: { [id: string]: OrganizationInterface };
};

const initialState: OrganizationsState = {
  ids: [],
  entities: {}
};

export function reducer(state = initialState, action: Action): OrganizationsState {
  switch (action.type) {
    case OrganizationActions.SEARCH_COMPLETE:
    case OrganizationActions.LOAD_COLLECTION_SUCCESS: {
      const organizations: OrganizationInterface[] = action.payload;
      const newOrganizations = organizations.filter((organization) =>
        !state.entities[organization.id]);

      const newOrganizationIds = newOrganizations.map((organization) => organization.id);
      const newOrganizationEntities = newOrganizations.reduce((
        entities: {
          [id: string]: OrganizationInterface
        },
        organization: OrganizationInterface
      ) => {
        return Object.assign(entities, {
          [organization.id]: organization
        });
      }, {});

      return {
        ids: [...state.ids, ...newOrganizationIds],
        entities: Object.assign({}, state.entities, newOrganizationEntities)
      };
    }

    case OrganizationActions.LOAD_CLUSTER: {
      const organization: OrganizationInterface = action.payload;

      if (state.ids.includes(organization.id)) {
        return state;
      }

      return {
        ids: [...state.ids, organization.id],
        entities: Object.assign({}, state.entities, {
          [organization.id]: organization
        })
      };
    }

    case OrganizationActions.REMOVE_FROM_COLLECTION_SUCCESS: {
      const organization: OrganizationInterface = action.payload;

      delete state.entities[organization.id];

      return {
        ids: state.ids.filter((item) => item !== organization.id),
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
export function getOrganizationEntities() {
  return (state$: Observable<OrganizationsState>) => state$
    .select((s) => s.entities);
};

export function getOrganization(id: string) {
  return (state$: Observable<OrganizationsState>) => state$
    .select((s) => s.entities[id]);
}

export function getOrganizations(organizationIds: string[]) {
  return (state$: Observable<OrganizationsState>) => state$
    .let(getOrganizationEntities())
    .map((entities) => organizationIds.map((id) => entities[id]));
}

export function hasOrganization(id: string) {
  return (state$: Observable<OrganizationsState>) => state$
    .select((s) => s.ids.includes(id));
}
