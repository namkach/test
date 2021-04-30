describe('test', () => {
    var arr = ['qwerty', 'yui']
    arr.forEach((text) => {
        it('test 1 ' + text, () => { 
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
            })

            cy.visit('https://www.pixiv.net/en/')
            cy.log('text : ' + text)
        })
    })
    
})