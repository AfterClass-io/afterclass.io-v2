---
# Configuration for the Jekyll template "Just the Docs"
parent: Decisions
nav_order: 1
title: ADR Template
# These are optional elements. Feel free to remove any of them.
# status: {proposed | rejected | accepted | deprecated | … | superseded by [ADR-0005](0005-example.md)}
# date: {YYYY-MM-DD when the decision was last updated}
# deciders: {list everyone involved in the decision}
# consulted: {list everyone whose opinions are sought (typically subject-matter experts); and with whom there is a two-way communication}
# informed: {list everyone who is kept up-to-date on progress; and with whom there is a one-way communication}
---

# Use Magic Link for Authentication

## Context and Problem Statement

[Magic links](https://supabase.com/docs/guides/auth/auth-magic-link) could provide a better UX for logging in compared to traditional auth that is being implemented now. It also allows for checking of email to ensure the user is a student from SMU.

<!-- This is an optional element. Feel free to remove. -->

## Decision Drivers

- Better UX
- Email verification

## Considered Options

- Traditional Password Auth
- OAuth Providers (Google, Facebook, etc.)
- [OTP Auth](https://supabase.com/docs/reference/javascript/auth-signinwithotp)

## Decision Outcome

Chosen option: "Traditional Password Auth", because it is most likely to work with emails from the various institutions as not all institutions may support signin with google. Magic links are also prone to being marked as spam, which can worse the user experience.

## Pros and Cons of the Options

### Traditional Password Auth

Using the traditional supabase [`signInWithPassword`](https://supabase.com/docs/reference/javascript/auth-signinwithpassword) authentication

- Good, because guaranteed support for all institutions with emails
- Good, because simple to implement and migrate away from

### Magic Links

Supabase [Magic links](https://supabase.com/docs/guides/auth/auth-magic-link)

- Good, because no need to store passwords
- Good, because no need for user to remember passwords
- Bad, because prone to being marked as spam / auto-clicked by microsoft defender / other security software
- Bad, because can experience significant delays in receiving email, causing user be unable to login

### OAuth Providers (Google, Facebook, etc.)

Example: [Google Auth Provider](https://next-auth.js.org/providers/google) with NextAuth

- Good, because one-click sign-in
- Good, because using existing trusted providers
- Good, because no need to store passwords
- Good, because no need for user to remember passwords
- Bad, because not all institutions may support google accounts/ oauth providers in general

<!-- This is an optional element. Feel free to remove. -->

## More Information

- Relevant Dicussion [#26 Using Magic Link for auth flow](https://github.com/AfterClass-io/afterclass.io-v2/discussions/26)
- Relevant Issue [#2 Auth Service](https://github.com/AfterClass-io/afterclass.io-v2/issues/2)
- Relevant PR [#4 feat: NextAuth Supabase login](https://github.com/AfterClass-io/afterclass.io-v2/pull/4)
