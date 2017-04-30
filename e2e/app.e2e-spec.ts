import { RedboxPage } from './app.po';

describe('redbox App', () => {
  let page: RedboxPage;

  beforeEach(() => {
    page = new RedboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
