class ResetPasswordPage {
    elements = {
        email_mailosaur: () => cy.get("#email"),
        submit_btn: () => cy.get(".MuiBox-root.css-0"),
        login_btn: () => cy.get("body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > button:nth-child(2)"),
        password_mailosaur: () => cy.get("#password"),
        sidebar: () => cy.get(".flex.m-4.py-3.px-4.rounded-md"),
        message: () => cy.get(".MuiTableCell-root.MuiTableCell-body.MuiTableCell-sizeMedium.css-o9dopo"),
        reset_btn: () => cy.get(".button.button-primary"),
        newpassword: () => cy.get("#password-field"),
        confirmpassword: () => cy.get("#password_confirmation-field"),
        btn: () => cy.get(".button"),
    };

    goToMailosaur = () => {
        cy.visit("https://mailosaur.com/app/servers/k1xcudsr/get-started");
        cy.wait(3000);
    };

    mailosaur = (email, password, newpassword) => {
        this.goToMailosaur();
        //login account
        this.elements.email_mailosaur().type(email);
        this.elements.submit_btn().eq(0).should("be.visible").click();
        this.elements.password_mailosaur().type(password);
        this.elements.submit_btn().eq(0).should("be.visible").click({ force: true });
        // cy.wait(3000);

        //get the link for reset password
        this.elements.sidebar().eq(1).should("be.visible").click();
        this.elements.message().eq(0).should("be.visible").click();
        // cy.wait(3000);
        // this.elements.reset_btn().click();
        this.elements.reset_btn().invoke('attr', 'href').then((link_reset)=> {
            cy.visit(link_reset);
        })

        //set new password
        // cy.visit("https://stg.apicenter.io/reset-password/");
        this.elements.newpassword().type(newpassword);
        this.elements.confirmpassword().type(newpassword);
        // cy.wait(3000);
        this.elements.btn().should("be.visible").click();

    };
}

module.exports = new ResetPasswordPage();