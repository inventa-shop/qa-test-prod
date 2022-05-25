import { el } from './AlertComponentSelectors'

class Alert {
    containsVisibleText(expectedText) {
        cy.containsVisibleText(el.FORM_REGISTER_MODAL_BY_ATTRIBUTE, expectedText)
            .should('be.visible')
    }
}

export default new Alert()