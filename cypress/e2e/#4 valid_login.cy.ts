import { mainPage } from '../pages/main.page';
import { singUpPage } from '../pages/singUp.page'
import data from '../fixtures/data.json'


const USER_PASSWORD = data.password;
const USER_LOGIN = data.email;
const USER_NAME = data.name;

describe('Login', () => {
  it('#4 Login with valid data', () => {
    mainPage.visitLoginPage();
    mainPage.elements.singInButton().click();
    singUpPage.SingIn(USER_LOGIN, USER_PASSWORD);
    mainPage.userNameVisible(USER_NAME);

  });
});
