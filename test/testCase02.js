const data = require('../data/constants');
const nightwatchConf = require('../nightwatch.conf');

module.exports = {
  before(browser) {
    const pages = browser.page.loginPage();
    pages
      .navigate()
      .assert.urlContains('sauce')
      .waitForElementPresent('body');
  },
  'Data to checkout': function (browser) {
    const pages = browser.page.loginPage();
    pages
      .loginFlow(data.userStandard, data.passGeneral)
      .successfulLogin()
      .addTocart()
      .openShoppingCart()
      .checkoutFlow()
      .dataForm(data.userName, data.userLastName, data.userZipCode);
  },
  'Update Data to checkout': function (browser) {
    const pages = browser.page.checkOutPage();
    pages
      .dataForm(data.NewUserName, data.NewUserLastName, data.NewUserZipCode)
  },
  after(browser) {
    browser.end();
  },
};
