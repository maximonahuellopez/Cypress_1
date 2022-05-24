/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload'

describe("Asserts", () =>{

    it('1 | Asserts contains', () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq","My Store")
        cy.wait(1000)

        cy.get('#block_top_menu').contains("Women").click()
    })

    it('1 | Asserts find', () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq","My Store")
        cy.wait(1000)

        cy.get('#homefeatured').find('.product-container').eq(0).click()
    })

    it.only('1 | Asserts then', () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq","My Store")
        cy.wait(1500)

        // "Find" Busco la capa anterior a los elementos y con "eq" busco el elemento por indice
        cy.get('#homefeatured').find('.product-container').eq(3).click()

        // La letra "e" dentro de then reemplaza el elemento dentro del GET, y con "e.text()" extraemos el valor, guardandolo en un variable
        cy.get('#product_condition > .editable').then((e)=>{
            let estado = e.text()
            if (estado == "New") {
                cy.log("El vestido es nuevo!")
                cy.get("#our_price_display").then((f)=>{

                    let costo = f.text().slice(1,3)
                    let vrt = 35
                    
                    if (costo > vrt) {
                        cy.log(alert('El vestido esta fuera del presupuesto, acepte y elegir otro. gracias!'))
                        cy.xpath("(//a[@title='Women'])[2]").click()
                        cy.wait(1500)
                        cy.get('.top-pagination-content').scrollIntoView() //scrollIntoView posicionamos en menu o elemento desea de la web
                    } else {
                        cy.log(alert('El vestido esta en presupuesto, aceptar para comprarlo'))
                        cy.get('.exclusive > span').click()
                    }
                })
            }
        })
    })

    
})