class ProfilePage {
    elements = {
        btnAccount: () => cy.get("button[class='nav_link']"),
        btnProfile: () => cy.get(".nav_link.nav_sublink"),
        uploadProfilePhoto: () => cy.get("#choose-photo"),
        dropdownProfileLanguage: () => cy.get("div[class='form-group'] div[class='multiselect__select']"),
        inputCompany: () => cy.get("#user-company_name"),
        inputFirstname: () => cy.get("#user-first_name"),
        inputLastname: () => cy.get("#user-last_name"),
        inputPhonenumber: () => cy.get("#user-phone_number"),
        inputEmail: () => cy.get("#user-email_address"),
        btnUpdate: () => cy.get(".button"),
        msgSuccess: () => cy.get(".alert.alert-success"),
        inputAddress: () => cy.get("#user-billing_address"),
        inputAddress2: () => cy.get("#user-billing_address_line_2"),
        inputCity: () => cy.get("#user-billing_city"),
        inputState: () => cy.get("#user-billing_state"),
        inputZip: () => cy.get("#user-billing_zip"),
        drpdwnCountry: () => cy.get("div[class='form_group'] div div[class='multiselect__tags']"),
        inputLanguage: () => cy.get('#user-profile_language'),
        inputCountry: () => cy.get("#user-billing_country"),
        errormsg: () => cy.get(".invalid-feedback"),
    };
    //redirect to profile account
    clickProfileTab = () => {
        this.elements.btnProfile().should("be.visible").contains("Profile").click();
    };
    //update profile photo
    setProfilePhoto() {
        this.elements.uploadProfilePhoto().selectFile('cypress/fixtures/api.png');
    };
    //update profile language
    setProfileLanguage(data, data1) {
        //change into english language
        this.elements.dropdownProfileLanguage().should("be.visible").click();
        this.elements.inputLanguage().should("be.visible").type(`${data}{enter}`);
        this.clickUpdateProfile();

        //change into netherlands language
        this.elements.dropdownProfileLanguage().should("be.visible").click();
        this.elements.inputLanguage().should("be.visible").type(`${data1}{enter}`);
        this.clickUpdateProfile();
    };
    //button for update profile
    clickUpdateProfile() {
        this.elements.btnUpdate().eq(1).should("be.visible").click();
    };
    //update info and showing confirmation updated
    updateContactInformation = (company_name, firstname, lastname, phone, email) => {
        this.elements.inputCompany().should("be.visible").clear().type(company_name);
        this.elements.inputFirstname().should("be.visible").clear().type(firstname);
        this.elements.inputLastname().should("be.visible").clear().type(lastname);
        this.elements.inputPhonenumber().should("be.visible").clear().type(phone);
        this.elements.inputEmail().should("be.visible").clear().type(email, { force: true });
        this.elements.btnUpdate().eq(2).should("be.visible").click();
        this.elements.msgSuccess().should('be.visible').contains("Your contact information has been updated!")
    };
    //Update info and showing confirmation updated
    updateBillingAddress = (add, add2, city, state, zip, country) => {
        this.elements.inputAddress().should("be.visible").clear().type(add);
        this.elements.inputAddress2().should("be.visible").clear().type(add2);
        this.elements.inputCity().should("be.visible").clear().type(city);
        this.elements.inputState().should("be.visible").clear().type(state);
        this.elements.inputZip().should("be.visible").clear().type(zip);
        this.elements.drpdwnCountry().should("be.visible").click();
        this.elements.inputCountry().should("be.visible").type(`${country}{enter}`);
        this.elements.btnUpdate().eq(3).should("be.visible").click();
        this.elements.msgSuccess().should('be.visible');
    };
    //shows the required fields
    invalidContactInfo = () => {
        //Showing an error contact information
        this.elements.inputCompany().should("be.visible").clear();
        this.elements.inputFirstname().should("be.visible").clear();
        this.elements.inputLastname().should("be.visible").clear();
        this.elements.inputPhonenumber().should("be.visible").clear();
        this.elements.inputEmail().should("be.visible").clear();
        this.elements.btnUpdate().eq(2).should("be.visible").click();
        // cy.wait(2000);
        this.elements.errormsg().should("be.visible").contains("The first name field is required.");
        this.elements.errormsg().should("be.visible").contains("The last name field is required.");
        this.elements.errormsg().should("be.visible").contains("The email field is required.");
        // cy.wait(2000);
    };
    invalidBillingAddressInfo = () => {
        //Showing an error billing information
        this.elements.inputAddress().should("be.visible").clear();
        this.elements.inputAddress2().should("be.visible").clear();
        this.elements.inputCity().should("be.visible").clear();
        this.elements.inputState().should("be.visible").clear();
        this.elements.inputZip().should("be.visible").clear();
        this.elements.btnUpdate().eq(3).should("be.visible").click();
        // cy.wait(2000);
        this.elements.errormsg().should("be.visible").contains("The billing address field is required.");
        this.elements.errormsg().should("be.visible").contains("The billing city field is required.");
        this.elements.errormsg().should("be.visible").contains("The billing zip field is required.");
    };
};
module.exports = new ProfilePage(); 