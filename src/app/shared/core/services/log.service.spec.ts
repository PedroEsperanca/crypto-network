// angular
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { TestBed, async, inject } from '@angular/core/testing';

// module
import { ConsoleService, LogService } from '../index';
import { environment } from 'environment';

const providers: any[] = [
  { provide: ConsoleService, useValue: console },
  LogService,
];

describe('core: LogService', () => {

  beforeEach(() => {
    // spy
    spyOn(console, 'log');
    spyOn(console, 'error');
    spyOn(console, 'warn');
    spyOn(console, 'info');

    // reset the test environment before initializing it.
    TestBed.resetTestEnvironment();

    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting())
      .configureTestingModule({
        providers
      });
  });

  describe('api', () => {
    it('sanity', inject([LogService], (log: LogService) => {
      expect(log.debug).toBeDefined();
      expect(log.error).toBeDefined();
      expect(log.warn).toBeDefined();
      expect(log.info).toBeDefined();
    }));

    it('should not log anything by default',
      async(inject([LogService],
        (log: LogService) => {
          environment.logging.DEBUG = {
            LEVEL_1: false,
            LEVEL_2: false,
            LEVEL_3: false,
            LEVEL_4: false
          };

          log.debug('debug');
          expect(console.log).not.toHaveBeenCalledWith('debug');
          log.error('error');
          expect(console.error).not.toHaveBeenCalledWith('error');
          log.warn('warn');
          expect(console.warn).not.toHaveBeenCalledWith('warn');
          log.info('info');
          expect(console.info).not.toHaveBeenCalledWith('info');
    })));
  });

  describe('debug levels', () => {
    it('LEVEL_4: everything',
      async(inject([LogService],
        (log: LogService) => {
          environment.logging.DEBUG = {
            LEVEL_1: false,
            LEVEL_2: false,
            LEVEL_3: false,
            LEVEL_4: true
          };

          log.debug('debug');
          expect(console.log).toHaveBeenCalledWith('debug');
          log.error('error');
          expect(console.error).toHaveBeenCalledWith('error');
          log.warn('warn');
          expect(console.warn).toHaveBeenCalledWith('warn');
          log.info('info');
          expect(console.info).toHaveBeenCalledWith('info');
    })));

    it('LEVEL_3: error only',
      async(inject([LogService],
        (log: LogService) => {
          environment.logging.DEBUG = {
            LEVEL_1: false,
            LEVEL_2: false,
            LEVEL_3: true,
            LEVEL_4: false
          };

          log.debug('debug');
          expect(console.log).not.toHaveBeenCalledWith('debug');
          log.error('error');
          expect(console.error).toHaveBeenCalledWith('error');
          log.warn('warn');
          expect(console.warn).not.toHaveBeenCalledWith('warn');
          log.info('info');
          expect(console.info).not.toHaveBeenCalledWith('info');

          // always overrides lower levels and allows them to come through
          environment.logging.DEBUG.LEVEL_4 = true;

          log.debug('debug w/level_4');
          expect(console.log).toHaveBeenCalledWith('debug w/level_4');
          log.error('error w/level_4');
          expect(console.error).toHaveBeenCalledWith('error w/level_4');
          log.warn('warn w/level_4');
          expect(console.warn).toHaveBeenCalledWith('warn w/level_4');
          log.info('info w/level_4');
          expect(console.info).toHaveBeenCalledWith('info w/level_4');
    })));

    it('LEVEL_2: warn only',
      async(inject([LogService],
        (log: LogService) => {
          environment.logging.DEBUG = {
            LEVEL_1: false,
            LEVEL_2: true,
            LEVEL_3: false,
            LEVEL_4: false
          };

          log.debug('debug');
          expect(console.log).not.toHaveBeenCalledWith('debug');
          log.error('error');
          expect(console.error).not.toHaveBeenCalledWith('error');
          log.warn('warn');
          expect(console.warn).toHaveBeenCalledWith('warn');
          log.info('info');
          expect(console.info).not.toHaveBeenCalledWith('info');
    })));

    it('LEVEL_1: info only',
      async(inject([LogService],
        (log: LogService) => {
          environment.logging.DEBUG = {
            LEVEL_1: true,
            LEVEL_2: false,
            LEVEL_3: false,
            LEVEL_4: false
          };

          log.debug('debug');
          expect(console.log).not.toHaveBeenCalledWith('debug');
          log.error('error');
          expect(console.error).not.toHaveBeenCalledWith('error');
          log.warn('warn');
          expect(console.warn).not.toHaveBeenCalledWith('warn');
          log.info('info');
          expect(console.info).toHaveBeenCalledWith('info');
    })));
  });
});
