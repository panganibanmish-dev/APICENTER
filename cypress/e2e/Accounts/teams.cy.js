import TeamsPage from "../../pages/Accounts/TeamsPage";
import LoginPage from "../../pages/LoginPage";

describe('Teams Page Test Suite', () => {
    beforeEach(() => {
        LoginPage
            .goToLoginPage();
        LoginPage
            .loginAdmin(
                Cypress.env('login_email'),
                Cypress.env('login_password'));
        TeamsPage.navigateToTeams();
    });
    it('teams test', () => {

    });
});