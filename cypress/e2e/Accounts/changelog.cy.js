import ChangeLogsPage from "../../pages/Accounts/ChangeLogsPage";
import LoginPage from "../../pages/LoginPage";

describe('Change Log Page Test Suite', () => {
    beforeEach(() => {
        LoginPage
            .goToLoginPage();
        LoginPage
            .loginAdmin(
                Cypress.env('login_email'),
                Cypress.env('login_password'));
        ChangeLogsPage.navigateToChangeLog();
    });
    it('change log test', () => {

    });
});