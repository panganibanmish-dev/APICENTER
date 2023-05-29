import data from "../fixtures/data.json";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import LoginPage from "../pages/LoginPage";
// import SignupPage from "../pages/SignupPage";

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
            .goToSignUpLink();
        LoginPage
            .blankInput();
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