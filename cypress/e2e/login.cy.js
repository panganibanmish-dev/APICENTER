
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import LoginPage from "../pages/LoginPage";

describe('Login Page Test Suite', () => {
    beforeEach(() => {
        LoginPage.goToLoginPage();
    });
    it('should be fill out email and password fields with the valid credentials', () => {
        LoginPage
            .loginAdmin(
                Cypress.env('login_email'),
                Cypress.env('login_password'));
        LoginPage.logout();
    });
    it('should be input email and password with no credentials', () => {
        LoginPage
            .userWithNoCredsInput();
    });
    it('should be fill out email and password fields with the invalid credentials', () => {
        LoginPage
            .loginAdminWithInvalidCreds(Cypress.env('login_email'), Cypress.env('inPassword'));
    });
    it('should be the user forgot password with email address input.', () => {
        LoginPage
            .goTologinWithForgotPassword()
        ForgotPasswordPage
            .loginWithoutEmail();
        ForgotPasswordPage.Email(Cypress.env('password'));
    });
})