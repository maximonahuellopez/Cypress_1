/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload'

describe("select then", () =>{

    it('1 | select multiple checkbox then', () => {
        cy.visit("http://demo.seleniumeasy.com/jquery-dual-list-box-demo.html")
        cy.wait(1000)

        cy.get(".pickData").select(["Isis","Alice","Manuela","Luiza","Giovanna","Helena","Maria Luiza"]).then(()=>{
            cy.get('.pAdd').should("be.visible").click()
            cy.wait(2000)
            cy.get('.pRemoveAll').should("be.visible").click()
            cy.wait(2000)
            cy.get(".pickListResult").should("be.empty")
        })
    })

})