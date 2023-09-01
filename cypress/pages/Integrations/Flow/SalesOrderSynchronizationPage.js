class SalesOrderSynchronizationPage {
  elements = {
    configureflowBtn: () => cy.get(".button.button_success"),
    //prod
    saleOrderFlow: () =>
      cy.get(
        "body > div:nth-child(2) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)"
      ),
    //stg
    stg_saleOrderFlow: () =>
      cy.get(
        "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)"
      ),
    //dev
    dev_saleOrderFlow: () =>
      cy.get(
        "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)"
      ),

    //prod env
    salesOrderToggle: () => cy.get('input#check-0-0[type="checkbox"]'),
    //stg env
    stg_salesOrderToggle: () => cy.get('input#check-0-1[type="checkbox"]'),
    //dev env
    dev_salesOrderToggle: () => cy.get('input#check-0-1[type="checkbox"]'),
    btnAgree: () => cy.get("button[class='button'] span"),
    resumeBtn: () => cy.get(".button"),
    okbtn: () => cy.get("button[class='swal2-confirm swal2-styled']"),
    cancelbtn: () => cy.get("button[class='swal2-cancel swal2-styled']"),
    adminTab: () => cy.get("a:nth-child(9)"),
    triggerManualbtn: () => cy.get("button[class='btn btn-primary']"),
    settingsTab: () => cy.get("main a:nth-child(2)"),
    adminSettingExpand: () =>
      cy.get(
        "div[class='m-4'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1)"
      ),
    debugenabled: () => cy.get("label[for='debug-enabled13-null']"),

    //tab activity
    tabActivity: () => cy.get("a:nth-child(8)"),
    selectStatus: () => cy.get("select[dusk='filter-status-select']"),
    selectApplicationDirection: () =>
      cy.get("select[dusk='filter-direction-select']"),
    selectFlow: () => cy.get("select[dusk='filter-flow-select']"),
    selectTrigger: () => cy.get("select[dusk='filter-trigger-select']"),

    tabOverview: () =>
      cy.get("div[class='tile tabs mx-6 mt-4'] a:nth-child(1)"),
    breadcrumbLinkFlows: () =>
      cy.get("div[class='nav_home'] li:nth-child(3) a:nth-child(1)"),

    //change logs
    tabChangeLogs: () => cy.get("a:nth-child(10)"),
    eyeButton: () => cy.get("button[class='tile-button']"),
    closebtn: () => cy.get("button[class='button button_secondary']"),
  };
  //sale order activity
  settingsActivityTab = () => {
    cy.intercept("**/activity").as("clickTabActivity");
    this.elements.tabActivity().should("be.visible").click();
    cy.wait("@clickTabActivity");
    this.elements
      .selectStatus()
      .select("pending")
      .should("have.value", "pending");
    this.elements
      .selectStatus()
      .select("success")
      .should("have.value", "success");
    this.elements
      .selectStatus()
      .select("warning")
      .should("have.value", "warning");
    this.elements
      .selectStatus()
      .select("failed")
      .should("have.value", "failed");
    this.elements.selectStatus().select("debug").should("have.value", "debug");
    this.elements.selectStatus().select("—").should("have.value", "—");

    this.elements
      .selectApplicationDirection()
      .select("source")
      .should("have.value", "source");
    this.elements
      .selectApplicationDirection()
      .select("target", { force: true })
      .should("have.value", "target");
    this.elements
      .selectApplicationDirection()
      .select("—")
      .should("have.value", "—");

    this.elements
      .selectFlow()
      .select("getSalesOrder")
      .should("have.value", "getSalesOrder");
    this.elements
      .selectFlow()
      .select("sendSalesOrder")
      .should("have.value", "sendSalesOrder");
    this.elements.selectFlow().select("—").should("have.value", "—");

    this.elements.selectTrigger().select("cron").should("have.value", "cron");
    this.elements
      .selectTrigger()
      .select("webhook")
      .should("have.value", "webhook");
    this.elements
      .selectTrigger()
      .select("function")
      .should("have.value", "function");
    this.elements.selectTrigger().select("—").should("have.value", "—");
  };
  clickOverview = () => {
    this.elements.tabOverview().should("be.visible").click();
  };
  changeLog = () => {
    this.elements.tabChangeLogs().should("be.visible").click();
    this.elements.eyeButton().eq(0).should("be.visible").click();
    this.elements.closebtn().should("be.visible").click();
  };
  saleSynchronizationFlow = () => {
    const environment = Cypress.config().env;
    this.elements.configureflowBtn().should("be.visible").click();
    if (environment === "prod") {
      this.elements.salesOrderToggle().click({ force: true });
    } else if (environment === "staging") {
      this.elements.stg_salesOrderToggle().click({ force: true });
    } else {
      this.elements.dev_salesOrderToggle().click({ force: true });
    }
    this.elements.btnAgree().should("be.visible").click();
    if (environment === "prod") {
      this.elements.saleOrderFlow().should("be.visible").click();
    } else if (environment === "staging") {
      cy.intercept(
        "**/dashboard/13103/integrations/1005/flows/1185/overview"
      ).as("salesOrder");
      this.elements.stg_saleOrderFlow().should("be.visible").click();
      cy.wait("@salesOrder");
    } else {
      this.elements.dev_saleOrderFlow().should("be.visible").click();
    }
    this.elements.resumeBtn().should("be.visible").click();
    this.elements.cancelbtn().should("be.visible").click();
    this.elements.resumeBtn().should("be.visible").click();
    this.elements.okbtn().click();
    this.elements.okbtn().click();
    this.elements.settingsTab().should("be.visible").click();
    this.elements.adminSettingExpand().should("be.visible").click();
    this.elements.debugenabled().should("be.visible").click();
    this.elements.adminTab().should("be.visible").click();
    this.elements.triggerManualbtn().should("be.visible").click();
    this.settingsActivityTab();
    this.changeLog();
    this.clickOverview();
    this.elements.breadcrumbLinkFlows().should("be.visible").click();
  };
}
module.exports = new SalesOrderSynchronizationPage();
