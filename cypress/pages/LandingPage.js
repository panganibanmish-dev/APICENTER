class LandingPage {
    elements = {
        navLogo: () => cy.get(".nav_item.logo"),
        contentBox: () => cy.get("div[class='content-box'] h1"),
        text: () => cy.get("div[class='text']"),
        btnIntegrations: () => cy.get("div[class='btn-box'] a[class='btn btn_secondary']"),
        heroIntegrations: () => cy.get("h1[class='hero_title'] span"),
        category: () => cy.get(".color_theme.h4.pt-1"),
        searchApp: () => cy.get(".form-input.search_field"),
        btnSearch: () => cy.get("button[onclick='handleSearch()']"),
        appshopify: () => cy.get(".card_box.card[href='/integrations/shopify/']"),
        appmagento: () => cy.get("img[alt='Magento 2']"),
        title: () => cy.get(".hero_title"),
        breadcrumbsList: () => cy.get("#breadcrumbs"),
        flowtitle: () => cy.get("section[class='flow_title mb-2 container'] h2"),
        flowName: () => cy.get(".flow_name"),
        flowPrice: () => cy.get(".flow_price"),
        btnSetup: () => cy.get(".btn.btn_try"),

        registerForm: () => cy.get("div[class='flex justify-content-between'] h1"),

        text_sectionLeaders: () => cy.get("section[class='text_center mb-6 wrap_min'] h2"),
        videobtn: () => cy.get(".video_button"),
        footer: () => cy.get(".color_theme.footer_title"),
    };
    gotoLandingpage = () => {
        cy.on('uncaught:exception', (err, runnable) => {
            // Prevent Cypress from failing the test
            return false;
        });
        cy.request('https://apicenter.io/').then((response) => {
            // Perform assertions or actions on the response
            expect(response.status).to.eq(200);
            cy.visit('https://apicenter.io/');
        });
    };
    apicenterPage = (app1, app2) => {
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
        this.elements.navLogo().click();
        cy.wait(3000);
        this.elements.contentBox().should("be.visible").contains("Software direct, affordable, easy, integrations");
        cy.wait(3000);
        this.elements.text().should("be.visible").contains("API integrations designed to scale your application ecosystem and assure a fluid and secure flow of data.");
        cy.wait(3000);
        this.elements.btnIntegrations().should("be.visible").click();
        cy.wait(3000);
        this.elements.heroIntegrations().should("be.visible").contains("Integrations");
        cy.wait(3000);
        this.elements.category().should("be.visible").contains("Category");
        cy.get(".sidebar_nav.nav-pills").should("be.visible");
        const sidebar = [
            "All categories",
            "ERP",
            "E-Commerce",
            "CRM",
            "Marketplaces",
            "Point of sale",
            "Other",
            "Email marketing",
            "Accounting",
            "PIM",
            "Roadmap",
        ];
        sidebar.forEach((s) => {
            cy.get(".sidebar_link").contains(s);
            cy.wait(3000);
        });
        cy.reload();
        this.elements.searchApp().should("be.visible").type(`${app1}{enter}`);
        cy.wait(3000);
        this.elements.appshopify().click();
        cy.wait(3000);
        this.elements.searchApp().should("be.visible").type(`${app2}{enter}`)
        cy.wait(5000);
        this.elements.appmagento().click({ force: true });
        cy.wait(3000);

        this.elements.title().should("be.visible").contains("Shopify");
        this.elements.breadcrumbsList().should("be.visible").contains("APIcenter");
        this.elements.title().should("be.visible");

        //verify price and name of the flow
        this.elements.flowName().eq(0).should("be.visible").contains("Sales Orders");
        this.elements.flowPrice().eq(0).should("be.visible").contains("€ 1498 / MO");
        this.elements.flowName().eq(1).should("be.visible").contains("Stocks");
        this.elements.flowPrice().eq(1).should("be.visible").contains("€ 949 / MO");
        this.elements.flowName().eq(2).should("be.visible").contains("Products");
        this.elements.flowPrice().eq(2).should("be.visible").contains("€ 1698 / MO");
        cy.wait(3000);

        this.elements.btnSetup().eq(1).should("be.visible").click();
        this.elements.registerForm().should("be.visible").contains("Register");
        cy.wait(3000);
        this.gotoLandingpage();

        this.elements.text_sectionLeaders().should("be.visible").contains("Leaders across all industries trust their API security to API Center.");
        this.elements.videobtn().click();
        cy.wait(60000);
        cy.wait(10000);
        this.elements.navLogo().click();
        cy.contains("a", "Platform").realHover('mouse');
        cy.wait(5000);
        cy.contains("Platform Overview").click();
        cy.wait(3000);
        cy.contains("Platform Overview").should('be.visible');
        cy.contains("Why Choose the APIcenter Platform?").should('be.visible');
        cy.contains("What Can You Do with the APIcenter Platform?").should('be.visible');
        cy.wait(3000);
        cy.contains("a", "Platform").realHover('mouse');
        cy.contains("Platform Features").click();
        cy.contains("Platform Features").should("be.visible");
        cy.wait(3000);
        cy.contains("a", "Platform").realHover('mouse');
        cy.contains("Platform Security").click();
        cy.contains("Platform Security").should("be.visible");
        cy.wait(2000);

        cy.contains("a", "Integrations").realHover('mouse');
        cy.wait(5000);

        cy.contains("a", "Solutions").realHover('mouse');
        cy.wait(5000);
        cy.contains("E-Commerce").click();
        cy.contains("E-commerce Integrations").should("be.visible");

        
        cy.contains("a", "Partners").realHover('mouse');
        cy.wait(5000);
        cy.contains("Become a partner").click();
        cy.contains("Become a partner").should("be.visible");
        cy.get(".btn.btn_secondary").should("be.visible").contains("become an integration partner").click();
        cy.wait(5000);
        this.gotoLandingpage();
        cy.wait(5000);

        cy.contains("a", "Pricing").realHover('mouse').click();

        this.elements.footer().should('be.visible').contains("Company");
        this.elements.footer().should('be.visible').contains("Platform");
        this.elements.footer().should('be.visible').contains("Contact");

        cy.contains("Contact Us").click();
        cy.wait(3000);
        cy.contains("About Us").click();
        cy.wait(3000);
        cy.contains("About Us").should('be.visible');
        cy.contains("Our Mission").should('be.visible');
        cy.contains("Our Team").should('be.visible');
        cy.wait(2000);
        cy.contains("Terms and conditions").click();
        cy.wait(3000);
        cy.contains("Privacy policy").click();
        cy.wait(3000);
        cy.reload();
    };
}
module.exports = new LandingPage();