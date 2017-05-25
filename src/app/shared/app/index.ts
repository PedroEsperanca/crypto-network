import { environment } from 'environment';
// libs
import { DBModule } from '@ngrx/db';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { IDLE_PROVIDERS } from 'ng2-idle/core';

import { SDKBrowserModule, InternalStorage, StorageBrowser } from '../api';

import { CloudtasksModule } from '@cloudtasks/ngx-image';
import { ScrollSpyModule } from 'ngx-scrollspy';

// ngrx
// import { NOTIFY_PROVIDERS, NOTIFY_GLOBAL_OPTIONS } from '@ngrx/notify';
import { LOOPBACK_GUARDS_PROVIDERS } from '../api/guards';
import { GUARDS_PROVIDERS } from './guards';
import { RESOLVERS_PROVIDERS } from './resolvers';

import { LoopBackConfig } from 'shared/api';

import { schema } from 'shared/ngrx/db-schema';
import { ACTIONS } from 'shared/ngrx/actions';

LoopBackConfig.setBaseURL(environment.base_url);
LoopBackConfig.setApiVersion(environment.api_version);
LoopBackConfig.setAuthPrefix(environment.auth_prefix);

export const MY_APP_PROVIDERS: any[] = [
  // IDLE_PROVIDERS,
  LOOPBACK_GUARDS_PROVIDERS,
  GUARDS_PROVIDERS,
  RESOLVERS_PROVIDERS,

  // ngrx
  // NOTIFY_PROVIDERS,
  // { provide: NOTIFY_GLOBAL_OPTIONS, multi: true, useValue: { /* global options here */ } }
];

export const MY_APP_IMPORTS: any[] = [
  CloudtasksModule.forRoot(),
  ModalModule.forRoot(),
  TooltipModule.forRoot(),
  BsDropdownModule.forRoot(),

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
