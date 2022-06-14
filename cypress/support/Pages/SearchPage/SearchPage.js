import { elements } from './SearchPageSelectors';

export default class SearchPage {

    getSeePriceLabel = () => cy.contains('Ver preço');

    getProductCard = () => cy.get(elements.PRODUCT_CARD_BY_CLASS);

    verifyIfProductDoesNotExists = (product) => cy.contains(product).should('have.length', 0);
}