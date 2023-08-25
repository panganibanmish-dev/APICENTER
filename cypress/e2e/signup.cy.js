import SignupPage from "../pages/SignupPage";

const inputInfoUser = {
  email: "michuser30@mailinator.com",
};
const data = "English";
const data1 = "Nederlands";
const app1 = "Shopify";
const app2 = "Magento";
const app3 = "Shopware 6.3";
describe("Sign Up Page Test Suite", () => {
  beforeEach(() => {
    SignupPage.goToRegisterPage();
    SignupPage.goToLoginLink();
  });
  it("should be just redirected and check the required fields", () => {
    SignupPage.checkRequireFields();
  });
  it("should be input the required fields and able to proceed to the homepage", () => {
    SignupPage.fillData(inputInfoUser);
    SignupPage.clickToggleTermsAndProcessingAgreement();
    SignupPage.drpdownClick(data, data1, app1, app2, app3);
    cy.get(".button").should("be.visible").click();
    SignupPage.redirectHomePage();
  });
});
