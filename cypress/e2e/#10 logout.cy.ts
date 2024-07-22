import { mainPage } from '../pages/main.page';
import { singUpPage } from '../pages/singUp.page';
import { settingsPage } from '../pages/setting.page';
import data from '../fixtures/data.json'


const USER_PASSWORD = data.password;
const USER_EMAIL = data.email;
const settingsUrl = data.settingsURL;

describe('LogOut', () => {
  before(() => {
    mainPage.visitLoginPage();
    mainPage.elements.singInButton().click();
    singUpPage.SingIn(USER_EMAIL, USER_PASSWORD);
  });
  it('#10 LogOut', () => {
    mainPage.elements.settingsButton().click();
    cy.url().should("eq", settingsUrl);

    settingsPage.elements.singOutButton().click();
    mainPage.elements.userNameField().should('not.exist');
  });
});
