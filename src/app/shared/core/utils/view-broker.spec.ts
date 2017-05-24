// app
import { t } from '../../test/index';

// module
import { Config } from './config';
import { ViewBroker } from './view-broker';

describe('utilities: ViewBroker', () => {

  it('TEMPLATE_URL: web', () => {
    Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;
    expect(ViewBroker.TEMPLATE_URL('./app/components/home/home.html'))
      .toBe('./app/components/home/home.html');
  });
  it('TEMPLATE_URL: mobile_native', () => {
    Config.PLATFORM_TARGET = Config.PLATFORMS.MOBILE_NATIVE;
    expect(ViewBroker.TEMPLATE_URL('./app/components/home/home.html'))
      .toBe('./app/components/home/home.tns.html');
  });
  it('TEMPLATE_URL: mobile_hybrid', () => {
    Config.PLATFORM_TARGET = Config.PLATFORMS.MOBILE_HYBRID;
    expect(ViewBroker.TEMPLATE_URL('./app/components/home/home.html'))
      .toBe('./app/components/home/home.html');
  });
  it('TEMPLATE_URL: desktop', () => {
    Config.PLATFORM_TARGET = Config.PLATFORMS.DESKTOP;
    expect(ViewBroker.TEMPLATE_URL('./app/components/home/home.html'))
      .toBe('./app/components/home/home.html');
  });
});
