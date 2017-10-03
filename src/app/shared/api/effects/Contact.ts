/* tslint:disable */
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/observable/concat';
import { Injectable, Inject } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { LoopbackAction } from '../models/BaseModels';
import { BaseLoopbackEffects } from './base';
import { resolver } from './resolver';

import { ContactActionTypes, ContactActions } from '../actions/Contact';
import { LoopbackErrorActions } from '../actions/error';
import { ContactApi } from '../services/index';

@Injectable()
export class ContactEffects extends BaseLoopbackEffects {
  @Effect()
  public getOrganization$ = this.actions$
    .ofType(ContactActionTypes.GET_ORGANIZATION)
    .mergeMap((action: LoopbackAction) =>
      this.contact.getOrganization(action.payload.id, action.payload.refresh)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Organization', 'findSuccess'),
          of(new ContactActions.getOrganizationSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new ContactActions.getOrganizationFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getUser$ = this.actions$
    .ofType(ContactActionTypes.GET_USER)
    .mergeMap((action: LoopbackAction) =>
      this.contact.getUser(action.payload.id, action.payload.refresh)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
          of(new ContactActions.getUserSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new ContactActions.getUserFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

    /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Decorate base effects metadata
   */
  @Effect() public create$;
  @Effect() public createMany$;
  @Effect() public findById$;
  @Effect() public find$;
  @Effect() public findOne$;
  @Effect() public updateAll$;
  @Effect() public deleteById$;
  @Effect() public updateAttributes$;
  @Effect() public upsert$;
  @Effect() public upsertWithWhere$;
  @Effect() public replaceOrCreate$;
  @Effect() public replaceById$;
  @Effect() public patchOrCreate$;
  @Effect() public patchAttributes$;

  constructor(
    @Inject(Actions) public actions$: Actions,
    @Inject(ContactApi) public contact: ContactApi
  ) {
    super(actions$, contact, 'Contact', ContactActionTypes, ContactActions);
  }
}
