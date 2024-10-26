/// <reference types="cypress" />

const TEST_EMAIL_VALID = "test@smu.edu.sg";
const TEST_PWD_VALID = "P@ssw0rd";
const TEST_PWD_INVALID = "wrongpassword";

context("Login", () => {
  beforeEach(() => {
    cy.visit("/account/auth/login");
  });

  describe("Successful Login", () => {
    it("should login a user with valid credentials", () => {
      cy.get("input[data-test=email]").type(TEST_EMAIL_VALID);
      cy.get("input[data-test=password]").type(TEST_PWD_VALID);
      cy.get("button[data-test=submit]").click();

      cy.get("button[data-test=submit]").should("have.text", "Signing in...");
      cy.url().should("eq", `${Cypress.config("baseUrl")}/`);
    });

    it("should be able to navigate to login page and login", () => {
      cy.visit("/");

      cy.get("a[data-test=login]").click();

      cy.get("input[data-test=email]").type(TEST_EMAIL_VALID);
      cy.get("input[data-test=password]").type(TEST_PWD_VALID);
      cy.get("button[data-test=submit]").click();

      cy.get("button[data-test=submit]").should("have.text", "Signing in...");
      cy.url().should("eq", `${Cypress.config("baseUrl")}/`);
    });
  });

  describe("Unsuccessful Logins", () => {
    it("should warn user to fill in email", () => {
      cy.get("input[data-test=password]").type(TEST_PWD_VALID);
      cy.get("button[data-test=submit]").click();

      cy.get("button[data-test=submit]").should("have.text", "Login");

      cy.get("div[data-test=email-helper-text]").should(
        "have.text",
        "Email is required",
      );
    });

    it("should warn user to fill in password", () => {
      cy.get("input[data-test=email]").type(TEST_EMAIL_VALID);
      cy.get("button[data-test=submit]").click();

      cy.get("button[data-test=submit]").should("have.text", "Login");

      cy.get("div[data-test=password-helper-text]").should(
        "have.text",
        "Passwords must be at least 8 characters long",
      );
    });

    it("should warn user to fill in email and password", () => {
      cy.get("button[data-test=submit]").click();

      cy.get("button[data-test=submit]").should("have.text", "Login");

      cy.get("div[data-test=email-helper-text]").should(
        "have.text",
        "Email is required",
      );

      cy.get("div[data-test=password-helper-text]").should(
        "have.text",
        "Passwords must be at least 8 characters long",
      );
    });

    it("should not login a user with invalid credentials", () => {
      cy.get("input[data-test=email]").type(TEST_EMAIL_VALID);
      cy.get("input[data-test=password]").type(TEST_PWD_INVALID);
      cy.get("button[data-test=submit]").click();

      cy.get("button[data-test=submit]").should("have.text", "Signing in...");

      cy.url().should(
        "contain",
        `${Cypress.config("baseUrl")}/account/auth/login?`,
      );
      cy.url().should("contain", "error=CredentialsSignin");
      cy.get("button[data-test=submit]").should("have.text", "Login");

      cy.get("div[data-test=password-helper-text]").should(
        "have.text",
        "Invalid email or password. Please try again.",
      );
    });
  });
});
