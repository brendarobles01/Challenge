module.exports = {
    elements: {
        titleHeader:'.cart_contents_container',
        checkoutButton:'button[id="checkout"]',

       
    },
    commands: {
        checkoutFlow(){
            return this
            .assert.visible('@titleHeader')
            .click('@checkoutButton')
            .api.page.checkOutPage();     
        },

    }
}