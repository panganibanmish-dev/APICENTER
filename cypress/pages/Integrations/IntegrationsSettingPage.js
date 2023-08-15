class IntegrationsSettingPage {
    elements = {
        cardTile: () => cy.get('.tile.tile-wide.cursor-pointer.overflow-hidden.h-100'),
        tabSettings: () => cy.get("main a:nth-child(2)"),
        //prod elements
        currenciesSettings: () => cy.get("body > div:nth-child(2) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)"),
        customerSettings: () => cy.get("body > div:nth-child(2) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"),
        generalIntegrationSetting: () => cy.get("body > div:nth-child(2) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)"),
        stockAndwarehouseSettings: () => cy.get("body > div:nth-child(2) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1)"),
        taxAndtaxratesSettings: () => cy.get("body > div:nth-child(2) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1)"),
        unitofmeasurementSettings: () => cy.get("body > div:nth-child(2) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1)"),
        btnSaveSettings: () => cy.get('.button.mr-6'),
        tabActivity: () => cy.get("main a:nth-child(3)"),

        //stg elements
        stg_currenciesSettings: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)"),
        stg_customerSettings: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"),
        stg_generalIntegrationSetting: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)"),
        stg_stockAndwarehouseSettings: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1)"),
        stg_taxAndtaxratesSettings: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1)"),
        stg_unitofmeasurementSettings: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1)"),

        //dev elements
        dev_currenciesSettings: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)"),
        dev_customerSettings: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"),
        dev_generalIntegrationSetting: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)"),
        dev_stockAndwarehouseSettings: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)"),
        dev_taxAndtaxratesSettings: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1)"),
        dev_unitofmeasurementSettings: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1)"),
    };

    //It should be reloading the current page as this tab is opened by default upon redirecting
    OverviewConfigureFlow = () => {
        cy.intercept('**/overview').as('clickcardTile')
        this.elements.cardTile().should("be.visible").click();
        cy.wait('@clickcardTile')
    };
    //It should be redirecting to the settings of the integration
    IntegrationSettings = () => {
        const environment = Cypress.config().env;
        this.elements.tabSettings().should("be.visible").click();
        if (environment === "prod") {
            this.elements.currenciesSettings().should("be.visible").click();
            this.elements.customerSettings().should("be.visible").click();
            this.elements.generalIntegrationSetting().should("be.visible").click();
            this.elements.stockAndwarehouseSettings().should("be.visible").click();
            this.elements.taxAndtaxratesSettings().should("be.visible").click();
            this.elements.unitofmeasurementSettings().should("be.visible").click();
            this.elements.btnSaveSettings().should("be.visible").click();
        } else if (environment === "staging") {
            // this.elements.tabSettings().should("be.visible").click();
            this.elements.stg_currenciesSettings().should("be.visible").click();
            this.elements.stg_customerSettings().should("be.visible").click();
            this.elements.stg_generalIntegrationSetting().should("be.visible").click();
            this.elements.stg_stockAndwarehouseSettings().should("be.visible").click();
            this.elements.stg_taxAndtaxratesSettings().should("be.visible").click();
            this.elements.stg_unitofmeasurementSettings().should("be.visible").click();
            this.elements.btnSaveSettings().should("be.visible").click();
        } else {
            // this.elements.tabSettings().should("be.visible").click();
            this.elements.dev_currenciesSettings().should("be.visible").click();
            this.elements.dev_customerSettings().should("be.visible").click();
            this.elements.dev_generalIntegrationSetting().should("be.visible").click();
            this.elements.dev_stockAndwarehouseSettings().should("be.visible").click();
            this.elements.dev_taxAndtaxratesSettings().should("be.visible").click();
            this.elements.dev_unitofmeasurementSettings().should("be.visible").click();
            this.elements.btnSaveSettings().should("be.visible").click();
        }
    };
    //It should be redirecting to the activities done upon the integration
    ActivityTab = () => {
        this.elements.tabActivity().should("be.visible").click();
    };
}
module.exports = new IntegrationsSettingPage();