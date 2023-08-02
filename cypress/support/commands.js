// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@shelex/cypress-allure-plugin';
import 'cypress-file-upload';
import 'cypress-iframe';
import 'cypress-mailosaur';
import 'cypress-mochawesome-reporter/register';
import "cypress-real-events/support";

/// <reference types=”cypress-xpath” />


Cypress.Commands.add('login', (email, password) => {
    cy.session([email, password], () => {
        cy.viewport(1800, 1000);
        cy.visit("/login");
        cy.get("#email-field").type(email);
        cy.get("#password-field").type(password);
        cy.get("label[for='remember-me']").should("be.visible").click();
        cy.intercept('POST', '/login').as('postLogin');
        cy.get('.button').click();
        cy.wait('@postLogin');
    },
        {
            cacheAcrossSpecs: true
        },
    );
});
  
