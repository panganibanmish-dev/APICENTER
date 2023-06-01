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
    accountLogout: () => cy.get("button[class='dropdown-item']"),
    loginlabelInline: () => cy.get(".form_label_inline"),
    errorMsg: () => cy.get(".invalid-feedback"),
    sidebar: () => cy.get(".sidebar_nav.sidebar_list"),
  };

  goToLoginPage = () => {
    cy.viewport(1280, 768)
    cy.visit('/login')
    cy.get("body").contains("Log in");
    // cy.wait(3000)
  };

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
    // this.elements.accountMenu().click();
    // this.elements.accountLabel().should("be.visible");
    // this.elements.accountDropdownItem().should("be.visible").contains("Profile");
    // this.elements.accountDropdownItem().should("be.visible").contains("Billing");
    // this.elements.accountDropdownItem().should("be.visible").contains("Logout");
    // cy.wait(2000);
    // this.elements.accountLogout().click();
    cy.wait(5000);
  };

  blankInput = () => {
    cy.wait(3000);
    this.elements.rememberMeToggle().click();
    this.elements.btnLink().should("be.visible").contains("Sign Up").click();
    this.elements.btn().click().should("be.visible").contains("Log in");
    this.elements.errorMsg().should("be.visible").contains("The email field is required.");
    this.elements.errorMsg().should("be.visible").contains("The password field is required.");
    cy.wait(5000);
  };

  loginAdminWithInvalidCreds(email = "", password = "") {
    this.elements.emailTextBox().type(email);
    this.elements.passwordTextBox().type(password);
    this.elements.rememberMeToggle().click();
    this.elements.btn().click();
    cy.wait(3000);
    this.elements.errorMsg().should("be.visible").contains("These credentials do not match our records.");
    cy.wait(3000);
  };

  goTologinWithForgotPassword() {
    this.elements.btnLink().should("be.visible").contains("Reset").click();
  };

  goToSignUpLink() {
    this.elements.btnLink().should("be.visible").contains("Sign Up").click();
    cy.visit('/register');
    cy.wait(3000);
    this.goToLoginPage();
  };

  // loginValidAdmin = (email = "", password = "") => {
  //   this.elements.emailTextBox().type(email);
  //   this.elements.passwordTextBox().type(password);
  //   this.elements.rememberMeToggle().click();
  //   this.elements.btn().click();
  //   this.elements.homePage().should("be.visible");
  //   cy.wait(3000);
  // }
}

module.exports = new LoginPage();