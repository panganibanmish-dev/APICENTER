class CheckNovaPage {
    elements = {
        sideBarInvoices: () => cy.get(".text-white.text-justify.no-underline.dim[href='/nova/resources/invoices']"),
        searchInvoice: () => cy.get("input[placeholder='Search']"),
        ID: () => cy.get(".text-left.text-left"),
        clickEyesIcon: () => cy.get(".inline-flex"),
        selectActionInvoice: () => cy.get(".form-control.form-select.mr-2"),
        optionDownload: () => cy.get("option[value='download']"),
        btnDownload: () => cy.get(".fill-current.text-white"),
        modalBtnDownload: () => cy.get("button[type='submit']"),
        modalBtnCancel: () => cy.get(".btn.btn-link.dim.cursor-pointer.text-80.ml-auto.mr-6"),
    };
    Nova = () => {
        cy.visit('/nova/dashboards/main');
    };
    sidebarNovaInvoices = () => {
        this.elements.sideBarInvoices().click();
        cy.wait(3000);
    };
    searchInvoiceByID = () => {
        this.elements.searchInvoice().then(($input) => {
            const currentData = $input.val();
            this.elements.searchInvoice().type(currentData);
        });
        // this.elements.searchInvoice().type(this.elements.ID);
        cy.wait(3000);
        this.elements.ID().click();
    };
    viewInvoiceAndDownloadInvoice = () => {
        this.elements.clickEyesIcon().click();
        cy.wait(2000);
        this.elements.selectActionInvoice().click();
        this.elements.optionDownload().click();
        cy.wait(2000);
        this.elements.btnDownload().click();
        cy.wait(2000);
        this.elements.modalBtnCancel().click();
        this.elements.btnDownload().click();
        cy.wait(2000);
        this.elements.modalBtnDownload().click();
    };
    InvoiceDownload = () => {
        this.Nova();
        this.sidebarNovaInvoices();
        this.searchInvoiceByID();
        this.viewInvoiceAndDownloadInvoice();
        cy.wait(3000);
    };
}
module.exports = new CheckNovaPage();