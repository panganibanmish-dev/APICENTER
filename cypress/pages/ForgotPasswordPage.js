class ForgotPasswordPage {
    elements = {
        emailTextBox: () => cy.get("#email-field"),
        btn: () => cy.get(".button"),
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
        this.elements.btn().click().should("be.visible");
        this.elements.errorMsg().should("be.visible").contains("The email field is required.");
        cy.wait(3000);
    };

    Email(newpassword = "") {
        const serverId = 'k1xcudsr'
        const serverDomain = 'k1xcudsr.mailosaur.net'
        const emailAddress = 'michtestuser@' + serverDomain
        let passwordResetLink

        this.goToForgotPassword();
        this.elements.emailTextBox().type(emailAddress);
        this.elements.btn().click().should("be.visible");
        cy.wait(5000);
        this.elements.successmessage().should("be.visible");
        cy.wait(5000);

        cy.mailosaurGetMessage(serverId, {
            sentTo: emailAddress
        }).then(email => {
            cy.log(email.subject)
            passwordResetLink = email.html.links[0].href
        });

        //set new password
        cy.visit(passwordResetLink);
        this.elements.newpassword().type(newpassword);
        this.elements.confirmpassword().type(newpassword);
        cy.wait(3000);
        this.elements.btn().click();
    };
}

module.exports = new ForgotPasswordPage();