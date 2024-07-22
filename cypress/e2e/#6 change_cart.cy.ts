import { mainPage } from "../pages/main.page";
import { singUpPage } from "../pages/singUp.page";
import { articlePage } from "../pages/article.page";
import { faker } from "@faker-js/faker";
import data from '../fixtures/data.json';

const fakeTitle = faker.name.jobTitle;
const fakeAbout = faker.name.jobArea;
const fakeBody = faker.name.jobDescriptor;
const USER_PASSWORD = data.password;
const USER_EMAIL = data.email;


describe('change article', () => {
  before(() => {
    mainPage.visitLoginPage();
    mainPage.elements.singInButton().click();
    singUpPage.SingIn(USER_EMAIL, USER_PASSWORD);
    mainPage.elements.newArticleButton().click();
    articlePage.CreateNewArticle(fakeTitle(), fakeAbout(), fakeBody());
    mainPage.visitLoginPage();
  });

  it('#6 change value off article', () => {
    mainPage.elements.globalFeedButton().click();
    mainPage.elements.articleOnFeed().click();
    mainPage.elements.editArticleButton().click();
    articlePage.CreateNewArticle(fakeTitle(), fakeAbout(), fakeBody());
  });
});
