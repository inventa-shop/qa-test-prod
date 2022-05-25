## QA Test Prod

### What is this repository?
This is a Cypress repository to just test some basic test scenarios in prod, like for example if our search is working

### Env Vars
We are using a file called `.env` ignored by `.gitignore` to manage some credential informations, so in order to run all tests locally you need to have this file in your root directory, only in your local machine, if you don't have this file please talk with Caíque Coelho(CaiqueCoelho)

### How to run?
1. Clone this repo
2. Install all dependencies with: `npm i`
3. Run Cypress with: `npm run test`