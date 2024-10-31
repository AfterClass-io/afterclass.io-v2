/// <reference types="cypress" />

context("Home", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Basic Navigations", () => {
    it("should be able to navigate to login page and login", () => {
      cy.intercept("GET", "/account/auth/login*").as("navigateToLoginPage");
      cy.get("a[data-test=login]").click();
      cy.wait("@navigateToLoginPage");
      cy.url().should("eq", `${Cypress.config("baseUrl")}/account/auth/login`);
    });

    it("should be able to navigate to bid analytics page", () => {
      cy.intercept("GET", "/bidding*").as("navigateToBiddingPage");
      cy.get("aside a[data-test=sidebar-bid-analytics]").click();
      cy.wait("@navigateToBiddingPage");
      cy.url().should("eq", `${Cypress.config("baseUrl")}/bidding`);
    });

    it("should be able to navigate to course reviews page", () => {
      cy.intercept("GET", "/course/*").as("navigateToCoursePage");
      cy.get("a[data-test=review-course-label]").first().click();
      cy.wait("@navigateToCoursePage");
      cy.url().should("contain", `${Cypress.config("baseUrl")}/course/`);
    });

    it("should be able to navigate to professor reviews page", () => {
      cy.intercept("GET", "/professor/*").as("navigateToProfessorPage");
      cy.get("a[data-test=review-professor-label]").first().click();
      cy.wait("@navigateToProfessorPage");
      cy.url().should("contain", `${Cypress.config("baseUrl")}/professor/`);
    });
  });

  describe("Unauthenticated User", () => {
    it("should be able to see login overlay on review item", () => {
      cy.get("a[data-test=lock-cta-overlay]").should("be.visible");
    });

    it("should not be able to open review modal", () => {
      cy.get("[data-test=review]").first().click();
      cy.get("div[data-test=review-modal]").should("not.exist");
    });

    it("should not be able to load more reviews", () => {
      cy.intercept("GET", "/api/trpc/reviews.getAll*").as("getReviews");
      cy.wait("@getReviews");

      cy.get("[data-test=review-scrollable]").scrollTo("bottom");
      cy.wait(2000);

      cy.get("[data-test=review]").should("have.length", 10);
    });

    it("should not be able to like a review", () => {
      cy.wait(1000);

      const getFirstUnlikedBtn = () =>
        cy
          .get("button[data-test=like-button]")
          .filter("[data-liked=false]")
          .first();

      getFirstUnlikedBtn()
        .invoke("text")
        .then((initialValueText) => {
          getFirstUnlikedBtn()
            .click()
            .should("have.text", initialValueText)
            .should("have.attr", "data-liked", "false");
        });
    });

    it("should not be able to navigate to review submission", () => {
      cy.get("a[data-test=cta-write-review]").click();
      cy.url().should(
        "include",
        `${Cypress.config("baseUrl")}/account/auth/login`,
      );
    });
  });

  describe("Authenticated User", () => {
    beforeEach(() => {
      cy.login();
      cy.wait(1000);
    });

    it("should not be able to see login overlay on review item", () => {
      cy.get("a[data-test=lock-cta-overlay]").should("not.exist");
    });

    it("should be able to open review modal", () => {
      cy.get("[data-test=review]").first().click();
      cy.get("div[data-test=review-modal]").should("be.visible");
    });

    it("should be able to like a review", () => {
      const getFirstUnlikedBtn = () =>
        cy
          .get("button[data-test=like-button]")
          .filter("[data-liked=false]")
          .first();

      getFirstUnlikedBtn()
        .invoke("text")
        .then((initialValueText) => {
          const initialValue = parseInt(initialValueText, 10);

          getFirstUnlikedBtn()
            .click()
            .should("have.text", initialValue + 1)
            .should("have.attr", "data-liked", "true");
        });
    });

    it("should be able to unlike a review", () => {
      const getFirstLikedBtn = () =>
        cy
          .get("button[data-test=like-button]")
          .filter("[data-liked=true]")
          .first();

      getFirstLikedBtn()
        .invoke("text")
        .then((initialValueText) => {
          const initialValue = parseInt(initialValueText, 10);

          getFirstLikedBtn()
            .click()
            .should("have.text", initialValue - 1)
            .should("have.attr", "data-liked", "false");
        });
    });

    it("should be able to load more reviews", () => {
      cy.get("[data-test=review-scrollable]").scrollTo("bottom");
      cy.wait(1000);

      cy.get("[data-test=review]").should("have.length", 20);
    });

    it("should be able to write a review", () => {
      cy.intercept("GET", "/submit*").as("navigateToReviewSubmission");
      cy.get("a[data-test=cta-write-review]").click();
      cy.wait("@navigateToReviewSubmission");
      cy.url().should("eq", `${Cypress.config("baseUrl")}/submit`);
    });
  });
});