import RegisterPage from '../../support/Pages/RegisterPage/RegisterPage'

describe('Register', () => {

    const registerPage = new RegisterPage()

    beforeEach(() => {
        registerPage.goHomePage()
        registerPage.clickAcceptCookie()
        registerPage.clickToRegisterFormRetailer()
    })

    context('when I leave field information blank', () => {
        
        const user = {
            name: 'QA Inventa',
            phone: '+55 11 99999 9999',
            cpf: '682.004.240-06',
            cnpj: '92.307.631/0001-76',
            email: 'inventa@inventa.com',
            password: 'inventa123'
        }

        it('Name and phone without filling', () => {
            
            registerPage.clickButtonNext()
            registerPage.alert.haveText('Adicione o nome da pessoa de contato')
            registerPage.alert.haveText('Forneça um número de telefone com DDD válido')           
        })

        it('CPF, CNPJ, Email and password without filling', () => {

            registerPage.registerFormRetailer(user)
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
       
            it('must not register with the password', () => {

                const user = {
                    name: 'QA Inventa',
                    phone: '+55 11 99999 9999',
                    cpf: '682.004.240-06',
                    cnpj: '92.307.631/0001-76',
                    email: 'inventa@inventa.com'
                }
                
                registerPage.registerFormRetailer(user)
                registerPage.clickButtonNext()
                
                
                passwords.forEach((password) => {
                    user.password = password
                    registerPage.registerFormRetailerDetails(user)
                    registerPage.clickTermsAndConditions()
                    registerPage.clickButtonSubmit()
                })
            })
        

        afterEach(() => {
            registerPage.alert.haveText('Insira uma senha com mais de 6 caracteres')
        })
    })

})

