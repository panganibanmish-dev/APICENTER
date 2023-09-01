class ApplicationPage {
  elements = {
    appToggle: () => cy.get(".application_toolbar_toggle"),
    appToolbar: () => cy.get(".application_tool"),
    inputTitle: () => cy.get(".form_field.app-input-field"),
    saveBtn: () => cy.get(".button.button_success"),
    applicationNav: () => cy.get(".nav_link.active"),
    testconnectionBtn: () => cy.get(".button.button_app"),
    modalCOntentRemoveCancelApp: () => cy.get(".modal__action.pb-2"),
    btnCancel: () => cy.get(".button.button_cancel"),
    btnRemove: () => cy.get(".button.button_danger"),
    appsearch: () => cy.get("#app-search"),
    appbox: () => cy.get(".inner-box.overflow-hidden.tile.tile_app"),
    inputField: () => cy.get(".form_field.app-input-field"),
    eyeicon: () => cy.get(".eye-icon"),
  };
  YourApplications = () => {
    cy.intercept("**/applications*").as("application");
    this.elements.appsearch().type("Magento", { force: true });
    cy.wait("@application");
    this.elements.appbox().eq(0).click();

    this.elements.inputField().eq(0).type("Mitch Magento");
    this.elements.inputField().eq(1).type("*qX^knbeVBZ9");
    this.elements.eyeicon().click();
    this.elements
      .inputField()
      .eq(2)
      .type("apicenter3000.web-company.dev/szxiuwdvvqxpcdrn");
    this.elements.saveBtn().click();
    this.elements.testconnectionBtn().click();
    cy.intercept("**/applications").as("applicationNav");
    this.elements.applicationNav().click();
    cy.wait("@applicationNav");

    this.elements.appToggle().click();
    this.elements.appToolbar().contains("Edit").click({ force: true });

    //the app should be retain on the added application with no name
    this.elements.inputTitle().eq(0).clear();
    this.elements.saveBtn().click();
    cy.intercept("**/applications").as("applicationNav");
    this.elements.applicationNav().click();
    cy.wait("@applicationNav");

    //the changes made on the fields should be saved
    this.elements.appToggle().click();
    this.elements.appToolbar().contains("Edit").click({ force: true });
    this.elements.inputTitle().eq(0).clear().type("Mitch Magento");
    this.elements.saveBtn().click();

    //it should be showing a confirming notification saying: "Connection is good"
    this.elements.testconnectionBtn().click();
    cy.intercept("**/applications").as("applicationNav");
    this.elements.applicationNav().should("be.visible").click();
    cy.wait("@applicationNav");

    //the added application should be canceled to delete
    this.elements.appToggle().eq(0).click();
    this.elements.appToolbar().contains("Delete").click({ force: true });
    this.elements.btnCancel().eq(0).click();
    //the added application should be deleted
    this.elements.appToggle().eq(0).click();
    this.elements.appToolbar().contains("Delete").click({ force: true });
    this.elements.btnRemove().eq(0).click();
    //should be showing results based on the inputted keyword
    cy.intercept("**/applications*").as("application");
    this.elements.appsearch().type("Magento", { force: true }).clear();
    cy.wait("@application");

    //nothing to show any appls
    cy.intercept("**/applications*").as("application");
    this.elements.appsearch().type("Mailbox", { force: true }).clear();
    cy.wait("@application");

    // add applications for magento
    cy.intercept("**/applications*").as("application");
    this.elements.appsearch().type("Magento", { force: true });
    cy.wait("@application");

    this.elements.appbox().eq(0).click();

    //it should be showing a notification the field is required
    this.elements.saveBtn().click();

    // it should be redirecting to another page where the user will provide the needed credentials for the fields required
    this.elements.inputField().eq(0).type("Mitch Magento");
    this.elements.inputField().eq(1).type("*qX^knbeVBZ9");
    this.elements.eyeicon().click();
    this.elements
      .inputField()
      .eq(2)
      .type("apicenter3000.web-company.dev/szxiuwdvvqxpcdrn");
    this.elements.saveBtn().click();
    this.elements.testconnectionBtn().click();
    cy.intercept("**/applications").as("applicationNav");
    this.elements.applicationNav().click();
    cy.wait("@applicationNav");

    // add applications for shopify
    cy.intercept("**/applications*").as("application");
    this.elements.appsearch().type("Shopify", { force: true });
    cy.wait("@application");
    
    this.elements.appbox().eq(0).click();

    //it should be showing a notification the field is required
    this.elements.saveBtn().click();

    // it should be redirecting to another page where the user will provide the needed credentials for the fields required
    this.elements.inputField().eq(0).type("Shopify");
    this.elements
      .inputField()
      .eq(1)
      .type("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");
    this.elements.eyeicon().click();
    this.elements.inputField().eq(2).type("348193aa4d7df599082bc16454e94054");
    this.elements.inputField().eq(3).type("api3000.myshopify.com");
    this.elements.saveBtn().click();
    this.elements.testconnectionBtn().click();
    cy.intercept("**/applications").as("applicationNav");
    this.elements.applicationNav().click();
    cy.wait("@applicationNav");
  };
}
module.exports = new ApplicationPage();
