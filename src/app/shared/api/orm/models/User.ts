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
import { User, LoopBackFilter } from '../../models';
import { UserActions } from '../../actions';

export class OrmUser extends OrmBase<User> {
  constructor(protected store: Store<User>, protected realTime?: RealTime) {
    super(store, User, UserActions, realTime);
  }

	public sendVerificationCode(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.sendVerificationCode(id, data, meta));
  }
  
	public findByIdEmails(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.emails.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdEmails(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.emails.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public destroyByIdEmails(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdEmails(id, fk, meta));
  }
  
	public updateByIdEmails(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdEmails(id, fk, data, meta));
  }
  
	public findByIdPhones(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.phones.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdPhones(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.phones.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public destroyByIdPhones(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdPhones(id, fk, meta));
  }
  
	public updateByIdPhones(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdPhones(id, fk, data, meta));
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
  
	public findByIdIdentities(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.identities.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdIdentities(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.identities.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public destroyByIdIdentities(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdIdentities(id, fk, meta));
  }
  
	public updateByIdIdentities(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdIdentities(id, fk, data, meta));
  }
  
	public findByIdCredentials(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.credentials.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdCredentials(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.credentials.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public destroyByIdCredentials(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdCredentials(id, fk, meta));
  }
  
	public updateByIdCredentials(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdCredentials(id, fk, data, meta));
  }
  
	public findByIdAccessTokens(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.accessTokens.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdAccessTokens(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.accessTokens.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public destroyByIdAccessTokens(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdAccessTokens(id, fk, meta));
  }
  
	public updateByIdAccessTokens(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdAccessTokens(id, fk, data, meta));
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
  
	public findByIdOrganizations(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.organizations.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdOrganizations(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.organizations.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public destroyByIdOrganizations(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdOrganizations(id, fk, meta));
  }
  
	public updateByIdOrganizations(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdOrganizations(id, fk, data, meta));
  }
  
	public linkOrganizations(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.linkOrganizations(id, fk, data, meta));
  }
  
	public unlinkOrganizations(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.unlinkOrganizations(id, fk, meta));
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
  
	public findByIdInvitations(id: any, fk: any, customHeaders?: Function, meta?: any): Observable<any> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO({}, this.store, destroyStream$, models[this.model.getModelDefinition().relations.rooms.model], this.realTime, meta);

      return this.store.select<any>(this.model.getModelDefinition().relations.invitations.model + 's')
        .map((state: any) => state.entities[fk])
        .finally(() => {
          destroyStream$.next(1);
          destroyStream$.complete();
        });
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.findByIdInvitations(id, fk, meta));
      }

      return this.store.select<any>(this.model.getModelDefinition().relations.invitations.model + 's')
        .map((state: any) => state.entities[fk]);
    }
    
  }
  
	public destroyByIdInvitations(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdInvitations(id, fk, meta));
  }
  
	public updateByIdInvitations(id: any, fk: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdInvitations(id, fk, data, meta));
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
  
	public getEmails(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.emails.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.emails.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'emails', User))
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.emails.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getEmails(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.emails.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'emails', User))
        , filter, this.store, models[this.model.getModelDefinition().relations.emails.model]);
    }
    
  }
	
	public createEmails(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createEmails(id, data, meta));
  }
  
	public deleteEmails(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteEmails(id, meta));
  }
  
	public getPhones(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.phones.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.phones.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'phones', User))
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.phones.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getPhones(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.phones.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'phones', User))
        , filter, this.store, models[this.model.getModelDefinition().relations.phones.model]);
    }
    
  }
	
	public createPhones(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createPhones(id, data, meta));
  }
  
	public deletePhones(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deletePhones(id, meta));
  }
  
	public getStripeSources(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.stripeSources.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.stripeSources.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'stripeSources', User))
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
          .map((state: any[]) => filterById(state, id, 'stripeSources', User))
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
          .map((state: any[]) => filterById(state, id, 'stripeCharges', User))
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
          .map((state: any[]) => filterById(state, id, 'stripeCharges', User))
        , filter, this.store, models[this.model.getModelDefinition().relations.stripeCharges.model]);
    }
    
  }
	
	public createStripeCharges(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createStripeCharges(id, data, meta));
  }
  
	public deleteStripeCharges(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteStripeCharges(id, meta));
  }
  
	public getIdentities(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.identities.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.identities.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'identities', User))
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.identities.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getIdentities(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.identities.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'identities', User))
        , filter, this.store, models[this.model.getModelDefinition().relations.identities.model]);
    }
    
  }
	
	public createIdentities(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createIdentities(id, data, meta));
  }
  
	public deleteIdentities(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteIdentities(id, meta));
  }
  
	public getCredentials(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.credentials.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.credentials.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'credentials', User))
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.credentials.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getCredentials(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.credentials.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'credentials', User))
        , filter, this.store, models[this.model.getModelDefinition().relations.credentials.model]);
    }
    
  }
	
	public createCredentials(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createCredentials(id, data, meta));
  }
  
	public deleteCredentials(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteCredentials(id, meta));
  }
  
	public getAccessTokens(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.accessTokens.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.accessTokens.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'accessTokens', User))
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.accessTokens.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getAccessTokens(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.accessTokens.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'accessTokens', User))
        , filter, this.store, models[this.model.getModelDefinition().relations.accessTokens.model]);
    }
    
  }
	
	public createAccessTokens(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createAccessTokens(id, data, meta));
  }
  
	public deleteAccessTokens(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteAccessTokens(id, meta));
  }
  
	public getRoles(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.roles.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.roles.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'roles', User))
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
          .map((state: any[]) => filterById(state, id, 'roles', User))
        , filter, this.store, models[this.model.getModelDefinition().relations.roles.model]);
    }
    
  }
	
	public createRoles(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createRoles(id, data, meta));
  }
  
	public deleteRoles(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteRoles(id, meta));
  }
  
	public getOrganizations(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.organizations.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.organizations.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'organizations', User))
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.organizations.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getOrganizations(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.organizations.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'organizations', User))
        , filter, this.store, models[this.model.getModelDefinition().relations.organizations.model]);
    }
    
  }
	
	public createOrganizations(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createOrganizations(id, data, meta));
  }
  
	public deleteOrganizations(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteOrganizations(id, meta));
  }
  
	public getContacts(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.contacts.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.contacts.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'contacts', User))
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
          .map((state: any[]) => filterById(state, id, 'contacts', User))
        , filter, this.store, models[this.model.getModelDefinition().relations.contacts.model]);
    }
    
  }
	
	public createContacts(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createContacts(id, data, meta));
  }
  
	public deleteContacts(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteContacts(id, meta));
  }
  
	public getInvitations(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.invitations.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.invitations.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'invitations', User))
          .finally(() => {
            destroyStream$.next(1);
            destroyStream$.complete();
          })
        , filter, this.store, models[this.model.getModelDefinition().relations.invitations.model]);
    } else {
      if (!meta || !meta.justCache) {
        this.store.dispatch(new this.actions.getInvitations(id, filter, meta));
      }

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.invitations.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'invitations', User))
        , filter, this.store, models[this.model.getModelDefinition().relations.invitations.model]);
    }
    
  }
	
	public createInvitations(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createInvitations(id, data, meta));
  }
  
	public deleteInvitations(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteInvitations(id, meta));
  }
  
	public getApps(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.apps.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.apps.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'apps', User))
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
          .map((state: any[]) => filterById(state, id, 'apps', User))
        , filter, this.store, models[this.model.getModelDefinition().relations.apps.model]);
    }
    
  }
	
	public createApps(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createApps(id, data, meta));
  }
  
	public deleteApps(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteApps(id, meta));
  }
  
	public getOAuthClientApplications(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, meta?: any): Observable<any[]> {
    
    if (meta && meta.io) {
      const destroyStream$: AsyncSubject<any> = new AsyncSubject();

      createIO(filter, this.store, destroyStream$, models[this.model.getModelDefinition().relations.oAuthClientApplications.model], this.realTime, meta);

      return applyFilter(
        this.store.select<any>(this.model.getModelDefinition().relations.oAuthClientApplications.model + 's')
          .map(toArray)
          .map((state: any[]) => filterById(state, id, 'oAuthClientApplications', User))
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
          .map((state: any[]) => filterById(state, id, 'oAuthClientApplications', User))
        , filter, this.store, models[this.model.getModelDefinition().relations.oAuthClientApplications.model]);
    }
    
  }
	
	public createOAuthClientApplications(id: any, data: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createOAuthClientApplications(id, data, meta));
  }
  
	public deleteOAuthClientApplications(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.deleteOAuthClientApplications(id, meta));
  }
  
	public login(credentials: any, include: any = 'user', rememberMe: boolean = true, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.login(credentials, include, meta));
  }
  
	public logout(meta?: any): void {
    this.store.dispatch(new this.actions.logout(meta));
  }
  
	public verify(id: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.verify(id, meta));
  }
  
	public confirm(uid: any, token: any, redirect: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.confirm(uid, token, redirect, meta));
  }
  
	public resetPassword(options: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.resetPassword(options, meta));
  }
  
	public changePassword(oldPassword: any, newPassword: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.changePassword(oldPassword, newPassword, meta));
  }
  
	public setPassword(newPassword: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.setPassword(newPassword, meta));
  }
  
	public setPrimaryEmail(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.setPrimaryEmail(id, fk, meta));
  }
  
	public setPrimaryPhone(id: any, fk: any, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.setPrimaryPhone(id, fk, meta));
  }
  
	public s3PUTSignedUrl(id: any, key: any = {}, options: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.s3PUTSignedUrl(id, key, options, meta));
  }
  
	public s3GETSignedUrl(id: any, key: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.s3GETSignedUrl(id, key, meta));
  }
  
	public activate(uid: any, token: any, redirect: any = {}, customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.activate(uid, token, redirect, meta));
  }
  
	public createManyS3Photo(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyS3Photo(id, data, meta));
  }
  
	public createManyStripeCustomer(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyStripeCustomer(id, data, meta));
  }
  
	public createManyEmails(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyEmails(id, data, meta));
  }
  
	public createManyPhones(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyPhones(id, data, meta));
  }
  
	public createManyStripeSources(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyStripeSources(id, data, meta));
  }
  
	public createManyStripeCharges(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyStripeCharges(id, data, meta));
  }
  
	public createManyIdentities(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyIdentities(id, data, meta));
  }
  
	public createManyCredentials(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyCredentials(id, data, meta));
  }
  
	public createManyAccessTokens(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyAccessTokens(id, data, meta));
  }
  
	public createManyRoles(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyRoles(id, data, meta));
  }
  
	public createManyOrganizations(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyOrganizations(id, data, meta));
  }
  
	public createManyContacts(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyContacts(id, data, meta));
  }
  
	public createManyInvitations(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyInvitations(id, data, meta));
  }
  
	public createManyApps(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyApps(id, data, meta));
  }
  
	public createManyOAuthClientApplications(id: any, data: any[] = [], customHeaders?: Function, meta?: any): void {
    this.store.dispatch(new this.actions.createManyOAuthClientApplications(id, data, meta));
  }
    
  public signup(credentials: any, meta?: any): void {
    this.store.dispatch(new this.actions.signup(credentials, meta));
  }
    
}
