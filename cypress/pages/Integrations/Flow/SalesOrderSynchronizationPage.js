class SalesOrderSynchronizationPage {
    elements = {
        configureflowBtn: () => cy.get('.button.button_success'),
        saleOrderFlow: () => cy.get("div[class='grid-3'] div:nth-child(1) div:nth-child(1)"),
        salesOrderToggle: () => cy.get('input#check-0-2[type="checkbox"]'),
        btnAgree: () => cy.get("button[class='button'] span"),
        resumeBtn: () => cy.get('.button'),
        okbtn: () => cy.get("button[class='swal2-confirm swal2-styled']"),
        cancelbtn: () => cy.get("button[class='swal2-cancel swal2-styled']"),
        adminTab: () => cy.get("a:nth-child(5)"),
        triggerManualbtn: () => cy.get("button[class='btn btn-primary']"),
    };

    saleSynchronizationFlow = () => {
        this.elements.configureflowBtn().click();
        this.elements.salesOrderToggle().click({ force: true });
        cy.wait(3000);
        this.elements.btnAgree().click();
        cy.wait(5000);
        this.elements.saleOrderFlow().click();
        this.elements.resumeBtn().click();
        this.elements.cancelbtn().click();
        this.elements.resumeBtn().click();
        this.elements.okbtn().click();
    };
}

module.exports = new SalesOrderSynchronizationPage();