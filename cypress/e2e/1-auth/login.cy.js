/// <reference types="cypress" />

const TEST_EMAIL_V1_VALID = Cypress.env("TEST_EMAIL_V1_VALID");
const TEST_EMAIL_V2_VALID = Cypress.env("TEST_EMAIL_V2_VALID");
const TEST_PWD_VALID = Cypress.env("TEST_PWD_VALID");
const TEST_PWD_INVALID = "wrongpassword";

context("Login", function () {
  beforeEach(function () {
    cy.log(Cypress.env());
    cy.visit("/account/auth/login");
  });

  describe("Successful Login", function () {
    it("should login a user with valid v1 credentials", function () {
      cy.get("input[data-test=email]").type(TEST_EMAIL_V1_VALID);
      cy.get("input[data-test=password]").type(TEST_PWD_VALID);
      cy.get("button[data-test=submit]").click();

      cy.get("button[data-test=submit]").should("have.text", "Signing in...");
      cy.url().should("eq", `${Cypress.config("baseUrl")}/`);
    });

    it("should login a user with valid v2 credentials", function () {
      cy.get("input[data-test=email]").type(TEST_EMAIL_V2_VALID);
      cy.get("input[data-test=password]").type(TEST_PWD_VALID);
      cy.get("button[data-test=submit]").click();

      cy.get("button[data-test=submit]").should("have.text", "Signing in...");
      cy.url().should("eq", `${Cypress.config("baseUrl")}/`);
    });

    it("should be able to navigate to login page and login", function () {
      cy.visit("/");

      cy.get("a[data-test=login]").click();

      cy.get("input[data-test=email]").type(TEST_EMAIL_V1_VALID);
      cy.get("input[data-test=password]").type(TEST_PWD_VALID);
      cy.get("button[data-test=submit]").click();

      cy.get("button[data-test=submit]").should("have.text", "Signing in...");
      cy.url().should("eq", `${Cypress.config("baseUrl")}/`);
    });
  });

  describe("Unsuccessful Logins", function () {
    it("should warn user to fill in email", function () {
      cy.get("input[data-test=password]").type(TEST_PWD_VALID);
      cy.get("button[data-test=submit]").click();

      cy.get("button[data-test=submit]").should("have.text", "Login");

      cy.get("p[data-test=email-helper-text]").should(
        "have.text",
        "Email is required",
      );
    });

    it("should warn user to fill in password", function () {
      cy.get("input[data-test=email]").type(TEST_EMAIL_V1_VALID);
      cy.get("button[data-test=submit]").click();

      cy.get("button[data-test=submit]").should("have.text", "Login");

      cy.get("p[data-test=password-helper-text]").should(
        "have.text",
        "Passwords must be at least 8 characters long",
      );
    });

    it("should warn user to fill in email and password", function () {
      cy.get("button[data-test=submit]").click();

      cy.get("button[data-test=submit]").should("have.text", "Login");

      cy.get("p[data-test=email-helper-text]").should(
        "have.text",
        "Email is required",
      );

      cy.get("p[data-test=password-helper-text]").should(
        "have.text",
        "Passwords must be at least 8 characters long",
      );
    });

    it("should not login a user with invalid credentials", function () {
      cy.get("input[data-test=email]").type(TEST_EMAIL_V1_VALID);
      cy.get("input[data-test=password]").type(TEST_PWD_INVALID);
      cy.get("button[data-test=submit]").click();

      cy.get("button[data-test=submit]").should("have.text", "Signing in...");

      cy.url().should("eq", `${Cypress.config("baseUrl")}/account/auth/login`);
      cy.get("button[data-test=submit]").should("have.text", "Login");

      cy.get("p[data-test=password-helper-text]").should(
        "have.text",
        "Invalid email or password. Please try again.",
      );
    });
  });
});
