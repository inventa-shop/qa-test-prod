import RegisterPage from '../../support/Pages/RegisterPage/RegisterPage'
import HomePage from '../../support/Pages/HomePage/HomePage'

describe('Register', () => {

    before(() => {
        cy.fixture('registerRetailerData').then(function (registerRetailerData) {
            this.retailerDataComplete = registerRetailerData.retailer_data_complete
            this.retailerWithShortPassword = registerRetailerData.short_password
        })
    })

    beforeEach(() => {
        const homePage = new HomePage();
        homePage.visit();
        homePage.getAcceptCookie().click();
        homePage.getLastModalCloser().click();
        homePage.getRegisterFormRetailer().click();
    })

    context('When I leave field information blank', () => {
        const registerPage = new RegisterPage();

        it('Name and phone without filling I need to see a feedback error', () => {
            registerPage.clickButtonNext()
            registerPage.alert.containsVisibleText('Adicione o nome da pessoa de contato')
            registerPage.alert.containsVisibleText('Forneça um número de telefone com DDD válido')
        })

        it('CPF, CNPJ, Email and password without filling I need to see a feedback error', function () {
            registerPage.registerFormRetailer(this.retailerDataComplete)
            registerPage.clickButtonNext()
            registerPage.clickButtonSubmit()

            registerPage.alert.containsVisibleText('Adicione o seu CPF')
            registerPage.alert.containsVisibleText('CPF é inválido, favor validar os números informados')
            registerPage.alert.containsVisibleText('Adicione o seu CNPJ')
            registerPage.alert.containsVisibleText('CNPJ é inválido, favor validar os números informados')
            registerPage.alert.containsVisibleText('Insira um e-mail')
            registerPage.alert.containsVisibleText('Insira uma senha')
            registerPage.alert.containsVisibleText('Insira uma senha com mais de 6 caracteres')
            registerPage.alert.containsVisibleText('Necessário que aceite os termos e condições')
        })
    })

    context('when the password is less than 6 characters I need to see a feedback error', () => {
        const registerPage = new RegisterPage();
        const passwords = ['1', '12345']

        it(`Must not register with passwords: ${passwords}`, function () {
            registerPage.registerFormRetailer(this.retailerDataComplete)
            registerPage.clickButtonNext()
            registerPage.clickTermsAndConditions();

            passwords.forEach((password) => {
                this.retailerWithShortPassword.password = password;
                registerPage.registerFormRetailerDetails(this.retailerWithShortPassword);
                registerPage.clickButtonSubmit();
            });
        });

        afterEach(() => {
            registerPage.alert.containsVisibleText('Insira uma senha com mais de 6 caracteres')
        });
    });

});