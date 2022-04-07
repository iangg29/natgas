/// <reference types="cypress" />

describe("Profile", (): void => {
  it("Should open the page.", (): void => {
    cy.visit("http://localhost:3000");
  });
});

export {};
