/// <reference types="cypress" />

describe("Vacations functionality.", (): void => {
  beforeEach(() => {
    // @ts-ignore
    cy.login();
    cy.visit(`${Cypress.env("testing_url")}/app/dashboard`);
  });
  afterEach(() => {
    // @ts-ignore
    cy.restoreLocalStorage();
  });

  it("[CU2] Register new vacations request.", function () {
    const today = new Date(),
      target = new Date(today);
    target.setDate(today.getDate() + 4);

    cy.contains("Perfil").click();
    cy.get("div#requestVacationsModal").should("not.exist");
    cy.contains("Solicitar vacaciones").click();
    cy.get("div#requestVacationsModal").should("be.visible").should("exist");
    cy.get("button#requestTriggerBtn").should("be.visible");
    cy.get("input#datefromInput").type(today.toISOString().split("T")[0]);
    cy.get("input#datetoInput").type(target.toISOString().split("T")[0]);
    cy.get("input#backupInput").type("Suplente");
    cy.get("button#requestTriggerBtn").click();
    cy.contains("Petición de vacación creada correctamente").should(
      "be.visible",
    );
    cy.contains("OK").click();
  });
});

export {};
