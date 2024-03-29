import BillingPage from "../../pages/Accounts/BillingPage";
import LoginPage from "../../pages/LoginPage";

const login_email = Cypress.env("login_email");
const login_password = Cypress.env("login_password");
describe("Billing Page Test Suite", () => {
  beforeEach(() => {
    LoginPage.goToLoginPage();
    LoginPage.loginAdmin(login_email, login_password);
    cy.get("body").contains("Account").click();
    BillingPage.clickBillingTab();
  });
  it("should be verify the label", () => {
    BillingPage.verifyLabel();
  });
  it("should be update payment method through by Card Payment", () => {
    BillingPage.clickUpdatePaymentMethod();
    BillingPage.paymentMolliebyCard();
  });
  it("should be update payment method through by iDeal Payment", () => {
    BillingPage.clickUpdatePaymentMethod();
    BillingPage.paymentMolliebyiDeal();
  });
  it("should be update payment method through by KBC and CBC Payment", () => {
    BillingPage.clickUpdatePaymentMethod();
    BillingPage.paymentMolliebyKbcCbc();
  });
  it("should be check the required fields of the payment information ", () => {
    BillingPage.checkRequiredFields();
  });
  it("should be input the required fields of the payment information", () => {
    BillingPage.inputRequiredFields();
  });
});
