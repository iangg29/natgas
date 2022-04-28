/// <reference types="cypress" />

describe("login", (): void => {
  beforeEach(() => {
    // @ts-ignore
    cy.login();
    cy.visit(`${Cypress.env("testing_url")}/app/profile`);
  });
  afterEach(() => {
    // @ts-ignore
    cy.restoreLocalStorage();
  });

  it("[CU1] Register new NatGasBlocks request.", () => {
    const today = new Date(),
      target = new Date(today);
    target.setDate(today.getDate() + 10);

    cy.get("div#requestNGBModal").should("not.exist");
    cy.contains("Solicitar Natgas").click();
    cy.get("div#requestNGBModal").should("be.visible").should("exist");
    cy.get("button#ngbRequestTrigger").should("be.visible");
    cy.get("input#ngbDateInput").type(target.toISOString().split("T")[0]);
    cy.get('[type="radio"]').first().check();
    cy.get("button#ngbRequestTrigger").click();
    cy.contains("Petición de Natgas Block creada correctamente").should(
      "be.visible",
    );
    cy.contains("OK").click();
  });
});

export {};
