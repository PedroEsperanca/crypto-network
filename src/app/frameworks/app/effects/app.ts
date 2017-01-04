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

import { AppActions } from '../actions/app';
import { AppInterface, UserApi, LoopBackAuth } from 'frameworks/api';

@Injectable()
export class AppEffects {

  @Effect() public openDB$ = this.db.open('ORI_app').filter(() => false);

  @Effect() public loadCollectionOnInit$ = Observable.of(this.appActions.loadCollection());

  @Effect() public loadCollection$ = this.actions$
    .ofType(AppActions.LOAD_COLLECTION)
    .switchMapTo(this.db.query('apps').toArray())
    .map((apps: AppInterface[]) => this.appActions.loadCollectionSuccess(apps));

  @Effect() public search$ = this.actions$
    .ofType(
      AppActions.SEARCH,
      AppActions.ADD_TO_COLLECTION_SUCCESS
    )
    .map((update) => update.payload)
    .switchMap((filter) => this.user.getApps(this.auth.getCurrentUserId(), filter)
      .map((apps) => this.appActions.searchComplete(apps))
      .catch(() => Observable.of(this.appActions.searchComplete([])))
    );

  @Effect() public clearSearch$ = this.actions$
    .ofType(AppActions.SEARCH)
    .map((update) => update.payload)
    .mapTo(this.appActions.searchComplete([]));

  @Effect() public addAppToCollection$ = this.actions$
    .ofType(AppActions.ADD_TO_COLLECTION)
    .map((update) => update.payload)
    .mergeMap((app) => this.user.createApps(this.auth.getCurrentUserId(), app)
      .mapTo(this.appActions.addToCollectionSuccess(app))
      .catch(() => Observable.of(
        this.appActions.addToCollectionFail(app)
      ))
    );

  @Effect() public removeAppFromCollection$ = this.actions$
    .ofType(AppActions.REMOVE_FROM_COLLECTION)
    .map((update) => update.payload)
    .mergeMap((app) => this.user.destroyByIdApps(this.auth.getCurrentUserId(), app.id)
      .mapTo(this.appActions.removeFromCollectionSuccess(app))
      .catch(() => Observable.of(
        this.appActions.removeFromCollectionFail(app)
      ))
    );

  /*@Effect() public addAppToCollection$ = this.actions$
    .ofType(AppActions.ADD_TO_COLLECTION)
    .map(update => update.payload)
    .mergeMap(app => this.db.insert('apps', [ app ])
      .mapTo(this.appActions.addToCollectionSuccess(app))
      .catch(() => Observable.of(
        this.appActions.addToCollectionFail(app)
      ))
    );

  @Effect() public removeAppFromCollection$ = this.actions$
    .ofType(AppActions.REMOVE_FROM_COLLECTION)
    .map(update => update.payload)
    .mergeMap(app => this.db.executeWrite('apps', 'delete', [ app.id ])
      .mapTo(this.appActions.removeFromCollectionSuccess(app))
      .catch(() => Observable.of(
        this.appActions.removeFromCollectionFail(app)
      ))
    );*/

  constructor(
    private actions$: Actions,
    private user: UserApi,
    private auth: LoopBackAuth,
    private db: Database,
    private appActions: AppActions
  ) {}
}
