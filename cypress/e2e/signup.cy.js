import SignupPage from "../pages/SignupPage";
// import LoginPage from "../pages/LoginPage";

describe('Sign Up Page Test Suite', () => {
    beforeEach(() => {
        SignupPage.goToRegisterPage();
    });
    it('Just redirected - Check the required fields', () => {
        SignupPage.goToLoginLink();
        SignupPage.checkRequiredFields();

        // SignupPage.clickToggleTermsAndProcessingAgreement();
        // cy.window().should("be.visible").then(([mainWindow, newWindow]) => {
        //     const newWindowPage = new NewWindowPage(newWindow);

        //     newWindowPage.SignupPage.clickToggleTermsAndProcessingAgreement();
        //     newWindow.close();
        //     cy.wrap(mainWindow).then((mainWindow) => {
        //         mainWindow.SignupPage.goToRegisterPage();
        //         SignupPage.checkRequiredFields();
        //     });
        // });
    });
    it('User should be input the required fields and able to proceed to the next page for the completion of the registration', () => {
        const inputInfoUser = {
            email: "michuser30@mailinator.com"
        }
        SignupPage.fillData(inputInfoUser);
        SignupPage.clickToggleTermsAndProcessingAgreement();
        cy.wait(3000);
        SignupPage.clickButtonSignup();
    });
})