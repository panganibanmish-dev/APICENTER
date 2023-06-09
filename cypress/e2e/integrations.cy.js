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
        const visibility = "Active"
        const variantvisibility = "Active"
        
        // const set_variant = "Active"
        IntegrationsPage
            .addIntegration();
        cy.wait(3000);
        IntegrationsPage
            .followStep1();
        cy.wait(3000);
        IntegrationsPage
            .followStep2();
        cy.wait(3000);
        IntegrationsPage
            .followStep3();
        cy.wait(3000);
        IntegrationsPage
            .followStep4(visibility, variantvisibility);
        cy.wait(3000);
        IntegrationsPage
            .followStep5();
        cy.wait(3000);
    });
})