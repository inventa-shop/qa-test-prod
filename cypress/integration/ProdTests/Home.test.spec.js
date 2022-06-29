describe('Testing Home Page', () => {
    before(() => {
        cy.visit('/')
    })

    it('Should be able to see whatsapp button', () => {

        cy.get('[data-action="accept-terms"]').click()
        cy.get('[data-action="accept-terms"]').should('not.be.visible')
        cy.get('[href="https://wa.me/5511912584602?text=Olá, pode ajudar-me com o meu registro"]').should('exist')
        cy.get('[onclick="closeWppText();"]')
            .should('have.attr', 'href').and('include', 'wa.me/5511912584602?text=Olá, pode ajudar-me com o meu registro')
    })
})