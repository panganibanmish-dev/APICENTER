import data from "../fixtures/data.json";
import LoginPage from "../pages/LoginPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";

describe('Login Page Test Suite', () => {
    beforeEach(() => {
        LoginPage.goToLoginPage();
    });
    it('Email and Password Fields - Fill out email and password fields with the valid credentials', () => {
        LoginPage
            .loginAdmin(data.valid.email, data.valid.password)
    });
    it('Email and Password Fields - Blank input', () => {
        LoginPage
            .blankInput()
    });
    it('Email and Password Fields - Fill out email and password fields with the invalid credentials', () => {
        LoginPage
            .loginAdminWithInvalidCreds(data.valid.email, data.valid.inPassword)
    });
    it('Email and Password Fields - User forgot password with input email address', () => {
        LoginPage
            .goTologinWithForgotPassword()
        ForgotPasswordPage
            .loginWithoutEmail()
        ForgotPasswordPage
            .loginWithForgotPassword(data.valid.email)
    });
})