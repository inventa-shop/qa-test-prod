import alert from '../../components/alert'
import { el } from './elements'

class RegisterPage {

    constructor() {
        this.alert = alert
    }

    goHomePage() {
        cy.visit('/')
    }

    clickAcceptCookie() {
        cy.get(el.button_accept_cookie).click()
    }

    goRegisterFormRetailer() {
        cy.contains(el.goFormButton).click()
    }

    registerFormRetailer(user) {
        cy.get(el.name).type(user.name)
        cy.get(el.phone).type(user.phone)
    }

    registerFormRetailerDetails(user) {
        cy.get(el.cpf).type(user.cpf)
        cy.get(el.cnpj).type(user.cnpj)
        cy.get(el.email).type(user.email)
        cy.get(el.password).type(user.password)
    }

    buttonNext() {
        cy.contains(el.nextButton).click()
    }

    termsAndConditions() {
        cy.get(el.termsAndConditions).click()
    }

    buttonSubmit() {
        cy.get(el.submitButton).click()
    }
}

export default RegisterPage