describe('test', () => {
    var arr = ['hello', 'world']
    arr.forEach((text) => {
        it('test 1 ' + text, () => { 
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
            })

            cy.clearCookies()
            cy.visit('https://integ1.7online.7eleven.co.th/')
            cy.clearCookies()

            cy.focused().then(($el) => {
                cy.wrap($el)
                    .type('orchid')
              })
            cy.log('text : ' + text)
        })
    })
    
})