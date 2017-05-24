import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// libs
import { Angulartics2, Angulartics2GoogleAnalytics } from 'angulartics2';

// module
import { AnalyticsService, Analytics } from '../index';

const testModuleConfig = () => {
  TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [
      Angulartics2, Angulartics2GoogleAnalytics, AnalyticsService
    ]
  });
};

describe('analytics:', () => {

  beforeEach(testModuleConfig);

  describe('AnalyticsService', () => {

    describe('api works', () => {
      it('track', inject([AnalyticsService, Angulartics2GoogleAnalytics],
        (analyticsService: any, segment: any) => {
        analyticsService.devMode(false);
        t.spyOn(segment, 'eventTrack');
        analyticsService.track('click', { category: 'TEST', label: 'Testing' });
        t.e(segment.eventTrack)
          .toHaveBeenCalledWith('click', { category: 'TEST', label: 'Testing' });
      }));
      it('track devMode: ON', inject([AnalyticsService, Angulartics2GoogleAnalytics],
        (analyticsService: any, segment: any) => {
        t.spyOn(segment, 'eventTrack');

        // dev mode: shouldn't track anything
        analyticsService.devMode(true);
        analyticsService.track('click', { category: 'TEST', label: 'Testing' });
        t.e(segment.eventTrack).not.toHaveBeenCalled();
      }));
      it('pageTrack', inject([AnalyticsService, Angulartics2GoogleAnalytics],
        (analyticsService: any, segment: any) => {
        t.spyOn(segment, 'pageTrack');
        analyticsService.pageTrack('/testing');
        t.e(segment.pageTrack).toHaveBeenCalledWith('/testing');
      }));
      it('pageTrack devMode: ON', inject([AnalyticsService, Angulartics2GoogleAnalytics],
        (analyticsService: any, segment: any) => {
        t.spyOn(segment, 'pageTrack');

        // dev mode: shouldn't track anything
        analyticsService.devMode(true);
        analyticsService.pageTrack('/testing');
        t.e(segment.pageTrack).not.toHaveBeenCalled();
      }));
      it('identify', inject([AnalyticsService, Angulartics2GoogleAnalytics],
        (analyticsService: any, segment: any) => {
        t.spyOn(segment, 'setUserProperties');
        analyticsService.identify({ userId: 1, name: 'Test', email: 'name@domain.com' });
        t.e(segment.setUserProperties)
          .toHaveBeenCalledWith({ userId: 1, name: 'Test', email: 'name@domain.com' });
      }));
      it('identify devMode: ON', inject([AnalyticsService, Angulartics2GoogleAnalytics],
        (analyticsService: any, segment: any) => {
        t.spyOn(segment, 'setUserProperties');

        // dev mode: shouldn't track anything
        analyticsService.devMode(true);
        analyticsService.identify({ userId: 1, name: 'Test', email: 'name@domain.com' });
        t.e(segment.setUserProperties).not.toHaveBeenCalled();
      }));
    });
  });

  describe('Analytics (Base Class)', () => {

    describe('should allow descendants to track actions', () => {
      it('track', inject([AnalyticsService, Angulartics2GoogleAnalytics],
        (analyticsService: any, segment: any) => {
        t.spyOn(analyticsService, 'track');
        const analytics = new TestAnalytics(analyticsService);
        analytics.category = 'TEST';
        analytics.track('action', { category: analytics.category, label: 'Testing' });
        t.e(analyticsService.track)
          .toHaveBeenCalledWith('action', { category: analytics.category, label: 'Testing' });
      }));
    });
  });
});

class TestAnalytics extends Analytics { }
