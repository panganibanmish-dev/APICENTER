class ForgotPasswordPage {
    elements = {
        emailTextBox: () => cy.get("#email-field"),
        btn: () => cy.get(".button"),
        errorMsg: () => cy.get(".invalid-feedback"),
        successmessage: () => cy.get(".mb-4.font-medium.text-sm.text-green-600"),
        newpassword: () => cy.get("#password-field"),
        confirmpassword: () => cy.get("#password_confirmation-field"),

        //mailinator
        searchEmail: () => cy.get("#search-mobile"),
        messageBox: () => cy.get(".ng-binding"),
        resetpassbtn: () => cy.get("iframe[@id='html_msg_body']")
    };

    goToForgotPassword() {
        cy.visit('/forgot-password');
    };

    // gotoMailinator() {
    //     // cy.origin().then((origin) => {
    //     //     cy.visit(origin + 'https://www.mailinator.com/index.jsp'); // Use cy.origin() to handle cross-origin error
    //     // });
    //     cy.visit('https://stg.apicenter.io');
    //     cy.visit("https://www.mailinator.com/");
    //     cy.origin('https://www.mailinator.com/', () => {
    //         cy.wait(5000);
    //         this.elements.searchEmail().type(email);
    //         this.elements.messageBox().eq(0).click();
    //         this.elements.resetpassbtn().click();
    //     })
    // };

    // gotoResetPass() {
    //     cy.visit("/reset-password/");
    //     // cy.origin().then((origin) => {
    //     //     cy.visit(origin + '/reset-password/'); // Use cy.origin() to handle cross-origin error
    //     // });
    // };

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
        cy.wait(5000);
        this.elements.successmessage().should("be.visible");
        cy.wait(5000);
        this.mailinatorEmail();
        // this.gotoResetPass();
        // this.resetpasswordWithoutInputdata();
        // this.resetPassword();
    };
    //cross origin to mailinator to get the link for the reset password
    mailinatorEmail() {
        // cy.visit('https://www.mailinator.com/');
        // const mailinatorUrl = 'https://www.mailinator.com';

        // cy.request(mailinatorUrl, { failOnStatusCode: false })
        //     .then((response) => {
        //         const origin = new URL(mailinatorUrl).origin;

        //         cy.visit(origin, { failOnStatusCode: false }).then(() => {
        //             cy.request('GET', `${origin}/v4/public/inboxes.jsp?`)
        //                 .then((response) => {
        //                     if (response.body.messages && response.body.messages.length > 0) {
        //                         const emailContent = response.body.messages[0].data.parts[0].body;
        //                         const resetPasswordLink = emailContent.match(/<a href="([^"]+)">/)[1];

        //                         expect(resetPasswordLink).to.exist;

        //                         cy.visit(resetPasswordLink);

        //                         cy.url().should('include', '/reset-password');

        //                         this.elements.newpassword().type('newPassword');
        //                         this.elements.confirmpassword().type('newPassword');
        //                         this.elements.btn().click();
        //                         cy.wait(3000);
        //                     } else {
        //                         cy.log('No messages found in the Mailinator inbox.');
        //                     }
        //                 });
        //         });
        //     });

        cy.origin('https://www.mailinator.com', () => {
            cy.on('uncaught:exception', (e) => {
                if (e.message.includes('Things went bad')) {
                    // we expected this error, so let's ignore it
                    // and let the test continue
                    return false;
                }
            });
        });

        cy.request('https://www.mailinator.com/', { failOnStatusCode: false });


    };
    //click reset password button without entering new password
    resetpasswordWithoutInputdata() {
        this.elements.btn().click();
        cy.wait(3000);
        this.elements.errorMsg().should("be.visible").contains("The password field is required.");
    };

    //set new password
    resetPassword(newpassword = "") {
        this.elements.newpassword().type(newpassword);
        this.elements.confirmpassword().type(newpassword);
        cy.wait(3000);
        this.elements.btn().click();
    };
}

module.exports = new ForgotPasswordPage();