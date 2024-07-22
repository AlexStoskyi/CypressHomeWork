class ArticlePage {
    elements = {
        inputArticleTitle: () => cy.get("input[placeholder='Article Title']"),
        inputArticleAbout: () => cy.get(`input[placeholder="What's this article about?"]`),
        inputArticleBody: () => cy.get("textarea[placeholder='Write your article (in markdown)']"),
        publishButton: () => cy.get("button[type='button']"),
        titleArticleName: () => cy.get("div[class='container'] h1"),
        commentInput: () => cy.get(`textarea[placeholder='Write a comment...']`),
        postCommentButton: () => cy.get(`button[type='submit']`),
        commentsField: () => cy.get(`body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > p:nth-child(1)`),
        deleteCommentButton: () => cy.get("span[class='mod-options'] i[class='ion-trash-a']"),
        commentCart: () => cy.get("div[class='card']"),
        deleteArticleButton: () => cy.get('.btn.btn-outline-danger.btn-sm'),
    };

    CreateNewArticle(title: string, about: string, body: string) {
        this.elements.inputArticleTitle().type(title);
        this.elements.inputArticleAbout().type(about);
        this.elements.inputArticleBody().type(body);
        this.elements.inputArticleTitle().invoke('val').as('savedTitle');
        this.elements.publishButton().click();
        cy.get('@savedTitle').then((savedTitle) => {
            this.elements.titleArticleName().should('have.text', savedTitle);
        });
    }
    createComment(text: string) {
        this.elements.commentInput().type(text);
        this.elements.commentInput().invoke('val').as('savedComment');
        this.elements.postCommentButton().click();
        cy.get('@savedComment').then((savedComment) => {
            this.elements.commentsField().should('contain.text', savedComment);
        });
    };
    deleteArticle() {
        

    };

}
export const articlePage = new ArticlePage();