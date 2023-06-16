class IntegrationsFlowPage {
    elements = {
        cardTile: () => cy.get(".tile.tile-wide.cursor-pointer.overflow-hidden.h-100"),

    };
    clickCardTile = () => {
        this.elements
            .cardTile()
            .click();
    };
    
}

module.exports = new IntegrationsFlowPage();

