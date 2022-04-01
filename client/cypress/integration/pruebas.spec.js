/// <reference types="cypress" />

describe("pruebas", () => {
    beforeEach(() => {
        cy.visit("/app/profile")
    })

    it("empleado registrado", () => {
        cy.get("[data-cy='employee-num']").type("78495")
        cy.get("[data-cy='employee-dep']").type("DEV")
        cy.get("[data-cy='employee-position']").type("Employee")
        cy.get("[data-cy='employee-ngb-d']").type("7")
        cy.get("[data-cy='employee-ngb-u']").type("3")
        cy.get("[data-cy='employee-vac-u']").type("4")
        cy.get("[data-cy='employee-vac-reg']").type("1")
        cy.get("[data-cy='employee-fecha-ini']").type("29/03/2022")
        cy.get("[type='submit']").click()
        cy.contains("Se han confirmado los datos del empleado").should("be.visible")
    })

    it("datos no confirmados", () => {
        cy.get("[data-cy='employee-num']").type("78495")
        cy.get("[data-cy='employee-dep']").type("DEV")
        cy.get("[data-cy='employee-position']").type("Employee")
        cy.get("[data-cy='employee-ngb-d']").type("7")
        cy.get("[data-cy='employee-ngb-u']").type("3")
        cy.get("[data-cy='employee-vac-u']").type("4")
        cy.get("[data-cy='employee-vac-reg']").type("1")
        cy.get("[data-cy='employee-fecha-ini']").type("29/03/2022")
        cy.contains("Cancelar").click()
        cy.get("[data-cy='employee-num']").should("have.value", "")
    })

    it("registrar perfil", () => {
        cy.get("[data-cy='employee-nombre']").type("Alan Razo")
        cy.get("[data-cy='employee-telefono']").type("4425014968")
        cy.get("[data-cy='employee-domicilio']").type("Blvrd. Centro sur")
        cy.get("[data-cy='employee-fecha]").type("6/10/2000")
        cy.get("[data-cy='employee-genero']").type("Hombre")
        cy.get("[type='submit']").click()
        cy.contains("Verificación pendiente").should("be.visible")
    })

    it("usuario no encontrado", () => {
        cy.contains("Datos inválidos").should("be.visible")
    })

    it("datos incompletos", () => {
        cy.get("[data-cy='employee-nombre']").type("Alan Razo")
        cy.get("[data-cy='employee-telefono']").type("4425014968")
        cy.get("[data-cy='employee-domicilio']").type("")
        cy.get("[data-cy='employee-fecha]").type("6/10/2000")
        cy.get("[data-cy='employee-genero']").type("Hombre")
        cy.get("[type='submit']").click()
        cy.contains("Por favor, complete los campos.").should("be.visible")
    })



    
})