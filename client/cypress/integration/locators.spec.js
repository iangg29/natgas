/// <reference types="cypress" />

describe("Locators", () => {
    beforeEach(() => {
        cy.visit("/elements")
    })

    it("locating elements with get", () => {
        //get all elemnets by tag name
        cy.get("button")

        //get elements by class Name
        cy.get(".btn-with-class")

        //get all elements with specific classes
        cy.get("[class='Elements-btn btn-with-class']")
        cy.get("[class='Elements-btn btn-with-class more-btn-classes']")

        //get all elements by id
        cy.get('#btn-with-id')

        //Get all elements by specific attribute
        cy.get("[type='submit']")

        //get elements by tag name AND classes
        cy.get("button.Elements-btn")

        //get elements by tag name AND classes AND id
        cy.get("button.Elements-btn#btn-with-id")

        //get elements by tag name AND classes AND type attribute
        cy.get("button.Elements-btn[type='submit']")
        
        //get all elements with specific data test id
        cy.get("[data-cy='btn-id-1']")
        cy.getByTestId("btn-id-1")
    })

    it("locating elements with contains", () => {
        //Get element by text
        cy.contains("unique button")

        //Get element by text
        cy.contains("Not Unique Text")

        //Get element with selector
        cy.contains("[type='submit']", "Not Unique Text")
        cy.contains("form", "Not Unique Text")
        cy.get("[type='submit']").contains("Not Unique Text")
    })

    it("locating elements find", () => {
        cy.get("#form-1").find(".btn-1")
        cy.get("#form-1").find(".btn-2")
    })
})