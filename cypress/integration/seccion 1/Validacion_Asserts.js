/// <reference types="Cypress"/>

require('cypress-plugin-tab')

describe("  ", () =>{

    it('Introduccion a los Asserts', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#firstName").should("be.visible").type("Máximo").tab()
        cy.get("#lastName").should("be.visible").type("López").tab()
        cy.get("#userEmail").should("be.visible").should("be.enabled").type("maximolopez@gmail.com")
    })

})