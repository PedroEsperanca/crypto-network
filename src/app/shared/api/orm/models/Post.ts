/* tslint:disable */

import 'rxjs/add/operator/finally';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { RealTime } from '../../services';
import { createIO } from '../io';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { OrmBase } from '../base';
import { applyFilter, toArray, filterById } from '../filter';

import * as models from '../../models';
import { Post, LoopBackFilter } from '../../models';
import { PostActions } from '../../actions';

export class OrmPost extends OrmBase<Post> {
  constructor(protected store: Store<Post>, protected realTime?: RealTime) {
    super(store, Post, PostActions, realTime);
  }

	public getUser(id: any, refresh: any = {}, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.user.model + 's')
        .map((state: any) => state.entities[id])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getUser(id, refresh, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.user.model + 's')
        .map((state: any) => state.entities[id]);
    }
    
  }
  
	public getOrganization(id: any, refresh: any = {}, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.organization.model + 's')
        .map((state: any) => state.entities[id])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getOrganization(id, refresh, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.organization.model + 's')
        .map((state: any) => state.entities[id]);
    }
    
  }
  
	public findByIdVotes(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.votes.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdVotes(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.votes.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public findByIdS3Images(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.s3Images.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdS3Images(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.s3Images.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public destroyByIdS3Images(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdS3Images(id, fk, meta));
  }
  
	public updateByIdS3Images(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdS3Images(id, fk, data, meta));
  }
  
	public findByIdReplies(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.replies.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdReplies(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.replies.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public linkReplies(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.linkReplies(id, fk, data, meta));
  }
  
	public unlinkReplies(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.unlinkReplies(id, fk, meta));
  }
  
	public getReplying(id: any, refresh: any = {}, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.replying.model + 's')
        .map((state: any) => state.entities[id])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getReplying(id, refresh, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.replying.model + 's')
        .map((state: any) => state.entities[id]);
    }
    
  }
  
	public updateReplying(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateReplying(id, data, meta));
  }
  
	public destroyReplying(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyReplying(id, meta));
  }
  
	public findByIdShared(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.shared.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdShared(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.shared.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public linkShared(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.linkShared(id, fk, data, meta));
  }
  
	public unlinkShared(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.unlinkShared(id, fk, meta));
  }
  
	public getVotes(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.votes.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.votes.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'votes', Post))
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.votes.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getVotes(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.votes.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'votes', Post))
        , filter, this.store, models[this.model.getModelDefinition().relations.votes.model]);
    }
    
  }
	
	public getS3Images(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.s3Images.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.s3Images.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 's3Images', Post))
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.s3Images.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getS3Images(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.s3Images.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 's3Images', Post))
        , filter, this.store, models[this.model.getModelDefinition().relations.s3Images.model]);
    }
    
  }
	
	public createS3Images(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createS3Images(id, data, meta));
  }
  
	public deleteS3Images(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteS3Images(id, meta));
  }
  
	public getReplies(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.replies.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.replies.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'replies', Post))
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.replies.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getReplies(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.replies.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'replies', Post))
        , filter, this.store, models[this.model.getModelDefinition().relations.replies.model]);
    }
    
  }
	
	public getShared(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.shared.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.shared.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'shared', Post))
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.shared.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getShared(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.shared.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'shared', Post))
        , filter, this.store, models[this.model.getModelDefinition().relations.shared.model]);
    }
    
  }
	
	public s3PUTSignedUrl(id: any, key: any = {}, options: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.s3PUTSignedUrl(id, key, options, meta));
  }
  
	public s3GETSignedUrl(id: any, key: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.s3GETSignedUrl(id, key, meta));
  }
  
	public createManyS3Images(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyS3Images(id, data, meta));
  }
  }
