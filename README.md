# Applitools Example: Playwright in TypeScript

This is the example project for the [Playwright TypeScript tutorial](https://applitools.com/tutorials/playwright).
It shows how to start automating visual tests
with [Applitools Eyes](https://applitools.com/platform/eyes/)
and [Playwright](https://playwright.dev/) in TypeScript.

It uses:

- [TypeScript](https://www.typescriptlang.org/) as the programming language
- [Playwright](https://playwright.dev/) for browser automation
- [Playwright Test](https://playwright.dev/docs/api/class-test) as the core test framework
- [Chromium](https://www.chromium.org/chromium-projects/) as the local browser for testing
- [npm](https://www.npmjs.com/) for dependency management
- [Applitools Eyes](https://applitools.com/platform/eyes/) for visual testing

It can also run tests with:

- [Applitools Ultrafast Grid](https://applitools.com/platform/ultrafast-grid/) for cross-browser execution

To run this example project, you'll need:

1. An [Applitools account](https://auth.applitools.com/users/register), which you can register for free
2. A recent version of [Node.js](https://nodejs.org/en/download/)
3. A good TypeScript editor like [Visual Studio Code](https://code.visualstudio.com/docs/languages/typescript)

## Installation

Install dependencies and set up Playwright:

```sh
npm install
npx playwright install
```

## Environment Variables

Set the `APPLITOOLS_API_KEY` environment variable to your [account's API key](https://applitools.com/tutorials/guides/getting-started/registering-an-account). You can do this by creating a `.env` file in the project root:

```
APPLITOOLS_API_KEY=your_api_key_here
```

If you are using a dedicated Applitools cloud, you can also set:

```
APPLITOOLS_SERVER_URL=https://your-server-url.applitools.com
```

## Running Tests

To run all tests:

```sh
npx playwright test
```

To run Playwright in UI mode:

```sh
npx playwright test --ui
```

## Main Test Case

The main test case spec is [`example.spec.ts`](tests/example.spec.ts).
By default, the project will run tests using Applitools Eyes.

Test reports are generated in the `playwright-report/` directory.

## More Information

For full instructions on running this project, see the
[Playwright TypeScript tutorial](https://applitools.com/tutorials/playwright)!
