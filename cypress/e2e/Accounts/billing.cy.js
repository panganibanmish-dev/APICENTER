import BillingPage from "../../pages/Accounts/BillingPage";
import CheckNovaPage from "../../pages/Accounts/CheckNovaPage";
import LoginPage from "../../pages/LoginPage";

describe('Billing Page Test Suite', () => {
    beforeEach(() => {
        LoginPage.goToLoginPage();
        LoginPage.loginAdmin(Cypress.env('login_email'), Cypress.env('login_password'));
        cy.get("body").contains("Account");
        BillingPage.clickBillingTab();
    });
    it('It should be present in this section (Payment Method, Email fields for invoice and update button) and should be redirect to Nova to check the billing', () => 
    {
        BillingPage.verifyLabel();
        BillingPage.clickUpdatePaymentMethod();
        BillingPage.paymentMolliebyCard();
        BillingPage.paymentMolliebyiDeal();
        BillingPage.paymentMolliebyKbcCbc();
        BillingPage.checkRequiredFields();
        cy.wait(5000);
        BillingPage.inputRequiredFields();
        BillingPage.clickDownloadButton();
        cy.wait(5000);
        CheckNovaPage.InvoiceDownload();
    });
})