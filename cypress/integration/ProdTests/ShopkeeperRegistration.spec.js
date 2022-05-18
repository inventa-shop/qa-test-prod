import RegisterPage from '../../support/Pages/RegisterPage/RegisterPage'

describe('Register', () => {

    const registerPage = new RegisterPage()

    before(() => {
        cy.fixture('registerRetailerData').then(function (registerRetailerData) {
            this.retailer_data_complete = registerRetailerData.retailer_data_complete
            this.short_password = registerRetailerData.short_password
        })
    })

    beforeEach(() => {

        registerPage.goHomePage()
        registerPage.clickAcceptCookie()
        registerPage.clickToRegisterFormRetailer()
    })

    context('when I leave field information blank', () => {


        it('Name and phone without filling', () => {

            registerPage.clickButtonNext()
            registerPage.alert.haveText('Adicione o nome da pessoa de contato')
            registerPage.alert.haveText('Forneça um número de telefone com DDD válido')
        })

        it('CPF, CNPJ, Email and password without filling', function () {

            registerPage.registerFormRetailer(this.retailer_data_complete)
            registerPage.clickButtonNext()
            registerPage.clickButtonSubmit()

            registerPage.alert.haveText('Adicione o seu CPF')
            registerPage.alert.haveText('CPF é inválido, favor validar os números informados')
            registerPage.alert.haveText('Adicione o seu CNPJ')
            registerPage.alert.haveText('CNPJ é inválido, favor validar os números informados')
            registerPage.alert.haveText('Insira um e-mail')
            registerPage.alert.haveText('Insira uma senha')
            registerPage.alert.haveText('Insira uma senha com mais de 6 caracteres')
            registerPage.alert.haveText('Necessário que aceite os termos e condições')

        })
    })

    context('when the password is less than 6 characters', () => {

        const passwords = ['1', '12345']

        it('must not register with the password', function () {


            registerPage.registerFormRetailer(this.retailer_data_complete)
            registerPage.clickButtonNext()


            passwords.forEach((password) => {
                this.short_password.password = password
                registerPage.registerFormRetailerDetails(this.short_password)
                registerPage.clickTermsAndConditions()
                registerPage.clickButtonSubmit()
            })
        })


        afterEach(() => {
            registerPage.alert.haveText('Insira uma senha com mais de 6 caracteres')
        })
    })

})

