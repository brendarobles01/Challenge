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
  'Read data and Delete it': function (browser) {
    const pages = browser.page.loginPage();
    pages
      .loginFlow(data.userStandard, data.passGeneral)
      .successfulLogin()
      .addTocart()
      .openShoppingCart()
      .checkoutFlow()
      .dataForm(data.userName, data.userLastName, data.userZipCode)
      .updateInputText(data.userName,data.NewUserName)
      .pause(100)
  },
  after(browser) {
    browser.end();
  },
};
