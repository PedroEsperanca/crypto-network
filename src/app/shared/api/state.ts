/* tslint:disable */
import { Observable } from 'rxjs/Observable';
import { ActionReducer } from '@ngrx/store';
import '@ngrx/core/add/operator/select';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SDKToken } from './models/BaseModels';

import * as reducers from './reducers/index';

import * as effects from './effects/index';

export interface LoopbackStateInterface {
  auth: SDKToken;
};

export const LoopbackReducer = {
  loopbackAuth: reducers.LoopbackAuthReducer,
	Users: reducers.UsersReducer,
	Organizations: reducers.OrganizationsReducer,
	Apps: reducers.AppsReducer,
};

export const LoopbackEffects = [
  EffectsModule.run(effects.LoopbackAuthEffects),
	EffectsModule.run(effects.UserEffects),
	EffectsModule.run(effects.OrganizationEffects),
	EffectsModule.run(effects.AppEffects),
];
