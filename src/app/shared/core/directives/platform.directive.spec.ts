// angular
import { TestBed, async } from '@angular/core/testing';
import { Component } from '@angular/core';

// module
import { PlatformDirective } from './platform.directive';
import { WindowService } from '../../core/index';
import { WindowMock } from '../../core/testing/index';

@Component({
  viewProviders: [
    { provide: WindowService, useClass: WindowMock }
  ],
  selector: 'test-cmp',
  template: `<div app-core-platform></div>`
})
class TestComponent { }

const testModuleConfig = () => {
  TestBed.configureTestingModule({
    declarations: [PlatformDirective, TestComponent]
  });
};

describe('core: PlatformDirective', () => {

  beforeEach(testModuleConfig);

  it('should add platform class',
    async(() => {
      TestBed.compileComponents()
        .then(() => {
          const fixture = TestBed.createComponent(TestComponent);
          fixture.detectChanges();
          const compDOMEl = fixture.debugElement.children[0].nativeElement;
          expect(compDOMEl.getAttribute('class')).toBe('web');
        });
    }));
});
