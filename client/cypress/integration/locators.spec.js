/// <reference types="cypress"/>

describe("Locators", () => {
    beforeEach(() => {
        cy.visit("/elements")
    })

    it("locating elements with get", () => {
        cy.get("button")
    })
})