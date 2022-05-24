/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload';

describe("Upload Files", () =>{

    it('Subiendo archivos 1', () => {
        cy.visit("https://testingqarvn.com.es/upload-files/")
        cy.title().should('eq','Upload Files | TestingQaRvn')
        cy.wait(1000)

        const ruta='dog1.jpg'

        cy.get('[type="file"]').should('be.visible','be.enabled').attachFile(ruta)
        cy.wait(2000)
    })

})