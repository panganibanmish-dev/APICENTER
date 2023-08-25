import ProfilePage from "../../pages/Accounts/ProfilePage";

const login_email = Cypress.env("login_email");
const login_password = Cypress.env("login_password");
const company = Cypress.env("company");
const firstname = Cypress.env("firstname");
const lastname = Cypress.env("lastname");
const phone_number = Cypress.env("phone");
const add = "Naga";
const add2 = "Calabanga";
const city = "Naga City";
const state = "Camarines Sur";
const zip = "4405";
const country = "Philippines";
const data = "English";
const data1 = "Nederlands";
describe("Profile Page Test Suite", () => {
  beforeEach(() => {
    cy.login(login_email, login_password);
    cy.viewport(1800, 1000);
    cy.visit("/");
    cy.get("body").contains("Account").click();
    ProfilePage.clickProfileTab();
  });
  it("should be allowing the user to change/update the profile photo of the account", () => {
    ProfilePage.setProfilePhoto();
  });
  it("should be allowing the user to change/update the profile language", () => {
    ProfilePage.setProfileLanguage(data, data1);
  });
  it("should be showing the error contact information that the field is required", () => {
    ProfilePage.invalidContactInfo();
  });
  it("should be showing error billing address information that the field is required", () => {
    //this is for blank input and it show an error message
    ProfilePage.invalidBillingAddressInfo();
  });
  it("should be allowing the user to update the contact information and show the confirmation updated", () => {
    ProfilePage.updateContactInformation(
      company,
      firstname,
      lastname,
      phone_number,
      login_email
    );
  });
  it("should be allowing the user to update the billing address and show the confirmation updated", () => {
    ProfilePage.updateBillingAddress(add, add2, city, state, zip, country);
  });
});
