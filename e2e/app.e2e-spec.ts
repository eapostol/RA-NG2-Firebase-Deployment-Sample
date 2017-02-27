import { RaNg2rc1testPage } from './app.po';

describe('ra-ng2rc1test App', () => {
  let page: RaNg2rc1testPage;

  beforeEach(() => {
    page = new RaNg2rc1testPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
