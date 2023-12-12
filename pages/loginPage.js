module.exports = {
    url: "https://www.saucedemo.com/",
    elements: {
        loginConteiner:'#login_button_container',
        userInput:'#user-name',
        passInput:'#password',
        loginButton:'#login-button'
    },
    commands: {
        loginFlow(user, pass){
            return this
                .assert.visible('@loginConteiner')
                .setValue('@userInput',user)
                .setValue('@passInput',pass)
                .click('@loginButton')
                .api.page.inventoryPage();
        },
        successfulLogout(){
            return this
                .assert.visible('@loginConteiner')

        }
    }
}