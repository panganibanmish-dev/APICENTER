import data from "../fixtures/data.json";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import LoginPage from "../pages/LoginPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";

describe('Login Page Test Suite', () => {
    beforeEach(() => {
        LoginPage.goToLoginPage();
    });
    it('Email and Password Fields - Fill out email and password fields with the valid credentials', () => {
        LoginPage
            .loginAdmin(data.valid.email, data.valid.password);
        LoginPage.logout();
    });
    it('Email and Password Fields - Blank input', () => {
        LoginPage
            .userWithNoCredsInput();
    });
    it('Email and Password Fields - Fill out email and password fields with the invalid credentials', () => {
        LoginPage
            .loginAdminWithInvalidCreds(data.valid.email, data.valid.inPassword)
    });
    it('Email and Password Fields - User forgot password with input email address', () => {
        LoginPage
            .goTologinWithForgotPassword()
        ForgotPasswordPage
            .loginWithoutEmail();
        ForgotPasswordPage.Email();
        ResetPasswordPage.mailosaur(data.valid.email, data.valid.password, data.valid.newPassword);
    });
})