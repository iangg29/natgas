/// <reference types="cypress" />

describe("login", (): void => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.contains("Iniciar sesión").click();
    cy.get("input[type=email]").type("jbelmonte@natgas.com");
    cy.get("input[type=password]").type("Password123");
    cy.contains("Iniciar sesión").click();
  });
  it("Should load initial dashboard", (): void => {
    cy.contains("Bienvenido").should("be.visible");
  });
  it("should open profile", function () {
    cy.contains("Perfil").click();
  });
});

export {};
