// angular
import { TestBed, async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

// libs
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ConfigService } from '@ngx-config/core';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';

// app
import { ILang, WindowService, ConsoleService } from '../../core/index';
import { CoreModule } from '../../core/core.module';
import { AnalyticsModule } from '../../analytics/analytics.module';
import { TEST_CORE_PROVIDERS } from '../../core/testing/index';

// module
import { MultilingualModule } from '../multilingual.module';
import { MultilingualService, MultilingualEffects, reducer } from '../index';
import { TEST_MULTILINGUAL_PROVIDERS } from '../testing/index';

// mocks
import { ConfigMock } from '../../core/testing/mocks/ng2-config.mock';
import { ConfigMockMultilang } from '../testing/mocks/ng2-config-multilang.mock';

const SUPPORTED_LANGUAGES: ILang[] = [
  { code: 'en', title: 'English' },
  { code: 'es', title: 'Spanish' },
  { code: 'fr', title: 'French' },
  { code: 'ru', title: 'Russian' },
  { code: 'bg', title: 'Bulgarian' }
];

@Component({
  selector: 'test-cmp',
  template: '<app-i18n-lang-switcher></app-i18n-lang-switcher>'
})
class TestComponent  {
  constructor(private multilang: MultilingualService,
              private config: ConfigService) {
    this.multilang.init(this.config.getSettings().i18n);
  }
}

// test module configuration for each test
const testModuleConfig = (multilang: boolean = false) => {
  TestBed.configureTestingModule({
    imports: [
      Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ]),
      CoreModule.forRoot([
        { provide: WindowService, useValue: window },
        { provide: ConsoleService, useValue: console },
        { provide: ConfigService, useClass: multilang ? ConfigMockMultilang : ConfigMock },
      ]),
      RouterTestingModule,
      AnalyticsModule,
      MultilingualModule,
      StoreModule.provideStore({ i18n: reducer }),
      EffectsModule.run(MultilingualEffects)
    ],
    declarations: [TestComponent],
    providers: [
      {
        provide: Http,
        useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
          return new Http(mockBackend, options);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
      MockBackend,
      BaseRequestOptions
    ]
  });
};

describe('i18n:', () => {
  describe('@Component: LangSwitcherComponent', () => {
    beforeEach(() => {
      testModuleConfig();
    });

    it('should work',
      async(() => {
        TestBed.compileComponents()
          .then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            const appDOMEl = fixture.debugElement.children[0].nativeElement;
            expect(appDOMEl.querySelectorAll('form > select option').length).toBe(1);
            expect(appDOMEl.querySelectorAll('form > select option')[0].value).toBe('en');
          });
      }));
  });

  describe('@Component: LangSwitcherComponent with multiple languages', () => {
    beforeEach(() => {
      testModuleConfig(true);
    });

    it('should work',
      async(() => {
        TestBed.compileComponents()
          .then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            const appDOMEl = fixture.debugElement.children[0].nativeElement;
            expect(appDOMEl.querySelectorAll('form > select option').length).toBe(5);
            expect(appDOMEl.querySelectorAll('form > select option')[0].value).toBe('en');
            expect(appDOMEl.querySelectorAll('form > select option')[1].value).toBe('es');
            expect(appDOMEl.querySelectorAll('form > select option')[2].value).toBe('fr');
            expect(appDOMEl.querySelectorAll('form > select option')[3].value).toBe('ru');
            expect(appDOMEl.querySelectorAll('form > select option')[4].value).toBe('bg');
          });
      }));
  });
});
