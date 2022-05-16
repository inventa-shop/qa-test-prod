/// <reference types="cypress" />

import { HomePage } from "../../support/Pages/HomePage/HomePage";
import { SearchPage } from "../../support/Pages/SearchPage/SearchPage";

describe('Search for test products', () => {

    let page;

    it('Test products should not be available in production', () => {
      page = new HomePage();
      page.visit();
      page.getSearchBarButton().click();
      page.getSearchBarInput().type('Shampoo transparente{enter}');

      
      page = new SearchPage();
      page.getSeePriceLabel().should('be.visible');
      page.verifyIfProductDoesNotExists('Shampoo claro e transparente');
    })
});