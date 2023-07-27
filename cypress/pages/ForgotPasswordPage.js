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
        this.elements.btn().eq(0).click();
        this.elements.errorMsg().should("be.visible").contains("The email field is required.");
        cy.wait(3000);
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
        this.elements.emailTextBox().type("michtester@guerrillamail.com");
        this.elements.btn().click();
        this.elements.successmessage().should("be.visible");

        //guerrilla mail
        this.gotoMail();
        cy.get("#inbox-id").should('be.visible').click();
        cy.get("span[class='editable button edit-in-progress'] input").type("michtester");
        cy.get(".save.button.small").click();
        cy.get("#gm-host-select").select('guerrillamail.com').should('have.value', 'guerrillamail.com');
        cy.wait(10000);
        cy.get("tr[class='mail_row  pointer click-set'] td[class='td2']").click();
        cy.contains('a', 'Reset Password').click();
        cy.getCookie('csrf_token').then((cookie) => {
            // Check if the 'csrf_token' cookie exists and has a value
            if (cookie && cookie.value) {
                const csrfToken = cookie.value;
                cy.request({
                    method: 'POST',
                    url: '/reset-password/',
                    headers: {
                        'X-CSRF-TOKEN': csrfToken,
                    },
                    form: true,
                    body: {
                        email: 'michtester@guerrillamail.com',
                        newPassword: Cypress.env('password'),
                        confirmpassword: Cypress.env('password')
                    },
                }).then((response) => {
                    expect(response.status).to.eq(200);
                    cy.visit('/reset-password/');
                });
            } else {
                // Handle the case when the 'csrf_token' cookie is not available
                throw new Error("CSRF token cookie is missing or invalid.");
            }
        });
        cy.wait(1000);
        cy.get('.button').click();
        cy.visit("/");
    };
}
module.exports = new ForgotPasswordPage();