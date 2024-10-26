/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {
  const loginUrl = "/api/auth/callback/credentials";
  const loginRequestBody = {
    csrfToken: "",
    email,
    password,
  };

  // Get the CSRF token first
  cy.request("/api/auth/csrf").then((response) => {
    const csrfToken = response.body.csrfToken;
    loginRequestBody.csrfToken = csrfToken;

    // Perform login with credentials
    cy.request({
      method: "POST",
      url: loginUrl,
      body: loginRequestBody,
      form: true, // Required to send form data
      followRedirect: false, // Disable automatic redirects
    }).then((res) => {
      expect(res.status).to.eq(302); // Check if we get a redirect (successful login)

      // Extract the session token from the 'set-cookie' header
      const cookies = res.headers["set-cookie"];
      if (!cookies) {
        throw new Error("No cookies found in the response");
      }
      if (!Array.isArray(cookies)) {
        throw new Error("Cookies must be an array");
      }

      const sessionCookie = cookies.find((cookie) =>
        cookie.startsWith("next-auth.session-token="),
      );
      if (!sessionCookie) {
        throw new Error("No session cookie found in the response");
      }

      // Extract the token value
      const sessionTokenCookie = sessionCookie.split(";")[0]!.split("=");

      const [sessionTokenCookieName, sessionTokenCookieValue] =
        sessionTokenCookie;

      // Set the session token in Cypress cookies
      cy.setCookie(sessionTokenCookieName!, sessionTokenCookieValue!);
    });
  });
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      deleteTestUser(email: string): Chainable<void>;
    }
  }
}
