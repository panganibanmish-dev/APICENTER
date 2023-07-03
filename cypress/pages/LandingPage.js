class LandingPage {
    elements = {
        navLogo: () => cy.get(".nav_item.logo"),
    };
    apicenterPage = () => {
        this.elements.navLogo().should("be.visible");
        cy.wait(3000);
        cy.get(".nav_mobile.nav_body").should("be.visible");
        const nav = [
            "Platform",
            "Integrations",
            "Solutions",
            "Partners",
            "Pricing",
            "Log in",
            "Try APIcenter free",

        ];
        nav.forEach((n) => {
            cy.get(".nav_item").contains(n);
        });
        cy.wait(3000);
    };
}
module.exports = new LandingPage();