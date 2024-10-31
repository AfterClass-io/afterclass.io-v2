/// <reference types="cypress" />

const TEST_EMAIL_INVALID = "test@test.com";
const TEST_EMAIL_VALID = "test2@smu.edu.sg";
const TEST_PWD_VALID = "P@ssw0rd";

context("Register", function () {
  beforeEach(function () {
    cy.visit("/account/auth/signup");
    cy.intercept("POST", "**/auth/v1/signup*", {
      delay: 1000,
      statusCode: 200,
      body: {
        id: "5968c687-04ad-49f9-b84d-c2254bc30ea7",
        aud: "authenticated",
        role: "authenticated",
        email: TEST_EMAIL_VALID,
        phone: "",
        confirmation_sent_at: "2024-10-26T19:51:44.619901388Z",
        app_metadata: {
          provider: "email",
          providers: ["email"],
        },
        user_metadata: {
          email: TEST_EMAIL_VALID,
          email_verified: false,
          phone_verified: false,
          sub: "5968c687-04ad-49f9-b84d-c2254bc30ea7",
        },
        identities: [
          {
            identity_id: "170819c9-38ce-4ce8-98ef-d56cd81db3d5",
            id: "5968c687-04ad-49f9-b84d-c2254bc30ea7",
            user_id: "5968c687-04ad-49f9-b84d-c2254bc30ea7",
            identity_data: {
              email: TEST_EMAIL_VALID,
              email_verified: false,
              phone_verified: false,
              sub: "5968c687-04ad-49f9-b84d-c2254bc30ea7",
            },
            provider: "email",
            last_sign_in_at: "2024-10-26T19:51:26.767669Z",
            created_at: "2024-10-26T19:51:26.767721Z",
            updated_at: "2024-10-26T19:51:26.767721Z",
            email: TEST_EMAIL_VALID,
          },
        ],
        created_at: "2024-10-26T19:51:26.759546Z",
        updated_at: "2024-10-26T19:51:47.650962Z",
        is_anonymous: false,
      },
    }).as("mockSignup");
  });

  describe("Successful Registration", function () {
    it("should register a user with credentials", function () {
      cy.get("input[data-test=email]").type(TEST_EMAIL_VALID);
      cy.get("input[data-test=password]").type(TEST_PWD_VALID);
      cy.get("input[data-test=confirm-password]").type(TEST_PWD_VALID);
      cy.get("button[data-test=submit]").click();

      cy.get("button[data-test=submit]").should(
        "have.text",
        "Creating an account...",
      );

      cy.wait("@mockSignup"); // wait for redirect
      cy.url().should(
        "eq",
        `${Cypress.config("baseUrl")}/account/auth/verify?email=${TEST_EMAIL_VALID}`,
      );
    });

    it("should be able to navigate to register page and register", function () {
      cy.visit("/");

      cy.get("a[data-test=login]").click();
      cy.get("a[data-test=register]").click();

      cy.url().should("eq", `${Cypress.config("baseUrl")}/account/auth/signup`);

      cy.get("input[data-test=email]").type(TEST_EMAIL_VALID);
      cy.get("input[data-test=password]").type(TEST_PWD_VALID);
      cy.get("input[data-test=confirm-password]").type(TEST_PWD_VALID);
      cy.get("button[data-test=submit]").click();

      cy.get("button[data-test=submit]").should(
        "have.text",
        "Creating an account...",
      );

      cy.wait("@mockSignup"); // wait for redirect
      cy.url().should(
        "eq",
        `${Cypress.config("baseUrl")}/account/auth/verify?email=${TEST_EMAIL_VALID}`,
      );
    });
  });

  describe("Incomplete Registrations", function () {
    it("should warn user to fill in fields", function () {
      cy.get("button[data-test=submit]").click();

      cy.get("button[data-test=submit]").should("have.text", "Sign up");

      cy.get("div[data-test=email-helper-text]").should(
        "have.text",
        "Email is required",
      );

      cy.get("div[data-test=password-helper-text]").should(
        "have.text",
        "Passwords must be at least 8 characters long",
      );

      cy.get("div[data-test=confirm-password-helper-text]").should(
        "have.text",
        "Passwords must be at least 8 characters long",
      );
    });

    it("should warn user to fill in schoool email", function () {
      cy.get("input[data-test=email]").type(TEST_EMAIL_INVALID);
      cy.get("input[data-test=password]").type(TEST_PWD_VALID);
      cy.get("input[data-test=confirm-password]").type(TEST_PWD_VALID);
      cy.get("button[data-test=submit]").click();

      cy.get("button[data-test=submit]").should("have.text", "Sign up");

      cy.get("div[data-test=email-helper-text]").should(
        "contain.text",
        "Unsupported email domain, please choose from: ",
      );
    });
  });
});
