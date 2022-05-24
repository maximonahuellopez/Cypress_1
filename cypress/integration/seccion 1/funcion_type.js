/// <reference types="Cypress"/>

describe("Funcion Type", () =>{

    it('Seccion 1 - funcion ENTER', () => {
        cy.visit("https://www.google.com")
        cy.title().should('eq','Google')
        cy.wait(1500)
        //buscar el elemento, typea texto y presiona enter
        cy.get("[name='q']").type("Cypress io {enter}")
        //hacemos clic en el primer link
        cy.get("div.CCgQ5.vCa9Yd.QfkTvb.MUxGbd.v0nnCb").click()
    })

})