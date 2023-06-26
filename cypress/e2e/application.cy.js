import LoginPage from "../pages/LoginPage";
import ApplicationPage from "../pages/ApplicationPage";

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
    });
    it('It should be able to add, edit, delete and search the applications', () => {
        ApplicationPage.YourApplications();
    });
});