import { BabyNamesPage } from './app.po';

describe('baby-names App', function() {
  let page: BabyNamesPage;

  beforeEach(() => {
    page = new BabyNamesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
