import { environment } from 'environment';
import { Injectable } from '@angular/core';

// app
import { AnalyticsService } from 'shared/analytics/index';
import { LogService } from './log.service';
import { Config } from '../utils/config';

@Injectable()
export class AppService {
  constructor(public analytics: AnalyticsService, public log: LogService) {
    this.log.debug(`AppService -> Config env: ${environment.production ? 'production' : 'development'}`);
  }
}
