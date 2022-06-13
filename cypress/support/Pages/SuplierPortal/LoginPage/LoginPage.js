import {
    EMAIL_INPUT_BY_ATTRIBUTE,
    PASSWORD_INPUT_BY_ATTRIBUTE,
    TERMS_CHECKBOX_BY_ATTRIBUTE,
    LOGIN_BUTTON_BY_ATTRIBUTE
} from './LoginPageSelectors'

export default class LoginPage {

    visit = () => cy.visit(`${Cypress.env('SUPPLIER_PORTAL_URL')}/login`);

    getEmailInput = () => cy.get(EMAIL_INPUT_BY_ATTRIBUTE);

    getPasswordInput = () => cy.get(PASSWORD_INPUT_BY_ATTRIBUTE);

    getTermsCheckboxInput = () => cy.get(TERMS_CHECKBOX_BY_ATTRIBUTE);

    getLoginSubmitButton = () => cy.get(LOGIN_BUTTON_BY_ATTRIBUTE);
}