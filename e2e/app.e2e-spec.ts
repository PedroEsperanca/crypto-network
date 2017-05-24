import { WebSeedPage } from './app.po';

describe('web-seed App', () => {
  let page: WebSeedPage;

  beforeEach(() => {
    page = new WebSeedPage();
  });

  it('should display footer copyright text', () => {
    page.navigateTo();
    expect<any>(page.getParagraphText()).toEqual('@ 2017 · SEED');
  });
});
