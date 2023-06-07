import IntegrationsPage from "../pages/IntegrationsPage";
import LoginPage from "../pages/LoginPage";

describe('Integrations Page Test Suite', () => {
    beforeEach(() => {
        LoginPage
            .goToLoginPage();
        LoginPage
            .loginAdmin(
                Cypress.env('login_email'),
                Cypress.env('login_password'));
        cy.get("body")
            .contains("Integrations");
        IntegrationsPage
            .gotoIntegrations();
    });
    it('It should be click the Add Integration button to proceed to step 1', () => {
        IntegrationsPage
            .addIntegration();
        cy.wait(3000);
    });
    it('Step 1 - It should showing the label/text and go start to proceed into the step 2 ', () => {
        IntegrationsPage
            .followStep1();
        cy.wait(3000);
    });
    it('Step 2 - It should be add two application', () => {
        IntegrationsPage
            .followStep2();
    });
})