import NovaPage from "../../pages/Accounts/NovaPage";

const login_email = Cypress.env("login_email");
const login_password = Cypress.env("login_password");
describe("Nova Page Test Suite", () => {
  beforeEach(() => {
    NovaPage.Nova(login_email, login_password);
    cy.get("body").should("be.visible");
  });
  it("Should be check the billing of invoice, orders and subscription", () => {
    NovaPage.Billing();
  });
  it("Should be delete the created user ", () => {
    NovaPage.deleteUsers();
  });
});
