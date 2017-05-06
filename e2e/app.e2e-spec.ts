import { Ng2IplPage } from './app.po';

describe('ng2-ipl App', function() {
  let page: Ng2IplPage;

  beforeEach(() => {
    page = new Ng2IplPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
