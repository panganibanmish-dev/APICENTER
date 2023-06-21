import AddIntegrationsPage, { addIntegration } from "../pages/Integrations/AddIntegrationsPage";
import ProductSynchronizationPage from "../pages/Integrations/Flow/ProductSynchronizationPage";
import SalesOrderSynchronizationPage, { saleSynchronizationFlow } from "../pages/Integrations/Flow/SalesOrderSynchronizationPage";
import IntegrationsSettingPage from "../pages/Integrations/IntegrationsSettingPage";
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
        IntegrationsSettingPage
            .OverviewConfigureFlow();
        cy.wait(2000);
        IntegrationsSettingPage
            .IntegrationSettings();
        cy.wait(2000);
        IntegrationsSettingPage
            .ActivityTab();
        cy.wait(2000);
        AddIntegrationsPage
            .gotoIntegrations();
        ProductSynchronizationPage
            .productSyncronizationFlow();
        SalesOrderSynchronizationPage
            .saleSynchronizationFlow();
    });
});