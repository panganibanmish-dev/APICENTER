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
    };
    
    clickBillingTab = () => {
        this.elements.btnAccount().click();
        this.elements.btnBilling().should("be.visible").contains("Billing").click();
    };

    verifyLabel = () => {
        this.elements.lblActiveSubscriptions();
        this.elements.lblCurrentPlan();
        this.elements.lblFooter();
        this.elements.lblPaymentInfo();
        this.elements.lblWarning();
        this.elements.lblWarning2();
        this.elements.lblSendingInvoiceTo();
        this.elements.lblCCInvoiceTo();
        this.elements.lblVATNumber();
    };

    clickUpdatePaymentMethod = () => {
        this.elements.btnPaymentMethod().click();
    };

    clickUpdatePaymentInfo = () => {
        this.elements.btnUpdate().click();
    };

    checkRequiredFields = (invoice_to, vat_id) => {
        this.elements.inputDisableSendingInvoiceTo().should("be.vsible");
        this.elements.inputCCInvoiceTo().should("be.visible").type(invoice_to);
        this.elements.inputVATNumber().should("be.visible").type(vat_id);
        this.elements.btnUpdate().click();

        this.elements.errormsg().should("be.visible").contains("The billing cc invoices to must be a valid email address.");
        this.elements.errormsg().should("be.visible").contains("This VAT identification number is invalid.");
    };

    



}

module.exports = new BillingPage(); 