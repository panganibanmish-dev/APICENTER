import BillingPage from "../../pages/Accounts/BillingPage";
import LoginPage from "../../pages/LoginPage";

describe('Billing Page Test Suite', () => {
    beforeEach(() => {
        LoginPage.goToLoginPage();
        LoginPage.loginAdmin(Cypress.env('login_email'), Cypress.env('login_password'));
        cy.get("body").contains("Account");
        BillingPage.clickBillingTab();
    });
    it('It should be present in this section (Payment Method, Email fields for invoice and update button', () => {
        BillingPage.verifyLabel();
        BillingPage.clickUpdatePaymentMethod();
        BillingPage.paymentMolliebyCard();
        BillingPage.paymentMolliebyiDeal();
        BillingPage.paymentMolliebyKbcCbc();
        BillingPage.checkRequiredFields();
        BillingPage.inputRequiredFields();
    });
})