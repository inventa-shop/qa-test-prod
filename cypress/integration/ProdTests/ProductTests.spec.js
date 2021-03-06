/// <reference types="cypress" />

import HomePage from "../../support/Pages/HomePage/HomePage";
import ProductPage from "../../support/Pages/ProductPage/ProductPage";
import SearchPage from "../../support/Pages/SearchPage/SearchPage";

describe('Search for test products', () => {

    let page;

    it('Test products should not be available in production', () => {
      page = new HomePage();
      page.visit();
      page.getSearchBarInput().type('Shampoo{enter}');
      
      page = new SearchPage();
      page.getSeePriceLabel().should('be.visible');
      page.getProductCard().first().click();

      page = new ProductPage();
      page.checkIfProductTitleIsVisible();
      page.checkIfProductDescriptionIsVisible();
    })
});