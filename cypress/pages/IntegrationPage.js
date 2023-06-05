class Integration {
    elements = {
        btnIntegrations: () =>
            cy.get("body > div:nth-child(1) > nav:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)"),
        lblStep: () =>
            cy.get(".color_theme.mb-2"),
        btn: () =>
            cy.get(".button"),
        btnPrrevious: () =>
            cy.get(".button.button_prev"),
        btnNext: () => 
            cy.get("button[class='button']"),
        btnApplication1: () => 
            cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)"),
        lblApp1: () => cy.get(".px-6.mb-6"),
        h3App: () => cy.get("h3[class='mx-6 mb-6']"),
        appStore: () => cy.get("h3[class='mx-6']"),
        appSearch: () => cy.get("#app-search"),
        appBox: () => cy.get(".inner-box.overflow-hidden.tile.tile_app"),
        appConnect: () => cy.get(".px-6.mb-4.justify-center"),
        appSettings: () => cy.get(".h5"),
        inputDisplayTitle: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(2)"),
        inputAPIpassword: () => cy.get("input[type='password']"),
        inputAPIusername: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > input:nth-child(2)"),
        inputAPIurl: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > input:nth-child(2)"),
        btnSave: () => cy.get(".button.button_success"),
        btnPrevious: () => cy.get("button[role='button']"),
        btnTestConnection: () => cy.get(".button.button_app"),


    };

    followStep = () => {
        this.elements.lblStep()
        .should("be.visible").contains("Step 1");
        this.elements.btn()
        .should("be.visible").contains("Start");
        this.elements.lblStep()
        .should("be.visible").contains("Step 2 - Connect your apps");
        this.elements.btnNext().click();
        this.connectApplication1();
    };

    connectApplication1 = () => {
        this.elements.btnApplication1().click();
        this.elements.lblApp1().should("be.visible").contains("Application 1");
        this.elements.h3App().should("be.visible").contains("Your Applications");
        this.elements.appStore().should("be.visible").contains("APIcenter appstore");
        this.elements.appSearch().should("be.visible").type("Shopify");
        this.elements.appBox().should("be.visible").contains("Shopify").click();
        this.elements.appConnect().should("be.visible").contains("Shopify CONNECT");
        this.elements.appSettings().should("be.visible").contains("Application Settings");
        this.elements.inputDisplayTitle().should("be.visible").type("Shopify");
        this.elements.inputAPIpassword().should("be.visible").type("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");
        this.elements.inputAPIusername().should("be.visible").type("348193aa4d7df599082bc16454e94054");
        this.elements.inputAPIurl().should("be.visible").type("api3000.myshopify.com ");
        this.elements.btnSave().click();
        cy.wait(2000);
        this.elements.btnTestConnection().click();
    };
    
}