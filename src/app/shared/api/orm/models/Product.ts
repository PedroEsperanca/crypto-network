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
import { Product, LoopBackFilter } from '../../models';
import { ProductActions } from '../../actions';

export class OrmProduct extends OrmBase<Product> {
  constructor(protected store: Store<Product>, protected realTime?: RealTime) {
    super(store, Product, ProductActions, realTime);
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
  
	public findByIdShoppingCard(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.shoppingCard.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdShoppingCard(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.shoppingCard.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public destroyByIdShoppingCard(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdShoppingCard(id, fk, meta));
  }
  
	public updateByIdShoppingCard(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdShoppingCard(id, fk, data, meta));
  }
  
	public linkShoppingCard(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.linkShoppingCard(id, fk, data, meta));
  }
  
	public unlinkShoppingCard(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.unlinkShoppingCard(id, fk, meta));
  }
  
	public findByIdWhishList(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.whishList.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdWhishList(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.whishList.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public destroyByIdWhishList(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdWhishList(id, fk, meta));
  }
  
	public updateByIdWhishList(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdWhishList(id, fk, data, meta));
  }
  
	public linkWhishList(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.linkWhishList(id, fk, data, meta));
  }
  
	public unlinkWhishList(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.unlinkWhishList(id, fk, meta));
  }
  
	public getS3Photo(id: any, refresh: any = {}, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.s3Photo.model + 's')
        .map((state: any) => state.entities[id])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getS3Photo(id, refresh, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.s3Photo.model + 's')
        .map((state: any) => state.entities[id]);
    }
    
  }
  
	public createS3Photo(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createS3Photo(id, data, meta));
  }
  
	public updateS3Photo(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateS3Photo(id, data, meta));
  }
  
	public destroyS3Photo(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyS3Photo(id, meta));
  }
  
	public getShoppingCard(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.shoppingCard.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.shoppingCard.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'shoppingCard', Product))
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.shoppingCard.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getShoppingCard(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.shoppingCard.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'shoppingCard', Product))
        , filter, this.store, models[this.model.getModelDefinition().relations.shoppingCard.model]);
    }
    
  }
	
	public createShoppingCard(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createShoppingCard(id, data, meta));
  }
  
	public deleteShoppingCard(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteShoppingCard(id, meta));
  }
  
	public getWhishList(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.whishList.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.whishList.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'whishList', Product))
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.whishList.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getWhishList(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.whishList.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'whishList', Product))
        , filter, this.store, models[this.model.getModelDefinition().relations.whishList.model]);
    }
    
  }
	
	public createWhishList(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createWhishList(id, data, meta));
  }
  
	public deleteWhishList(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteWhishList(id, meta));
  }
  
	public s3PUTSignedUrl(id: any, key: any = {}, options: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.s3PUTSignedUrl(id, key, options, meta));
  }
  
	public s3GETSignedUrl(id: any, key: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.s3GETSignedUrl(id, key, meta));
  }
  
	public createManyS3Photo(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyS3Photo(id, data, meta));
  }
  
	public createManyShoppingCard(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyShoppingCard(id, data, meta));
  }
  
	public createManyWhishList(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyWhishList(id, data, meta));
  }
  }
