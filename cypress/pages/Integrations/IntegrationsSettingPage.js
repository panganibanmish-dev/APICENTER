class IntegrationsSettingPage {
    elements = {
        cardTile: () => cy.get('.tile.tile-wide.cursor-pointer.overflow-hidden.h-100'),
        tabSettings: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(2)"),
        currenciesSettings: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)"),
        customerSettings: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"),
        generalIntegrationSetting: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)"),
        stockAndwarehouseSettings: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1)"),
        taxAndtaxratesSettings: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1)"),
        unitofmeasurementSettings: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1)"),
        btnSaveSettings: () => cy.get('.button.mr-6'),
        tabActivity: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(3)"),
    };

    //It should be reloading the current page as this tab is opened by default upon redirecting
    OverviewConfigureFlow = () => {
        this.elements.cardTile().click();
        cy.wait(2000);
    };
    //It should be redirecting to the settings of the integration
    IntegrationSettings = () => {
        this.elements.tabSettings().click();
        this.elements.currenciesSettings().click();
        this.elements.customerSettings().click();
        this.elements.generalIntegrationSetting().click();
        this.elements.stockAndwarehouseSettings().click();
        this.elements.unitofmeasurementSettings().click();
        this.elements.btnSaveSettings().click();
    };
    //It should be redirecting to the activities done upon the integration
    ActivityTab = () => {
        this.elements.tabActivity().click();
    };
}

module.exports = new IntegrationsSettingPage();