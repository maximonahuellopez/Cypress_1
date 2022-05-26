/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Funciones del Click", () =>{

    it('1 - Clic comúm y forzado', () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('contain','Datos Personales')
        cy.wait(1500)

        cy.get("#wsf-1-field-21").should("be.visible").type("máximo")
        cy.get("#wsf-1-field-22").should("be.visible").type("lópez")
        cy.get('#wsf-1-field-23').should("be.visible").type("maximonahuellopez@gmail.com")
        cy.get('#wsf-1-field-24').should("be.visible").type("1145895678")
        cy.get('#wsf-1-field-28').should("be.visible").type("calle falsa 9012")
        cy.get('#wsf-1-help-28').should("be.visible").should('contain','16 characters / 3 words')
        cy.get('[type="submit"]').should("be.enabled").click()
        cy.get('.wsf-alert').should("be.visible").should('contain','Gracias por tu encuesta')
    })
})