import { PaymentManagementPage } from './app.po';

describe('payment-management App', function() {
  let page: PaymentManagementPage;

  beforeEach(() => {
    page = new PaymentManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
