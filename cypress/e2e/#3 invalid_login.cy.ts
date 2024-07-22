import { mainPage } from '../pages/main.page';
import data from '../fixtures/data.json'
import { singUpPage } from '../pages/singUp.page'
import { faker } from "@faker-js/faker";


const errorMessage = data.errorMessage;
const randomPassword = faker.internet.password();
const USER_LOGIN = data.email;

describe('Login', () => {
  it('#3 Login with invalid data', () => {
    mainPage.visitLoginPage();
    mainPage.elements.singInButton().click();
    singUpPage.SingIn(USER_LOGIN, randomPassword);
    singUpPage.elements.errMessage().should('be.visible').and('have.text', errorMessage)

  });
});
