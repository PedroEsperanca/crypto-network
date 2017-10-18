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

import { ReplyActionTypes, ReplyActions } from '../actions/Reply';
import { LoopbackErrorActions } from '../actions/error';
import { ReplyApi } from '../services/index';

@Injectable()
export class ReplyEffects extends BaseLoopbackEffects {
  @Effect()
  public getReply$ = this.actions$
    .ofType(ReplyActionTypes.GET_REPLY)
    .mergeMap((action: LoopbackAction) =>
      this.reply.getReply(action.payload.id, action.payload.refresh)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Post', 'findSuccess'),
          of(new ReplyActions.getReplySuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new ReplyActions.getReplyFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getReplying$ = this.actions$
    .ofType(ReplyActionTypes.GET_REPLYING)
    .mergeMap((action: LoopbackAction) =>
      this.reply.getReplying(action.payload.id, action.payload.refresh)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Post', 'findSuccess'),
          of(new ReplyActions.getReplyingSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new ReplyActions.getReplyingFail(error, action.meta)),
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
    @Inject(ReplyApi) public reply: ReplyApi
  ) {
    super(actions$, reply, 'Reply', ReplyActionTypes, ReplyActions);
  }
}
