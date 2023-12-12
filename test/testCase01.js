const data = require('../data/constants')

require('../nightwatch.conf')


module.exports={
    before(browser){    
        const pages = browser.page.loginPage()
        pages.navigate()
        .assert.urlContains('sauce')
        .waitForElementPresent('body');
    },
    'Login Valid':function(browser){
        const pages = browser.page.loginPage()
        pages
        .loginFlow(data.userStandard,data.passGeneral)
        .successfulLogin()
        .logoutFLow()
        .successfulLogout()
    },
    'Login locked user':function(browser){
        const pages = browser.page.loginPage()
        pages
        .loginFlow(data.userLocked,data.passGeneral)
        .lockeduserLogin()
    },
    after(browser){
        browser.end();
    }

}