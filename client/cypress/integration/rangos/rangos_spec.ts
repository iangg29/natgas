/// <reference types="cypress" />

describe("Vacations ranges functionality.", (): void => {
  beforeEach(() => {
    // @ts-ignore
    cy.login();
    cy.visit(`${Cypress.env("testing_url")}/app/vacations/ranges`);
  });
  afterEach(() => {
    // @ts-ignore
    cy.restoreLocalStorage();
  });

  it("[CU21] Updates vacation dates of a selected range.", function () {
    const newVal = Math.floor(Math.random() * 15) + 1;

    cy.get("[id$=-edit-btn]:last").should("exist");
    cy.get("input.table-input").should("not.exist");
    cy.get("[id$=-edit-btn]:last").click();
    cy.get("input.table-input").should("exist").should("be.visible");
    cy.get("input.table-input").clear().type(`${newVal}`);
    cy.get("[id$=-confirm]").click();
    cy.get("[id$=-row]:last").within(() => {
      cy.contains(`${newVal}`).should("be.visible");
    });
  });

  it("[CU23] Adds new range.", function () {
    let nextMin: number = 0;
    const days = Math.floor(Math.random() * 10) + 1;

    cy.get("div#createRangeModal").should("not.exist");
    cy.get("button#create-new-range").should("exist").should("be.visible");
    cy.get("button#create-new-range").click();
    cy.get("div#createRangeModal").should("exist").should("be.visible");
    cy.get("[id$=-maximum]:last").then(($span: JQuery<HTMLElement>) => {
      nextMin = parseInt($span.text()) + 1;
      cy.get("input#minimumInput").clear().type(`${nextMin}`);
      cy.get("input#maximumInput")
        .clear()
        .type(`${nextMin + 5}`);
      cy.get("input#daysInput").clear().type(`${days}`);
      cy.get("button#createRangeTrigger").click();
      cy.contains("Se ha creado un nuevo rango.").should("be.visible");
      cy.contains("OK").click();
    });
  });

  it("[CU24] Deletes range.", function () {
    cy.get("[id$=-delete-btn]:last").should("exist");
    cy.get("[id$=-delete-btn]:last").click();
  });
});

export {};
