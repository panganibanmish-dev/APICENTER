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
            cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)"),
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
            cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)"),
        appBox2: () =>
            cy.get(".all-app-tile.inner-box.overflow-hidden.tile.cursor-pointer.inner-box.overflow-hidden.tile.tile_app"),
        appToggle: () => cy.get(".application_toolbar_toggle"),
        appEdit: () => cy.get("div[class='grid-2 justify-content-start mt-4 mb-4'] p:nth-child(1)"),
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
            .type("Shopify").clear();
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
            .contains("Shopware 6.4 (Shopware 6.4)")
            .click();
        cy.wait(5000);
    };
    //step 3 synchronize your applications
    followStep3 = () => {
        const lblStep3 = ".color_theme.pb-2.flex.items-center"
        const lblSynchronization = "div[class='wizard_grid'] div div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) h3:nth-child(1)"
        const b2bPricelist10Toggle = ".my-4 input#check-0-0"
        const product9Toggle = "label[for='check-0-1']"
        const stockToggle = "label[for='check-0-2']"
        const salesOrderToggle = "label[for='check-0-3']"
        const total = ".flex.justify-end.mt-6.mb-2.tile"

        cy.get(lblStep3)
            .should('be.visible')
            .contains("Step 3 Synchronize your applications");
        cy.get(lblSynchronization)
            .should('be.visible')
            .contains("B2B Price Synchronization");
        cy.get(b2bPricelist10Toggle).check();
        // cy.get(product9Toggle)
        //     .click();
        // cy.get(stockToggle)
        //     .click();
        // cy.get(salesOrderToggle)
        //     .click();
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
        const lblstep5OrderSummary = ".color_theme.h4.mb-3"
        const total = "tbody tr:nth-child(2) td:nth-child(1)"

        cy.get(lblstep5OrderSummary).should("be.visible").contains("Step 5 - Order Summary");
        cy.get(total).should("be.visible");

        this.elements.btnSubmit().click();
    };
}

module.exports = new AddIntegrationsPage();