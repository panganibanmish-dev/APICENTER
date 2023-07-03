import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';

describe('Landing Page Test Suite', () => {
    beforeEach(() => {
        LoginPage.goToLoginPage();
    });
    it('Viewing the landing page of the APIcenter', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            // Prevent Cypress from failing the test
            return false;
        });
        cy.request('https://apicenter.io/').then((response) => {
            // Perform assertions or actions on the response
            expect(response.status).to.eq(200);
            cy.visit('https://apicenter.io/');
        });
        cy.wait(5000);
        LandingPage.apicenterPage();
    });
});
