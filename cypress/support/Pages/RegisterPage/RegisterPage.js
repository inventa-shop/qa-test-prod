import alert from '../../Components/AlertComponent/AlertComponent'
import { el } from './RegisterPageSelectors'

class RegisterPage {

    constructor() {
        this.alert = alert
    }

    goHomePage() {
        cy.visit('/')
    }

    clickAcceptCookie() {
        cy.get(el.ACCEPT_COOKIE_BUTTON_BY_CLASS).click()
    }

    clickToRegisterFormRetailer() {
        cy.contains(el.GO_FORM_BUTTON_BY_ATTRIBUTE).click()
    }

    registerFormRetailer(user) {
        cy.get(el.NAME_BY_ID).type(user.name)
        cy.get(el.PHONE_BY_ID).type(user.phone)
    }

    registerFormRetailerDetails(user) {
        cy.get(el.CPF_BY_ID).type(user.cpf)
        cy.get(el.CNPJ_BY_ID).type(user.cnpj)
        cy.get(el.EMAIL_BY_ID).type(user.email)
        cy.get(el.PASSWORD_BY_ID).type(user.password)
    }

    clickButtonNext() {
        cy.contains(el.NEXT_BUTTON_BY_ATTRIBUTE).click()
    }

    clickTermsAndConditions() {
        cy.get(el.TERMS_AND_CONDITIONS_BY_ID).click()
    }

    clickButtonSubmit() {
        cy.get(el.REGISTER_BUTTON_BY_ATTRIBUTE).click()
    }
}

export default RegisterPage