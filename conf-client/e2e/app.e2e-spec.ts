import { ConfPage } from './app.po';

describe('conf App', () => {
  let page: ConfPage;

  beforeEach(() => {
    page = new ConfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('conf.io');
  });
});
