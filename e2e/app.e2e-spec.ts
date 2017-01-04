import { MeetupsPage } from './app.po';

describe('meetups App', function() {
  let page: MeetupsPage;

  beforeEach(() => {
    page = new MeetupsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
