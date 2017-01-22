import { NgrxDemo2Page } from './app.po';

describe('ngrx-demo2 App', function() {
  let page: NgrxDemo2Page;

  beforeEach(() => {
    page = new NgrxDemo2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
