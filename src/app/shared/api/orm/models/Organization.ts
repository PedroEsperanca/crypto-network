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
import { Organization, LoopBackFilter } from '../../models';
import { OrganizationActions } from '../../actions';

export class OrmOrganization extends OrmBase<Organization> {
  constructor(protected store: Store<Organization>, protected realTime?: RealTime) {
    super(store, Organization, OrganizationActions, realTime);
  }

	public stripeAuthenticateCallback(req: any = {}, res: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.stripeAuthenticateCallback(req, res, meta));
  }
  
	public stripeAuthenticate(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.stripeAuthenticate(id, meta));
  }
  
	public findByIdUsers(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.users.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdUsers(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.users.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public destroyByIdUsers(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdUsers(id, fk, meta));
  }
  
	public updateByIdUsers(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdUsers(id, fk, data, meta));
  }
  
	public linkUsers(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.linkUsers(id, fk, data, meta));
  }
  
	public unlinkUsers(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.unlinkUsers(id, fk, meta));
  }
  
	public findByIdRoles(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.roles.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdRoles(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.roles.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public destroyByIdRoles(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdRoles(id, fk, meta));
  }
  
	public updateByIdRoles(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdRoles(id, fk, data, meta));
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
  
	public getStripeCustomer(id: any, refresh: any = {}, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.stripeCustomer.model + 's')
        .map((state: any) => state.entities[id])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getStripeCustomer(id, refresh, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.stripeCustomer.model + 's')
        .map((state: any) => state.entities[id]);
    }
    
  }
  
	public createStripeCustomer(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createStripeCustomer(id, data, meta));
  }
  
	public updateStripeCustomer(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateStripeCustomer(id, data, meta));
  }
  
	public destroyStripeCustomer(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyStripeCustomer(id, meta));
  }
  
	public findByIdStripeSources(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.stripeSources.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdStripeSources(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.stripeSources.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public destroyByIdStripeSources(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdStripeSources(id, fk, meta));
  }
  
	public updateByIdStripeSources(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdStripeSources(id, fk, data, meta));
  }
  
	public findByIdStripeCharges(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.stripeCharges.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdStripeCharges(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.stripeCharges.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public destroyByIdStripeCharges(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdStripeCharges(id, fk, meta));
  }
  
	public updateByIdStripeCharges(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdStripeCharges(id, fk, data, meta));
  }
  
	public getStripeStoreIdentity(id: any, refresh: any = {}, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.stripeStoreIdentity.model + 's')
        .map((state: any) => state.entities[id])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getStripeStoreIdentity(id, refresh, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.stripeStoreIdentity.model + 's')
        .map((state: any) => state.entities[id]);
    }
    
  }
  
	public createStripeStoreIdentity(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createStripeStoreIdentity(id, data, meta));
  }
  
	public updateStripeStoreIdentity(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateStripeStoreIdentity(id, data, meta));
  }
  
	public destroyStripeStoreIdentity(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyStripeStoreIdentity(id, meta));
  }
  
	public findByIdContacts(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.contacts.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdContacts(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.contacts.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public destroyByIdContacts(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdContacts(id, fk, meta));
  }
  
	public updateByIdContacts(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdContacts(id, fk, data, meta));
  }
  
	public findByIdApps(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.apps.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdApps(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.apps.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public destroyByIdApps(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdApps(id, fk, meta));
  }
  
	public updateByIdApps(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdApps(id, fk, data, meta));
  }
  
	public findByIdProducts(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.products.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdProducts(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.products.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public destroyByIdProducts(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdProducts(id, fk, meta));
  }
  
	public updateByIdProducts(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdProducts(id, fk, data, meta));
  }
  
	public findByIdSubscriptions(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.subscriptions.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdSubscriptions(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.subscriptions.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public destroyByIdSubscriptions(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdSubscriptions(id, fk, meta));
  }
  
	public updateByIdSubscriptions(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdSubscriptions(id, fk, data, meta));
  }
  
	public findByIdOAuthClientApplications(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.oAuthClientApplications.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdOAuthClientApplications(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.oAuthClientApplications.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public destroyByIdOAuthClientApplications(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdOAuthClientApplications(id, fk, meta));
  }
  
	public updateByIdOAuthClientApplications(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdOAuthClientApplications(id, fk, data, meta));
  }
  
	public getUsers(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.users.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.users.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'users', Organization))
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.users.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getUsers(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.users.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'users', Organization))
        , filter, this.store, models[this.model.getModelDefinition().relations.users.model]);
    }
    
  }
	
	public createUsers(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createUsers(id, data, meta));
  }
  
	public deleteUsers(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteUsers(id, meta));
  }
  
	public getRoles(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.roles.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.roles.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'roles', Organization))
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.roles.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getRoles(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.roles.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'roles', Organization))
        , filter, this.store, models[this.model.getModelDefinition().relations.roles.model]);
    }
    
  }
	
	public createRoles(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createRoles(id, data, meta));
  }
  
	public deleteRoles(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteRoles(id, meta));
  }
  
	public getStripeSources(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.stripeSources.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.stripeSources.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'stripeSources', Organization))
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.stripeSources.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getStripeSources(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.stripeSources.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'stripeSources', Organization))
        , filter, this.store, models[this.model.getModelDefinition().relations.stripeSources.model]);
    }
    
  }
	
	public createStripeSources(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createStripeSources(id, data, meta));
  }
  
	public deleteStripeSources(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteStripeSources(id, meta));
  }
  
	public getStripeCharges(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.stripeCharges.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.stripeCharges.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'stripeCharges', Organization))
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.stripeCharges.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getStripeCharges(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.stripeCharges.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'stripeCharges', Organization))
        , filter, this.store, models[this.model.getModelDefinition().relations.stripeCharges.model]);
    }
    
  }
	
	public createStripeCharges(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createStripeCharges(id, data, meta));
  }
  
	public deleteStripeCharges(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteStripeCharges(id, meta));
  }
  
	public getContacts(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.contacts.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.contacts.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'contacts', Organization))
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.contacts.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getContacts(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.contacts.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'contacts', Organization))
        , filter, this.store, models[this.model.getModelDefinition().relations.contacts.model]);
    }
    
  }
	
	public createContacts(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createContacts(id, data, meta));
  }
  
	public deleteContacts(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteContacts(id, meta));
  }
  
	public getApps(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.apps.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.apps.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'apps', Organization))
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.apps.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getApps(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.apps.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'apps', Organization))
        , filter, this.store, models[this.model.getModelDefinition().relations.apps.model]);
    }
    
  }
	
	public createApps(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createApps(id, data, meta));
  }
  
	public deleteApps(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteApps(id, meta));
  }
  
	public getProducts(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.products.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.products.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'products', Organization))
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.products.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getProducts(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.products.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'products', Organization))
        , filter, this.store, models[this.model.getModelDefinition().relations.products.model]);
    }
    
  }
	
	public createProducts(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createProducts(id, data, meta));
  }
  
	public deleteProducts(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteProducts(id, meta));
  }
  
	public getSubscriptions(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.subscriptions.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.subscriptions.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'subscriptions', Organization))
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.subscriptions.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getSubscriptions(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.subscriptions.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'subscriptions', Organization))
        , filter, this.store, models[this.model.getModelDefinition().relations.subscriptions.model]);
    }
    
  }
	
	public createSubscriptions(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createSubscriptions(id, data, meta));
  }
  
	public deleteSubscriptions(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteSubscriptions(id, meta));
  }
  
	public getOAuthClientApplications(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.oAuthClientApplications.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.oAuthClientApplications.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'oAuthClientApplications', Organization))
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.oAuthClientApplications.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getOAuthClientApplications(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.oAuthClientApplications.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'oAuthClientApplications', Organization))
        , filter, this.store, models[this.model.getModelDefinition().relations.oAuthClientApplications.model]);
    }
    
  }
	
	public createOAuthClientApplications(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createOAuthClientApplications(id, data, meta));
  }
  
	public deleteOAuthClientApplications(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteOAuthClientApplications(id, meta));
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
  
	public createManyStripeCustomer(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyStripeCustomer(id, data, meta));
  }
  
	public createManyStripeStoreIdentity(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyStripeStoreIdentity(id, data, meta));
  }
  
	public createManyUsers(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyUsers(id, data, meta));
  }
  
	public createManyRoles(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyRoles(id, data, meta));
  }
  
	public createManyStripeSources(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyStripeSources(id, data, meta));
  }
  
	public createManyStripeCharges(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyStripeCharges(id, data, meta));
  }
  
	public createManyContacts(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyContacts(id, data, meta));
  }
  
	public createManyApps(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyApps(id, data, meta));
  }
  
	public createManyProducts(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyProducts(id, data, meta));
  }
  
	public createManySubscriptions(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManySubscriptions(id, data, meta));
  }
  
	public createManyOAuthClientApplications(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyOAuthClientApplications(id, data, meta));
  }
  }
