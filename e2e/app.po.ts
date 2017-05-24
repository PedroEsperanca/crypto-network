import { browser, by, element } from 'protractor';

browser.ignoreSynchronization = true;

export class WebSeedPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root footer span')).getText();
  }
}
