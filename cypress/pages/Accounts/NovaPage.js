class NovaPage {
    elements = {
        inputEmail: () => cy.get("input#email"),
        inputPassword: () => cy.get('input#password'),
        checkRememberMe: () => cy.get(".flex.items-center.text-xl.font-bold"),
        btnLogin: () => cy.get("button[type='submit']"),
        sideBarInvoices: () => cy.get(".text-white.text-justify.no-underline.dim[href='/nova/resources/invoices']"),
        sideBarOrders: () => cy.get(".text-white.text-justify.no-underline.dim[href='/nova/resources/orders']"),
        sideBarSubscriptions: () => cy.get(".text-white.text-justify.no-underline.dim[href='/nova/resources/subscriptions']"),
        search: () => cy.get("input[placeholder='Search']"),
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
        sideBarUsers: () => cy.get(".text-white.text-justify.no-underline.dim[href='/nova/resources/users']"),
        btnDeleteUser: () => cy.get("button[class='inline-flex appearance-none cursor-pointer text-70 hover:text-primary mr-3 has-tooltip']"),
        verifyDeleteResource: () => cy.get(".mb-6.text-90.font-normal.text-xl"),
        btnConfirmDelete: () => cy.get("#confirm-delete-button"),
    };
    Nova = (email, password) => {
        cy.viewport(1800, 1000);
        cy.visit('/nova/login');
        this.elements.inputEmail().should("be.visible").type(email);
        this.elements.inputPassword().should("be.visible").type(password);
        this.elements.checkRememberMe().should("be.visible").click();
        this.elements.btnLogin().should("be.visible").click();
    };
    sidebarNovaInvoices = () => {
        this.elements.sideBarInvoices().should("be.visible").click();
    };
    searchInvoiceByID = () => {
        this.elements.search().should("be.visible").type('Michelle Panganiban').clear();
    };
    viewInvoiceAndDownloadInvoice = () => {
        this.elements.search().should("be.visible").type('Michelle Panganiban');
        this.elements.clickEyesIcon().should("be.visible").click();
        this.elements.selectActionInvoice().select('Download').should('have.value', 'download');
        this.elements.btnDownload().should("be.visible").click();
        this.elements.modalBtnCancel().should("be.visible").click();
        this.elements.btnDownload().should("be.visible").click();
        this.elements.modalBtnDownload().should("be.visible").click();
        this.sidebarNovaInvoices();
    };
    recipientDetails = () => {
        this.elements.clickRecipient().should("be.visible").click();
        this.elements.recipient().scrollIntoView({ duration: 100000 }).should("be.visible");
        this.elements.tabDuskApplications().should("be.visible").click();
        this.elements.tabDuskIntegrations().should("be.visible").click();
        this.elements.tabDuskSubscriptions().should("be.visible").click();
        this.elements.tabDuskOrders().should("be.visible").click();
    };
    sidebarNovaOrders = () => {
        this.elements.sideBarOrders().should("be.visible").click();
        this.elements.ordersIndex().should("be.visible").contains("Orders");
    };
    sideNovaSubscriptions = () => {
        this.elements.sideBarSubscriptions().should("be.visible").click();
        this.elements.subscriptionsIndex().should("be.visible").contains("Subscriptions ");
    };
    Billing = () => {
        this.sidebarNovaInvoices();
        this.searchInvoiceByID();
        this.viewInvoiceAndDownloadInvoice();
        this.recipientDetails();
        this.sidebarNovaOrders();
        this.sideNovaSubscriptions();
    };
    //delete the new register user of Michelle Test
    deleteUsers = () => {
        this.elements.sideBarUsers().should("be.visible").contains("Users").click();
        this.elements.search().should("be.visible").type("Michelle Tester");
        this.elements.btnDeleteUser().should("be.visible").click();
        this.elements.verifyDeleteResource().should("be.visible").contains("Delete Resource");
        this.elements.btnConfirmDelete().should("be.visible").click();
    };
};
module.exports = new NovaPage();