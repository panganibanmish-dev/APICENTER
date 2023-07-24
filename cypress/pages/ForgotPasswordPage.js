class ForgotPasswordPage {
    elements = {
        emailTextBox: () => cy.get("#email-field"),
        btn: () => cy.get(".button"),
        errorMsg: () => cy.get(".invalid-feedback"),
        successmessage: () => cy.get(".mb-4.font-medium.text-sm.text-green-600"),
        newpassword: () => cy.get("#password-field"),
        confirmpassword: () => cy.get("#password_confirmation-field"),
        searchEmail: () => cy.get("#search"),
        inboxSearch: () => cy.get("#inbox_field"),
        labelPublicMessage: () => cy.get("h4[class='fw-700']"),
        messageBox: () => cy.get("td[class='ng-binding'] span"),
        header_message: () => cy.get("td[class='header']"),
        labelh1: () => cy.get("td[class='content-cell'] h1"),
        btnResetPassword: () => cy.get(".button.button-primary"),
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
    gotoMailinator() {
        cy.on('uncaught:exception', (err, runnable) => {
            // Prevent Cypress from failing the test
            return false;
        });
        cy.request('https://www.mailinator.com/').then((response) => {
            // Perform assertions or actions on the response
            expect(response.status).to.eq(200);
            cy.visit('https://www.mailinator.com/');
        });
    };

    Email() {
       const emailAddress = 'mich_automator@mailinator.com';

        this.goToForgotPassword();
        this.elements.emailTextBox().type(emailAddress);
        this.elements.btn().click().should("be.visible");
        this.elements.successmessage().should("be.visible");

        //mailinator
        this.gotoMailinator();
        this.elements.searchEmail().should("be.visible").type(`${emailAddress}{enter}`);
        this.elements.inboxSearch().should("be.visible");
        this.elements.labelPublicMessage().should("be.visible").contains("Public Messages");
        this.elements.messageBox().eq(0).click({ force: true });
        // this.elements.header_message().should("be.visible");
        cy.frameLoaded('#html_msg_body').its('0.contentDocument.body').should('not.be.empty');
        cy.iframe('#html_msg_body').find('.button.button-primary').click();
        cy.visit("/reset-password/")
    };
}

module.exports = new ForgotPasswordPage();