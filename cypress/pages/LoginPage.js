class LoginPage {
  elements = {
    emailTextBox: () => cy.get("#email-field"),
    passwordTextBox: () => cy.get("#password-field"),
    rememberMeToggle: () => cy.get("label[for='remember-me']"),
    btn: () => cy.get(".button"),
    btnLink: () => cy.get(".btn.btn-link.font_bold"),
    homePage: () => cy.get(".breadcrumb_link.active"),
    accountMenu: () => cy.get("#dropdownMenuButton"),
    accountLabel: () => cy.get(".dropdown-header"),
    accountDropdownItem: () => cy.get(".dropdown-item"),
    userIcon: () => cy.get("img[alt='User Photo']"),
    accountLogout: () => cy.get("button[class='dropdown-item']"),
    loginlabelInline: () => cy.get(".form_label_inline"),
    errorMsg: () => cy.get(".invalid-feedback"),
    sidebar: () => cy.get(".sidebar_nav.sidebar_list"),
  };

  //redirect to login page
  goToLoginPage = () => {
    // cy.viewport(1280, 768)
    cy.viewport(1800, 1000)
    cy.visit('/login')
    cy.get("body").contains("Log in");
  };

  //user should input valid creds and must redirect to homepage 
  loginAdmin = (email, password) => {
    cy.get("#email-field").should("be.visible").and("have.class", "form_field");
    this.elements.emailTextBox().type(email);
    cy.get("#password-field").should("be.visible").and("have.class", "form_field");
    this.elements.passwordTextBox().type(password);
    this.elements.rememberMeToggle().click();
    cy.contains(".button", "Log in");
    this.elements.btn().click();
    this.elements.homePage().should("be.visible");
    cy.wait(3000);
    cy.get(".navbar-brand.nav_brand").should("be.visible");
    const sidebar = [
      "Dashboard",
      "Integrations",
      "Applications",
      "Account",
      "Profile",
      "Billing",
      "Support",
    ];
    sidebar.forEach((s) => {
      cy.get(".sidebar_nav.sidebar_list").contains(s);
    });
    cy.wait(5000);
  };

  // user with no creds input and must display the required fields
  userWithNoCredsInput = () => {
    this.goToSignUpLink();
    cy.wait(3000);
    this.elements.rememberMeToggle().click();
    this.elements.btnLink().should("be.visible").contains("Sign Up").click();
    this.elements.btn().click().should("be.visible").contains("Log in");
    this.elements.errorMsg().should("be.visible").contains("The email field is required.");
    this.elements.errorMsg().should("be.visible").contains("The password field is required.");
    cy.wait(5000);
  };

  // user with invalid creds and must display the message that the account don't match
  loginAdminWithInvalidCreds(email = "", password = "") {
    this.elements.emailTextBox().type(email);
    this.elements.passwordTextBox().type(password);
    this.elements.rememberMeToggle().click();
    this.elements.btn().click();
    cy.wait(3000);
    this.elements.errorMsg().should("be.visible").contains("These credentials do not match our records.");
    cy.wait(3000);
  };

  // redirect to forgot password page
  goTologinWithForgotPassword() {
    this.elements.btnLink().should("be.visible").contains("Reset").click();
  };

  //redirect link to register page
  goToSignUpLink() {
    this.elements.btnLink().should("be.visible").contains("Sign Up").click();
    cy.visit('/register');
    cy.wait(3000);
    this.goToLoginPage();
  };
  
  // user must be logout the account after used
  logout() {
    this.elements.userIcon().click();
    cy.wait(3000);
    this.elements.accountLogout().contains("Logout");
    this.elements.accountLogout().click();
    cy.wait(3000);
  };
}

module.exports = new LoginPage();