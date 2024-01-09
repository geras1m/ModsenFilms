/// <reference types="cypress" />

describe("Theme toggle", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should be visible the filter bar", () => {
    cy.get("[data-test=filter-bar]").should("be.visible");
  });

  it("should the selector with label 'action' change styles by clicking on it", () => {
    cy.get("[data-test=horror]").as("horror-btn");
    cy.get("[data-test=action]").as("action-btn");

    cy.get("@action-btn").should("be.visible");
    cy.get("@action-btn").should("have.css", "background-color", "rgba(0, 0, 0, 0.1)");

    cy.get("@action-btn").click();
    cy.get("@action-btn").should("have.css", "background-color", "rgb(0, 0, 0)");

    cy.get("@horror-btn").should("be.visible");
    cy.get("@horror-btn").should("have.css", "background-color", "rgba(0, 0, 0, 0.1)");

    cy.get("@horror-btn").click();
    cy.get("@horror-btn").should("have.css", "background-color", "rgb(0, 0, 0)");
  });
});
