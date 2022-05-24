/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload'

describe("Read File", () =>{

    it('1 | Lectura Archivo', () => {
        cy.visit("https://testingqarvn.com.es/upload-files/")
        cy.title().should('eq','Upload Files | TestingQaRvn')
        cy.wait(2000)

        cy.fixture('datosformu.json').then((user)=>{
            cy.get('#wsf-1-field-80').type(user.datos_2.name)
        })
    })

})