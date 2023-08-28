import ApplicationPage from "../pages/ApplicationPage";
import LoginPage from "../pages/LoginPage";

const login_email = Cypress.env("login_email");
const login_password = Cypress.env("login_password");

describe("Application Page Test Suite", () => {
  beforeEach(() => {
    cy.login(login_email, login_password);
    cy.viewport(1800, 1000);
    cy.visit("/");
    LoginPage.homepage();
    cy.get("body").contains("Applications").click();
  });
  it("should be able to add, edit, delete and search the applications", () => {
    ApplicationPage.YourApplications();
  });
});
