import { elements } from './ProductPageSelectors';

export default class ProductPage {

    getProductTitle = () => cy.get(elements.PRODUCT_TITLE_SPAN_BY_CLASS).first();

    getProductDescription = () => cy.get(elements.PRODUCT_DESCRIPTION_SPAN_BY_ATTRIBUTE).eq(1);

    checkIfProductTitleIsVisible = () => {
        this.getProductTitle().should('be.visible').invoke('text').should((text) => {
            expect(text.split('').length).to.have.greaterThan(3);
        });
    }

    checkIfProductDescriptionIsVisible = () => () => {
        this.getProductDescription().should('be.visible').invoke('text').shpuld((text) => {
            expect(text.split('').length).to.have.greaterThan(3);
        });
    }
}