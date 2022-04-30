/// <reference types="cypress" />

describe("Profile functionality.", (): void => {
  beforeEach(() => {
    // @ts-ignore
    cy.login();
    cy.visit(`${Cypress.env("testing_url")}/app/profile`);
  });
  afterEach(() => {
    // @ts-ignore
    cy.restoreLocalStorage();
  });
  it("[CU12] Profile visibility.", (): void => {
    cy.contains("Mi perfil").should("exist");
    cy.contains("RFC").should("exist");
    cy.contains("Teléfono").should("exist");
    cy.contains("Correo electrónico").should("exist");
    cy.contains("Dirección").should("exist");
    cy.contains("No. Empleado").should("exist");
    cy.contains("Fecha de nacimiento").should("exist");
  });
});

export {};
