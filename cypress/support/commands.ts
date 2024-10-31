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
Cypress.Commands.add("loginWith", ({ email, password }) => {
  cy.clearCookies();
  cy.request("/api/auth/csrf").then((response) => {
    const csrfToken = response.body.csrfToken;

    // Perform login with credentials
    cy.request({
      method: "POST",
      url: "/api/auth/callback/credentials",
      form: true,
      body: {
        csrfToken,
        email,
        password,
        json: true,
      },
      followRedirect: false,
    }).then((res) => {
      expect(res.status).to.eq(200);

      const cookies = res.headers["set-cookie"];
      if (!cookies) {
        throw new Error("No cookies found in the response");
      }
      if (!Array.isArray(cookies)) {
        throw new Error("Cookies must be an array");
      }

      const sessionCookie = cookies.find((cookie) =>
        cookie.trim().startsWith("next-auth.session-token="),
      );
      if (!sessionCookie) {
        throw new Error("No session cookie found in the response");
      }

      const sessionTokenValue = sessionCookie.split(";")[0]!.split("=")[1];

      cy.setCookie("next-auth.session-token", sessionTokenValue!);
      cy.reload();
    });
  });
});

Cypress.Commands.add("login", () => {
  cy.loginWith({ email: "test@smu.edu.sg", password: "P@ssw0rd" });
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
      login(): Chainable<void>;
      loginWith(credentials: {
        email: string;
        password: string;
      }): Chainable<void>;
    }
  }
}
