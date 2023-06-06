import IntegrationsPage from "../pages/IntegrationsPage";
import LoginPage from "../pages/LoginPage";

describe('Integrations Page Test Suite', () => {
    beforeEach(() => {
        LoginPage.goToLoginPage();
        LoginPage.loginAdmin(Cypress.env('login_email'), Cypress.env('login_password'));
        cy.get("body").contains("Integrations");
        IntegrationsPage.gotoIntegrations();
    });
    it('It should be add two application', () => {
        IntegrationsPage.followStep();
    });
})