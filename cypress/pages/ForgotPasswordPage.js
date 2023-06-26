class ForgotPasswordPage {
    elements = {
        emailTextBox: () => cy.get("#email-field"),
        btn: () => cy.get(".button"),
        errorMsg: () => cy.get(".invalid-feedback"),

        //mailinator
        mailinator_searchBar: () => cy.get("#search"),
    };

    goToForgotPassword() {
        cy.visit('/forgot-password');
    };

    loginWithoutEmail() {
        this.goToForgotPassword();
        this.elements.btn().click().should("be.visible");
        this.elements.errorMsg().should("be.visible").contains("The email field is required.");
        cy.wait(3000);
    };

    loginWithForgotPassword(email = "") {
        this.goToForgotPassword();
        this.elements.emailTextBox().type(email);
        this.elements.btn().click().should("be.visible");
        cy.wait(3000);
    };
}

module.exports = new ForgotPasswordPage();