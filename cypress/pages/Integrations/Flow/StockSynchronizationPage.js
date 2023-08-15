class StockSynchronizationPage {
    elements = {
        configureflowBtn: () => cy.get('.button.button_success'),
        //prod
        stockToggle: () => cy.get('input#check-0-2[type="checkbox"]'),
        //stg
        stg_stockToggle: () => cy.get('input#check-0-2[type="checkbox"]'),
        //dev
        dev_stockToggle: () => cy.get('input#check-0-2[type="checkbox"]'),
        btnAgree: () => cy.get("button[class='button']"),
        stockFlow: () => cy.get("body > div:nth-child(2) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4)"),
        resumeBtn: () => cy.get('.button'),
        okbtn: () => cy.get("button[class='swal2-confirm swal2-styled']"),
        cancelbtn: () => cy.get("button[class='swal2-cancel swal2-styled']"),
        settingsTab: () => cy.get("main a:nth-child(2)"),
        adminSettings: () => cy.get("body > div:nth-child(2) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)"),
        adminDebugEnabled: () => cy.get("label[for='debug-enabled13-null']"),
        notifExpand: () => cy.get("body > div:nth-child(2) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"),
        generalflowExpand: () => cy.get("body > div:nth-child(2) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)"),
        runbehaviourExpand: () => cy.get("div[class='m-4'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1)"),
        saveSettingsbtn: () => cy.get("button[type='submit']"),
        adminTab: () => cy.get("main a:nth-child(9)"),
        triggerManualbtn: () => cy.get("button[class='btn btn-primary']"),
        activityTab: () => cy.get("a:nth-child(8)"),
        selectStatus: () => cy.get("select[dusk='filter-status-select']"),
        selectApplicationDirection: () => cy.get("select[dusk='filter-direction-select']"),
        selectFlow: () => cy.get("select[dusk='filter-flow-select']"),
        selectTrigger: () => cy.get("select[dusk='filter-trigger-select']"),

        tabOverview: () => cy.get("div[class='tile tabs mx-6 mt-4'] a:nth-child(1)"),
        breadcrumbLinkFlows: () => cy.get("div[class='nav_home'] li:nth-child(3) a:nth-child(1)"),

        //change logs
        tabChangeLogs: () => cy.get("a:nth-child(10)"),
        eyeButton: () => cy.get("button[class='tile-button']"),
        closebtn: () => cy.get("button[class='button button_secondary']")
    };
    acitvitySettingsTab = () => {
        //settings activity tab
        cy.intercept("**/activity").as("activity-tab")
        this.elements.activityTab().should("be.visible").click();
        cy.wait("@activity-tab");
        this.elements.selectStatus().select('pending').should("have.value", "pending");
        this.elements.selectStatus().select('success').should("have.value", "success");
        this.elements.selectStatus().select('warning').should('have.value', 'warning');
        this.elements.selectStatus().select('failed').should('have.value', 'failed');
        this.elements.selectStatus().select('debug').should('have.value', 'debug');
        this.elements.selectStatus().select('—').should('have.value', '—');

        this.elements.selectApplicationDirection().select('source').should('have.value', 'source');
        this.elements.selectApplicationDirection().select('target', { force: true }).should('have.value', 'target');
        this.elements.selectApplicationDirection().select('—').should('have.value', '—');

        this.elements.selectFlow().select('getStockItem').should('have.value', 'getStockItem');
        this.elements.selectFlow().select('sendStockItem').should('have.value', 'sendStockItem');
        this.elements.selectFlow().select('—').should('have.value', '—');

        this.elements.selectTrigger().select('cron').should("have.value", "cron");
        this.elements.selectTrigger().select('webhook').should("have.value", "webhook");
        this.elements.selectTrigger().select('function').should('have.value', 'function');
        this.elements.selectTrigger().select('—').should('have.value', '—');
    };
    adminSettingsTab = () => {
        //setting admin tab
        cy.intercept("**/admin").as("admin-tab")
        this.elements.adminTab().should("be.visible").click();
        cy.wait("@admin-tab");
        cy.intercept("**/manual-trigger/*").as("manual-trigger")
        this.elements.triggerManualbtn().should("be.visible").click();
        cy.wait("@manual-trigger");
    };
    stockSettingsTab = () => {
        //customer settings tab
        cy.intercept("**/settings").as("settings-tab")
        this.elements.settingsTab().should("be.visible").click();
        cy.wait("@settings-tab");
        this.elements.adminSettings().should("be.visible").click();
        this.elements.adminDebugEnabled().should("be.visible").click();
        this.elements.notifExpand().should("be.visible").click();
        this.elements.generalflowExpand().should("be.visible").click();
        this.elements.runbehaviourExpand().should("be.visible").click();
        cy.intercept("**/user-integration-flow-settings/*").as("save-settings-flow");
        this.elements.saveSettingsbtn().should("be.visible").click();
        cy.wait("@save-settings-flow");
    };
    clickOverview = () => {
        this.elements.tabOverview().should("be.visible").click();
    };
    changeLog = () => {
        this.elements.tabChangeLogs().should('be.visible').click();
        this.elements.eyeButton().eq(0).should('be.visible').click();
        this.elements.closebtn().should('be.visible').click();
    };
    stockSynchronizationFlow = () => {
        const environment = Cypress.config().env;
        //stock synchronization flow
        this.elements.configureflowBtn().should("be.visible").click();
        if (environment === "prod") {
            this.elements.stockToggle().click({ force: true });
        } else if (environment === "staging") {
            this.elements.stg_stockToggle().click({ force: true });
        } else {
            this.elements.dev_stockToggle().click({ force: true });
        }
        cy.intercept("**/flows").as("clickAgree")
        this.elements.btnAgree().should("be.visible").click();
        cy.wait("@clickAgree");
        cy.intercept("**/overview").as("stock-flow")
        this.elements.stockFlow().should("be.visible").click();
        cy.wait("@stock-flow");
        this.elements.resumeBtn().should("be.visible").click();
        this.elements.cancelbtn().should("be.visible").click();
        this.elements.resumeBtn().should("be.visible").click();
        cy.intercept("**/flag-update").as("resume-flow")
        this.elements.okbtn().click();
        cy.wait("@resume-flow");
        this.elements.okbtn().click();
        //setting tab
        this.stockSettingsTab();
        //admin tab
        this.adminSettingsTab();
        //activity tab
        this.acitvitySettingsTab();
        this.changeLog();

        this.clickOverview();
        this.elements.breadcrumbLinkFlows().should("be.visible").click();
    };
};
module.exports = new StockSynchronizationPage();