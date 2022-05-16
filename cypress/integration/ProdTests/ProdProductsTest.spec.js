/// <reference types="cypress" />

describe('Testing search feature', () => {

  Cypress.on(
    'uncaught:exception',
    (_,__) =>
      false,
  );

  before(() => {
    cy.visit('/collections/promocoes-1');
  });

  it('Will search for shampoo transparente and expect to get just one label', () => {
    cy.get('.modal-closer').first().click();
    cy.get('.search-bar__input-wrapper').first().type('Shampoo transparente{enter}');
    cy.contains('Ver preço')
    cy.contains('a','Shampoo claro e transparente').should('have.length', 0);
  })

  it("Will search for Perfume transparente and expect to don't get a product", () => {
    cy.get('.search-bar__input-wrapper').type('Perfume transparente{enter}');
    cy.get('.modal-closer').first().click();
    cy.contains('a','Perfume transparente').should('have.length', 0);
  })

  it("Will search for Batom líquido transparente and expect to don't get a product ", () => {
    cy.get('.search-bar__input-wrapper').type('Batom líquido transparente{enter}');
    cy.get('.modal-closer').first().click();
    cy.contains('Ver preço')
    cy.contains('a','Batom líquido transparente').should('have.length', 0);
  })
});