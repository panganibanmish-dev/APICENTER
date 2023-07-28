class ForgotPasswordPage {
    elements = {
        emailTextBox: () => cy.get("#email-field"),
        btn: () => cy.get(".button"),
        inbox: () => cy.get("#inbox-id"),
        inputEmail: () => cy.get("span[class='editable button edit-in-progress'] input"),
        savebuttonEmail: () => cy.get(".save.button.small"),
        selectDomain: () => cy.get("#gm-host-select"),
        messageBox: () => cy.get("tr[class='mail_row  pointer click-set'] td[class='td2']"),
        errorMsg: () => cy.get(".invalid-feedback"),
        successmessage: () => cy.get(".mb-4.font-medium.text-sm.text-green-600"),
        newpassword: () => cy.get("#password-field"),
        confirmpassword: () => cy.get("#password_confirmation-field"),
    };
    goToForgotPassword() {
        cy.visit('/forgot-password');
    };
    loginWithoutEmail() {
        this.goToForgotPassword();
        this.elements.btn().eq(0).should("be.visible").click();
        this.elements.errorMsg().should("be.visible").contains("The email field is required.");
    };
    gotoMail() {
        cy.on('uncaught:exception', (err, runnable) => {
            // Prevent Cypress from failing the test
            return false;
        });
        cy.request('https://www.guerrillamail.com/inbox').then((response) => {
            // Perform assertions or actions on the response
            expect(response.status).to.eq(200);
            cy.visit('https://www.guerrillamail.com/inbox');
        });
    };
    Email() {
        this.goToForgotPassword();
        this.elements.emailTextBox().should("be.visible").type("michtester@guerrillamail.com");
        this.elements.btn().should("be.visible").click();
        this.elements.successmessage().should("be.visible");
        //guerrilla mail
        this.gotoMail();
        this.elements.inbox().should('be.visible').click();
        this.elements.inputEmail().should("be.visible").type("michtester");
        this.elements.savebuttonEmail().should("be.visible").click();
        this.elements.selectDomain().select('guerrillamail.com').should('have.value', 'guerrillamail.com');
        // cy.wait(10000);
        this.elements.messageBox().should("be.visible").click();
        cy.contains('a', 'Reset Password')
            .invoke('attr', 'href')
            .then((href) => {
                cy.visit(href)
            });
        this.elements.newpassword().should("be.visible").type(Cypress.env('password'));
        this.elements.confirmpassword().should("be.visible").type(Cypress.env('password'));
        this.elements.btn().should("be.visible").click();
        cy.visit("/login");
    };
}
module.exports = new ForgotPasswordPage();