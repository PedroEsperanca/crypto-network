// angular
import { Injectable, Inject } from '@angular/core';

// lib
import { environment } from 'environment';

// module
import { ConsoleService } from './console.service';

@Injectable()
export class LogService {

  constructor(
    public log: ConsoleService
  ) {}

  // debug (standard output)
  public debug(msg: any) {
    if (environment.logging.DEBUG.LEVEL_4) {
      // console.debug does not work on {N} apps... use `log`
      this.log.log(msg);
    }
  }

  // error
  public error(err: any) {
    if (environment.logging.DEBUG.LEVEL_4 ||
      environment.logging.DEBUG.LEVEL_3) {
      this.log.error(err);
    }
  }

  // warn
  public warn(err: any) {
    if (environment.logging.DEBUG.LEVEL_4 ||
      environment.logging.DEBUG.LEVEL_2) {
      this.log.warn(err);
    }
  }

  // info
  public info(err: any) {
    if (environment.logging.DEBUG.LEVEL_4 ||
      environment.logging.DEBUG.LEVEL_1) {
      this.log.info(err);
    }
  }

}
