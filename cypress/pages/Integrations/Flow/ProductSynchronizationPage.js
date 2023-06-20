class ProductSyncronizationPage {
    elements = {
        cardTile: () => cy.get(".tile.tile-wide.cursor-pointer.overflow-hidden.h-100"),
        tabOverview: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1)"),
        flow: () => cy.get(".tile.tile_flow.mx-3.text-center.overflow-hidden.cursor-pointer"),
        resumeFlow: () => cy.get('.button'),
        cancelBtn: () => cy.get("button[class='swal2-cancel swal2-styled']"),
        okBtn: () => cy.get("button[class='swal2-confirm swal2-styled']"),
        dialogActivate: () => cy.get("div[role='dialog']"),
        tabSettings: () => cy.get("main a:nth-child(1)"),
        tabDataMapping: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)"),
        adminsettingsExpand: () => cy.get("div[class='m-4'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1)"),
        debugEnabled: () => cy.get("label[for='debug-enabled13-null']"),
        notifExpand: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"),
        expand: () => cy.get("Expander"),
        btnSaveSettings: () => cy.get("button[type='submit']"),
        btnDefault: () => cy.get(".button.mr-6"),
        btnConfirm: () => cy.get(".button.ml-3"),
        tabEndpoints: () => cy.get("a:nth-child(5)"),
        btnBackDefault: () => cy.get("div[class='ml-auto'] button[type='button']"),
        btnSaveEndpoint: () => cy.get("button[type='submit'] span"),
        tabFilterOptions: () => cy.get("#app > main > div > div.tile.tabs.mx-6.mt-4 > div > a:nth-child(7)"),
        tabActivity: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(8)"),
        selectStatus: () => cy.get("select[dusk='filter-status-select']"),
        selectApplicationDirection: () => cy.get("select[dusk='filter-direction-select']"),
        selectFlow: () => cy.get("select[dusk='filter-flow-select']"),
        selectTrigger: () => cy.get("select[dusk='filter-trigger-select']"),
        tabAdmin: () => cy.get('body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(9)'),
        btnTriggerManual: () => cy.get("button[class='btn btn-primary']"),
    };
    clickCardTile = () => {
        this.elements
            .cardTile()
            .click();
    };
    clickOverview = () => {
        this.elements
            .tabOverview()
            .click();
    };
    clickResumeFlow = () => {
        this.elements
            .resumeFlow()
            .click()
            .should("be.visible")
            .contains("Resume Flow");
    };
    clickOkBtn = () => {
        this.elements
            .okBtn()
            .click();
    };
    clickCancelBtn = () => {
        this.elements
            .cancelBtn()
            .click();
    };
    dialogActivateModal = () => {
        this.elements.dialogActivate().should("be.visible");
        this.clickOkBtn();
    };
    //product flow
    productResumeFlow = () => {
        this.elements
            .flow()
            .click()
            .should("be.visible")
            .contains("Product Synchronization");
        this.clickOverview();
        this.clickResumeFlow();
        this.clickCancelBtn();
        this.clickResumeFlow();
        this.clickOkBtn();
        this.dialogActivateModal();
    };
    productSettingsFlow = () => {
        this.elements.tabSettings().click();
        this.elements.adminsettingsExpand().click();
        this.elements.debugEnabled().click();
        this.elements.notifExpand().click();
        this.elements.expand().click().should("be.visible").contains("Attributes & Features");
        this.elements.expand().should("be.visible").contains("Categories").click();
        this.elements.expand().should("be.visible").contains("General flow setting").click();
        this.elements.expand().should("be.visible").contains("Product Settings").click();
        this.elements.expand().should("be.visible").contains("Run behaviour").click();
        this.elements.expand().should("be.visible").contains("Stock & Warehouse Settings").click();
        this.elements.expand().should("be.visible").contains("Tax & Tax Rates").click();
        this.elements.btnSaveSettings().click();
        this.elements.tabDataMapping().click();
        this.elements.btnDefault().click().should("be.visible").contains("Back to default mappings");
        this.elements.btnConfirm().click();
        this.elements.tabEndpoints().click();
        this.elements.btnBackDefault().click();
        this.elements.btnSaveEndpoint().click();
        this.elements.tabFilterOptions().click();
    };
    settingsActivityTab = () => {
        this.elements.tabActivity().click();
        this.elements.selectStatus().select('pending').should("have.value", "pending");
        this.elements.selectStatus().select('success').should("have.value", "success");
        this.elements.selectStatus().select('warning').should('have.value', 'warning');
        this.elements.selectStatus().select('failed').should('have.value', 'failed');
        this.elements.selectStatus().select('debug').should('have.value', 'debug');

        this.elements.selectApplicationDirection().select('source').should('have.value', 'source');
        this.elements.selectApplicationDirection().select('target').should('have.value', 'target');

        this.elements.selectFlow().select('getProduct').should('have.value', 'getProduct');
        this.elements.selectFlow().select('sendProduct').should('have.value', 'sendProduct');

        this.elements.selectTrigger().select('cron').should("have.value", "cron");
        this.elements.selectTrigger().select('webhook').should("have.value", "webhook");
        this.elements.selectTrigger().select('function').should('have.value', 'function');
    };
    settingsAdminTab = () => {
        this.elements.tabAdmin().click();
        this.elements.btnTriggerManual().click();

    };
    productSyncronizationFlow = () => {
        this.clickCardTile();
        this.clickOverview();
        this.productResumeFlow();
        this.productSettingsFlow();
        this.settingsActivityTab();
        this.settingsAdminTab();
    };
}

module.exports = new ProductSyncronizationPage();

