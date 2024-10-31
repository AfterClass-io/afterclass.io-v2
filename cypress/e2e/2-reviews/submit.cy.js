/// <reference types="cypress" />

context("Home", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/submit");
  });

  describe("Basic Navigations", () => {
    it("should be able to navigate to bid analytics page", () => {
      cy.intercept("GET", "/bidding*").as("navigateToBiddingPage");
      cy.get("aside a[data-test=sidebar-bid-analytics]").click();
      cy.wait("@navigateToBiddingPage");
      cy.url().should("eq", `${Cypress.config("baseUrl")}/bidding`);
    });

    it("should be able to navigate to reviews page", () => {
      cy.intercept("GET", "/bidding*").as("navigateToBiddingPage");
      cy.get("aside a[data-test=sidebar-bid-analytics]").click();
      cy.wait("@navigateToBiddingPage");
      cy.url().should("eq", `${Cypress.config("baseUrl")}/bidding`);
    });
  });

  describe("Review Submission", () => {
    it("should be able to submit a course review", () => {});

    it("should be able to submit a course review anonymously", () => {});

    it("should be able to submit a course & professor review", () => {});

    it("should be able to submit a course & professor review anonymously", () => {});

    it("should have the correct interactivity", () => {});
  });
});
