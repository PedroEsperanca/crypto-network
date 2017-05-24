// libs
import * as _ from 'lodash';

// module
import { Config } from './config';

describe('core: Config', () => {

  it('PLATFORMS', () => {
    expect(_.keys(Config.PLATFORMS).length).toBe(4);
    expect(Config.PLATFORM_TARGET).toBeDefined();
    expect(Config.PLATFORMS.WEB).toBe('web');
    expect(Config.PLATFORMS.MOBILE_NATIVE).toBe('mobile_native');
    expect(Config.PLATFORMS.MOBILE_HYBRID).toBe('mobile_hybrid');
    expect(Config.PLATFORMS.DESKTOP).toBe('desktop');

    expect(Config.IS_WEB).toBeDefined();
    expect(Config.IS_MOBILE_NATIVE).toBeDefined();
    expect(Config.IS_MOBILE_HYBRID).toBeDefined();
    expect(Config.IS_DESKTOP).toBeDefined();
  });
});
