class BillingPage {
    elements = {
        btnAccount: () => cy.get("button[class='nav_link']"),
        btnBilling: () => cy.get(".nav_link.nav_sublink"),
        lblActiveSubscriptions: () =>
            cy.get("div[id='billing_current-plan'] h3[class='card-text']")
                .should("be.visible").contains("Active subscriptions"),
        lblCurrentPlan: () =>
            cy.get("div[id='billing_current-plan'] div[class='card-body']")
                .should("be.visible").contains("You don't have any active subscriptions, set up a new integration."),
        lblFooter: () =>
            cy.get("div[id='billing_current-plan'] div[class='card-footer']")
                .should("be.visible").contains("* All prices are excluding applicable VAT."),
        lblPaymentInfo: () =>
            cy.get("div[id='billing_payment-details'] div[class='card-header border-bottom rounded-0'] span")
                .should("be.visible").contains("Payment information"),
        lblWarning: () =>
            cy.get(".alert.alert-warning").should("be.visible")
                .contains("It is required to setup a payment method before creating integrations."),
        lblWarning2: () =>
            cy.get("div[id='billing_payment-details'] p:nth-child(1)")
                .should("be.visible").contains("You currently don't have a payment method."),
        btnPaymentMethod: () => cy.get("form[aria-label='Set payment method'] button[class='button']"),
        lblSendingInvoiceTo: () =>
            cy.get("label[for='billing-sending_invoices_to'] span").should("be.visible")
                .contains("Sending invoices to"),
        inputDisableSendingInvoiceTo: () =>
            cy.get("#billing-sending_invoices_to"),
        lblCCInvoiceTo: () =>
            cy.get("label[for='billing-cc_invoices_to'] span")
                .should("be.visible").contains("CC invoices to"),
        inputCCInvoiceTo: () =>
            cy.get("#billing-cc_invoices_to"),
        lblVATNumber: () =>
            cy.get("label[for='billing-vat_id'] span")
                .should("be.visible").contains("VAT ID number"),
        inputVATNumber: () =>
            cy.get("#billing-vat_id"),
        btnUpdate: () => cy.get("div[class='form_row'] button[class='button']"),
        errormsg: () => cy.get(".invalid-feedback"),
        selectLocale: () => cy.get("#select-locale"),
        linkBackwebsite: () => cy.get('.button--link'),
        btnCard: () => cy.get(".grid-button-creditcard"),
        btnIdeal: () => cy.get(".grid-button-ideal"), 
        btnKbc: () => cy.get('.grid-button-kbc'),
        inputCardNumber: () => cy.get("input#cc-name"), 
        inputCardHolder: () => cy.get("#cardHolder"),
        inputExpiryDate: () => cy.get("#expiryDate"),
        inputcvv: () => cy.get("#verificationCode"),
        btnPaySubmit: () => cy.get("#submit-button"),
        form_errormsg: () => cy.get('#form-errors'),
    };
    //redirects to billing url
    clickBillingTab = () => {
        this.elements.btnAccount().click();
        this.elements.btnBilling().should("be.visible").contains("Billing").click();
    };
    //verifying label elements
    verifyLabel = () => {
        this.elements.lblActiveSubscriptions();
        this.elements.lblCurrentPlan();
        this.elements.lblFooter();
        this.elements.lblPaymentInfo();
        // this.elements.lblWarning();
        // this.elements.lblWarning2();
        this.elements.lblSendingInvoiceTo();
        this.elements.lblCCInvoiceTo();
        this.elements.lblVATNumber();
    };
    //update payment method and redirect to mollie.com for payment
    clickUpdatePaymentMethod = () => {
        this.elements.btnPaymentMethod().click();
    };
    paymentRedirects = () => {
        this.elements.linkBackwebsite().click();
        this.clickUpdatePaymentMethod();
        this.elements.selectLocale().select('English').should('have.value', 'en_US');
    };
    //pay by using card
    paymentMolliebyCard = () => {
        this.paymentRedirects();
        this.elements.btnCard().click();
        this.verifyErrormsg();
        this.elements.inputCardNumber().type('4000056655665556');
        this.elements.inputCardHolder().type('Test visa');
        this.elements.inputExpiryDate().type('1030');
        this.elements.inputcvv().type("234");
        this.elements.btnPaySubmit().click();
        this.paymentRedirects();
    };
    //pay by using ideal
    paymentMolliebyiDeal = () => {
        this.paymentRedirects();
        this.elements.btnIdeal();
        this.elements.linkBackwebsite().click();
    };
    //pay by using kbc
    paymentMolliebyKbcCbc = () => {
        this.paymentRedirects();
        this.elements.btnKbc();
        this.elements.linkBackwebsite().click();
    };
    verifyErrormsg = () => {
        this.elements.btnPaySubmit().click();
        this.elements.form_errormsg().should('be.visible');
    };
    //update payment info
    clickUpdatePaymentInfo = () => {
        this.elements.btnUpdate().click();
    };
    //check the invalid/required fields
    checkRequiredFields = () => {
        this.elements.inputDisableSendingInvoiceTo().should("be.vsible");
        this.elements.inputCCInvoiceTo().should("be.visible").type('test');
        this.elements.inputVATNumber().should("be.visible").type('validnumber');
        this.elements.btnUpdate().click();
        this.elements.errormsg().should("be.visible").contains("The billing cc invoices to must be a valid email address.");
        this.elements.errormsg().should("be.visible").contains("This VAT identification number is invalid.");
    };
    inputRequiredFields = () => {
        this.elements.inputDisableSendingInvoiceTo().should("be.vsible");
        this.elements.inputCCInvoiceTo().should("be.visible").type('test 1');
        this.elements.inputVATNumber().should("be.visible").type('NL123456789B12');
        this.elements.btnUpdate().click();


    };
}

module.exports = new BillingPage(); 