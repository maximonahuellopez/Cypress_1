/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Funciones del Click", () =>{

    it('1 - Clic comúm y forzado', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1500)

        cy.get("#txtUsername").should("be.visible").should("be.enabled").type("Admin")
        cy.get("#txtPassword").should("be.visible").should("be.enabled").type("admin123")
        cy.get("#btnLogin").should("be.visible").should("be.enabled").click()
        cy.wait(2000)
        cy.get("#welcome").should("be.visible")
        cy.get("#menu_admin_viewAdminModule > b").should("be.visible").click()
        cy.wait(1000)
        cy.get("#menu_admin_Job").contains("Job").click({force: true})
        cy.get("#menu_admin_viewJobTitleList").click({force: true})
    })


    it.only('2 - Clic cordenadas (x,y)', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        cy.get("#txtUsername").should("be.visible").should("be.enabled").type("Admin")
        cy.get("#txtPassword").should("be.visible").should("be.enabled").type("admin123")
        cy.get("#btnLogin").should("be.visible").should("be.enabled").click()
        cy.wait(2000)

        cy.get("#MP_link").click(50,5)

    })


})