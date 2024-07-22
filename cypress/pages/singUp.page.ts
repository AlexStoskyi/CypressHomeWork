class SingUpPage {
  elements = {
    userNameInput: () => cy.get("input[placeholder='Username']"),
    userEmailInput: () => cy.get("input[placeholder='Email']"),
    passwordInput: () => cy.get("input[placeholder='Password']"),
    submitButton: () => cy.get("button[type='submit']"),
    errMessage: () => cy.get("ul[class='error-messages'] li"),
  };

  SingUp(username: string, email: string, password: string) {
    this.elements.userNameInput().clear().type(username);
    this.elements.userEmailInput().clear().type(email);
    this.elements.passwordInput().clear().type(password);
    this.elements.submitButton().click();
  }

  SingIn(email: string, password: string) {
    this.elements.userEmailInput().clear().type(email);
    this.elements.passwordInput().clear().type(password);
    this.elements.submitButton().click();
  }
  visitLoginPage() {
    cy.visit('https://conduit.realworld.how/');
  }
}

export const singUpPage = new SingUpPage();
