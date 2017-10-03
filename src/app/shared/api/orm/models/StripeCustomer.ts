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
import { StripeCustomer, LoopBackFilter } from '../../models';
import { StripeCustomerActions } from '../../actions';

export class OrmStripeCustomer extends OrmBase<StripeCustomer> {
  constructor(protected store: Store<StripeCustomer>, protected realTime?: RealTime) {
    super(store, StripeCustomer, StripeCustomerActions, realTime);
  }
}
