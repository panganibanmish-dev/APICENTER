import BillingPage from "../../pages/Accounts/BillingPage";
import LoginPage from "../../pages/LoginPage";
import updatedata from "../../fixtures/data.json";

describe('Billing Page Test Suite', () => {
    beforeEach(() => {
        LoginPage.goToLoginPage();
        LoginPage.loginAdmin(Cypress.env('login_email'), Cypress.env('login_password'));
        cy.get("body").contains("Account");
        BillingPage.clickBillingTab();
    });
    it(' ', () => {
    });
})