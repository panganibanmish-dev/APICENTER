class NovaPage {
    elements = {
        inputEmail: () => cy.get("input#email"),
        inputPassword: () => cy.get('input#password'),
        checkRememberMe: () => cy.get(".flex.items-center.text-xl.font-bold"),
        btnLogin: () => cy.get("button[type='submit']"),
        sideBarInvoices: () => cy.get(".text-white.text-justify.no-underline.dim[href='/nova/resources/invoices']"),
        sideBarOrders: () => cy.get(".text-white.text-justify.no-underline.dim[href='/nova/resources/orders']"),
        sideBarSubscriptions: () => cy.get(".text-white.text-justify.no-underline.dim[href='/nova/resources/subscriptions']"),
        searchInvoice: () => cy.get("input[placeholder='Search']"),
        ID: () => cy.get(".text-left.text-left"),
        clickEyesIcon: () => cy.get("tbody tr:nth-child(1) td:nth-child(8) div:nth-child(1) span:nth-child(2)"),
        selectActionInvoice: () => cy.get(".form-control.form-select.mr-2"),
        btnDownload: () => cy.get(".fill-current.text-white"),
        modalBtnDownload: () => cy.get("button[type='submit']"),
        modalBtnCancel: () => cy.get(".btn.btn-link.dim.cursor-pointer.text-80.ml-auto.mr-6"),
        clickRecipient: () => cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1) > span:nth-child(1) > a:nth-child(1)'),
        recipient: () => cy.get("div[class='mb-8']"),
        tabDuskApplications: () => cy.get("button[dusk='applications-tab']"),
        tabDuskIntegrations: () => cy.get("button[dusk='integrations-tab']"),
        tabDuskSubscriptions: () => cy.get("button[dusk='subscriptions-tab']"),
        tabDuskOrders: () => cy.get("button[dusk='orders-tab']"),
        btnNext: () => cy.get(".btn.btn-link.py-3.px-4.text-primary.dim[rel='next']"),
        btnPrev: () => cy.get(".btn.btn-link.py-3.px-4.text-primary.dim[rel='prev']"),
        ordersIndex: () => cy.get("div[dusk='orders-index-component']"),
        subscriptionsIndex: () => cy.get("div[dusk='subscriptions-index-component']"),
    };
    Nova = (email, password) => {
        cy.viewport(1800, 1000);
        cy.visit('/nova/login');
        this.elements.inputEmail().type(email, { delay: 200 });
        this.elements.inputPassword().type(password, { delay: 200 });
        this.elements.checkRememberMe().click();
        this.elements.btnLogin().click();
    };
    sidebarNovaInvoices = () => {
        this.elements.sideBarInvoices().click();
        cy.wait(3000);
    };
    searchInvoiceByID = () => {
        this.elements.searchInvoice().type('382', { delay: 2000 }).clear();
        cy.wait(5000);
    };
    viewInvoiceAndDownloadInvoice = () => {
        this.elements.clickEyesIcon().click();
        cy.wait(2000);
        this.elements.selectActionInvoice().select('Download').should('have.value', 'download');
        cy.wait(2000);
        this.elements.btnDownload().click();
        cy.wait(2000);
        this.elements.modalBtnCancel().click();
        this.elements.btnDownload().click();
        cy.wait(2000);
        this.elements.modalBtnDownload().click();
        this.sidebarNovaInvoices();
    };
    recipientDetails = () => {
        this.elements.clickRecipient().should("be.visible").click();
        cy.wait(2000);
        this.elements.recipient().scrollIntoView({ duration: 100000 }).should("be.visible").contains("User Details: Michelle Panganiban General Applications Integrations Subscriptions Orders ID ");
        cy.wait(5000);
        this.elements.tabDuskApplications().click();
        cy.wait(5000);
        this.elements.tabDuskIntegrations().click();
        cy.wait(5000);
        this.elements.tabDuskSubscriptions().click();
        cy.wait(5000);
        this.elements.tabDuskOrders().click();
        cy.wait(5000);
        this.elements.btnNext().click();
        cy.wait(5000);
        this.elements.btnPrev().click();
        cy.wait(5000);
    };
    sidebarNovaOrders = () => {
        this.elements.sideBarOrders().click();
        cy.wait(3000);
        this.elements.ordersIndex().should("be.visible").contains("Orders ");
        cy.wait(5000);
    };
    sideNovaSubscriptions = () => {
        this.elements.sideBarSubscriptions().click();
        cy.wait(3000);
        this.elements.subscriptionsIndex().should("be.visible").contains("Subscriptions ");
        cy.wait(5000);
    };
    Billing = () => {
        this.sidebarNovaInvoices();
        this.searchInvoiceByID();
        this.viewInvoiceAndDownloadInvoice();
        cy.wait(5000);
        this.recipientDetails();
        this.sidebarNovaOrders();
        this.sideNovaSubscriptions();
    };
}
module.exports = new NovaPage();