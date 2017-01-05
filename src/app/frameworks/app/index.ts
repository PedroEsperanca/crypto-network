// libs
import { DBModule } from '@ngrx/db';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { ModalModule } from 'ng2-bootstrap/modal';
import { TooltipModule } from 'ng2-bootstrap/tooltip';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
// import { IDLE_PROVIDERS } from 'ng2-idle/core';

import { SDKBrowserModule } from '../api';

import { CloudtasksModule } from 'angular2-cloudtasks';
import { ScrollSpyModule } from 'ng2-scrollspy';

// ngrx
// import { NOTIFY_PROVIDERS, NOTIFY_GLOBAL_OPTIONS } from '@ngrx/notify';

import { ConfigService } from './config.service';
import { GUARDS_PROVIDERS } from './guards';
import { RESOLVERS_PROVIDERS } from './resolvers';

import { LoopBackConfig } from 'frameworks/api';

import { schema } from './db-schema';
import { AppEffects } from './effects/app';
import { ACTIONS } from './actions';

if (ENV === 'production') {
  LoopBackConfig.setBaseURL('https://ori-api.reality-connect.pt');
} else {
  LoopBackConfig.setBaseURL('http://localhost:54447');
}

LoopBackConfig.setApiVersion('api');
LoopBackConfig.setAuthPrefix('Bearer ');

export const MY_APP_PROVIDERS: any[] = [
  ConfigService,
  // IDLE_PROVIDERS,
  GUARDS_PROVIDERS,
  RESOLVERS_PROVIDERS,

  // ngrx
  // NOTIFY_PROVIDERS,
  // { provide: NOTIFY_GLOBAL_OPTIONS, multi: true, useValue: { /* global options here */ } },

  ...ACTIONS
];

export const MY_APP_IMPORTS: any[] = [
  CloudtasksModule.forRoot(),
  ModalModule.forRoot(),
  TooltipModule.forRoot(),
  DropdownModule.forRoot(),

  ScrollSpyModule.forRoot(),

  SDKBrowserModule.forRoot(),

  // StoreModule.provideStore(reducer),

  EffectsModule.run(AppEffects),

  DBModule.provideDB(schema),

  /*StoreDevtoolsModule.instrumentStore({
    monitor: useLogMonitor({
      visible: true,
      position: 'right'
    })
  }),*/
  // StoreLogMonitorModule
];
