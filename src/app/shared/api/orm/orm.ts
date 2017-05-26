/* tslint:disable */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as OrmModels from './models';
import * as models from '../models';

import { RealTime } from '../services';


@Injectable()
export class Orm {
  public User: OrmModels.OrmUser;
  public Organization: OrmModels.OrmOrganization;
  public App: OrmModels.OrmApp;
  public OAuthApp: OrmModels.OrmOAuthApp;

  constructor(private store: Store<any>, protected realTime?: RealTime) {
    this.User = new OrmModels.OrmUser(store, realTime);
    this.Organization = new OrmModels.OrmOrganization(store, realTime);
    this.App = new OrmModels.OrmApp(store, realTime);
    this.OAuthApp = new OrmModels.OrmOAuthApp(store, realTime);
  }
}
