/// <reference types="cypress" />

describe("Movies list module", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should be visible the movie list", () => {
    cy.get("[data-testid=movies-wrapper]").should("be.visible");
  });

  it("should show list of skeletons", () => {
    cy.get("[data-testid=skeletons]").should("be.visible").should("have.length", 20);
  });

  it("should show list of cards", () => {
    cy.get("[data-testid=movie-card]", { timeout: 3000 }).should("be.visible").should("have.length", 20);
  });

  it("should show the skeleton and a new list of cards by clicking on button 'documentary' in filter bar", () => {
    cy.get("[data-testid=documentary]").click();
    cy.get("[data-testid=skeletons]").should("be.visible").should("have.length", 20);
    cy.get("[data-testid=movie-card]", { timeout: 3000 }).should("be.visible").should("have.length", 20);
  });

  it("should open the video modal by clicking on a movie card and close it", () => {
    cy.get("[data-testid=movie-card]").as("movie-card");
    cy.get("@movie-card", { timeout: 3000 }).should("be.visible").should("have.length", 20);
    cy.get("@movie-card").eq(0).click();

    cy.get("[data-testid=video-modal]").as("video-modal");
    cy.get("@video-modal").should("be.visible");
    cy.get("@video-modal", { timeout: 3000 }).click();
  });

  it("should load more movies by clicking on show more button", () => {
    cy.get("[data-testid=show-more-btn]").as("show-more-btn");
    cy.get("[data-testid=movie-card]").as("movie-card");

    cy.get("@show-more-btn").click();
    cy.get("[data-testid=skeletons]").as("skeletons");
    cy.get("@skeletons").should("be.visible").should("have.length", 20);
    cy.get("@movie-card", { timeout: 3000 }).should("be.visible").should("have.length", 40);

    cy.get("@show-more-btn").click();
    cy.get("@skeletons").should("be.visible").should("have.length", 20);
    cy.get("@movie-card", { timeout: 3000 }).should("be.visible").should("have.length", 60);
  });
});
