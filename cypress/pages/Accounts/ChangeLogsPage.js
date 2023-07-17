class ChangeLogsPage {
    elements = {
        btnAccount: () => cy.get("button[class='nav_link']"),
        navChangeLogs: () => cy.get(".nav_link.nav_sublink"),
    };
    navigateToChangeLog = () => {
        this.elements.btnAccount().should("be.visible").contains("Account").click();
        this.elements.navChangeLogs().should("be.visible").contains("Change Logs").click();
    }

};

module.exports = new ChangeLogsPage();