import { environment } from 'environment';

import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { IDLE_PROVIDERS } from 'ng2-idle/core';

import { SDKBrowserModule, InternalStorage, StorageBrowser } from '../api';

import { CloudtasksModule } from '@cloudtasks/ngx-image';
import { ScrollSpyModule } from 'ngx-scrollspy';

// ngrx
import { LOOPBACK_GUARDS_PROVIDERS } from '../api/guards';
import { GUARDS_PROVIDERS } from './guards';
import { RESOLVERS_PROVIDERS } from './resolvers';
import { MODAL_MODULES } from './modules/modals';

import { LoopBackConfig } from 'shared/api';

LoopBackConfig.setBaseURL(environment.base_url);
LoopBackConfig.setApiVersion(environment.api_version);
LoopBackConfig.setAuthPrefix(environment.auth_prefix);

export const MY_APP_PROVIDERS: any[] = [
  // IDLE_PROVIDERS,
  LOOPBACK_GUARDS_PROVIDERS,
  GUARDS_PROVIDERS,
  RESOLVERS_PROVIDERS,
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

  ...MODAL_MODULES
];
