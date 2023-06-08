import BillingPage from "../../pages/Accounts/BillingPage";
import LoginPage from "../../pages/LoginPage";

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