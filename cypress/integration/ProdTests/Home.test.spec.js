describe('Test feature Whatsapp', () => {

    before(() => {
        cy.visit('/')
    })

    it('Validar Feature atendimento por Whatsapp', () => {

        cy.get('[data-action="accept-terms"]').click()
        cy.get('[data-action="accept-terms"]').should('not.be.visible')
        cy.get('[href="https://wa.me/5511912584602?text=Olá, pode ajudar-me com o meu registro"]').should('exist')
        cy.get('[onclick="closeWppText();"]')
            .should('have.attr', 'href').and('include', 'wa.me/5511912584602?text=Olá, pode ajudar-me com o meu registro')
            .then((href) => {
                //cy.visit(href)
                cy.origin('https://api.whatsapp.com',
                { args: [href] },
                ([href]) => {
                    cy.visit(href)
                    cy.get('#action-button').should('have.text', 'Ir para a conversa');
                    cy.contains('h3', 'Inventa').should('be.visible')
                })
            })
    })

})