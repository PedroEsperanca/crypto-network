import { TestBed, async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';
import { RouterTestingModule } from '@angular/router/testing';

// libs
import { StoreModule } from '@ngrx/store';

import { NameListService, nameListReducer } from 'shared/sample';
import { CoreModule } from 'shared/core/core.module';
import { AnalyticsModule } from 'shared/analytics/analytics.module';
import { MultilingualModule } from 'shared/i18n/multilingual.module';
import { HomeComponent } from './home.component';

// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    imports: [CoreModule, RouterTestingModule, AnalyticsModule,
      MultilingualModule, StoreModule.provideStore({ names: nameListReducer })],
    declarations: [HomeComponent, TestComponent],
    providers: [NameListService]
  });
};

describe('@Component: HomeComponent', () => {

  beforeEach(testModuleConfig);

  it('should work',
    async(() => {
      TestBed.compileComponents()
        .then(() => {
          const fixture = TestBed.createComponent(TestComponent);
          fixture.detectChanges();

          const homeInstance = fixture.debugElement.children[0].componentInstance;
          const homeDOMEl = fixture.debugElement.children[0].nativeElement;

          expect(homeInstance.nameListService).toEqual(jasmine.any(NameListService));
          expect(getDOM().querySelectorAll(homeDOMEl, 'li').length).toEqual(0);

          homeInstance.newName = 'Minko';
          homeInstance.addName();

          fixture.detectChanges();

          expect(getDOM().querySelectorAll(homeDOMEl, 'li').length).toEqual(1);
          expect(getDOM().querySelectorAll(homeDOMEl, 'li')[0].textContent).toEqual('Minko');
        });
    }));
});

@Component({
  selector: 'test-cmp',
  template: '<sd-home></sd-home>'
})
class TestComponent {

}
