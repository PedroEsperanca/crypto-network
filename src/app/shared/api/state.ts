import { Observable } from 'rxjs/Observable';
import { ActionReducer } from '@ngrx/store';
import '@ngrx/core/add/operator/select';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SDKToken } from './models/BaseModels';

import * as fromLoopbackAuth from './reducers/auth';

import * as effects from './effects/index';

export interface LoopbackStateInterface {
  auth: SDKToken;
};

export const LoopbackReducer = {
  loopbackAuth: fromLoopbackAuth.reducer
};

export const LoopbackEffects = [
  EffectsModule.run(effects.LoopbackAuthEffects),
  EffectsModule.run(effects.UserEffects)
];