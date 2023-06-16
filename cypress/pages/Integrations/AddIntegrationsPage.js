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
        appBox1: () =>
            cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1)"),
        appBox2: () =>
            cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4)"),
        appToggle: () =>
            cy.get(".application_toolbar_toggle"),
        appEdit: () =>
            cy.get("div[class='grid-2 justify-content-start mt-4 mb-4'] p:nth-child(1)"),
        appConnect: () =>
            cy.get(".px-6.mb-4.justify-center"),
        appSettings: () =>
            cy.get(".h5"),
        inputDisplayTitle: () =>
            cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(2)"),
        inputAPIandClientpassword: () =>
            cy.get("input[type='password']"),
        inputAPIusername: () =>
            cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > input:nth-child(2)"),
        inputAPIurl: () =>
            cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > input:nth-child(2)"),
        btnSave: () =>
            cy.get(".button.button_success"),
        btnPrevious: () =>
            cy.get("button[role='button']"),
        btnTestConnection: () =>
            cy.get(".button.button_app"),

        toggleUpdateExistingproduct: () => cy.get("label[for='update-existing-products24-dependency-36']"),
        toggleUpdatecategory: () => cy.get("label[for='update-category15-null']"),
        toggleUpdateimages: () => cy.get("label[for='update-images13-null']"),
        toggleUpdateDescription: () => cy.get("label[for='update-description18-null']"),
        toggleUpdateProductTitle: () => cy.get("label[for='update-product-title20-null']"),
    };
    //redirect to integration
    gotoIntegrations = () => {
        this.elements
            .btnIntegrations()
            .click();
    };
    //start add integration
    addIntegration = () => {
        this.elements
            .lblYourIntegrations()
            .should("be.visible")
            .contains("Your Integrations");
        this.elements
            .btn()
            .should("be.visible")
            .contains("Add Integration")
            .click();
    };
    //step 1
    followStep1 = () => {
        const label1 = ".h5";
        const label2 = "div[class='grid-2 wizard_grid'] div p";

        this.elements
            .lblStep();
        cy.get(label1)
            .should("be.visible")
            .contains("Follow the steps to complete your integration.");
        cy.get(label2)
            .should("be.visible")
            .contains("In the following steps you can connect your apps and add your settings.");
        this.elements
            .btn()
            .should("be.visible")
            .contains("Start")
            .click();
    };
    //step 2 add applications
    followStep2 = () => {
        this.connectApplication1();
        this.connectApplication2();
        this.elements
            .btnNext()
            .click();
    };
    //Add Application 1
    connectApplication1 = () => {
        this.elements
            .btnApplication1()
            .click();
        this.elements
            .lblApp()
            .should("be.visible")
            .contains("Application 1");
        this.elements
            .h3App()
            .should("be.visible")
            .contains("Your Applications");
        this.elements
            .appStore()
            .should("be.visible")
            .contains("APIcenter appstore");
        this.elements
            .appSearch()
            .should("be.visible")
            .type("Magento 2").clear();
        cy.wait(2000);
        this.elements
            .appBox1()
            .click();
        cy.wait(2000);
        this.elements
            .appToggle()
            .click();
        this.elements
            .appEdit()
            .should("be.visible")
            .contains("Edit")
            .click();
        this.elements
            .btnTestConnection()
            .click();
        cy.wait(5000);
        this.elements
            .btnSave()
            .click();
        cy.wait(5000);
    };
    //Add Application 2
    connectApplication2 = () => {
        cy.reload();
        this.elements
            .btnApplication2()
            .click();
        this.elements
            .appBox2()
            .should("be.visible")
            .click();
        cy.wait(5000);
    };
    //step 3 synchronize your applications
    followStep3 = () => {
        const customerToggle = 'input#check-2-0[type="checkbox"]'
        const product9Toggle = 'input#check-0-1[type="checkbox"]'
        const salesOrderToggle = 'input#check-0-2[type="checkbox"]'
        const stockToggle = 'input#check-0-4[type="checkbox"]'
        const total = ".flex.justify-end.mt-6.mb-2.tile"

        cy.get(customerToggle)
            .check({ force: true });
        cy.get(product9Toggle)
            .check({ force: true });
        cy.get(salesOrderToggle)
            .check({ force: true });
        cy.get(stockToggle)
            .check({ force: true });
        cy.get(total)
            .should("be.visible")
        this.elements
            .btnNext()
            .click();
    };
    //Step 4 settings
    followStep4 = () => {
        this.elements.btnNext().click();
    };
    //step 5 - order summary
    followStep5 = () => {
        this.elements.btnSubmit().should('be.visible').click();
        this.redirectToDasboard();
    };
    redirectToDasboard = () => {
        cy.visit("https://stg.apicenter.io/dashboard/")
    };
}
module.exports = new AddIntegrationsPage();