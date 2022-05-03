/// <reference types="cypress" />

describe('Testing search feature', () => {
  it('Will search for shampoo transparente and expect to get just one label', () => {
    cy.visit('https://inventa.shop/collections/promocoes-1');

    cy.get('.modal-closer').first().click();
    cy.get('.search-bar-button').click();
    cy.get('.search-bar__input-wrapper').first().type('Shampoo transparente{enter}');
    cy.contains('Ver preço')
    cy.contains('Shampoo claro e transparente').should('have.length', 0);
  })
});