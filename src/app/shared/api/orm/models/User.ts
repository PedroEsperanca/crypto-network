/* tslint:disable */

import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/takeUntil';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { RealTime } from '../../services';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { OrmBase } from '../base';
import { applyFilter } from '../filter';

import * as models from '../../models';
import { User, LoopBackFilter } from '../../models';
import { UserActions } from '../../actions';

export class OrmUser extends OrmBase<User> {
  constructor(protected store: Store<User>, protected realTime?: RealTime) {
    super(store, User, UserActions, realTime);
  }

	public sendVerificationCode(id: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.sendVerificationCode(id, data, meta));
  }
  
	public findByIdEmails(id: any, fk: any, meta?: any): Observable<any> {
    this.store.dispatch(new this.actions.findByIdEmails(id, fk, meta));

    return this.store.select(this.model.getModelDefinition().relations.emails.model + 's')
      .map((state: any) => state.entities[fk]);
  }
  
	public destroyByIdEmails(id: any, fk: any, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdEmails(id, fk, meta));
  }
  
	public updateByIdEmails(id: any, fk: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdEmails(id, fk, data, meta));
  }
  
	public findByIdPhones(id: any, fk: any, meta?: any): Observable<any> {
    this.store.dispatch(new this.actions.findByIdPhones(id, fk, meta));

    return this.store.select(this.model.getModelDefinition().relations.phones.model + 's')
      .map((state: any) => state.entities[fk]);
  }
  
	public destroyByIdPhones(id: any, fk: any, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdPhones(id, fk, meta));
  }
  
	public updateByIdPhones(id: any, fk: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdPhones(id, fk, data, meta));
  }
  
	public getS3Photo(id: any, refresh: any = {}, meta?: any): Observable<any> {
    this.store.dispatch(new this.actions.getS3Photo(id, refresh, meta));

    return this.store.select(this.model.getModelDefinition().relations.s3Photo.model + 's')
      .map((state: any) => state.entities[id]);
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
  
	public findByIdIdentities(id: any, fk: any, meta?: any): Observable<any> {
    this.store.dispatch(new this.actions.findByIdIdentities(id, fk, meta));

    return this.store.select(this.model.getModelDefinition().relations.identities.model + 's')
      .map((state: any) => state.entities[fk]);
  }
  
	public destroyByIdIdentities(id: any, fk: any, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdIdentities(id, fk, meta));
  }
  
	public updateByIdIdentities(id: any, fk: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdIdentities(id, fk, data, meta));
  }
  
	public findByIdCredentials(id: any, fk: any, meta?: any): Observable<any> {
    this.store.dispatch(new this.actions.findByIdCredentials(id, fk, meta));

    return this.store.select(this.model.getModelDefinition().relations.credentials.model + 's')
      .map((state: any) => state.entities[fk]);
  }
  
	public destroyByIdCredentials(id: any, fk: any, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdCredentials(id, fk, meta));
  }
  
	public updateByIdCredentials(id: any, fk: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdCredentials(id, fk, data, meta));
  }
  
	public findByIdAccessTokens(id: any, fk: any, meta?: any): Observable<any> {
    this.store.dispatch(new this.actions.findByIdAccessTokens(id, fk, meta));

    return this.store.select(this.model.getModelDefinition().relations.accessTokens.model + 's')
      .map((state: any) => state.entities[fk]);
  }
  
	public destroyByIdAccessTokens(id: any, fk: any, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdAccessTokens(id, fk, meta));
  }
  
	public updateByIdAccessTokens(id: any, fk: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdAccessTokens(id, fk, data, meta));
  }
  
	public findByIdOrganizations(id: any, fk: any, meta?: any): Observable<any> {
    this.store.dispatch(new this.actions.findByIdOrganizations(id, fk, meta));

    return this.store.select(this.model.getModelDefinition().relations.organizations.model + 's')
      .map((state: any) => state.entities[fk]);
  }
  
	public destroyByIdOrganizations(id: any, fk: any, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdOrganizations(id, fk, meta));
  }
  
	public updateByIdOrganizations(id: any, fk: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdOrganizations(id, fk, data, meta));
  }
  
	public linkOrganizations(id: any, fk: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.linkOrganizations(id, fk, data, meta));
  }
  
	public unlinkOrganizations(id: any, fk: any, meta?: any): void {
    this.store.dispatch(new this.actions.unlinkOrganizations(id, fk, meta));
  }
  
	public findByIdApps(id: any, fk: any, meta?: any): Observable<any> {
    this.store.dispatch(new this.actions.findByIdApps(id, fk, meta));

    return this.store.select(this.model.getModelDefinition().relations.apps.model + 's')
      .map((state: any) => state.entities[fk]);
  }
  
	public destroyByIdApps(id: any, fk: any, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdApps(id, fk, meta));
  }
  
	public updateByIdApps(id: any, fk: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdApps(id, fk, data, meta));
  }
  
	public findByIdOAuthClientApplications(id: any, fk: any, meta?: any): Observable<any> {
    this.store.dispatch(new this.actions.findByIdOAuthClientApplications(id, fk, meta));

    return this.store.select(this.model.getModelDefinition().relations.oAuthClientApplications.model + 's')
      .map((state: any) => state.entities[fk]);
  }
  
	public destroyByIdOAuthClientApplications(id: any, fk: any, meta?: any): void {
    this.store.dispatch(new this.actions.destroyByIdOAuthClientApplications(id, fk, meta));
  }
  
	public updateByIdOAuthClientApplications(id: any, fk: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.updateByIdOAuthClientApplications(id, fk, data, meta));
  }
  
	public getEmails(id: any, filter: LoopBackFilter = {}, meta?: any): Observable<any[]> {
    this.store.dispatch(new this.actions.getEmails(id, filter, meta));

    return applyFilter(
      this.store.select(this.model.getModelDefinition().relations.emails.model + 's')
        .map((state: any) => state.entities)
      , filter, this.store, models[this.model.getModelDefinition().relations.emails.model]);
  }
	
	public createEmails(id: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.createEmails(id, data, meta));
  }
  
	public deleteEmails(id: any, meta?: any): void {
    this.store.dispatch(new this.actions.deleteEmails(id, meta));
  }
  
	public getPhones(id: any, filter: LoopBackFilter = {}, meta?: any): Observable<any[]> {
    this.store.dispatch(new this.actions.getPhones(id, filter, meta));

    return applyFilter(
      this.store.select(this.model.getModelDefinition().relations.phones.model + 's')
        .map((state: any) => state.entities)
      , filter, this.store, models[this.model.getModelDefinition().relations.phones.model]);
  }
	
	public createPhones(id: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.createPhones(id, data, meta));
  }
  
	public deletePhones(id: any, meta?: any): void {
    this.store.dispatch(new this.actions.deletePhones(id, meta));
  }
  
	public getIdentities(id: any, filter: LoopBackFilter = {}, meta?: any): Observable<any[]> {
    this.store.dispatch(new this.actions.getIdentities(id, filter, meta));

    return applyFilter(
      this.store.select(this.model.getModelDefinition().relations.identities.model + 's')
        .map((state: any) => state.entities)
      , filter, this.store, models[this.model.getModelDefinition().relations.identities.model]);
  }
	
	public createIdentities(id: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.createIdentities(id, data, meta));
  }
  
	public deleteIdentities(id: any, meta?: any): void {
    this.store.dispatch(new this.actions.deleteIdentities(id, meta));
  }
  
	public getCredentials(id: any, filter: LoopBackFilter = {}, meta?: any): Observable<any[]> {
    this.store.dispatch(new this.actions.getCredentials(id, filter, meta));

    return applyFilter(
      this.store.select(this.model.getModelDefinition().relations.credentials.model + 's')
        .map((state: any) => state.entities)
      , filter, this.store, models[this.model.getModelDefinition().relations.credentials.model]);
  }
	
	public createCredentials(id: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.createCredentials(id, data, meta));
  }
  
	public deleteCredentials(id: any, meta?: any): void {
    this.store.dispatch(new this.actions.deleteCredentials(id, meta));
  }
  
	public getAccessTokens(id: any, filter: LoopBackFilter = {}, meta?: any): Observable<any[]> {
    this.store.dispatch(new this.actions.getAccessTokens(id, filter, meta));

    return applyFilter(
      this.store.select(this.model.getModelDefinition().relations.accessTokens.model + 's')
        .map((state: any) => state.entities)
      , filter, this.store, models[this.model.getModelDefinition().relations.accessTokens.model]);
  }
	
	public createAccessTokens(id: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.createAccessTokens(id, data, meta));
  }
  
	public deleteAccessTokens(id: any, meta?: any): void {
    this.store.dispatch(new this.actions.deleteAccessTokens(id, meta));
  }
  
	public getOrganizations(id: any, filter: LoopBackFilter = {}, meta?: any): Observable<any[]> {
    this.store.dispatch(new this.actions.getOrganizations(id, filter, meta));

    return applyFilter(
      this.store.select(this.model.getModelDefinition().relations.organizations.model + 's')
        .map((state: any) => state.entities)
      , filter, this.store, models[this.model.getModelDefinition().relations.organizations.model]);
  }
	
	public createOrganizations(id: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.createOrganizations(id, data, meta));
  }
  
	public deleteOrganizations(id: any, meta?: any): void {
    this.store.dispatch(new this.actions.deleteOrganizations(id, meta));
  }
  
	public getApps(id: any, filter: LoopBackFilter = {}, meta?: any): Observable<any[]> {
    this.store.dispatch(new this.actions.getApps(id, filter, meta));

    return applyFilter(
      this.store.select(this.model.getModelDefinition().relations.apps.model + 's')
        .map((state: any) => state.entities)
      , filter, this.store, models[this.model.getModelDefinition().relations.apps.model]);
  }
	
	public createApps(id: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.createApps(id, data, meta));
  }
  
	public deleteApps(id: any, meta?: any): void {
    this.store.dispatch(new this.actions.deleteApps(id, meta));
  }
  
	public getOAuthClientApplications(id: any, filter: LoopBackFilter = {}, meta?: any): Observable<any[]> {
    this.store.dispatch(new this.actions.getOAuthClientApplications(id, filter, meta));

    return applyFilter(
      this.store.select(this.model.getModelDefinition().relations.oAuthClientApplications.model + 's')
        .map((state: any) => state.entities)
      , filter, this.store, models[this.model.getModelDefinition().relations.oAuthClientApplications.model]);
  }
	
	public createOAuthClientApplications(id: any, data: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.createOAuthClientApplications(id, data, meta));
  }
  
	public deleteOAuthClientApplications(id: any, meta?: any): void {
    this.store.dispatch(new this.actions.deleteOAuthClientApplications(id, meta));
  }
  
	public login(credentials: any, include: any = 'user', rememberMe: boolean = true, meta?: any): void {
    this.store.dispatch(new this.actions.login(credentials, include, meta));
  }
  
	public logout(meta?: any): void {
    this.store.dispatch(new this.actions.logout(meta));
  }
  
	public verify(id: any, meta?: any): void {
    this.store.dispatch(new this.actions.verify(id, meta));
  }
  
	public confirm(uid: any, token: any, redirect: any = {}, meta?: any): void {
    this.store.dispatch(new this.actions.confirm(uid, token, redirect, meta));
  }
  
	public resetPassword(options: any, meta?: any): void {
    this.store.dispatch(new this.actions.resetPassword(options, meta));
  }
  
	public changePassword(oldPassword: any, newPassword: any, meta?: any): void {
    this.store.dispatch(new this.actions.changePassword(oldPassword, newPassword, meta));
  }
  
	public setPassword(newPassword: any, meta?: any): void {
    this.store.dispatch(new this.actions.setPassword(newPassword, meta));
  }
  
	public setPrimaryEmail(id: any, fk: any, meta?: any): void {
    this.store.dispatch(new this.actions.setPrimaryEmail(id, fk, meta));
  }
  
	public setPrimaryPhone(id: any, fk: any, meta?: any): void {
    this.store.dispatch(new this.actions.setPrimaryPhone(id, fk, meta));
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
  
	public createManyEmails(id: any, data: any[] = [], meta?: any): void {
    this.store.dispatch(new this.actions.createManyEmails(id, data, meta));
  }
  
	public createManyPhones(id: any, data: any[] = [], meta?: any): void {
    this.store.dispatch(new this.actions.createManyPhones(id, data, meta));
  }
  
	public createManyIdentities(id: any, data: any[] = [], meta?: any): void {
    this.store.dispatch(new this.actions.createManyIdentities(id, data, meta));
  }
  
	public createManyCredentials(id: any, data: any[] = [], meta?: any): void {
    this.store.dispatch(new this.actions.createManyCredentials(id, data, meta));
  }
  
	public createManyAccessTokens(id: any, data: any[] = [], meta?: any): void {
    this.store.dispatch(new this.actions.createManyAccessTokens(id, data, meta));
  }
  
	public createManyOrganizations(id: any, data: any[] = [], meta?: any): void {
    this.store.dispatch(new this.actions.createManyOrganizations(id, data, meta));
  }
  
	public createManyApps(id: any, data: any[] = [], meta?: any): void {
    this.store.dispatch(new this.actions.createManyApps(id, data, meta));
  }
  
	public createManyOAuthClientApplications(id: any, data: any[] = [], meta?: any): void {
    this.store.dispatch(new this.actions.createManyOAuthClientApplications(id, data, meta));
  }
    
  public signup(credentials: any, meta?: any): void {
    this.store.dispatch(new this.actions.signup(credentials, meta));
  }
    
}
