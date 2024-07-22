class MainPage {
  elements = {
    singInButton: () =>
      cy.get(
        'body > div:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)'
      ),
    singUpButton: () =>
      cy.get(
        'body > div:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)'
      ),
    userNameInput: () => cy.get('#user-name'),
    passwordInput: () => cy.get('#password'),
    logInButton: () => cy.get('#login-button'),
    errorMsg: () => cy.get("ul[class='error - messages'] li"),
    newArticleButton: () => cy.get("a[href='/editor']"),
    inputArticleTitle: () => cy.get("input[placeholder='Article Title']"),
    inputArticleAbout: () => cy.get(`input[placeholder="What's this article about?"]`),
    inputArticleBody: () => cy.get("textarea[placeholder='Write your article (in markdown)']"),
    globalFeedButton: () => cy.get(`a[class='nav-link ']`),
    editArticleButton: () => cy.get('.btn.btn-outline-secondary.btn-sm'),
    articleOnFeed: () => cy.get('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(2) > h1:nth-child(1)'),
    settingsButton: () => cy.get("a[href='/settings']"),
    userNameField: () => cy.get("li:nth-child(4) a:nth-child(1)")

  };

  visitLoginPage() {
    cy.visit('/');
  }

  userNameVisible(name: string) {
    this.elements.userNameField().should('be.visible')
      .and('have.text', name);
  }

}

export const mainPage = new MainPage();