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
        lblApp: () => cy.get(".px-6.mb-6"),
        h3App: () => cy.get("h3[class='mx-6 mb-6']"),
        appStore: () => cy.get("h3[class='mx-6']"),
        appSearch: () => cy.get("#app-search"),
        appBox: () => cy.get(".inner-box.overflow-hidden.tile.tile_app"),
        appConnect: () => cy.get(".px-6.mb-4.justify-center"),
        appSettings: () => cy.get(".h5"),
        inputDisplayTitle: () =>
            cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(2)"),
        inputAPIandClientpassword: () => cy.get("input[type='password']"),
        inputAPIusername: () =>
            cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > input:nth-child(2)"),
        inputAPIurl: () =>
            cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > input:nth-child(2)"),
        btnSave: () => cy.get(".button.button_success"),
        btnPrevious: () => cy.get("button[role='button']"),
        btnTestConnection: () => cy.get(".button.button_app"),
    };

    gotoIntegrations = () => {
        this.elements.btnIntegrations().click();
    };

    followStep = () => {
        this.elements.lblYourIntegrations().should("be.visible").contains("Your Integrations");
        this.elements.btn().should("be.visible").contains("Add Integration").click();
        this.elements.lblStep()
            .should("be.visible").contains("Step 1");
        this.elements.btn()
            .should("be.visible").contains("Start").click();
        this.elements.lblStep()
            .should("be.visible").contains("Step 2 - Connect your apps");
        this.connectApplication1();
        this.connectApplication2();
        this.elements.btnNext().click();
    };

    connectApplication1 = () => {
        this.elements.btnApplication1().click();
        this.elements.lblApp()
            .should("be.visible").contains("Application 1");
        this.elements.h3App()
            .should("be.visible").contains("Your Applications");
        this.elements.appStore()
            .should("be.visible").contains("APIcenter appstore");
        this.elements.appSearch()
            .should("be.visible").type("Shopify");
        cy.wait(2000);
        this.elements.appBox()
            .should("be.visible").contains("Shopify").click();
        this.elements.appConnect()
            .should("be.visible").contains("Shopify CONNECT");
        this.elements.appSettings()
            .should("be.visible").contains("Application Settings");
        this.elements.inputDisplayTitle()
            .should("be.visible").type("Shopify");
        this.elements.inputAPIandClientpassword()
            .should("be.visible").type("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");
        this.elements.inputAPIusername()
            .should("be.visible").type("348193aa4d7df599082bc16454e94054");
        this.elements.inputAPIurl()
            .should("be.visible").type("api3000.myshopify.com ");
        this.elements.btnSave().click();
        cy.wait(2000);
        this.elements.btnTestConnection().click();
        cy.wait(5000);
        this.elements.btnSave().click();
    };

    connectApplication2 = () => {
        const clientID = "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(2)"
        const division = "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > input:nth-child(2)"
        const country = "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > input:nth-child(2)"

        this.elements.btnApplication2().click();
        this.elements.lblApp()
            .should("be.visible").contains("Application 2");
        this.elements.h3App()
            .should("be.visible").contains("Your Applications");
        this.elements.appStore()
            .should("be.visible").contains("APIcenter appstore");
        this.elements.appSearch()
            .should("be.visible").type("Exact Online");
        this.elements.appConnect()
            .should("be.visible").contains("Exact Online CONNECT");
        this.elements.appSettings()
            .should("be.visible").contains("Application Settings");
        this.elements.inputDisplayTitle()
            .should("be.visible").type("Exact Online");
        cy.get(clientID)
            .should("be.visible").type("9305534a-609b-4a7b-ba80-c6eafa034d9c");
        this.elements.inputAPIandClientpassword()
            .should("be.visible").type("rQ1oOvz4OYXz");
        cy.get(country)
            .should("be.visible").type("US");
        cy.get(division)
            .should("be.visible").type("3165647");
        this.elements.btnSave().click();
        cy.wait(2000);
        this.elements.btnTestConnection().click();
        cy.wait(5000);
        this.elements.btnSave().click();
    };

}

module.exports = new IntegrationsPage();