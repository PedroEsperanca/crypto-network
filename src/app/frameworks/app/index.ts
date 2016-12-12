// libs
import { StoreModule } from '@ngrx/store';
import { DBModule } from '@ngrx/db';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
// import { IDLE_PROVIDERS } from 'ng2-idle/core';

import { SDKBrowserModule } from '../api';

import { CloudtasksService } from 'angular2-cloudtasks';
import { ScrollSpyModule } from 'ng2-scrollspy';

// ngrx
// import { NOTIFY_PROVIDERS, NOTIFY_GLOBAL_OPTIONS } from '@ngrx/notify';
import { GUARDS_PROVIDERS } from './guards';

import { LoopBackConfig } from 'frameworks/api';

import schema from './db-schema';
import reducer from './reducers';
import { AppEffects } from './effects/app';
import actions from './actions';

if (ENV === 'production') {
  LoopBackConfig.setBaseURL('https://ori-api.reality-connect.pt');
} else {
  LoopBackConfig.setBaseURL('http://localhost:54447');
}

LoopBackConfig.setApiVersion('api');
LoopBackConfig.setAuthPrefix('Bearer ');

export const MY_APP_PROVIDERS: any[] = [
  // IDLE_PROVIDERS,
  GUARDS_PROVIDERS,
  CloudtasksService,

  // ngrx
  // NOTIFY_PROVIDERS,
  // { provide: NOTIFY_GLOBAL_OPTIONS, multi: true, useValue: { /* global options here */ } },

  actions
];

export const MY_APP_IMPORTS: any[] = [
  Ng2BootstrapModule,
  ScrollSpyModule.forRoot(),

  SDKBrowserModule.forRoot(),

  StoreModule.provideStore(reducer),

  EffectsModule.run(AppEffects),

  DBModule.provideDB(schema),

  StoreDevtoolsModule.instrumentStore({
    monitor: useLogMonitor({
      visible: true,
      position: 'right'
    })
  }),
  StoreLogMonitorModule
];
