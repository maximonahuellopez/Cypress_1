
/// <reference types="Cypress"/>

// se requiere instalar npm install -D cypress-plugin-tab y luego poner la linea de abajo
require('cypress-plugin-tab') 

describe("Funcion Tab", () =>{

    it('Funcion Tab', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get('#firstName').type("Máximo").tab().
        type("López").tab().
        type("maximo@gmail.com")
    })
})//cierre describe