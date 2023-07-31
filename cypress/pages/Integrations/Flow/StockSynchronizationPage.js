class StockSynchronizationPage {
    elements = {
        configureflowBtn: () => cy.get('.button.button_success'),
        stockToggle: () => cy.get('input#check-0-2[type="checkbox"]'),
        btnAgree: () => cy.get("button[class='button']"),
        stockFlow: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1)"),
        resumeBtn: () => cy.get('.button'),
        okbtn: () => cy.get("button[class='swal2-confirm swal2-styled']"),
        cancelbtn: () => cy.get("button[class='swal2-cancel swal2-styled']"),
        settingsTab: () => cy.get("main a:nth-child(2)"),
        adminSettings: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)"),
        adminDebugEnabled: () => cy.get("label[for='debug-enabled13-null']"),
        notifExpand: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"),
        generalflowExpand: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)"),
        runbehaviourExpand: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1)"),
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
        this.elements.activityTab().should("be.visible").click();
        cy.wait(3000);
        this.elements.selectStatus().select('pending').should("have.value", "pending");
        cy.wait(5000);
        this.elements.selectStatus().select('success').should("have.value", "success");
        cy.wait(10000);
        this.elements.selectStatus().select('warning').should('have.value', 'warning');
        cy.wait(5000);
        this.elements.selectStatus().select('failed').should('have.value', 'failed');
        cy.wait(5000);
        this.elements.selectStatus().select('debug').should('have.value', 'debug');
        cy.wait(5000);
        this.elements.selectStatus().select('—').should('have.value', '—');
        cy.wait(5000);

        this.elements.selectApplicationDirection().select('source').should('have.value', 'source');
        cy.wait(3000);
        this.elements.selectApplicationDirection().select('target', { force: true }).should('have.value', 'target');
        cy.wait(3000);
        this.elements.selectApplicationDirection().select('—').should('have.value', '—');
        cy.wait(3000);

        this.elements.selectFlow().select('getStockItem').should('have.value', 'getStockItem');
        cy.wait(3000);
        this.elements.selectFlow().select('sendStockItem').should('have.value', 'sendStockItem');
        cy.wait(3000);
        this.elements.selectFlow().select('—').should('have.value', '—');
        cy.wait(3000);

        this.elements.selectTrigger().select('cron').should("have.value", "cron");
        cy.wait(3000);
        this.elements.selectTrigger().select('webhook').should("have.value", "webhook");
        cy.wait(3000);
        this.elements.selectTrigger().select('function').should('have.value', 'function');
        cy.wait(3000);
        this.elements.selectTrigger().select('—').should('have.value', '—');
        cy.wait(3000);
    };
    adminSettingsTab = () => {
        //setting admin tab
        this.elements.adminTab().should("be.visible").click();
        // cy.wait(3000);
        this.elements.triggerManualbtn().should("be.visible").click();
        // cy.wait(3000);
    };
    stockSettingsTab = () => {
        //customer settings tab
        this.elements.settingsTab().should("be.visible").click();
        // cy.wait(3000);
        this.elements.adminSettings().should("be.visible").click();
        this.elements.adminDebugEnabled().should("be.visible").click();
        // cy.wait(2000);
        this.elements.notifExpand().should("be.visible").click();
        this.elements.generalflowExpand().should("be.visible").click();
        this.elements.runbehaviourExpand().should("be.visible").click();
        this.elements.saveSettingsbtn().should("be.visible").click();
        // cy.wait(3000);
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
        //stock synchronization flow
        this.elements.configureflowBtn().should("be.visible").click();
        cy.wait(3000);
        this.elements.stockToggle().click({ force: true });
        this.elements.btnAgree().should("be.visible").click();
        cy.wait(5000);
        this.elements.stockFlow().should("be.visible").click();
        cy.wait(5000);
        this.elements.resumeBtn().should("be.visible").click();
        this.elements.cancelbtn().should("be.visible").click();
        this.elements.resumeBtn().should("be.visible").click();
        this.elements.okbtn().click();
        cy.wait(2000);
        this.elements.okbtn().click();
        cy.wait(3000);
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