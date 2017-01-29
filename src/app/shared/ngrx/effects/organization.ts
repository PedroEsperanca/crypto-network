import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Database } from '@ngrx/db';

import { OrganizationActions } from '../actions/organization';
import { OrganizationInterface, UserApi, LoopBackAuth } from 'shared/api';

@Injectable()
export class OrganizationEffects {

  @Effect()
  public openDB$ = this.db.open('seed').filter(() => false);

  @Effect()
  public loadCollectionOnInit$ = Observable.of(this.organizationActions.loadCollection());

  @Effect()
  public loadCollection$ = this.actions$
    .ofType(OrganizationActions.LOAD_COLLECTION)
    .switchMapTo(this.db.query('organizations').toArray())
    .map((organizations: OrganizationInterface[]) =>
      this.organizationActions.loadCollectionSuccess(organizations));

  @Effect()
  public search$ = this.actions$
    .ofType(
      OrganizationActions.SEARCH,
      OrganizationActions.ADD_TO_COLLECTION_SUCCESS
    )
    .map((update) => update.payload)
    .switchMap((filter) => this.user.getOrganizations(this.auth.getCurrentUserId(), filter)
      .map((organizations) => this.organizationActions.searchComplete(organizations))
      .catch(() => Observable.of(this.organizationActions.searchComplete([])))
    );

  @Effect()
  public clearSearch$ = this.actions$
    .ofType(OrganizationActions.SEARCH)
    .map((update) => update.payload)
    .mapTo(this.organizationActions.searchComplete([]));

  @Effect()
  public addOrganizationToCollection$ = this.actions$
    .ofType(OrganizationActions.ADD_TO_COLLECTION)
    .map((update) => update.payload)
    .mergeMap((organization) =>
      this.user.createOrganizations(this.auth.getCurrentUserId(), organization)
        .mapTo(this.organizationActions.addToCollectionSuccess(organization))
        .catch(() => Observable.of(
          this.organizationActions.addToCollectionFail(organization)
        ))
      );

  @Effect()
  public removeOrganizationFromCollection$ = this.actions$
    .ofType(OrganizationActions.REMOVE_FROM_COLLECTION)
    .map((update) => update.payload)
    .mergeMap((organization) =>
      this.user.destroyByIdOrganizations(this.auth.getCurrentUserId(), organization.id)
        .mapTo(this.organizationActions.removeFromCollectionSuccess(organization))
        .catch(() => Observable.of(
          this.organizationActions.removeFromCollectionFail(organization)
        ))
      );

  /*@Effect()
  public addOrganizationToCollection$ = this.actions$
    .ofType(OrganizationActions.ADD_TO_COLLECTION)
    .map(update => update.payload)
    .mergeMap(organization => this.db.insert('organizations', [ organization ])
      .mapTo(this.organizationActions.addToCollectionSuccess(organization))
      .catch(() => Observable.of(
        this.organizationActions.addToCollectionFail(organization)
      ))
    );

  @Effect()
  public removeOrganizationFromCollection$ = this.actions$
    .ofType(OrganizationActions.REMOVE_FROM_COLLECTION)
    .map(update => update.payload)
    .mergeMap(organization => this.db.executeWrite('organizations', 'delete', [ organization.id ])
      .mapTo(this.organizationActions.removeFromCollectionSuccess(organization))
      .catch(() => Observable.of(
        this.organizationActions.removeFromCollectionFail(organization)
      ))
    );*/

  constructor(
    private actions$: Actions,
    private user: UserApi,
    private auth: LoopBackAuth,
    private db: Database,
    private organizationActions: OrganizationActions
  ) {}
}
