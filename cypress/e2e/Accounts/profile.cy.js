import ProfilePage from "../../pages/Accounts/ProfilePage";

describe('Profile Page Test Suite', () => {
    beforeEach(() => {
        cy.login(Cypress.env('login_email'), Cypress.env('login_password'));
        cy.viewport(1800, 1000);
        cy.visit('/');
        cy.get("body").contains("Account").click();
        ProfilePage.clickProfileTab();
    });
    it('should be allowing the user to change/update the profile photo of the account', () => {
        ProfilePage.setProfilePhoto();
    });
    it('should be allowing the user to change/update the profile language', () => {
        const data = 'English';
        const data1 = "Nederlands";

        ProfilePage.setProfileLanguage(data, data1);
    });
    it('should be showing the error contact information that the field is required', () => {
        ProfilePage.invalidContactInfo();
    });
    it('should be showing error billing address information that the field is required', () => {
        //this is for blank input and it show an error message
        ProfilePage.invalidBillingAddressInfo();
    });
    it('should be allowing the user to update the contact information and show the confirmation updated', () => {
        ProfilePage.updateContactInformation(
            Cypress.env("company"),
            Cypress.env("firstname"),
            Cypress.env("lastname"),
            Cypress.env("phone"),
            Cypress.env("login_email")
        );
    });
    it('should be allowing the user to update the billing address and show the confirmation updated', () => {
        const add = "naga";
        const add2 = "cal";
        const city = "legazpi";
        const state = "naga";
        const zip = "4405";
        const country = "Philippines";

        ProfilePage.updateBillingAddress(add, add2, city, state, zip, country);
    });
});