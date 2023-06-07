class IntegrationsPage {
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
        btnApplication1: () =>
            cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)"),
        btnApplication2: () =>
            cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2)"),
        lblApp: () =>
            cy.get(".px-6.mb-6"),
        h3App: () =>
            cy.get("h3[class='mx-6 mb-6']"),
        appStore: () =>
            cy.get("h3[class='mx-6']"),
        appSearch: () =>
            cy.get("#app-search"),
        appBox: () =>
            cy.get(".inner-box.overflow-hidden.tile.tile_app"),
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
            .lblStep()
            .should("be.visible")
            .contains("Step 1");
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
        this.elements
            .lblStep()
            .should("be.visible")
            .contains("Step 2 - Connect your apps");
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
            .type("Shopify");
        cy.wait(2000);
        this.elements
            .appBox()
            .click();
        this.elements
            .appConnect()
            .should("be.visible")
            .contains("Shopify CONNECT");
        this.elements
            .appSettings()
            .should("be.visible")
            .contains("Application Settings");
        this.elements
            .inputDisplayTitle()
            .should("be.visible")
            .type("Shopify");
        this.elements
            .inputAPIandClientpassword()
            .should("be.visible")
            .type("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");
        this.elements
            .inputAPIusername()
            .should("be.visible")
            .type("348193aa4d7df599082bc16454e94054");
        this.elements
            .inputAPIurl()
            .should("be.visible")
            .type("api3000.myshopify.com ");
        this.elements
            .btnSave()
            .click();
        cy.wait(2000);
        this.elements
            .btnTestConnection()
            .click();
        cy.wait(5000);
    };
    //Add Application 2
    connectApplication2 = () => {
        const clientId = "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(2)"

        this.elements
            .btnApplication2()
            .click();
        this.elements
            .lblApp()
            .should("be.visible")
            .contains("Application 2");
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
            .type("Shopware 6.4");
        this.elements
            .appBox()
            .should("be.visible")
            .contains("Shopware 6.4")
            .click();
        this.elements
            .appConnect()
            .should("be.visible")
            .contains("Shopware 6.4 CONNECT");
        this.elements
            .appSettings()
            .should("be.visible")
            .contains("Application Settings");
        this.elements
            .inputDisplayTitle()
            .should("be.visible")
            .type("Shopware 6.4");
        cy.get(clientId)
            .should("be.visible")
            .type("SWIAUER4EVFSMHDJYJNJEFVOWQ");
        this.elements
            .inputAPIandClientpassword()
            .should("be.visible")
            .type("Z1NwdkZBTDhMNVRiMHhEejhqZHZUR2JZSFpKNThUcFVaOGNDc3k");
        this.elements
            .inputAPIurl()
            .should("be.visible")
            .type("https://shopware6.apicenter.dev/public/admin#/login");
        this.elements
            .btnSave()
            .click();
        cy.wait(2000);
        this.elements
            .btnTestConnection()
            .click();
        cy.wait(5000);
        //step 3 synchronize your applications
    };
}

module.exports = new IntegrationsPage();