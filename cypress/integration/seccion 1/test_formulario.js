/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Funciones del Click", () => {

    it('1 - Clic comúm y forzado', () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('contain', 'Datos Personales')
        cy.wait(1500)

        cy.fixture('datosformu.json').then((login) => {
            cy.get("#wsf-1-field-21").should("be.visible").type(login.reg.name)
            cy.get("#wsf-1-field-22").should("be.visible").type(login.reg.lastName)
            cy.get('#wsf-1-field-23').should("be.visible").type(login.reg.email)
            cy.get('#wsf-1-field-24').should("be.visible").type(login.reg.phone)
            cy.get('#wsf-1-field-28').should("be.visible").type(login.reg.address)
            cy.get('#wsf-1-help-28').should("be.visible").should('contain', login.reg.countCharacters)
            cy.get('[type="submit"]').should("be.enabled").click()
            cy.get('.wsf-alert').should("be.visible").should('contain', login.reg.messageOk)
        })
    })
})