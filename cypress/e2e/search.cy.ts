/// <reference types="cypress" />
describe("Search module", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should the input and the input button be visible ", () => {
    cy.get("[data-test=search-input]").should("be.visible").should("have.value", "");
    cy.get("[data-test=search-btn]").should("be.visible");
  });

  it("should appear the clear button after entering at least one letter in the search input", () => {
    cy.get("[data-test=search-input]").as("input");
    cy.get("@input").click();
    cy.get("@input").type("A");
    cy.get("@input").should("have.value", "A");

    cy.get("[data-test=clear-btn]").should("be.visible");
  });

  it("should clear the input after clicking on the clear button", () => {
    cy.get("[data-test=search-input]").as("input");
    cy.get("@input").click();
    cy.get("@input").type("Matrix");
    cy.get("@input").should("have.value", "Matrix");

    cy.get("[data-test=clear-btn]").click();
    cy.get("@input").should("not.have.value");
  });

  it("should open the elastic search after typing at least two letters in the search input", () => {
    cy.get("[data-test=search-input]").as("input");

    cy.get("@input").click();
    cy.get("@input").type("Matrix");
    cy.get("@input").should("have.value", "Matrix");

    cy.get("[data-test=elastic-search]").should("be.visible");
  });

  it("should close the elastic search and clear the input after clicking the button", () => {
    cy.get("[data-test=search-input]").as("input");

    cy.get("@input").click();
    cy.get("@input").type("Matrix");
    cy.get("@input").should("have.value", "Matrix");

    cy.get("[data-test=elastic-search]").should("be.visible");

    cy.get("[data-test=clear-btn]").click();

    cy.get("@input").should("have.value", "");
  });
});
