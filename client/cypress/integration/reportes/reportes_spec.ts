/// <reference types="cypress" />

describe("Reports functionality.", (): void => {
  beforeEach(() => {
    // @ts-ignore
    cy.login();
    cy.visit(`${Cypress.env("testing_url")}/app/reports`);
  });
  afterEach(() => {
    // @ts-ignore
    cy.restoreLocalStorage();
  });

  it("[CU10] Registers new monthly report.", () => {
    cy.contains("Reportes").should("be.visible");
    cy.contains("Agregar reporte").should("exist");
    cy.contains("Agregar reporte").click();
    cy.get("input:first").clear().type("150");
    cy.get("[id$=-add-btn]").within(() => {
      cy.contains("Agregar").click();
    });
  });
});

export {};
