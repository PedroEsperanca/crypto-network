// angular
import { Http } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

// libs
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { RouterStoreModule } from '@ngrx/router-store';
import { ConfigModule, ConfigLoader, ConfigStaticLoader } from '@ngx-config/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';

// feature modules
import { CoreModule } from 'shared/core/core.module';
import { Reducer, Effects } from 'shared/ngrx/index';
import { AnalyticsModule } from 'shared/analytics/analytics.module';
import { MultilingualModule, translateLoaderFactory } from 'shared/i18n/multilingual.module';
import { MultilingualEffects } from 'shared/i18n/index';
import { LoopbackEffects } from 'shared/api/index';


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
    useHash: environment.useHash,
    preloadingStrategy: PreloadAllModules
  }),
  AnalyticsModule,
  MultilingualModule.forRoot([{
    provide: TranslateLoader,
    deps: [Http],
    useFactory: (translateLoaderFactory)
  }]),
  StoreModule.provideStore(Reducer),
  StoreDevtoolsModule.instrumentOnlyWithExtension(),
  RouterStoreModule.connectRouter(),
  EffectsModule.run(MultilingualEffects),
  ...Effects,
  ...LoopbackEffects
];
