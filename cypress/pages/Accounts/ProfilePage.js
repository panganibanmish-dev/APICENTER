class ProfilePage {
    elements = {
        btnAccount: () => cy.get("button[class='nav_link']"),
        btnProfile: () => cy.get(".nav_link.nav_sublink"),
        uploadProfilePhoto: () => cy.get("#choose-photo"),
        dropdownProfileLanguage: () => cy.get("div[class='form-group'] div[class='multiselect__select']"),
        btnUpdateProfile: () =>
            cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(4) > div:nth-child(2) > button:nth-child(2)"),
        inputFirstname: () => cy.get("#user-first_name"),
        inputLastname: () => cy.get("#user-last_name"),
        inputPhonenumber: () => cy.get("#user-phone_number"),
        inputEmail: () => cy.get("#user-email_address"),
        btnUpdateInfo: () =>
            cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(5) > button:nth-child(2)"),
        msgSuccess: () => cy.get(".alert.alert-success"),
        inputAddress: () => cy.get("#user-billing_address"),
        inputAddress2: () => cy.get("#user-billing_address_line_2"),
        inputCity: () => cy.get("#user-billing_city"),
        inputState: () => cy.get("#user-billing_state"),
        inputZip: () => cy.get("#user-billing_zip"),
        drpdwnCountry: () => cy.get("div[class='form_group'] div div[class='multiselect__tags']"),
        btnUpdateBilling: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > form:nth-child(2) > div:nth-child(5) > button:nth-child(2)"),
        errormsg: () => cy.get(".invalid-feedback"),
        errormsg1: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(3)"),
    };

    //redirect to profile page
    goToProfile = () => {
        cy.viewport(1280, 768)
        cy.visit('/dashboard/account/profile')
        cy.wait(3000)
    };

    //redirect to profile account
    clickProfileTab = () => {
        this.elements.btnAccount().click();
        this.elements.btnProfile().should("be.visible").contains("Profile").click();
    };

    //update profile photo
    uploadPhoto(fileName, fileType) {
        const fileInputSelector = '#choose-photo';

        cy.fixture(fileName).then((fileContent) => {
            cy.get(fileInputSelector).attachFile({
                fileName,
                fileType,
                fileContent
            });
        });
    };

    //update profile language
    setProfileLanguage(data, data1) {
        const inputLanguage = '#user-profile_language';

        //change into english language
        this.elements.dropdownProfileLanguage().click();
        cy.get(inputLanguage).type(`${data}{enter}`);
        this.clickUpdateProfile();

        //change into netherlands language
        this.elements.dropdownProfileLanguage().click();
        cy.get(inputLanguage).type(`${data1}{enter}`);
        this.clickUpdateProfile();
    };

    //button for update profile
    clickUpdateProfile() {
        this.elements.btnUpdateProfile().click();
    };

    //Update info and showing confirmation updated
    updateContactInformation = (firstname, lastname, phone, email) => {
        cy.wait(5000);
        this.elements.inputFirstname().clear();
        this.elements.inputFirstname().type(firstname);
        this.elements.inputLastname().clear();
        this.elements.inputLastname().type(lastname);
        this.elements.inputPhonenumber().clear();
        this.elements.inputPhonenumber().type(phone);
        this.elements.inputEmail().clear();
        this.elements.inputEmail().type(email);
        this.elements.btnUpdateInfo().click();
        cy.wait(2000);
        this.elements.msgSuccess().should('be.visible').contains("Your contact information has been updated!")
    };

    //Update info and showing confirmation updated
    updateBillingAddress = (add, add2, city, state, zip, country) => {
        const inputCountry = "#user-billing_country"

        this.elements.inputAddress().clear().type(add);
        this.elements.inputAddress2().clear().type(add2);
        this.elements.inputCity().clear().type(city);
        this.elements.inputState().clear().type(state);
        this.elements.inputZip().clear().type(zip);
        this.elements.drpdwnCountry().click();
        cy.get(inputCountry).type(`${country}{enter}`);
        this.elements.btnUpdateBilling().click();
        cy.wait(2000);
        this.elements.msgSuccess().should('be.visible');
    };

    invalidInfo = () => {
        //Showing an error contact information
        this.elements.inputFirstname().clear();
        this.elements.inputLastname().clear();
        this.elements.inputEmail().clear();
        this.elements.btnUpdateInfo().click();
        cy.wait(2000);
        this.elements.errormsg().should("be.visible").contains("The first name field is required.");
        this.elements.errormsg().should("be.visible").contains("The last name field is required.");
        this.elements.errormsg().should("be.visible").contains("The email field is required.");

        cy.wait(2000);

        //Showing an error billing information
        this.elements.inputAddress().clear();
        this.elements.inputAddress2().clear();
        this.elements.inputCity().clear();
        this.elements.inputState().clear();
        this.elements.inputZip().clear();
        this.elements.btnUpdateBilling().click();
        cy.wait(2000);
        this.elements.errormsg1().should("be.visible").contains("The billing address field is required.");
        this.elements.errormsg().should("be.visible").contains("The billing city field is required.");
        this.elements.errormsg().should("be.visible").contains("The billing zip field is required.");
    };
}

module.exports = new ProfilePage(); 