import SignupPage from "../pages/SignupPage";
// import LoginPage from "../pages/LoginPage";

describe('Sign Up Page Test Suite', () => {
    beforeEach(() => {
        SignupPage.goToRegisterPage();
        SignupPage.goToLoginLink();
    });
    it('Just redirected - Check the required fields', () => {
        SignupPage.checkRequireFields();
    });
    it('User should be input the required fields and able to proceed to the next page for the completion of the registration', () => {
        const inputInfoUser = {
            email: "michuser30@mailinator.com"
        };
        const data = 'English';
        const data1 = "Nederlands";
        const app1 = "Shopify";
        const app2 = "Magento";
        const app3 = "Shopware 6.3";

        SignupPage.fillData(inputInfoUser);
        SignupPage.clickToggleTermsAndProcessingAgreement();
        cy.wait(3000);
        SignupPage.drpdownClick(data, data1, app1, app2, app3);
        cy.get(".button").click();
        SignupPage.redirectHomePage();
    });
})