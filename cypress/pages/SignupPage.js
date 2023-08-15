class SignupPage {
    elements = {
        inputFirstName: () => cy.get("#first-name-field"),
        inputLastName: () => cy.get("#last-name-field"),
        inputPhoneNumber: () => cy.get("#phone-field"),
        inputEmailAdd: () => cy.get("#email-field"),
        inputPassword: () => cy.get("#password-field"),
        inputConfirmPassword: () => cy.get("#password-confirm-field"),
        clickToggleTerms: () => cy.get("#terms"),
        clickToggleProcessingAgreement: () => cy.get("#processing_agreement"),
        btn: () => cy.get(".button"),
        btnLink: () => cy.get(".btn.btn-link.font_bold"),
        drpdownLanguage: () => cy.get(".multiselect__single"),
        inputLanguage: () => cy.get("#register-profile_language"),
        drpdownApps: () => cy.get("div[type='multi-select'] div[class='multiselect__tags']"),
        inputApps: () => cy.get("#register-applications"),
        homePage: () => cy.get(".breadcrumb_link.active"),
        errormsg: () => cy.get(".invalid-feedback"),
    };
    //redirect to sign up
    goToRegisterPage = () => {
        // cy.viewport(1280, 768)
        cy.viewport(1800, 1000)
        cy.visit('/register')
    };
    //toogle that needs to check for the agreement
    clickToggleTermsAndProcessingAgreement() {
        this.elements.clickToggleTerms().should("be.not.visible").check({ force: true });
        this.elements.clickToggleProcessingAgreement().should("be.not.visible").check({ force: true });
    };

    //link that redirect to login
    goToLoginLink() {
        this.elements.btnLink().should("be.visible").contains("Log in").click();
        cy.visit("/login");
        this.goToRegisterPage();
    };

    //data of the user for register account
    fillData = (newUser) => {
        const inputInfoUser = {
            firstname: newUser.firstname || "Michelle",
            lastname: newUser.lastname || "Tester",
            phonenumber: newUser.phonenumber || "9954415824",
            password: newUser.password || "Asdfghjkl@1130",
            confirmpassword: newUser.confirmpassword || "Asdfghjkl@1130",
        };
        this.elements.inputFirstName().should("be.visible").clear().type(inputInfoUser.firstname);
        this.elements.inputLastName().should("be.visible").clear().type(inputInfoUser.lastname);
        this.elements.inputPhoneNumber().should("be.visible").clear().type(inputInfoUser.phonenumber);
        this.elements.inputEmailAdd().should("be.visible").clear().type(`user_test${Date.now()}@mailinator.com`); //generate email for new user
        this.elements.inputPassword().should("be.visible").clear().type(inputInfoUser.password);
        this.elements.inputConfirmPassword().should("be.visible").clear().type(inputInfoUser.confirmpassword);
    };
    //checks the require field that should be input by the user
    checkRequireFields() {
        this.elements.inputFirstName().should("be.visible").clear();
        this.elements.inputLastName().should("be.visible").clear();
        // this.elements.inputPhoneNumber().clear();
        this.elements.inputEmailAdd().should("be.visible").clear();
        this.elements.inputPassword().should("be.visible").clear();
        this.elements.inputConfirmPassword().should("be.visible").clear();
        this.elements.btn().should("be.visible").click();

        //message error if the input field is blank
        this.elements.errormsg().should("be.visible").contains("The First name field is required.");
        this.elements.errormsg().should("be.visible").contains("The Last name field is required.");
        this.elements.errormsg().should("be.visible").contains("The E-mail field is required.");
        this.elements.errormsg().should("be.visible").contains("The Password field is required.");
        this.elements.errormsg().should("be.visible").contains("The Applications field is required.");
        this.elements.errormsg().should("be.visible").contains("The Terms of Service must be accepted.");
        this.elements.errormsg().should("be.visible").contains("The Processing agreement must be accepted.");
    };
    //dropdown for the register language and apps 
    drpdownClick(data, data1, app1, app2, app3) {
        //change into netherlands language
        this.elements.drpdownLanguage().should("be.visible").click();
        this.elements.inputLanguage().should("be.visible").type(`${data1}{enter}`);
        //change into english language
        this.elements.drpdownLanguage().should("be.visible").click();
        this.elements.inputLanguage().should("be.visible").type(`${data}{enter}`);
        //Register apps
        this.elements.drpdownApps().should("be.visible").click();
        this.elements.inputApps().should("be.visible").type(`${app1}{enter}`);
        this.elements.drpdownApps().should("be.visible").click();
        this.elements.inputApps().should("be.visible").type(`${app2}{enter}`);
        this.elements.drpdownApps().should("be.visible").click();
        this.elements.inputApps().should("be.visible").type(`${app3}{enter}`);
        this.elements.drpdownApps().should("be.visible").click();
        this.elements.inputApps().should("be.visible").type(`${app3}{enter}`);
    };
    //after sign up, it will redirect to homepage
    redirectHomePage() {
        this.elements.homePage().should("be.visible");
        cy.get(".navbar-brand.nav_brand").should("be.visible");
        const sidebar = [
            "Dashboard",
            "Integrations",
            "Applications",
            "Account",
            "Profile",
            "Billing",
            "Support",
        ];
        sidebar.forEach((s) => {
            cy.get(".sidebar_nav.sidebar_list").should("be.visible").contains(s);
        });
    };
};
module.exports = new SignupPage();