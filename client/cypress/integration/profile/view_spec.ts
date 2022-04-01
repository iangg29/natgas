/// <reference types="cypress" />

describe("Profile", function () {
  it("Should open the page.", function () {
    cy.visit("http://localhost:3000");
  });
});

export {};
