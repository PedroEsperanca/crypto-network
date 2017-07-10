/* tslint:disable */

import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/takeUntil';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { RealTime } from '../../services';
import { createIO } from '../io';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { OrmBase } from '../base';
import { applyFilter } from '../filter';

import * as models from '../../models';
import { OAuthApp, LoopBackFilter } from '../../models';
import { OAuthAppActions } from '../../actions';

export class OrmOAuthApp extends OrmBase<OAuthApp> {
  constructor(protected store: Store<OAuthApp>, protected realTime?: RealTime) {
    super(store, OAuthApp, OAuthAppActions, realTime);
  }

	public keysReset(id: any, meta?: any): void {
    this.store.dispatch(new this.actions.keysReset(id, meta));
  }
  
	public getUser(id: any, refresh: any = {}, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select(this.model.getModelDefinition().relations.user.model + 's')
        .map((state: any) => state.entities[id])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      this.store.dispatch(new this.actions.getUser(id, refresh, meta));

      return this.store.select(this.model.getModelDefinition().relations.user.model + 's')
        .map((state: any) => state.entities[id]);
    }
    
  }
  
	public getOrganization(id: any, refresh: any = {}, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select(this.model.getModelDefinition().relations.organization.model + 's')
        .map((state: any) => state.entities[id])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      this.store.dispatch(new this.actions.getOrganization(id, refresh, meta));

      return this.store.select(this.model.getModelDefinition().relations.organization.model + 's')
        .map((state: any) => state.entities[id]);
    }
    
  }
  
	public getS3Logo(id: any, refresh: any = {}, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select(this.model.getModelDefinition().relations.s3Logo.model + 's')
        .map((state: any) => state.entities[id])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      this.store.dispatch(new this.actions.getS3Logo(id, refresh, meta));

      return this.store.select(this.model.getModelDefinition().relations.s3Logo.model + 's')
        .map((state: any) => state.entities[id]);
    }
    
  }
  
	public createS3Logo(id: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.createS3Logo(id, data, meta));
  }
  
	public updateS3Logo(id: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.updateS3Logo(id, data, meta));
  }
  
	public destroyS3Logo(id: any, meta?: any): void {
    this.store.dispatch(new this.actions.destroyS3Logo(id, meta));
  }
  
	public s3PUTSignedUrl(id: any, key: any = {}, options: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.s3PUTSignedUrl(id, key, options, meta));
  }
  
	public s3GETSignedUrl(id: any, key: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.s3GETSignedUrl(id, key, meta));
  }
  
	public createManyS3Logo(id: any, data: any[] = [], meta?: any): void {
    this.store.dispatch(new this.actions.createManyS3Logo(id, data, meta));
  }
  }
