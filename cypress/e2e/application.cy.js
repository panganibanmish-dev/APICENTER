import ApplicationPage from "../pages/ApplicationPage";
import LoginPage from "../pages/LoginPage";

describe('Application Page Test Suite', () => {
    beforeEach(() => {
        LoginPage
            .goToLoginPage();
        LoginPage
            .loginAdmin(
                Cypress.env('login_email'),
                Cypress.env('login_password'));
        cy.get("body")
            .contains("Applications").click();

        // cy.login(Cypress.env('login_email'), Cypress.env('login_password'));
        // cy.viewport(1800, 1000);
        // cy.visit('/');
        // cy.get("body").contains("Applications").click();
    });
    it('It should be able to add, edit, delete and search the applications', () => {
        ApplicationPage.YourApplications();
    });
});