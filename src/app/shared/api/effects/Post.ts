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

import { PostActionTypes, PostActions } from '../actions/Post';
import { LoopbackErrorActions } from '../actions/error';
import { PostApi } from '../services/index';

@Injectable()
export class PostEffects extends BaseLoopbackEffects {
  @Effect()
  public getUser$ = this.actions$
    .ofType(PostActionTypes.GET_USER)
    .mergeMap((action: LoopbackAction) =>
      this.post.getUser(action.payload.id, action.payload.refresh)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
          of(new PostActions.getUserSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new PostActions.getUserFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getOrganization$ = this.actions$
    .ofType(PostActionTypes.GET_ORGANIZATION)
    .mergeMap((action: LoopbackAction) =>
      this.post.getOrganization(action.payload.id, action.payload.refresh)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Organization', 'findSuccess'),
          of(new PostActions.getOrganizationSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new PostActions.getOrganizationFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdVotes$ = this.actions$
    .ofType(PostActionTypes.FIND_BY_ID_VOTES)
    .mergeMap((action: LoopbackAction) =>
      this.post.findByIdVotes(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'Vote', 'findByIdSuccess'),
          of(new PostActions.findByIdVotesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new PostActions.findByIdVotesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdS3Images$ = this.actions$
    .ofType(PostActionTypes.FIND_BY_ID_S3IMAGES)
    .mergeMap((action: LoopbackAction) =>
      this.post.findByIdS3Images(action.payload.id, action.payload.fk)
        .map((response: any) => new PostActions.findByIdS3ImagesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new PostActions.findByIdS3ImagesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyByIdS3Images$ = this.actions$
    .ofType(PostActionTypes.DESTROY_BY_ID_S3IMAGES)
    .mergeMap((action: LoopbackAction) =>
      this.post.destroyByIdS3Images(action.payload.id, action.payload.fk)
        .map((response: any) => new PostActions.destroyByIdS3ImagesSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new PostActions.destroyByIdS3ImagesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateByIdS3Images$ = this.actions$
    .ofType(PostActionTypes.UPDATE_BY_ID_S3IMAGES)
    .mergeMap((action: LoopbackAction) =>
      this.post.updateByIdS3Images(action.payload.id, action.payload.fk, action.payload.data)
        .map((response: any) => new PostActions.updateByIdS3ImagesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new PostActions.updateByIdS3ImagesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdReplies$ = this.actions$
    .ofType(PostActionTypes.FIND_BY_ID_REPLIES)
    .mergeMap((action: LoopbackAction) =>
      this.post.findByIdReplies(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'Post', 'findByIdSuccess'),
          of(new PostActions.findByIdRepliesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new PostActions.findByIdRepliesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public linkReplies$ = this.actions$
    .ofType(PostActionTypes.LINK_REPLIES)
    .mergeMap((action: LoopbackAction) =>
      this.post.linkReplies(action.payload.id, action.payload.fk, action.payload.data)
        .map((response: any) => new PostActions.linkRepliesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new PostActions.linkRepliesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public unlinkReplies$ = this.actions$
    .ofType(PostActionTypes.UNLINK_REPLIES)
    .mergeMap((action: LoopbackAction) =>
      this.post.unlinkReplies(action.payload.id, action.payload.fk)
        .map((response: any) => new PostActions.unlinkRepliesSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new PostActions.unlinkRepliesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getReplying$ = this.actions$
    .ofType(PostActionTypes.GET_REPLYING)
    .mergeMap((action: LoopbackAction) =>
      this.post.getReplying(action.payload.id, action.payload.refresh)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Post', 'findSuccess'),
          of(new PostActions.getReplyingSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new PostActions.getReplyingFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public updateReplying$ = this.actions$
    .ofType(PostActionTypes.UPDATE_REPLYING)
    .mergeMap((action: LoopbackAction) =>
      this.post.updateReplying(action.payload.id, action.payload.data)
        .map((response: any) => new PostActions.updateReplyingSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new PostActions.updateReplyingFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public destroyReplying$ = this.actions$
    .ofType(PostActionTypes.DESTROY_REPLYING)
    .mergeMap((action: LoopbackAction) =>
      this.post.destroyReplying(action.payload.id)
        .map((response: any) => new PostActions.destroyReplyingSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new PostActions.destroyReplyingFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public findByIdShared$ = this.actions$
    .ofType(PostActionTypes.FIND_BY_ID_SHARED)
    .mergeMap((action: LoopbackAction) =>
      this.post.findByIdShared(action.payload.id, action.payload.fk)
        .mergeMap((response: any) => concat(
          resolver({id: action.payload.id, data: response, meta: action.meta}, 'User', 'findByIdSuccess'),
          of(new PostActions.findByIdSharedSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new PostActions.findByIdSharedFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public linkShared$ = this.actions$
    .ofType(PostActionTypes.LINK_SHARED)
    .mergeMap((action: LoopbackAction) =>
      this.post.linkShared(action.payload.id, action.payload.fk, action.payload.data)
        .map((response: any) => new PostActions.linkSharedSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new PostActions.linkSharedFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public unlinkShared$ = this.actions$
    .ofType(PostActionTypes.UNLINK_SHARED)
    .mergeMap((action: LoopbackAction) =>
      this.post.unlinkShared(action.payload.id, action.payload.fk)
        .map((response: any) => new PostActions.unlinkSharedSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error: any) => concat(
          of(new PostActions.unlinkSharedFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getVotes$ = this.actions$
    .ofType(PostActionTypes.GET_VOTES)
    .mergeMap((action: LoopbackAction) =>
      this.post.getVotes(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Vote', 'findSuccess'),
          of(new PostActions.getVotesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new PostActions.getVotesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getS3Images$ = this.actions$
    .ofType(PostActionTypes.GET_S3IMAGES)
    .mergeMap((action: LoopbackAction) =>
      this.post.getS3Images(action.payload.id, action.payload.filter)
        .map((response: any) => new PostActions.getS3ImagesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new PostActions.getS3ImagesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createS3Images$ = this.actions$
    .ofType(PostActionTypes.CREATE_S3IMAGES)
    .mergeMap((action: LoopbackAction) =>
      this.post.createS3Images(action.payload.id, action.payload.data)
        .map((response: any) => new PostActions.createS3ImagesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new PostActions.createS3ImagesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public deleteS3Images$ = this.actions$
    .ofType(PostActionTypes.DELETE_S3IMAGES)
    .mergeMap((action: LoopbackAction) =>
      this.post.deleteS3Images(action.payload.id)
        .map((response: any) => new PostActions.deleteS3ImagesSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new PostActions.deleteS3ImagesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getReplies$ = this.actions$
    .ofType(PostActionTypes.GET_REPLIES)
    .mergeMap((action: LoopbackAction) =>
      this.post.getReplies(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'Post', 'findSuccess'),
          of(new PostActions.getRepliesSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new PostActions.getRepliesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public getShared$ = this.actions$
    .ofType(PostActionTypes.GET_SHARED)
    .mergeMap((action: LoopbackAction) =>
      this.post.getShared(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => concat(
          resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
          of(new PostActions.getSharedSuccess(action.payload.id, response, action.meta))
        ))
        .catch((error: any) => concat(
          of(new PostActions.getSharedFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public s3PUTSignedUrl$ = this.actions$
    .ofType(PostActionTypes.S3_P_U_T_SIGNED_URL)
    .mergeMap((action: LoopbackAction) =>
      this.post.s3PUTSignedUrl(action.payload.id, action.payload.key, action.payload.options)
        .map((response: any) => new PostActions.s3PUTSignedUrlSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new PostActions.s3PUTSignedUrlFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public s3GETSignedUrl$ = this.actions$
    .ofType(PostActionTypes.S3_G_E_T_SIGNED_URL)
    .mergeMap((action: LoopbackAction) =>
      this.post.s3GETSignedUrl(action.payload.id, action.payload.key)
        .map((response: any) => new PostActions.s3GETSignedUrlSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new PostActions.s3GETSignedUrlFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  public createManyS3Images$ = this.actions$
    .ofType(PostActionTypes.CREATE_MANY_S3IMAGES)
    .mergeMap((action: LoopbackAction) =>
      this.post.createManyS3Images(action.payload.id, action.payload.data)
        .map((response: any) => new PostActions.createManyS3ImagesSuccess(action.payload.id, response, action.meta))
        .catch((error: any) => concat(
          of(new PostActions.createManyS3ImagesFail(error, action.meta)),
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
    @Inject(PostApi) public post: PostApi
  ) {
    super(actions$, post, 'Post', PostActionTypes, PostActions);
  }
}
