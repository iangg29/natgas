/// <reference types="cypress" />

describe("login", (): void => {
  beforeEach(() => {
    // @ts-ignore
    cy.login();
    cy.visit("https://natgas.ian.software/app/dashboard");
  });
  afterEach(() => {
    // @ts-ignore
    cy.restoreLocalStorage();
  });
  it("Should load initial dashboard", (): void => {
    cy.contains("Bienvenido").should("be.visible");
  });
  it("should open profile", function () {
    cy.contains("Perfil").click();
  });
});

export {};
