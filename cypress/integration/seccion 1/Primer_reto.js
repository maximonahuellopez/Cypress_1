/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload'

describe("  ", () =>{

    it('Verificar el buscador', () => {
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get('#searchBox').should('be.visible').type("Cierra")
        cy.wait(1000)
        cy.get('#searchBox').should('be.visible').clear()
    })

    it('Agregar un registro', () => {
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get('#addNewRecordButton').should('be.visible').click()
        cy.wait(1000)
        cy.get('#firstName').should('be.visible').type("Máximo").tab().type("López").tab().type("maximolopez@gmail.com").tab().type("33").tab().type("10000").tab().type("sistemas")
        cy.get('#submit').should('be.visible').click()
        cy.get('#searchBox').should('be.visible').type("Lucas")
        cy.get('.rt-noData').should('be.visible')
    })

})