import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';

describe('Landing Page Test Suite', () => {
    beforeEach(() => {
        LoginPage.goToLoginPage();
    });
    it('Viewing the landing page of the APIcenter', () => {

        const app1 = "shopify"
        const app2 = "magento 2"

        LandingPage.gotoLandingpage();
        cy.wait(5000);
        LandingPage.apicenterPage(app1, app2);
    });
});
