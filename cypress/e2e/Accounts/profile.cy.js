import updatedata from "../../fixtures/data.json";
import ProfilePage from "../../pages/Accounts/ProfilePage";
import LoginPage from "../../pages/LoginPage";

describe('Profile Page Test Suite', () => {
    beforeEach(() => {
        LoginPage.goToLoginPage();
        LoginPage.loginAdmin(Cypress.env('login_email'), Cypress.env('login_password'));
        cy.get("body").contains("Account").click();
        ProfilePage.clickProfileTab();
    });
    it('It should be allowing the user to change/update the profile photo of the account and it should be showing confirmation that the contact information and billing address have been updated ', () => {
        const data = 'English';
        const data1 = "Nederlands";

        const add = "naga";
        const add2 = "cal";
        const city = "legazpi";
        const state = "naga";
        const zip = "4405";
        const country = "Philippines";

        ProfilePage.setProfilePhoto();
        ProfilePage.setProfileLanguage(data, data1);
        ProfilePage.updateContactInformation(updatedata.valid.company, updatedata.valid.firstname, updatedata.valid.lastname, updatedata.valid.phone, updatedata.valid.email);
        ProfilePage.updateBillingAddress(add, add2, city, state, zip, country);
        cy.wait(3000);
    });
    it('It should be showing error information that the field is required', () => {
        //data
        const add = "Naga";
        const add2 = "Calamba";
        const city = "Naga City";
        const state = "Bicol";
        const zip = "4405";
        const country = "Philippines";

        //this is for blank input and it show an error message
        ProfilePage.invalidInfo();

        //this is for valid info
        ProfilePage.updateContactInformation(updatedata.valid.company, updatedata.valid.mainfirstname, updatedata.valid.mainlastname, updatedata.valid.mainphone, updatedata.valid.email);
        ProfilePage.updateBillingAddress(add, add2, city, state, zip, country);
        cy.wait(5000);
    });
})