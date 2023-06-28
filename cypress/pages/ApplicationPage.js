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
        cy.wait(3000);
        this.elements.appToggle().eq(0).click();
        this.elements.appToolbar().contains("Edit").click({ force: true });
        //the app should be retain on the added application with no name
        this.elements.inputTitle().eq(0).clear();
        this.elements.saveBtn().click();
        this.elements.applicationNav().click();
        cy.wait(3000);
        //the changes made on the fields should be saved
        this.elements.appToggle().eq(0).click();
        this.elements.appToolbar().contains("Edit").click({ force: true });
        this.elements.inputTitle().eq(0).clear().type("Mitch Magento", { delay: 200 });
        this.elements.saveBtn().click();
        cy.wait(3000);
        //it should be showing a confirming notification saying: "Connection is good"
        this.elements.testconnectionBtn().click();
        cy.wait(3000);
        this.elements.applicationNav().click();
        cy.wait(3000);
        //the added application should be canceled to delete
        this.elements.appToggle().eq(0).click();
        this.elements.appToolbar().contains("Delete").click({ force: true });
        this.elements.btnCancel().eq(0).click();
        cy.wait(3000);
        //the added application should be deleted
        this.elements.appToggle().eq(0).click();
        this.elements.appToolbar().contains("Delete").click({ force: true });
        this.elements.btnRemove().eq(0).click();
        cy.wait(3000);
        //should be showing results based on the inputted keyword
        this.elements.appsearch().type("Magento", { delay: 200, force: true }).clear();
        cy.wait(3000);

        //nothing to show any appls
        this.elements.appsearch().type("Mailbox", { delay: 200, force: true }).clear();
        cy.wait(3000);

        this.elements.appsearch().type("Magento", { delay: 200, force: true });
        cy.wait(5000);
    
        this.elements.appbox().click();
        cy.wait(3000);

        //it should be showing a notification the field is required
        this.elements.saveBtn().click();
        cy.wait(3000);

       // it should be redirecting to another page where the user will provide the needed credentials for the fields required
        this.elements.inputField().eq(0).type("Mitch Magento", { delay: 200 });
        this.elements.inputField().eq(1).type("*qX^knbeVBZ9", { delay: 200 });
        this.elements.eyeicon().click();
        this.elements.inputField().eq(2).type("apicenter3000.web-company.dev/szxiuwdvvqxpcdrn", { delay: 300 });
        this.elements.saveBtn().click();
        cy.wait(3000);
        this.elements.testconnectionBtn().click();
        cy.wait(3000);
        this.elements.applicationNav().click();
        cy.wait(3000);
    };
};
module.exports = new ApplicationPage();