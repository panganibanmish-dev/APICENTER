import AddIntegrationsPage from "../pages/Integrations/AddIntegrationsPage";
import CustomerSynchronizationPage from "../pages/Integrations/Flow/CustomerSynchronizationPage";
import ProductSynchronizationPage from "../pages/Integrations/Flow/ProductSynchronizationPage";
import SalesOrderSynchronizationPage from "../pages/Integrations/Flow/SalesOrderSynchronizationPage";
import StockSynchronizationPage from "../pages/Integrations/Flow/StockSynchronizationPage";
import IntegrationsSettingPage from "../pages/Integrations/IntegrationsSettingPage";
import LoginPage from "../pages/LoginPage";

describe('Integrations Page Test Suite', () => {
    beforeEach(() => {
        cy.login(Cypress.env('login_email'), Cypress.env('login_password'));
        cy.viewport(1800, 1000);
        cy.visit('/');
        LoginPage.homepage();
        cy.get("body")
            .contains("Integrations").click();
    });
    it('should be add integration flow and complete the step 1 to step 5', () => {
        const visibility = "Active"
        const variantvisibility = "Active"

        AddIntegrationsPage
            .addIntegration();
        cy.wait(3000);
        AddIntegrationsPage
            .followStep1();
        AddIntegrationsPage
            .followStep2();
        // cy.wait(3000);
        AddIntegrationsPage
            .followStep3();
        // cy.wait(3000);
        AddIntegrationsPage
            .followStep4(visibility, variantvisibility);
        // cy.wait(3000);
        AddIntegrationsPage
            .followStep5();
        cy.wait(3000);
    });
    it('should be allowing to update the configure flow overview and integration settings', () => {
        IntegrationsSettingPage
            .OverviewConfigureFlow();
        IntegrationsSettingPage
            .IntegrationSettings();
        IntegrationsSettingPage
            .ActivityTab();
    });
    it('should be sychronize the flow of the integration for product, sales order, customer and stock ', () => {
        AddIntegrationsPage
            .gotoIntegrations();
        ProductSynchronizationPage
            .productSyncronizationFlow();
        SalesOrderSynchronizationPage
            .saleSynchronizationFlow();
        CustomerSynchronizationPage
            .customerSynchronizationFlow();
        StockSynchronizationPage
            .stockSynchronizationFlow();
    });
});