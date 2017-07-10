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
import { Organization, LoopBackFilter } from '../../models';
import { OrganizationActions } from '../../actions';

export class OrmOrganization extends OrmBase<Organization> {
  constructor(protected store: Store<Organization>, protected realTime?: RealTime) {
    super(store, Organization, OrganizationActions, realTime);
  }

	public findByIdUsers(id: any, fk: any, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select(this.model.getModelDefinition().relations.users.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      this.store.dispatch(new this.actions.findByIdUsers(id, fk, meta));

      return this.store.select(this.model.getModelDefinition().relations.users.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public destroyByIdUsers(id: any, fk: any, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdUsers(id, fk, meta));
  }
  
	public updateByIdUsers(id: any, fk: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdUsers(id, fk, data, meta));
  }
  
	public linkUsers(id: any, fk: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.linkUsers(id, fk, data, meta));
  }
  
	public unlinkUsers(id: any, fk: any, meta?: any): void {
    this.store.dispatch(new this.actions.unlinkUsers(id, fk, meta));
  }
  
	public findByIdRoles(id: any, fk: any, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select(this.model.getModelDefinition().relations.roles.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      this.store.dispatch(new this.actions.findByIdRoles(id, fk, meta));

      return this.store.select(this.model.getModelDefinition().relations.roles.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public destroyByIdRoles(id: any, fk: any, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdRoles(id, fk, meta));
  }
  
	public updateByIdRoles(id: any, fk: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdRoles(id, fk, data, meta));
  }
  
	public getS3Photo(id: any, refresh: any = {}, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select(this.model.getModelDefinition().relations.s3Photo.model + 's')
        .map((state: any) => state.entities[id])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      this.store.dispatch(new this.actions.getS3Photo(id, refresh, meta));

      return this.store.select(this.model.getModelDefinition().relations.s3Photo.model + 's')
        .map((state: any) => state.entities[id]);
    }
    
  }
  
	public createS3Photo(id: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.createS3Photo(id, data, meta));
  }
  
	public updateS3Photo(id: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.updateS3Photo(id, data, meta));
  }
  
	public destroyS3Photo(id: any, meta?: any): void {
    this.store.dispatch(new this.actions.destroyS3Photo(id, meta));
  }
  
	public findByIdApps(id: any, fk: any, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select(this.model.getModelDefinition().relations.apps.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      this.store.dispatch(new this.actions.findByIdApps(id, fk, meta));

      return this.store.select(this.model.getModelDefinition().relations.apps.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public destroyByIdApps(id: any, fk: any, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdApps(id, fk, meta));
  }
  
	public updateByIdApps(id: any, fk: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdApps(id, fk, data, meta));
  }
  
	public findByIdOAuthClientApplications(id: any, fk: any, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select(this.model.getModelDefinition().relations.oAuthClientApplications.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      this.store.dispatch(new this.actions.findByIdOAuthClientApplications(id, fk, meta));

      return this.store.select(this.model.getModelDefinition().relations.oAuthClientApplications.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public destroyByIdOAuthClientApplications(id: any, fk: any, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdOAuthClientApplications(id, fk, meta));
  }
  
	public updateByIdOAuthClientApplications(id: any, fk: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdOAuthClientApplications(id, fk, data, meta));
  }
  
	public getUsers(id: any, filter: LoopBackFilter = {}, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.users.model], this.realTime, meta);

      return applyFilter(
        this.store.select(this.model.getModelDefinition().relations.users.model + 's')
          .map((state: any) => state.entities)
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.users.model]);
    } else {
      this.store.dispatch(new this.actions.getUsers(id, filter, meta));

      return applyFilter(
        this.store.select(this.model.getModelDefinition().relations.users.model + 's')
          .map((state: any) => state.entities)
        , filter, this.store, models[this.model.getModelDefinition().relations.users.model]);
    }
    
  }
	
	public createUsers(id: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.createUsers(id, data, meta));
  }
  
	public deleteUsers(id: any, meta?: any): void {
    this.store.dispatch(new this.actions.deleteUsers(id, meta));
  }
  
	public getRoles(id: any, filter: LoopBackFilter = {}, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.roles.model], this.realTime, meta);

      return applyFilter(
        this.store.select(this.model.getModelDefinition().relations.roles.model + 's')
          .map((state: any) => state.entities)
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.roles.model]);
    } else {
      this.store.dispatch(new this.actions.getRoles(id, filter, meta));

      return applyFilter(
        this.store.select(this.model.getModelDefinition().relations.roles.model + 's')
          .map((state: any) => state.entities)
        , filter, this.store, models[this.model.getModelDefinition().relations.roles.model]);
    }
    
  }
	
	public createRoles(id: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.createRoles(id, data, meta));
  }
  
	public deleteRoles(id: any, meta?: any): void {
    this.store.dispatch(new this.actions.deleteRoles(id, meta));
  }
  
	public getApps(id: any, filter: LoopBackFilter = {}, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.apps.model], this.realTime, meta);

      return applyFilter(
        this.store.select(this.model.getModelDefinition().relations.apps.model + 's')
          .map((state: any) => state.entities)
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.apps.model]);
    } else {
      this.store.dispatch(new this.actions.getApps(id, filter, meta));

      return applyFilter(
        this.store.select(this.model.getModelDefinition().relations.apps.model + 's')
          .map((state: any) => state.entities)
        , filter, this.store, models[this.model.getModelDefinition().relations.apps.model]);
    }
    
  }
	
	public createApps(id: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.createApps(id, data, meta));
  }
  
	public deleteApps(id: any, meta?: any): void {
    this.store.dispatch(new this.actions.deleteApps(id, meta));
  }
  
	public getOAuthClientApplications(id: any, filter: LoopBackFilter = {}, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.oAuthClientApplications.model], this.realTime, meta);

      return applyFilter(
        this.store.select(this.model.getModelDefinition().relations.oAuthClientApplications.model + 's')
          .map((state: any) => state.entities)
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.oAuthClientApplications.model]);
    } else {
      this.store.dispatch(new this.actions.getOAuthClientApplications(id, filter, meta));

      return applyFilter(
        this.store.select(this.model.getModelDefinition().relations.oAuthClientApplications.model + 's')
          .map((state: any) => state.entities)
        , filter, this.store, models[this.model.getModelDefinition().relations.oAuthClientApplications.model]);
    }
    
  }
	
	public createOAuthClientApplications(id: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.createOAuthClientApplications(id, data, meta));
  }
  
	public deleteOAuthClientApplications(id: any, meta?: any): void {
    this.store.dispatch(new this.actions.deleteOAuthClientApplications(id, meta));
  }
  
	public s3PUTSignedUrl(id: any, key: any = {}, options: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.s3PUTSignedUrl(id, key, options, meta));
  }
  
	public s3GETSignedUrl(id: any, key: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.s3GETSignedUrl(id, key, meta));
  }
  
	public createManyS3Photo(id: any, data: any[] = [], meta?: any): void {
    this.store.dispatch(new this.actions.createManyS3Photo(id, data, meta));
  }
  
	public createManyUsers(id: any, data: any[] = [], meta?: any): void {
    this.store.dispatch(new this.actions.createManyUsers(id, data, meta));
  }
  
	public createManyRoles(id: any, data: any[] = [], meta?: any): void {
    this.store.dispatch(new this.actions.createManyRoles(id, data, meta));
  }
  
	public createManyApps(id: any, data: any[] = [], meta?: any): void {
    this.store.dispatch(new this.actions.createManyApps(id, data, meta));
  }
  
	public createManyOAuthClientApplications(id: any, data: any[] = [], meta?: any): void {
    this.store.dispatch(new this.actions.createManyOAuthClientApplications(id, data, meta));
  }
  }
