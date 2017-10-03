// angular
import { Http } from '@angular/http';
import { RouterModule } from '@angular/router';

// libs
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { ConfigModule, ConfigLoader, ConfigStaticLoader } from '@ngx-config/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
import { SimpleNotificationsModule, PushNotificationsModule } from 'angular2-notifications';
import { NgxStripeModule } from 'ngx-stripe';

// feature modules
import { CoreModule } from 'shared/core/core.module';
import { reducerToken, reducerProvider, metaReducers, effects, CustomRouterStateSerializer } from 'shared/ngrx/index';
import { AnalyticsModule } from 'shared/analytics/analytics.module';
import { MultilingualModule, translateLoaderFactory } from 'shared/i18n/multilingual.module';
import { OrmModule } from 'shared/api/orm';


import { ROUTES } from './app.routes';
// config
import { environment } from 'environment';
import { Config } from 'shared/core/index';
import { WindowService, ConsoleService } from 'shared/core/services/index';
Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;

import { AppConfig } from './app.config';

export function configFactory(): ConfigLoader {
  return new ConfigStaticLoader(AppConfig);
}

if (environment.target === 'desktop') {
  Config.PLATFORM_TARGET = Config.PLATFORMS.DESKTOP;
}

declare var window;
declare var console;

// For AoT compilation to work:
export function win() {
  return window;
}
export function cons() {
  return console;
}

export const ADVANCE_MODULES = [
  Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ]),
  ConfigModule.forRoot({
    provide: ConfigLoader,
    useFactory: (configFactory)
  }),
  CoreModule.forRoot([
    { provide: WindowService, useFactory: (win) },
    { provide: ConsoleService, useFactory: (cons) }
  ]),
  RouterModule.forRoot(ROUTES, {
    useHash: environment.useHash
  }),
  AnalyticsModule,
  MultilingualModule.forRoot([{
    provide: TranslateLoader,
    deps: [Http],
    useFactory: (translateLoaderFactory)
  }]),
  StoreModule.forRoot(reducerToken, { metaReducers }),
  !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
  StoreRouterConnectingModule,
  EffectsModule.forRoot(effects),
  OrmModule.forRoot(),
  SimpleNotificationsModule.forRoot(),
  PushNotificationsModule,
  environment.stripe_key ? NgxStripeModule.forRoot(environment.stripe_key) : [],
];

export const ADVANCE_PROVIDERS = [
  reducerProvider,
  { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
];
