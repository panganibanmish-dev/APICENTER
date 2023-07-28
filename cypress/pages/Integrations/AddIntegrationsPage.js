class AddIntegrationsPage {
    elements = {
        btnIntegrations: () =>
            cy.get("body > div:nth-child(1) > nav:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)"),
        lblStep: () =>
            cy.get(".color_theme.mb-2"),
        btn: () =>
            cy.get(".button"),
        lblYourIntegrations: () => cy.get(".h3.mb-0.mr-3"),
        btnPrrevious: () =>
            cy.get(".button.button_prev"),
        btnNext: () =>
            cy.get("button[class='button']"),
        btnSubmit: () =>
            cy.get("button[class='button'] span"),
        btnApplication1: () =>
            cy.get("div[class='grid-2 justify-content-start mt-4 mb-4'] div:nth-child(1) div:nth-child(1) div:nth-child(2)"),
        btnApplication2: () =>
            cy.get(".icon_add"),
        lblApp: () =>
            cy.get(".px-6.mb-6"),
        h3App: () =>
            cy.get("h3[class='mx-6 mb-6']"),
        appStore: () =>
            cy.get("h3[class='mx-6']"),
        appSearch: () =>
            cy.get("#app-search"),
        appBox: () => cy.get(".all-app-tile.inner-box.overflow-hidden.tile.cursor-pointer.inner-box.overflow-hidden.tile.tile_app"),
        appToggle: () =>
            cy.get(".application_toolbar_toggle"),
        appEdit: () =>
            cy.get("div[class='grid-2 justify-content-start mt-4 mb-4'] p:nth-child(1)"),
        appSettings: () =>
            cy.get(".h5"),
        btnSave: () =>
            cy.get(".button.button_success"),
        btnPrevious: () =>
            cy.get("button[role='button']"),
        btnTestConnection: () =>
            cy.get("button[class='button button_app'] span"),
        product9Toggle: () => cy.get('input#check-1-0[type="checkbox"]'),
        total: () => cy.get(".flex.justify-end.mt-6.mb-2.tile"),
        label1: () => cy.get(".h5"),
        label2: () => cy.get("div[class='grid-2 wizard_grid'] div p"),
    };
    //redirect to integration
    gotoIntegrations = () => {
        this.elements.btnIntegrations().should("be.visible").click();
    };
    //start add integration
    addIntegration = () => {
        this.elements.lblYourIntegrations().should("be.visible").contains("Your Integrations");
        this.elements.btn().should("be.visible").contains("Add Integration").click();
    };
    //step 1
    followStep1 = () => {
        this.elements.lblStep().should("be.visible");
        this.elements.label1().should("be.visible").contains("Follow the steps to complete your integration.");
        this.elements.label2().should("be.visible").contains("In the following steps you can connect your apps and add your settings.");
        this.elements.btn().should("be.visible").contains("Start").click();
    };
    //step 2 add applications
    followStep2 = () => {
        this.connectApplication1();
        this.connectApplication2();
        this.elements.btnNext().should("be.visible").click();
    };
    //Add Application 1
    connectApplication1 = () => {
        this.elements.btnApplication1().should("be.visible").click();
        this.elements.lblApp().should("be.visible").contains("Application 1");
        this.elements.h3App().should("be.visible").contains("Your Applications");
        this.elements.appStore().should("be.visible").contains("APIcenter appstore");
        this.elements.appSearch().should("be.visible").type("Magento 2").clear();
        // cy.wait(2000);
        this.elements.appBox().eq(0).should("be.visible").click();
        // cy.wait(2000);
        this.elements.appToggle().should("be.visible").click();
        this.elements.appEdit().should("be.visible").contains("Edit").click();
        this.elements.btnTestConnection().should("be.visible").contains("Test Connection").click();
        // cy.wait(5000);
        this.elements.btnSave().should("be.visible").click();
        // cy.wait(5000);
    };
    //Add Application 2
    connectApplication2 = () => {
        cy.reload();
        this.elements.btnApplication2().should("be.visible").click();
        this.elements.appBox().eq(1).should("be.visible").click();
        // cy.wait(5000);
    };
    //step 3 synchronize your applications
    followStep3 = () => {
        this.elements.product9Toggle().should("be.visible").click({ force: true });
        // cy.wait(3000);
        this.elements.total().should("be.visible");
        // cy.wait(3000);
        this.elements.btnNext().should("be.visible").click();
        // cy.wait(3000);
    };
    //Step 4 settings*
    followStep4 = () => {
        this.elements.btnNext().should("be.visible").click();
    };
    //step 5 - order summary
    followStep5 = () => {
        this.elements.btnSubmit().should('be.visible').click();
        this.redirectToDasboard();
    };
    redirectToDasboard = () => {
        cy.visit("/dashboard/")
    };
}
module.exports = new AddIntegrationsPage();