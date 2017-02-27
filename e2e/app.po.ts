import { browser, element, by } from 'protractor';

export class RaNg2rc1testPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
