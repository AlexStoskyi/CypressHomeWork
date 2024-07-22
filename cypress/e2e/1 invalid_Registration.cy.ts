import { faker } from "@faker-js/faker";
import { mainPage } from "../pages/main.page";
import { singUpPage } from "../pages/singUp.page";

describe('Registration', () => {
  it('#1 Registration with invalid data', () => {
    const fullName = faker.name.firstName();
    const randomEmail = faker.internet.email();
    const randomPassword = faker.internet.password();

    const invalidEmail1 = randomEmail.replace('@', '');
    const invalidEmail2 = `${randomEmail}!#&`;

    mainPage.visitLoginPage();
    mainPage.elements.singUpButton().click();
    singUpPage.SingUp(fullName, invalidEmail1, randomPassword);
    mainPage.elements.errorMsg().should('be.visible');

  //Буде помилка томущо регестрація без @ проходить
  });
});
