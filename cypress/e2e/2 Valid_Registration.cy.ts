import { faker } from "@faker-js/faker";
import { mainPage } from "../pages/main.page";
import { singUpPage } from "../pages/singUp.page";

describe('Registration', () => {
  it('#2 Registration with valid data', () => {
    const fullName = faker.name.firstName();
    const randomEmail = faker.internet.email();
    const randomPassword = faker.internet.password();

    mainPage.visitLoginPage();
    mainPage.elements.singUpButton().click();
    singUpPage.SingUp(fullName, randomEmail, randomPassword);
    mainPage.elements.settingsButton().should('be.visible');
  });
});
