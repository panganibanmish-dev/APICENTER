import NovaPage from "../../pages/Accounts/NovaPage";

describe('Nova Page Test Suite', () => {
    beforeEach(() => {
        NovaPage.Nova(Cypress.env('login_email'), Cypress.env('login_password'));
        cy.get('body').should('be.visible');
        cy.wait(5000);
    });
    it('Should be check the billing of invoice, orders and subscription', () => {
        NovaPage.Billing();
    });
    it('Should be delete the user of the created sign up ', () => {
        NovaPage.deleteUsers();
    })
})