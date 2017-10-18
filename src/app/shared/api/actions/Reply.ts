/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, Reply } from '../models';

export const ReplyActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('Reply'), {
  GET_REPLY: type('[Reply] getReply'),
  GET_REPLY_SUCCESS: type('[Reply] getReply success'),
  GET_REPLY_FAIL: type('[Reply] getReply fail'),

  GET_REPLYING: type('[Reply] getReplying'),
  GET_REPLYING_SUCCESS: type('[Reply] getReplying success'),
  GET_REPLYING_FAIL: type('[Reply] getReplying fail'),

});
export const ReplyActions =
Object.assign(BaseLoopbackActionsFactory<Reply>(ReplyActionTypes), {

  /**
   * getReply Action.
   * Fetches belongsTo relation reply.
   *
   * @param {any} id Reply id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getReply: class implements Action {
    public readonly type = ReplyActionTypes.GET_REPLY;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getReplySuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getReplySuccess: class implements Action {
    public readonly type = ReplyActionTypes.GET_REPLY_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getReplyFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getReplyFail: class implements Action {
    public readonly type = ReplyActionTypes.GET_REPLY_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getReplying Action.
   * Fetches belongsTo relation replying.
   *
   * @param {any} id Reply id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getReplying: class implements Action {
    public readonly type = ReplyActionTypes.GET_REPLYING;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getReplyingSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getReplyingSuccess: class implements Action {
    public readonly type = ReplyActionTypes.GET_REPLYING_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getReplyingFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getReplyingFail: class implements Action {
    public readonly type = ReplyActionTypes.GET_REPLYING_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});