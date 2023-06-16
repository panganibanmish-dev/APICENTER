import AddIntegrationsPage from "../pages/Integrations/AddIntegrationsPage";
import IntegrationsSettingPage from "../pages/Integrations/IntegrationsSettingPage";
import IntegrationsFlowPage from "../pages/Integrations/IntegrationsFlowPage";
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
        AddIntegrationsPage
            .gotoIntegrations();
    });
    it('It should be click the add integration button to proceed to step 1 to step 5', () => {
        const visibility = "Active"
        const variantvisibility = "Active"
        AddIntegrationsPage
            .addIntegration();
        cy.wait(3000);
        AddIntegrationsPage
            .followStep1();
        cy.wait(3000);
        AddIntegrationsPage
            .followStep2();
        cy.wait(3000);
        AddIntegrationsPage
            .followStep3();
        cy.wait(3000);
        AddIntegrationsPage
            .followStep4(visibility, variantvisibility);
        cy.wait(3000);
        AddIntegrationsPage
            .followStep5();
        cy.wait(3000);
    });
    it('It should be update the configure flow setting ', () => {
        IntegrationsSettingPage
            .OverviewConfigureFlow();
        cy.wait(2000);
        IntegrationsSettingPage
            .IntegrationSettings();
        cy.wait(2000);
        IntegrationsSettingPage
            .ActivityTab();
        cy.wait(2000);
    });
    it('It should be synchronize the flow of the integrations', () => {
        IntegrationsFlowPage
    });
})