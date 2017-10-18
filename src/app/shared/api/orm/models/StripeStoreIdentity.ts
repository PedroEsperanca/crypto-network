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
import { StripeStoreIdentity, LoopBackFilter } from '../../models';
import { StripeStoreIdentityActions } from '../../actions';

export class OrmStripeStoreIdentity extends OrmBase<StripeStoreIdentity> {
  constructor(protected store: Store<StripeStoreIdentity>, protected realTime?: RealTime) {
    super(store, StripeStoreIdentity, StripeStoreIdentityActions, realTime);
  }
}
