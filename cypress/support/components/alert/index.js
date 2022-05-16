import { el } from './elements'

class Alert {
    haveText(expectedText) {
        cy.contains(el.FORM_REGISTER_MODAL_BY_ATTRIBUTE, expectedText)
            .should('be.visible')
    }
}

export default new Alert()