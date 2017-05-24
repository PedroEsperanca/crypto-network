import { WebSeedPage } from './app.po';

describe('web-seed App', () => {
  let page: WebSeedPage;

  beforeEach(() => {
    page = new WebSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
