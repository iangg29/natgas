/// <reference types="cypress"/>

describe("Accomplishment Dashboard", () =>{
    beforeEach(() => {
        cy.visit("/accomplishments")
        
        it("should showcase error if information is missing", () => {
            cy.get("[data-cy='accomplishment-title-input']").type("My basketball accomplishments")
            cy.get("[data-cy='accomplishment-input']").type("I made threes in a row")
            cy.get("[type='checkbox']").click()
            cy.contains("Submit Accomplishment").click()
            cy.contains("This accomplishment should be visible").should("be.visible")
        })

        it("should turn back to accomplishment dashbord with empty inputs when 'Go back' button is clicked", () => {
            cy.get("[data-cy='accomplishment-title-input']").type("My basketball accomplishments")
            cy.get("[data-cy='accomplishment-input']").type("I made threes in a row")
            cy.get("[type='checkbox']").click()
            cy.contains("Submit Accomplishment").click()
            cy.contains("This accomplishment should be visible").should("be.visible")
        })
        
        it("should turn back to accomplishment dashbord with empty inputs when 'Go back' button is clicked", () => {
            cy.get("[data-cy='accomplishment-title-input']").type("My basketball accomplishments")
            cy.get("[data-cy='accomplishment-input']").type("I made threes in a row")
            cy.get("[type='checkbox']").click()
            cy.contains("Submit Accomplishment").click()
            cy.contains("This accomplishment should be visible").should("be.visible")
        })
    })
})