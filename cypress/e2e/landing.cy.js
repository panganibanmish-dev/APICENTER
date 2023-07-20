import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';

describe('Landing Page Test Suite', () => {
    beforeEach(() => {
        LoginPage.goToLoginPage();
    });
    it('should viewing the landing page of the APIcenter', () => {

        const app1 = "shopify"
        const app2 = "magento 2"

        LandingPage.gotoLandingpage();
        LandingPage.navbar();
        LandingPage.apicenterLogo();
        LandingPage.homepage();
        LandingPage.IntegrationPage(app1, app2);
        LandingPage.navPlatform();
        LandingPage.navIntegrations();
        LandingPage.navSolutions();
        LandingPage.navEcommerce();
        LandingPage.navPartners();
        LandingPage.navPricing();
        LandingPage.footer();
    });
});
