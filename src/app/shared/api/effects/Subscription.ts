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

import { SubscriptionActionTypes, SubscriptionActions } from '../actions/Subscription';
import { LoopbackErrorActions } from '../actions/error';
import { SubscriptionApi } from '../services/index';

@Injectable()
export class SubscriptionEffects extends BaseLoopbackEffects {
  @Effect()
  public getOrganization$ = this.actions$
    .ofType(SubscriptionActionTypes.GET_ORGANIZATION)
    .mergeMap((action: LoopbackAction) =>
      this.subscription.getOrganization(action.payload.id, action.payload.refresh)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Organization', 'findSuccess'),
          of(new SubscriptionActions.getOrganizationSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new SubscriptionActions.getOrganizationFail(error, action.meta)),
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
    @Inject(SubscriptionApi) public subscription: SubscriptionApi
  ) {
    super(actions$, subscription, 'Subscription', SubscriptionActionTypes, SubscriptionActions);
  }
}
