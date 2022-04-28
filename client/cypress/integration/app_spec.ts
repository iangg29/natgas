/// <reference types="cypress" />

describe("Application essentials.", (): void => {
  beforeEach(() => {
    // @ts-ignore
    cy.restoreLocalStorage();
    cy.visit(Cypress.env("testing_url"));
  });

  it("Loads landing page", (): void => {
    cy.contains("Portal de empleados").should("exist");
    cy.contains("Iniciar Sesión").should("be.visible");
  });
  it("Loads login page", function () {
    cy.contains("Iniciar Sesión").click();
    cy.get("input#emailInput").should("be.visible");
    cy.get("input#passwordInput").should("be.visible");
    cy.contains("Iniciar sesión").should("exist");
  });

  it("Loads signup page", function () {
    cy.contains("Iniciar Sesión").click();
    cy.contains("Crea una cuenta").click();

    cy.get("input#nameinput").should("be.visible");
    cy.get("input#lastnameinput").should("be.visible");
    cy.get("input#emailInput").should("be.visible");
    cy.get("input#passwordInput").should("be.visible");
    cy.get("input#passwordconfirminput").should("be.visible");
    cy.contains("Registrarte").should("exist");
    cy.contains("Regresar").should("be.visible");
  });
});

export {};
