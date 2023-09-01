class ProductSyncronizationPage {
  elements = {
    cardTile: () =>
      cy.get(".tile.tile-wide.cursor-pointer.overflow-hidden.h-100"),
    tabOverview: () => cy.get("main a:nth-child(1)"),
    productflow: () => cy.get("div[class='px-8 tile_column'] h3[class='h5']"),
    resumeFlow: () => cy.get("button[class='button'] span"),
    cancelBtn: () => cy.get("button[class='swal2-cancel swal2-styled']"),
    okBtn: () => cy.get("button[class='swal2-confirm swal2-styled']"),
    dialogActivate: () => cy.get("div[role='dialog']"),
    tabSettings: () => cy.get("main a:nth-child(2)"),
    tabDataMapping: () => cy.get("a:nth-child(4)"),
    debugEnabled: () => cy.get("label[for='debug-enabled13-null']"),
    //prod
    adminsettingsExpand: () =>
      cy.get(
        "div[class='m-4'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1)"
      ),
    notifExpand: () =>
      cy.get(
        "body > div:nth-child(2) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"
      ),
    attributesfeaturesExpand: () =>
      cy.get(
        "body > div:nth-child(2) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)"
      ),
    categoriesExpand: () =>
      cy.get(
        "body > div:nth-child(2) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1)"
      ),
    generalflowsettingExpand: () =>
      cy.get(
        "body > div:nth-child(2) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1)"
      ),
    productsettingsExpand: () =>
      cy.get(
        "body > div:nth-child(2) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1)"
      ),
    runbehaviourExpand: () =>
      cy.get(
        "body > div:nth-child(2) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(7) > div:nth-child(1) > div:nth-child(1)"
      ),
    stockwarehousesettingsExpand: () =>
      cy.get(
        "body > div:nth-child(2) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(8) > div:nth-child(1) > div:nth-child(1)"
      ),
    taxtaxratesExpand: () =>
      cy.get(
        "body > div:nth-child(2) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(9) > div:nth-child(1) > div:nth-child(1)"
      ),
    //stg
    stg_adminsettingsExpand: () =>
      cy.get(
        "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)"
      ),
    stg_notifExpand: () =>
      cy.get(
        "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"
      ),
    stg_attributesfeaturesExpand: () =>
      cy.get(
        "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)"
      ),
    stg_categoriesExpand: () =>
      cy.get(
        "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1)"
      ),
    stg_generalflowsettingExpand: () =>
      cy.get(
        "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1)"
      ),
    stg_productsettingsExpand: () =>
      cy.get(
        "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1)"
      ),
    stg_runbehaviourExpand: () =>
      cy.get(
        "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(7) > div:nth-child(1) > div:nth-child(1)"
      ),
    stg_stockwarehousesettingsExpand: () =>
      cy.get(
        "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(8) > div:nth-child(1) > div:nth-child(1)"
      ),
    stg_taxtaxratesExpand: () =>
      cy.get(
        "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(9) > div:nth-child(1) > div:nth-child(1)"
      ),
    //dev
    dev_adminsettingsExpand: () =>
      cy.get(
        "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)"
      ),
    dev_notifExpand: () =>
      cy.get(
        "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"
      ),
    dev_attributesfeaturesExpand: () =>
      cy.get(
        "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)"
      ),
    dev_categoriesExpand: () =>
      cy.get(
        "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1)"
      ),
    dev_generalflowsettingExpand: () =>
      cy.get(
        "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1)"
      ),
    dev_productsettingsExpand: () =>
      cy.get(
        "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1)"
      ),
    dev_runbehaviourExpand: () =>
      cy.get(
        "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(7) > div:nth-child(1) > div:nth-child(1)"
      ),
    dev_stockwarehousesettingsExpand: () =>
      cy.get(
        "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(8) > div:nth-child(1) > div:nth-child(1)"
      ),
    dev_taxtaxratesExpand: () =>
      cy.get(
        "body > div:nth-child(1) > main:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(9) > div:nth-child(1) > div:nth-child(1)"
      ),
    btnSaveSettings: () => cy.get("button[type='submit']"),
    btnDefault: () => cy.get(".button.mr-6"),
    btnConfirm: () => cy.get(".button.ml-3"),
    tabEndpoints: () => cy.get("a:nth-child(5)"),
    btnBackDefault: () => cy.get("div[class='ml-auto'] button[type='button']"),
    btnSaveEndpoint: () => cy.get("button[type='submit'] span"),
    tabFilterOptions: () =>
      cy.get(
        "#app > main > div > div.tile.tabs.mx-6.mt-4 > div > a:nth-child(7)"
      ),
    tabActivity: () => cy.get("a:nth-child(8)"),
    selectStatus: () => cy.get("select[dusk='filter-status-select']"),
    selectApplicationDirection: () =>
      cy.get("select[dusk='filter-direction-select']"),
    selectFlow: () => cy.get("select[dusk='filter-flow-select']"),
    selectTrigger: () => cy.get("select[dusk='filter-trigger-select']"),
    tabAdmin: () => cy.get("a:nth-child(9)"),
    btnTriggerManual: () => cy.get("button[class='btn btn-primary']"),
    breadcrumbLinkFlows: () =>
      cy.get("div[class='nav_home'] li:nth-child(3) a:nth-child(1)"),
    //change logs
    tabChangeLogs: () => cy.get("a:nth-child(10)"),
    eyeButton: () => cy.get("button[class='tile-button']"),
    closebtn: () => cy.get("button[class='button button_secondary']"),
  };
  clickCardTile = () => {
    this.elements.cardTile().should("be.visible").click();
  };
  //it should be reloading the current page as this tab is opened by default upon redirecting
  clickOverview = () => {
    this.elements.tabOverview().should("be.visible").click();
  };
  clickResumeFlow = () => {
    this.elements.resumeFlow().should("be.visible").click();
  };
  clickOkBtn = () => {
    this.elements.okBtn().click();
  };
  clickCancelBtn = () => {
    this.elements.cancelBtn().should("be.visible").click();
  };
  dialogActivateModal = () => {
    this.elements.dialogActivate().should("be.visible");
    this.clickOkBtn();
  };
  //product resume flow - it should be showing a modal of confirmation for resuming the flow of integration
  productResumeFlow = () => {
    this.elements
      .productflow()
      .should("contain", "Product Synchronization")
      .click();
    this.clickResumeFlow();
    this.clickCancelBtn();
    this.clickResumeFlow();
    this.clickOkBtn();
    this.dialogActivateModal();
  }; //product settings flow -
  productSettingsFlow = () => {
    const environment = Cypress.config().env;
    if (environment === "prod") {
      // It should be redirecting to the settings of the integration
      this.elements.tabSettings().should("be.visible").click();
      //It should show an option for enabling the debug
      this.elements.adminsettingsExpand().should("be.visible").click();
      this.elements.debugEnabled().should("be.visible").click();
      this.elements.notifExpand().should("be.visible").click();
      this.elements
        .attributesfeaturesExpand()
        .should("be.visible")
        .contains("Attributes & Features")
        .click();
      this.elements
        .categoriesExpand()
        .should("be.visible")
        .contains("Categories")
        .click();
      this.elements
        .generalflowsettingExpand()
        .should("be.visible")
        .contains("General flow setting")
        .click();
      this.elements
        .productsettingsExpand()
        .should("be.visible")
        .contains("Product Settings")
        .click();
      this.elements
        .runbehaviourExpand()
        .should("be.visible")
        .contains("Run behaviour")
        .click();
      this.elements
        .stockwarehousesettingsExpand()
        .should("be.visible")
        .contains("Stock & Warehouse Settings")
        .click();
      this.elements
        .taxtaxratesExpand()
        .should("be.visible")
        .contains("Tax & Tax Rates")
        .click();
    } else if (environment === "staging") {
      // It should be redirecting to the settings of the integration
      this.elements.tabSettings().should("be.visible").click();
      //It should show an option for enabling the debug
      this.elements.stg_adminsettingsExpand().should("be.visible").click();
      this.elements.debugEnabled().should("be.visible").click();
      this.elements.stg_notifExpand().should("be.visible").click();
      this.elements
        .stg_attributesfeaturesExpand()
        .should("be.visible")
        .contains("Attributes & Features")
        .click();
      this.elements
        .stg_categoriesExpand()
        .should("be.visible")
        .contains("Categories")
        .click();
      this.elements
        .stg_generalflowsettingExpand()
        .should("be.visible")
        .contains("General flow setting")
        .click();
      this.elements
        .stg_productsettingsExpand()
        .should("be.visible")
        .contains("Product Settings")
        .click();
      this.elements
        .stg_runbehaviourExpand()
        .should("be.visible")
        .contains("Run behaviour")
        .click();
      this.elements
        .stg_stockwarehousesettingsExpand()
        .should("be.visible")
        .contains("Stock & Warehouse Settings")
        .click();
      this.elements
        .stg_taxtaxratesExpand()
        .should("be.visible")
        .contains("Tax & Tax Rates")
        .click();
    } else {
      // It should be redirecting to the settings of the integration
      this.elements.tabSettings().should("be.visible").click();
      //It should show an option for enabling the debug
      this.elements.dev_adminsettingsExpand().should("be.visible").click();
      this.elements.debugEnabled().should("be.visible").click();
      this.elements.dev_notifExpand().should("be.visible").click();
      this.elements
        .dev_attributesfeaturesExpand()
        .should("be.visible")
        .contains("Attributes & Features")
        .click();
      this.elements
        .dev_categoriesExpand()
        .should("be.visible")
        .contains("Categories")
        .click();
      this.elements
        .dev_generalflowsettingExpand()
        .should("be.visible")
        .contains("General flow setting")
        .click();
      this.elements
        .dev_productsettingsExpand()
        .should("be.visible")
        .contains("Product Settings")
        .click();
      this.elements
        .dev_runbehaviourExpand()
        .should("be.visible")
        .contains("Run behaviour")
        .click();
      this.elements
        .dev_stockwarehousesettingsExpand()
        .should("be.visible")
        .contains("Stock & Warehouse Settings")
        .click();
      this.elements
        .dev_taxtaxratesExpand()
        .should("be.visible")
        .contains("Tax & Tax Rates")
        .click();
    }
    this.elements.btnSaveSettings().should("be.visible").click();
    //should click the tab data mapping
    this.elements.tabDataMapping().should("be.visible").click();
    this.elements
      .btnDefault()
      .should("be.visible")
      .contains("Back to default mappings")
      .click();
    this.elements.btnConfirm().should("be.visible").click();
    //should click the tab endpoints
    this.elements.tabEndpoints().should("be.visible").click();
    this.elements.btnBackDefault().should("be.visible").click();
    this.elements.btnSaveEndpoint().should("be.visible").click();
    //should click the tab filter options
    this.elements.tabFilterOptions().should("be.visible").click();
  };
  //should go to activity tab
  settingsActivityTab = () => {
    this.elements.tabActivity().should("be.visible").click();
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
      .select("getProduct")
      .should("have.value", "getProduct");
    this.elements
      .selectFlow()
      .select("sendProduct")
      .should("have.value", "sendProduct");
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
  //should go to admin tab and click the trigger manual button
  settingsAdminTab = () => {
    this.elements.tabAdmin().should("be.visible").click();
    this.elements.btnTriggerManual().should("be.visible").click();
  };
  changeLog = () => {
    this.elements.tabChangeLogs().should("be.visible").click();
    this.elements.eyeButton().eq(0).should("be.visible").click();
    this.elements.closebtn().should("be.visible").click();
  };
  productSyncronizationFlow = () => {
    this.clickCardTile();
    this.productResumeFlow();
    this.productSettingsFlow();
    this.settingsActivityTab();
    this.settingsAdminTab();
    this.changeLog();
    this.clickOverview();
    this.elements.breadcrumbLinkFlows().should("be.visible").click();
  };
}
module.exports = new ProductSyncronizationPage();
