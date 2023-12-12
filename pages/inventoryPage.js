module.exports = {
    elements: {
        shoppingContainer:'.shopping_cart_container',
        lockedUserAlert:'.error-button',
        hamburgerButton: '#react-burger-menu-btn',
        logoutButton:'#logout_sidebar_link',
        addBackpackToCart:'#add-to-cart-sauce-labs-backpack',
        cartButton:'.shopping_cart_container'
    },
    commands: {
        successfulLogin(){
            return this
            .assert.visible('@shoppingContainer')
        },
        logoutFLow(){
            return this
            .click('@hamburgerButton')
            .click('@logoutButton')
            .api.page.loginPage();
        },
        lockeduserLogin(){
            return this
            .assert.visible('@lockedUserAlert')
        },
        addTocart(){
            return this
            .click('@addBackpackToCart')
        },
        openShoppingCart(){
            return this
            .click('@cartButton')
            .api.page.cartPage();

        }

    }
}