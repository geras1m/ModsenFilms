/// <reference types="cypress" />

describe("Search module", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should the input and the input button be visible ", () => {
    cy.get("[data-testid=search-input]").should("be.visible").should("have.value", "");
    cy.get("[data-testid=search-btn]").should("be.visible");
  });

  it("should appear the clear button after entering at least one letter in the search input", () => {
    cy.get("[data-testid=search-input]").as("input");
    cy.get("@input").click();
    cy.get("@input").type("A");
    cy.get("@input").should("have.value", "A");

    cy.get("[data-testid=clear-btn]").should("be.visible");
  });

  it("should clear the input after clicking on the clear button", () => {
    cy.get("[data-testid=search-input]").as("input");
    cy.get("@input").click();
    cy.get("@input").type("Matrix");
    cy.get("@input").should("have.value", "Matrix");

    cy.get("[data-testid=clear-btn]").click();
    cy.get("@input").should("not.have.value");
  });

  it("should open the elastic search after typing at least two letters in the search input", () => {
    cy.get("[data-testid=search-input]").as("input");

    cy.get("@input").click();
    cy.get("@input").type("Ma");
    cy.get("@input").should("have.value", "Ma");

    cy.get("[data-testid=elastic-search]").should("be.visible");
  });

  it("should close the elastic search and clear the input after clicking the search button", () => {
    cy.get("[data-testid=search-input]").as("input");

    cy.get("@input").click();
    cy.get("@input").type("Matrix");
    cy.get("@input").should("have.value", "Matrix");

    cy.get("[data-testid=elastic-search]").should("be.visible");

    cy.get("[data-testid=clear-btn]").click();

    cy.get("@input").should("have.value", "");
  });
});
