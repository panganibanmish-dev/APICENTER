class SignupPage {
    elements = {
        inputFirstName: () => cy.get("#first-name-field"),
        inputLastName: () => cy.get("#last-name-field"),
        inputPhoneNumber: () => cy.get("#phone-field"),
        inputEmailAdd: () => cy.get("#email-field"),
        inputPassword: () => cy.get("#password-field"),
        inputConfirmPassword: () => cy.get("#password-confirm-field"),
        selectTags: () => cy.get(".multiselect__tags"),
        clickToggleTerms: () => cy.get("label[for='terms']"),
        clickToggleProcessingAgreement: () => cy.get("label[for='processing_agreement']"),
        btn: () => cy.get(".button"),
        btnLink: () => cy.get(".btn.btn-link.font_bold"),
    };

    goToRegisterPage = () => {
        cy.viewport(1280, 768)
        cy.visit('/register')
        cy.wait(3000)
    };

    checkRequiredFields = () => {
        cy.wait(3000);
        this.elements.inputFirstName().click();
        this.elements.inputLastName().click();
        this.elements.inputPhoneNumber().click();
        this.elements.inputEmailAdd().click();
        this.elements.inputPassword().click();
        this.elements.inputConfirmPassword().click();
        // this.elements.selectTags().click().should("be.visible").contains("English");
        // this.elements.selectTags().click().should("be.visible").contains("Applications");
        this.elements.clickToggleTerms().click().should("be.visible").contains("I accept the Terms of Service");
        this.elements.clickToggleProcessingAgreement().click().should("be.visible").contains("I accept the Processing Agreement");
        cy.wait(5000);
        this.elements.btn().should("be.visible").contains("Sign up").click();
    };

    clickToggleTermsAndProcessingAgreement() {
        this.elements.clickToggleTerms().click().should("be.visible").contains("I accept the Terms of Service");
        this.elements.clickToggleProcessingAgreement().click().should("be.visible").contains("I accept the Processing Agreement");
    };

    goToLoginLink() {
        this.elements.btnLink().should("be.visible").contains("Log in").click();
        cy.visit('/login');
        cy.wait(3000);
        this.goToRegisterPage();
    };

    fillData = (newUser) => {
        const inputInfoUser = {
            firstname: newUser.firstname || "Michelle",
            lastname: newUser.lastname || "Tester",
            phonenumber: newUser.phonenumber || "9954415824",
            email: newUser.email || "michuser30@mailinator.com",
            password: newUser.password || "Asdfghjkl@1130",
            confirmpassword: newUser.confirmpassword || "Asdfghjkl@1130",
        };
        this.elements.inputFirstName().should("be.visible").clear().type(inputInfoUser.firstname);
        this.elements.inputLastName().should("be.visible").clear().type(inputInfoUser.lastname);
        this.elements.inputPhoneNumber().should("be.visible").clear().type(inputInfoUser.phonenumber);
        this.elements.inputEmailAdd().should("be.visible").clear().type(inputInfoUser.email);
        this.elements.inputPassword().should("be.visible").clear().type(inputInfoUser.password);
        this.elements.inputConfirmPassword().should("be.visible").clear().type(inputInfoUser.confirmpassword);
    };

    clickButtonSignup() {
        this.elements.btn().should("be.visible").contains("Sign up").click();
    };
}

module.exports = new SignupPage();