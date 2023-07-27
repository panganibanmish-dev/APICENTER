import ApplicationPage from "../pages/ApplicationPage";
import LoginPage from "../pages/LoginPage";

describe('Application Page Test Suite', () => {
    beforeEach(() => {
        // LoginPage
        //     .goToLoginPage();
        // LoginPage
        //     .loginAdmin(
        //         Cypress.env('login_email'),
        //         Cypress.env('login_password'));
        cy.login(Cypress.env('login_email'), Cypress.env('login_password'));
        cy.viewport(1800, 1000);
        cy.visit('/');
        LoginPage.homepage();
        cy.get("body")
            .contains("Applications").click();
    });
    it('It should be able to add, edit, delete and search the applications', () => {
        ApplicationPage.YourApplications();
    });
});