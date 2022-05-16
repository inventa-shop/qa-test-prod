/// <reference types="cypress" />

describe('Testing search feature', () => {

  before(() => {
    cy.visit('/collections/promocoes-1');
  });

  it('Will search for shampoo transparente and expect to get just one label', () => {

    cy.get('.modal-closer').first().click();
    cy.get('.search-bar-button').click();
    cy.get('.search-bar__input-wrapper').first().type('Shampoo transparente{enter}');
    cy.contains('Ver preço')
    cy.contains('Shampoo claro e transparente').should('have.length', 0);
  })

  it.only('Will search for Batom líquido transparente and expect to get just one label', () => {

    cy.get('.modal-closer').first().click();
    cy.get('.search-bar-button').click();
    cy.get('.search-bar__input-wrapper').type('Batom líquido transparente{enter}');
    cy.contains('Ver preço')
    cy.get('.cookie-bar__button').click();
    cy.contains('a', 'Batom líquido transparente').should('have.length', 0);
  })
});