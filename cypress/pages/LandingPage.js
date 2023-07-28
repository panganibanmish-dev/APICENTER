class LandingPage {
    elements = {
        navLogo: () => cy.get(".nav_item.logo"),
        contentBox: () => cy.get("div[class='content-box'] h1"),
        text: () => cy.get("div[class='text']"),
        textSubject: () => cy.get("section[class='text_center mb-6 wrap_min'] p[class='text_subject']"),
        btnIntegrations: () => cy.get("div[class='btn-box'] a[class='btn btn_secondary']"),
        hero_text: () => cy.get("h1[class='hero_title'] span"),
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
        logoLievERP: () => cy.get("img[alt='logo'][src='/images/arno-de-liever-lieverp_logo_groot1.jpg']"),
        logoEserviceWare: () => cy.get("img[alt='logo'][src='/images/eServiceware_payoff_uniek_met_visma_software_transparant-2.png']"),
        logoMailBlue: () => cy.get("img[alt='logo'][src='/images/ootb_mailblue_e-mail_logo4x.png']"),
        logoWeProcess: () => cy.get("img[alt='logo'][src='/images/Weprocess.png']"),
        labelTextDigitalTransformation: () => cy.get("section[class='text_center mb-6'] h2"),
        pSingletext: () => cy.get("section[class='text_center mb-6'] p[class='text_subject']"),
        titleApicenterSection: () => cy.get("section[class='text_center mb-4 mt-2'] h2"),
        li_Section: () => cy.get("section[class='solution-section pt-4'] li"),
        div_text: () => cy.get(".text.text_subject"),
        div_a_contactUs:() => cy.get("div[class='text text_subject'] a"),
        link_apicenter: () => cy.get("#apicenter"),
        contact_becomePartnerAndQuestionNeedHelp: () => cy.get(".contact_title.mt-1"),
        btnBookAMeeting: () => cy.get(".btn.btn_form.active"),
        link_here: () => cy.get("p[class='contact_description'] a"),
    };
    contactUs = () => {
        this.elements.hero_text().should("be.visible").contains("Contact Us");
        this.elements.contact_becomePartnerAndQuestionNeedHelp().should("be.visible").contains("Become a partner");
        this.elements.btnBookAMeeting().should("be.visible").click();
        this.gotoCalenderPage();
        // cy.wait(3000);
        cy.visit("https://apicenter.io/contact/");
        this.elements.contact_becomePartnerAndQuestionNeedHelp().should("be.visible").contains("Questions? Need help?");
        this.elements.link_here().should("be.visible").click();
        cy.visit("https://apicenter.io/partners/");
    };
    gotoCalenderPage = () => {
        cy.visit("https://calendly.com/apicenter/partner-with-apicenter?month=2023-07");
    }
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
    navbar = () => {
        this.elements.navLogo().should("be.visible");
        // cy.wait(3000);
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
            cy.get(".nav_item").should("be.visible").contains(n);
        });
        // cy.wait(3000);
    };
    apicenterLogo = () => {
        this.elements.navLogo().should("be.visible").click();
        // cy.wait(3000);
    };
    //main homepage of apicenter
    homepage = () => {
        this.elements.contentBox().should("be.visible").contains("Software direct, affordable, easy, integrations");
        // cy.wait(3000);
        this.elements.text().should("be.visible").contains("API integrations designed to scale your application ecosystem and assure a fluid and secure flow of data.");
        this.elements.btnIntegrations().should("be.visible");
        this.elements.text_sectionLeaders().should("be.visible").contains("Leaders across all industries trust their API security to API Center.");
        this.elements.textSubject().should("be.visible").contains("APIcenter supports API integrations globally. For all industries, from SME to multinationals.");
        this.elements.videobtn().should("be.visible").click();
        cy.wait(60000);
        cy.wait(10000);
        this.elements.logoLievERP().should("be.visible");
        this.elements.logoEserviceWare().should("be.visible");
        this.elements.logoMailBlue().should("be.visible");
        this.elements.logoWeProcess().should("be.visible");
        this.elements.labelTextDigitalTransformation().should("be.visible").contains("The missing piece to a complete digital transformation");
        this.elements.pSingletext().should("be.visible").contains("From a single flow to complex flows with custom changes.");
        cy.contains("Live Dashboard").should("be.visible");
        cy.contains("Deploy Faster").should("be.visible");
        cy.contains("Enterprise Scalability").should("be.visible");
        cy.contains("Data Synchronization").should("be.visible");
        cy.contains("Secure data exchange").should("be.visible");
        cy.contains("Tracking").should("be.visible");
        this.elements.titleApicenterSection().eq(0).should("be.visible").contains("APIcenter suits all your integration needs");
        cy.contains("APicenter is equipped with features you'll love").should("be.visible");
        cy.contains("Why choose APIcenter as your iPaas system?").should("be.visible");
        this.elements.li_Section().eq(0).should("be.visible").contains("Ease of use");
        this.elements.li_Section().eq(1).should("be.visible").contains("Cost effective, no enterprise prices");
        this.elements.li_Section().eq(2).should("be.visible").contains("Overview of transactions");
        this.elements.li_Section().eq(3).should("be.visible").contains("Warning center; instant error notifications");
        this.elements.li_Section().eq(4).should("be.visible").contains("Team with years of API knowledge");
        cy.contains("Integrate anything and everything!").should("be.visible");
        this.elements.div_text().should("be.visible").contains("Extend your business integrations across your ecosystem. With APIcenter you can integrate webshops, ");
        this.elements.div_a_contactUs().should("be.visible").click();
        this.contactUs();
        this.gotoLandingpage();
        // this.elements.link_apicenter().should("be.visible").click();
        // this.elements.titleApicenterSection().eq(1).should("be.visible").contains("Focus on the data you care about");
        cy.contains("Focus on the data you care about").should("be.visible");
    };
    //integration page 
    IntegrationPage = (app1, app2) => {
        this.elements.btnIntegrations().should("be.visible").click();
        cy.wait(3000);
        this.elements.hero_text().should("be.visible").contains("Integrations");
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
            cy.get(".sidebar_link").should("be.visible").contains(s);
            //cy.wait(3000);
        });
        cy.reload();
        this.elements.searchApp().should("be.visible").type(`${app1}{enter}`);
        this.elements.appshopify().should("be.visible").click()

        // this.elements.appshopify().click();
        // cy.wait(3000);
        this.elements.searchApp().should("be.visible").type(`${app2}{enter}`)
        // cy.wait(5000);
        this.elements.appmagento().should("be.visible").click({ force: true });
        // cy.wait(3000);

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
        // cy.wait(3000);
        this.elements.btnSetup().eq(1).should("be.visible").click();
        this.elements.registerForm().should("be.visible").contains("Register");
        // cy.wait(3000);
        this.gotoLandingpage();
    };
    //the navbar for platform page
    navPlatform = () => {
        this.elements.navLogo().should("be.visible").click();
        cy.contains("a", "Platform").should("be.visible").realHover('mouse');
        // cy.wait(5000);
        cy.contains("Platform Overview").should("be.visible").click();
        cy.wait(3000);
        cy.contains("Platform Overview");
        cy.contains("Why Choose the APIcenter Platform?").should('be.visible');
        cy.contains("What Can You Do with the APIcenter Platform?").should('be.visible');
        // cy.wait(3000);
        cy.contains("a", "Platform").should("be.visible").realHover('mouse');
        cy.contains("Platform Features").click();
        cy.contains("Platform Features");
        // cy.wait(3000);
        cy.contains("a", "Platform").should("be.visible").realHover('mouse');
        cy.contains("Platform Security").click();
        cy.contains("Platform Security");
        // cy.wait(2000);
    };
    //navbar for integrations page
    navIntegrations = () => {
        cy.contains("a", "Integrations").should("be.visible").realHover('mouse');
        // cy.wait(2000);
    };
    //navbar for solutions page
    navSolutions = () => {
        cy.contains("a", "Solutions").should("be.visible").realHover('mouse');
    };
    //navbar for ecommerce page
    navEcommerce = () => {
        cy.contains("E-Commerce").should("be.visible").click();
        cy.contains("E-commerce Integrations");
    };
    //navbar for partners page
    navPartners = () => {
        cy.contains("a", "Partners").should("be.visible").realHover('mouse');
        cy.contains("Become a partner").should("be.visible").click();
        cy.contains("Become a partner");
        cy.get(".btn.btn_secondary").should("be.visible").contains("become an integration partner").click();
        this.gotoLandingpage();
        // cy.wait(3000);
    };
    //navbar for pricing page
    navPricing = () => {
        cy.contains("a", "Pricing").should("be.visible").realHover('mouse').click();
    };
    //footer of apicenter page
    footer = () => {
        this.elements.footer().should('be.visible').contains("Company");
        this.elements.footer().should('be.visible').contains("Platform");
        this.elements.footer().should('be.visible').contains("Contact");
        cy.contains("Contact Us").should("be.visible").click();
        // cy.wait(3000);
        cy.contains("About Us").should("be.visible").click();
        // cy.wait(3000);
        cy.contains("About Us").should('be.visible');
        cy.contains("Our Mission").should('be.visible');
        cy.contains("Our Team").should('be.visible');
        // cy.wait(2000);
        cy.contains("Terms and conditions").should("be.visible").click();
        // cy.wait(3000);
        cy.contains("Privacy policy").should("be.visible").click();
        // cy.wait(3000);
        cy.reload();
    };
};
module.exports = new LandingPage();