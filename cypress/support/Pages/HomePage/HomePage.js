import {
    MODAL_CLOSER_ICON_CLASS,
    SEARCH_BAR_BUTTON_CLASS,
    SEARCH_BAR_INPUT_CLASS,
    ACCEPT_COOKIE_BUTTON_BY_CLASS,
    REGISTER_FORM_BUTTON_BY_ATTRIBUTE
} from './HomePageSelectors'

export default class HomePage {

    visit = () => cy.visit('/')

    getModalCloser = () => cy.get(MODAL_CLOSER_ICON_CLASS).first();

    getLastModalCloser = () => cy.get(MODAL_CLOSER_ICON_CLASS).eq(3);

    getSearchBarButton = () => cy.get(SEARCH_BAR_BUTTON_CLASS);

    getSearchBarInput = () => cy.get(SEARCH_BAR_INPUT_CLASS).first();

    getAcceptCookie = () => cy.get(ACCEPT_COOKIE_BUTTON_BY_CLASS);

    getRegisterFormRetailer = () => cy.contains(REGISTER_FORM_BUTTON_BY_ATTRIBUTE);
}