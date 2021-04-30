describe('test', () => {
    var arr = ['qwerty', 'yui', 'asd']
    arr.forEach((text) => {
        it('test 1 ' + text, () => { 
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
            })

            cy.visit('https://integ1.7online.7eleven.co.th/')
            cy.log('text : ' + text)
        })
    })
    
})