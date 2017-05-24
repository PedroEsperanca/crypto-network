import { t } from '../../test/index';
import { DesktopConfig } from './desktop-config';

describe('electron: DesktopConfig', () => {

  it('SUPPORTED_LANGUAGES', () => {
    expect(DesktopConfig.SUPPORTED_LANGUAGES.length).toBe(5);
    expect(DesktopConfig.SUPPORTED_LANGUAGES[0].code).toBe('en');
    expect(DesktopConfig.SUPPORTED_LANGUAGES[1].code).toBe('es');
    expect(DesktopConfig.SUPPORTED_LANGUAGES[2].code).toBe('fr');
    expect(DesktopConfig.SUPPORTED_LANGUAGES[3].code).toBe('ru');
    expect(DesktopConfig.SUPPORTED_LANGUAGES[4].code).toBe('bg');
  });
});
