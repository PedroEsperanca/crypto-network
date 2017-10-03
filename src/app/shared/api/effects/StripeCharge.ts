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

import { StripeChargeActionTypes, StripeChargeActions } from '../actions/StripeCharge';
import { LoopbackErrorActions } from '../actions/error';
import { StripeChargeApi } from '../services/index';

@Injectable()
export class StripeChargeEffects extends BaseLoopbackEffects {
  @Effect()
  public getStripeSource$ = this.actions$
    .ofType(StripeChargeActionTypes.GET_STRIPESOURCE)
    .mergeMap((action: LoopbackAction) =>
      this.stripecharge.getStripeSource(action.payload.id, action.payload.refresh)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'StripeSource', 'findSuccess'),
          of(new StripeChargeActions.getStripeSourceSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new StripeChargeActions.getStripeSourceFail(error, action.meta)),
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
    @Inject(StripeChargeApi) public stripecharge: StripeChargeApi
  ) {
    super(actions$, stripecharge, 'StripeCharge', StripeChargeActionTypes, StripeChargeActions);
  }
}
