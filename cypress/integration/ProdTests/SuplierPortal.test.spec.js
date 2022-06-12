/// <reference types="cypress" />

import LoginPage from '../../support/Pages/SuplierPortal/LoginPage/LoginPage'

describe('Supliter login test', () => {

    const loginPage = new LoginPage();
    beforeEach(() => {
      loginPage.visit();
    });
  
    it('Login with success when using valid credentials', () => {
      loginPage.getEmailInput().type(Cypress.env('USER_EMAIL'));
      loginPage.getPasswordInput().type(Cypress.env('USER_PASSWORD'), {log: false});
      loginPage.getTermsCheckboxInput().click();
      loginPage.getLoginSubmitButton().click();

      // TODDO: refactor to page object pattern
      cy.contains('h2', 'Garanta 0% de comissão indicando lojistas').should(
        'be.visible'
      );
    });
  });
  