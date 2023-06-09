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
        btnIdealASNBank: () => cy.get(".grid-button-ideal-ASNBNL21"),
        btnKbcCBc: () => cy.get('.grid-button-kbc'),
        btnCbc: () => cy.get(".grid-button-kbc-cbc"),
        btnKbc: () => cy.get(".grid-button-kbc-kbc"),
        inputCardNumber: () => cy.get("iframe[name='cardNumber-input']"),
        inputCardHolder: () => cy.get("iframe[name='cardHolder-input']"),
        inputExpiryDate: () => cy.get("iframe[name='expiryDate-input']"),
        inputcvv: () => cy.get("iframe[name='verificationCode-input']"),
        btnPaySubmit: () => cy.get("#submit-button"),
        togglePaid: () => cy.get("input[value='paid']"),
        btnContinue: () => cy.get("button[name='sumbit']"),
        form_errormsg: () => cy.get('#form-errors'),
        downloadFile: () => cy.get(".button"),
    };
    //redirects to billing url
    clickBillingTab = () => {
        this.elements.btnAccount().click();
        this.elements.btnBilling().should("be.visible").contains("Billing").click();
        cy.wait(2000);
    };
    //verifying label elements
    verifyLabel = () => {
        cy.wait(3000);
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
        cy.wait(5000);
        this.elements.selectLocale().select('English').should('have.value', 'en_US');
    };
    afterPayRedirectBackToWebsite = () => {
        cy.visit('https://stg.apicenter.io/dashboard/account/billing?payment-method-status=expired#/payment-method');
    };
    //pay by using card
    paymentMolliebyCard = () => {
        this.paymentRedirects();
        this.elements.btnCard().click();
        cy.wait(3000);
        this.verifyErrormsg();
        this.elements
            .inputCardNumber()
            .its("0.contentDocument.body")
            .should("not.be.empty")
            .then((body) => {
                cy.wrap(body)
                    .find("#cardNumber")
                    .type('4000056655665556', { force: true });
        });
        this.elements
            .inputCardHolder()
            .its("0.contentDocument.body")
            .should("not.be.empty")
            .then((body) => {
                cy.wrap(body)
                    .find("#cardHolder")
                    .type('Test visa', { force: true });
        });
        this.elements
            .inputExpiryDate()
            .its("0.contentDocument.body")
            .should("not.be.empty")
            .then((body) => {
                cy.wrap(body)
                    .find("#expiryDate")
                    .type('1030', { force: true });
        });
        this.elements
            .inputcvv()
            .its("0.contentDocument.body")
            .should("not.be.empty")
            .then((body) => {
                cy.wrap(body)
                    .find("#verificationCode")
                    .type("234", { force: true });
        });
        this.elements.btnPaySubmit().should("be.visible").click();
        this.elements.togglePaid().click();
        this.elements.btnContinue().click();
        cy.wait(5000);
        this.afterPayRedirectBackToWebsite();
    };
    //pay by using ideal
    paymentMolliebyiDeal = () => {
        this.clickUpdatePaymentMethod();
        this.paymentRedirects();
        this.elements.btnIdeal().click();
        this.elements.btnIdealASNBank().click();
        this.elements.togglePaid().click();
        this.elements.btnContinue().click();
        // this.elements.linkBackwebsite().click();
        cy.wait(2000);
        // this.elements.linkBackwebsite().click();
        this.afterPayRedirectBackToWebsite();
    };
    //pay by using kbc
    paymentMolliebyKbcCbc = () => {
        //payment for cbc
        this.clickUpdatePaymentMethod();
        this.paymentRedirects();
        this.elements.btnKbcCBc().click();
        this.elements.btnCbc().click();
        this.elements.togglePaid().click();
        this.elements.btnContinue().click();
        this.afterPayRedirectBackToWebsite();
        cy.wait(3000);
        //payment for kbc
        this.clickUpdatePaymentMethod();
        this.paymentRedirects();
        this.elements.btnKbcCBc().click();
        this.elements.btnKbc().click();
        this.elements.togglePaid().click();
        this.elements.btnContinue().click();
        this.afterPayRedirectBackToWebsite();
        cy.wait(3000);
    };
    //verifying error message  
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
        this.elements.inputDisableSendingInvoiceTo().should("be.disabled");
        this.elements.inputCCInvoiceTo().should("be.visible").clear().type('test');
        this.elements.inputVATNumber().should("be.visible").clear().type('validnumber');
        this.elements.btnUpdate().click();
        this.elements.errormsg().should("be.visible").contains("The billing cc invoices to must be a valid email address.");
        this.elements.errormsg().should("be.visible").contains("This VAT identification number is invalid.");
    };
    //input the required fields
    inputRequiredFields = () => {
        this.elements.inputDisableSendingInvoiceTo().should("be.disabled");
        this.elements.inputCCInvoiceTo().should("be.visible").clear().type('panganibanmish.work@gmail.com');
        this.elements.inputVATNumber().should("be.visible").clear().type('NL861742163B01');
        this.elements.btnUpdate().click();
    };
    //download the invoice pdf
    clickDownloadButton = () => {
        this.elements.downloadFile().eq(2).click();
    };
}
module.exports = new BillingPage(); 