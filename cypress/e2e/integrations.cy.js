import AddIntegrationsPage from "../pages/Integrations/AddIntegrationsPage";
import CustomerSynchronizationPage from "../pages/Integrations/Flow/CustomerSynchronizationPage";
import ProductSynchronizationPage from "../pages/Integrations/Flow/ProductSynchronizationPage";
import SalesOrderSynchronizationPage from "../pages/Integrations/Flow/SalesOrderSynchronizationPage";
import StockSynchronizationPage from "../pages/Integrations/Flow/StockSynchronizationPage";
import IntegrationsSettingPage from "../pages/Integrations/IntegrationsSettingPage";
import LoginPage from "../pages/LoginPage";

const login_email = Cypress.env("login_email");
const login_password = Cypress.env("login_password");
const visibility = "Active";
const variantvisibility = "Active";
describe("Integrations Page Test Suite", () => {
  beforeEach(() => {
    cy.login(login_email, login_password);
    cy.viewport(1800, 1000);
    cy.visit("/");
    LoginPage.homepage();
    cy.intercept("**/integrations").as("clickIntegration");
    cy.get("body").contains("Integrations").click();
    cy.wait("@clickIntegration");
  });
  it("should be add integration flow and complete the step 1 to step 5", () => {
    AddIntegrationsPage.addIntegration();
    AddIntegrationsPage.followStep1();
    AddIntegrationsPage.followStep2();
    AddIntegrationsPage.followStep3();
    AddIntegrationsPage.followStep4(visibility, variantvisibility);
    AddIntegrationsPage.followStep5();
  });
  it("should be allowing to update the configure flow overview and integration settings", () => {
    IntegrationsSettingPage.OverviewConfigureFlow();
    IntegrationsSettingPage.IntegrationSettings();
    IntegrationsSettingPage.ActivityTab();
  });
  it("should be sychronize the flow of the integration for product, sales order, customer and stock ", () => {
    ProductSynchronizationPage.productSyncronizationFlow();
    SalesOrderSynchronizationPage.saleSynchronizationFlow();
    CustomerSynchronizationPage.customerSynchronizationFlow();
    StockSynchronizationPage.stockSynchronizationFlow();
  });
});
