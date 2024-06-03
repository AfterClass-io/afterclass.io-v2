# AfterClass Contributing Guide

Thank you for your interest in contributing to AfterClass!

This project was created by students for students, aiming to enrich the academic experience of Singaporean university students by providing up-to-date course and professor related analytics.

There are many ways to contribute, from writing tutorials or blog posts, improving the documentation, submitting bug reports and feature requests or writing code for AfterClass. Every small bit helps us out immensely.

We welcome contributions from the community to help make this project even better. Before submitting your contribution to this project, please read through the following guide. We also suggest you read the [Project Philosophy](PHILOSOPHY.md.md) in our documentation.

## Code of Conduct

Please review and adhere to the [Code of Conduct](CODE_OF_CONDUCT.md) when participating in this project.

## Getting Started

If you're a beginner, lots of technical terms in this guide may be foreign to you. Don't worry, we were once in your shoes too. Take it one step at a time and do some research. Please feel free to get in touch with us if you need any help.

Along the way, if you find details that are missing or wrong, or you would like to improve this guide, feel free to submit a pull request.

## How to Contribute

### Questions

If you have questions about usage, help or support, please use our dedicated community forum at [GitHub Discussions](https://github.com/AfterClass-io/afterclass.io-v2/discussions/categories/q-a) or reach out to any of the core maintainers.

**PLEASE NOTE:** If you choose to instead open an issue for your question, your issue will be immediately closed and redirected to the forum.

### Reporting Issues

If you have found what you think is a bug, please [file an issue](https://github.com/AfterClass-io/afterclass.io-v2/issues/new/choose).

**PLEASE NOTE:** Issues that are identified as implementation questions or non-issues will be immediately closed and redirected to [GitHub Discussions](https://github.com/AfterClass-io/afterclass.io-v2/discussions).

### Feature Requests

If you have suggestions for improvements, please use our dedicated community forum at [GitHub Discussions](https://github.com/AfterClass-io/afterclass.io-v2/discussions/categories/ideas). From there, we will discuss use-cases for the feature and then finally discuss how it could be implemented.

**PLEASE NOTE:** If you choose to instead open an issue for your question, your issue will be immediately closed and redirected to the forum.

### Submitting Pull Requests

#### Your First Pull Request

Working on your first Pull Request? See **[contributing to a project on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)**

To help you get your feet wet and get you familiar with our contribution process, we have a list of **[good first issues](https://github.com/AfterClass-io/afterclass.io-v2/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)** that contain tasks with a relatively limited scope. This is a great place to get started.

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don’t accidentally duplicate your effort.

If somebody claims an issue but doesn’t follow up for more than two weeks, it’s fine to take it over but you should still leave a comment.

#### Pull Request Guidelines

- Checkout a topic branch from a base branch (e.g. `main`), and merge back against that branch. See [RFC#66: Branching Strategy](https://github.com/AfterClass-io/afterclass.io-v2/discussions/66).
- If adding a new feature:
  - Add accompanying test case or storybook, if it's a ui-related change.
  - Provide a convincing reason to add this feature
    - Ideally, you should open a suggestion discussion first, and have it approved before working on it.
- If fixing a bug:
  - If you are resolving a special issue, add `(fix #xxxx[,#xxxx])` (`#xxxx` is the issue id) in your PR title/description for a better release log.
  - Provide a detailed description of the bug in the PR. Live demo preferred.
  - Add appropriate test coverage if applicable.
- It's OK to have multiple small commits as you work on the PR. GitHub can automatically squash them before merging.
- Make sure tests pass!
- No need to worry about code style as long as you have installed the dev dependencies and recommended dev setup. Modified files are automatically formatted with Prettier on save.
- PR title MUST follow the [commit message convention](./.github/commit-convention.md) so that changelogs can be automatically generated.

## License

This project is licensed under the [MIT License](LICENSE).
