class TeamsPage {
    elements = {
        btnAccount: () => cy.get("button[class='nav_link']"),
        navTeams: () => cy.get(".nav_link.nav_sublink"),
    };
    navigateToTeams = () => {
        this.elements.btnAccount().should("be.visible").contains("Account").click();
        this.elements.navTeams().should("be.visible").contains("Teams").click();
    }
};
module.exports = new TeamsPage();