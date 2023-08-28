import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import LoginPage from "../pages/LoginPage";

const login_email = Cypress.env("login_email");
const login_password = Cypress.env("login_password");
const invalid_password = Cypress.env("inPassword");

describe("Login Page Test Suite", () => {
  beforeEach(() => {
    LoginPage.goToLoginPage();
  });
  it("should be fill out email and password fields with the valid credentials", () => {
    LoginPage.loginAdmin(login_email, login_password);
    LoginPage.logout();
  });
  it("should be input email and password with no credentials", () => {
    LoginPage.userWithNoCredsInput();
  });
  it("should be fill out email and password fields with the invalid credentials", () => {
    LoginPage.loginAdminWithInvalidCreds(login_email, invalid_password);
  });
  it("should be the user forgot password with email address input.", () => {
    LoginPage.goTologinWithForgotPassword();
    ForgotPasswordPage.loginWithoutEmail();
    ForgotPasswordPage.Email(login_password);
  });
});
