/// <reference types="cypress" />

const pagesToTest = [
  { url: "/", name: "Home" },
  { url: "/search?q=CS%20225", name: "Search" },
  { url: "/course/CS%20225", name: "Course" },
  { url: "/professor/Dan%20Roth", name: "Professor" },
];

context("Home", () => {
  pagesToTest.forEach(({ url, name }) => {
    describe(`Search Functionality on ${name} Page`, () => {
      beforeEach(() => {
        cy.visit(url);
        cy.wait(1000);
      });

      it("should bring up searchbar when shortcut or search input is clicked", () => {
        cy.get("input[data-test=search-input]").should("be.visible");
      });

      it("should be able to search for a course", () => {
        cy.get("input[data-test=search-input]").type("CS 225");
        cy.get("button[data-test=search-button]").click();
        cy.url().should(
          "contain",
          `${Cypress.config("baseUrl")}/search?q=CS%20225`,
        );
      });

      it("should be able to search for a professor", () => {
        cy.get("input[data-test=search-input]").type("Dan Roth");
        cy.get("button[data-test=search-button]").click();
        cy.url().should(
          "contain",
          `${Cypress.config("baseUrl")}/search?q=Dan%20Roth`,
        );
      });

      it("should not be able to sql inject", () => {
        cy.get("input[data-test=search-input]").type(
          "CS 225; DROP TABLE courses;",
        );
        cy.get("button[data-test=search-button]").click();
        cy.url().should(
          "contain",
          `${Cypress.config("baseUrl")}/search?q=CS%20225%3B%20DROP%20TABLE%20courses%3B`,
        );
      });

      it("should display not-found if no search results", () => {
        cy.get("input[data-test=search-input]").type("CS 999");
        cy.get("button[data-test=search-button]").click();
        cy.url().should(
          "contain",
          `${Cypress.config("baseUrl")}/search?q=CS%20999`,
        );
        cy.get("h1").should("contain", "No results found");
      });
    });
  });
});
