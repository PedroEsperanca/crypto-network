// libs
import { DBModule } from '@ngrx/db';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { ModalModule } from 'ng2-bootstrap/modal';
import { TooltipModule } from 'ng2-bootstrap/tooltip';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
// import { IDLE_PROVIDERS } from 'ng2-idle/core';

import { SDKBrowserModule, InternalStorage, StorageBrowser } from '../api';

import { CloudtasksModule } from 'angular2-cloudtasks';
import { ScrollSpyModule } from 'ng2-scrollspy';

// ngrx
// import { NOTIFY_PROVIDERS, NOTIFY_GLOBAL_OPTIONS } from '@ngrx/notify';

import { GUARDS_PROVIDERS } from './guards';
import { RESOLVERS_PROVIDERS } from './resolvers';

import { LoopBackConfig, LOOPBACK_ACTIONS } from 'frameworks/api';

import { schema } from 'frameworks/ngrx/db-schema';
import { ACTIONS } from 'frameworks/ngrx/actions';

if (ENV === 'production') {
  LoopBackConfig.setBaseURL('https://api-seed.herokuapp.com');
} else {
  LoopBackConfig.setBaseURL('http://localhost:54447');
}

LoopBackConfig.setApiVersion('api');
LoopBackConfig.setAuthPrefix('Bearer ');

export const MY_APP_PROVIDERS: any[] = [
  // IDLE_PROVIDERS,
  GUARDS_PROVIDERS,
  RESOLVERS_PROVIDERS,

  // ngrx
  // NOTIFY_PROVIDERS,
  // { provide: NOTIFY_GLOBAL_OPTIONS, multi: true, useValue: { /* global options here */ } },

  ...ACTIONS,
  ...LOOPBACK_ACTIONS
];

export const MY_APP_IMPORTS: any[] = [
  CloudtasksModule.forRoot(),
  ModalModule.forRoot(),
  TooltipModule.forRoot(),
  DropdownModule.forRoot(),

  ScrollSpyModule.forRoot(),

  SDKBrowserModule.forRoot({
    provide: InternalStorage,
    useClass: StorageBrowser
  }),

  DBModule.provideDB(schema),

  /*StoreDevtoolsModule.instrumentStore({
    monitor: useLogMonitor({
      visible: true,
      position: 'right'
    })
  }),*/
  // StoreLogMonitorModule
];
