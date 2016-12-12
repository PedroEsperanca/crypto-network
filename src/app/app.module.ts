import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { removeNgStyles, createNewHosts, createInputTransfer, bootloader } from '@angularclass/hmr'
import { Store } from '@ngrx/store'

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
// App is our top level component
import { AppComponent } from 'components/app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';

//import { IndexModule } from 'components/index/index.module';

// Advance
import { ADVANCE_MODULES } from './app.advance';

// App
import { MY_APP_PROVIDERS, MY_APP_IMPORTS } from 'frameworks/app';
import { NotFoundComponent } from 'components/not-found/not-found.component';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
  ...MY_APP_PROVIDERS
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    ...ADVANCE_MODULES,
    ...MY_APP_IMPORTS
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, private _store: Store<any>) {}
  hmrOnInit(store) {
    if (!store || !store.rootState) return

    // restore state by dispatch a SET_ROOT_STATE action
    if (store.rootState) {
      this._store.dispatch({
        type: 'SET_ROOT_STATE',
        payload: store.rootState
      })
    }

    if ('restoreInputValues' in store) { store.restoreInputValues() }
    this.appRef.tick()
    Object.keys(store).forEach(prop => delete store[prop])
  }
  hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement)
    this._store.take(1).subscribe(s => store.rootState = s)
    store.disposeOldHosts = createNewHosts(cmpLocation)
    store.restoreInputValues  = createInputTransfer()
    removeNgStyles()
  }
  hmrAfterDestroy(store) {
    store.disposeOldHosts()
    delete store.disposeOldHosts
  }
}
