# PBS Website Automation Testing Using Playwright

![Playwright](https://img.shields.io/badge/Playwright-1.63.0-2EAD33?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Required-339933?logo=nodedotjs&logoColor=white)
![Automation Testing](https://img.shields.io/badge/Testing-UI%20Automation-orange)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

An automated web UI testing framework developed using **Playwright, TypeScript, and Node.js** to validate essential functionality, page availability, navigation, and regression scenarios for the PBS Bangladesh website.

The project follows the Page Object Model (POM), reusable fixtures, organized test suites, and Playwright HTML reporting to support maintainable and reliable test automation.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Project Information](#project-information)
- [Deployment](#deployment)
- [Objectives](#objectives)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Test Coverage](#test-coverage)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
- [Configuration](#configuration)
- [Running the Tests](#running-the-tests)
- [HTML Test Reports](#html-test-reports)
- [Debugging Failed Tests](#debugging-failed-tests)
- [Framework Architecture](#framework-architecture)
- [Test Execution Workflow](#test-execution-workflow)
- [Git and GitHub](#git-and-github)
- [Known Limitations](#known-limitations)
- [Future Improvements](#future-improvements)
- [Author](#author)
- [Disclaimer](#disclaimer)

---

## Project Overview

The PBS Website Automation Testing Project automates selected UI checks for the PBS Bangladesh website using Playwright Test.

The framework verifies that important pages load, URLs and page titles meet basic expectations, essential elements are visible, and selected negative and regression scenarios can be executed automatically.

The project is organized to make test cases easier to understand, maintain, debug, and extend.

### Application Under Test

- **Website:** PBS Bangladesh
- **Website URL:** https://pbs.com.bd/
- **Login URL:** https://pbs.com.bd/login
- **Testing Type:** Web UI Automation Testing
- **Automation Framework:** Playwright Test
- **Programming Language:** TypeScript

## Project Information

| Item | Details |
|---|---|
| Project Name | PBS Website Automation Testing |
| Framework | Playwright Test |
| Language | TypeScript |
| Runtime | Node.js |
| Test Organization | Smoke, Functional, Navigation, Regression |
| Design Pattern | Page Object Model (POM) |
| Reporting | Playwright HTML Report |
| Browser Support | Chromium, Firefox, WebKit |
| Version Control | Git and GitHub |

## Deployment

**Deployment URL:** 

<!-- Add the deployed project or report URL here when available. -->

**Website Under Test:** https://pbs.com.bd/

> Note: The deployment URL is intentionally left blank. Update it when a deployment or hosted report becomes available. The PBS website is the application under test, not a deployment of this automation framework.

---

## Objectives

The main objectives of this project are to:

1. Automate repetitive website UI checks.
2. Verify homepage and login-page availability.
3. Validate page URLs, page titles, and element visibility.
4. Organize test cases into separate testing suites.
5. Implement the Page Object Model for maintainable test code.
6. Use reusable fixtures to reduce duplicated setup logic.
7. Generate HTML reports for reviewing test execution.
8. Capture screenshots, videos, and traces for failure investigation.
9. Establish a foundation for future functional and cross-browser automation.

---

## Technology Stack

| Technology | Purpose |
|---|---|
| Playwright Test | Browser automation and test execution |
| TypeScript | Programming language for automation scripts |
| Node.js | JavaScript runtime environment |
| npm | Package and dependency management |
| Chromium | Browser testing |
| Firefox | Cross-browser testing |
| WebKit | Cross-browser testing |
| Visual Studio Code | Code editing and debugging |
| Git | Version control |
| GitHub | Source-code hosting |
| Playwright HTML Reporter | Test reporting and analysis |

---

## Features

### 1. Automated UI Testing

Automates selected website interactions and validates expected page conditions.

### 2. Page Object Model

Separates page-specific locators and actions from test scenarios, improving readability and maintainability.

### 3. Reusable Fixtures

Provides reusable homepage and login-page objects for test files.

### 4. Organized Test Suites

Test files are grouped into:

- Smoke Tests
- Functional Tests
- Navigation Tests
- Regression Tests

### 5. Cross-Browser Testing

The configuration supports Chromium, Firefox, and WebKit.

### 6. HTML Test Reporting

Generates an interactive HTML report showing execution statuses, test details, and available diagnostics.

### 7. Failure Diagnostics

Configured artifacts can include:

- Screenshots on failure
- Videos retained on failure
- Traces retained on failure

### 8. npm Scripts

Provides commands for running all tests, selected browser projects, smoke tests, regression tests, and debugging sessions.

---

## Project Structure

```text
PBS-Playwright-Automation/
│
├── tests/
│   ├── smoke/
│   │   ├── homepage.spec.ts
│   │   └── navigation.spec.ts
│   │
│   ├── functional/
│   │   ├── homepage.spec.ts
│   │   ├── login.spec.ts
│   │   └── navigation.spec.ts
│   │
│   └── regression/
│       └── regression.spec.ts
│
├── pages/
│   ├── BasePage.ts
│   ├── HomePage.ts
│   └── LoginPage.ts
│
├── fixtures/
│   └── testFixtures.ts
│
├── test-data/
│   └── testData.ts
│
├── utils/
│   └── testUtils.ts
│
├── playwright.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
└── README.md
```

### Folder Description

| File or Folder | Description |
|---|---|
| `tests/smoke/` | Critical page availability checks |
| `tests/functional/` | Homepage and login functionality checks |
| `tests/regression/` | Repeatable checks for existing functionality |
| `pages/` | Page Object Model classes |
| `fixtures/` | Reusable Playwright fixtures |
| `test-data/` | Reusable test data |
| `utils/` | Shared utility functions |
| `playwright.config.ts` | Browser configuration, timeouts, reporters, and artifacts |
| `package.json` | Dependencies and npm scripts |
| `package-lock.json` | Dependency lockfile |
| `tsconfig.json` | TypeScript compiler configuration |
| `.gitignore` | Excludes generated files and sensitive information |
| `README.md` | Project documentation |

The following folders are generated during test execution and may not exist until tests have been run:

```text
playwright-report/
test-results/
```

---

## Test Coverage

The current framework contains **13 defined test cases** across five groups.

### Smoke Tests

| Test ID | Test Scenario | Expected Result |
|---|---|---|
| TC-SM-001 | Verify PBS homepage loads successfully | Homepage URL is correct and the body is visible |
| TC-SM-002 | Verify login page can be opened | Login page opens and its URL contains `/login` |

### Functional Tests — Homepage

| Test ID | Test Scenario | Expected Result |
|---|---|---|
| TC-FH-001 | Verify homepage title is available | Page title is not empty |
| TC-FH-002 | Verify homepage URL | Homepage URL matches the expected URL |
| TC-FH-003 | Verify homepage body is visible | Page body is visible |

### Functional Tests — Login

| Test ID | Test Scenario | Expected Result |
|---|---|---|
| TC-FL-001 | Verify login page loads | Login page URL is correct and the body is visible |
| TC-FL-002 | Verify login page contains input controls | At least one input control is visible |
| TC-FL-003 | Submit an empty login form | Page remains available after submission |

**Note:** The empty-login test currently checks basic page availability. Specific required-field validation and error-message behavior still need to be verified.

### Navigation Tests

| Test ID | Test Scenario | Expected Result |
|---|---|---|
| TC-NV-001 | Verify homepage-to-login navigation | Login page URL is reached |
| TC-NV-002 | Verify login page has visible content | Login-page body is visible |

**Note:** The current navigation test opens the login URL directly rather than clicking the actual Login link on the homepage. This scenario can be improved to validate the complete user journey.

### Regression Tests

| Test ID | Test Scenario | Expected Result |
|---|---|---|
| TC-RG-001 | Verify homepage availability | Homepage loads and the body is visible |
| TC-RG-002 | Verify login-page availability | Login page loads and the body is visible |
| TC-RG-003 | Verify login input availability | At least one input control is visible |

### Test Case Summary

| Test Suite | Test Cases |
|---|---:|
| Smoke Testing | 2 |
| Functional — Homepage | 3 |
| Functional — Login | 3 |
| Navigation Testing | 2 |
| Regression Testing | 3 |
| **Total** | **13** |

These counts describe the test definitions discussed for the project. Actual pass/fail results must be taken from the latest Playwright execution report.

---

## Prerequisites

Install the following software before running the project.

### Node.js and npm

Download Node.js from:

https://nodejs.org/

Verify the installation:

```cmd
node --version
npm --version
```

### Visual Studio Code

Download:

https://code.visualstudio.com/

### Git

Download:

https://git-scm.com/

Git is required for version control and pushing changes to GitHub.

---

## Installation and Setup

### Step 1: Clone the Repository

If the project is hosted on GitHub:

```cmd
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the project directory:

```cmd
cd PBS-Playwright-Automation
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with the actual repository URL.

If the project already exists locally, open CMD in the existing project root instead.

### Step 2: Install Dependencies

```cmd
npm install
```

### Step 3: Install Playwright Browsers

```cmd
npx playwright install
```

To install Chromium only:

```cmd
npx playwright install chromium
```

### Step 4: Verify Playwright

```cmd
npx playwright --version
```

### Step 5: Check Available Scripts

```cmd
npm run
```

---

## Configuration

The `playwright.config.ts` file manages the test environment.

The project configuration discussed includes:

- Test directory: `./tests`
- Base URL: `https://pbs.com.bd`
- Browser projects: Chromium, Firefox, and WebKit
- List and HTML reporters
- Screenshot capture on failure
- Video retention on failure
- Trace retention on failure
- Action timeout: 10 seconds
- Navigation timeout: 30 seconds
- Two retries on CI, when configured

Example configuration:

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['list'],
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never',
    }],
  ],

  use: {
    baseURL: 'https://pbs.com.bd',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
```

Keep your working local configuration if it differs intentionally from this example.

---

## Running the Tests

Run all commands from the project root directory.

### Run All Tests

```cmd
npm test
```

Runs tests across all configured browser projects.

### Run Chromium Tests

```cmd
npm run test:chromium
```

Recommended for everyday development and initial debugging.

### Run Firefox Tests

```cmd
npm run test:firefox
```

### Run WebKit Tests

```cmd
npm run test:webkit
```

### Run Tests with a Visible Browser

```cmd
npm run test:headed
```

### Run Smoke Tests

```cmd
npm run test:smoke
```

### Run Regression Tests

```cmd
npm run test:regression
```

### Run Playwright UI Mode

```cmd
npm run test:ui
```

### Run Debug Mode

```cmd
npm run test:debug
```

### Generate Test Code with Codegen

```cmd
npm run codegen
```

Codegen opens the PBS website and helps generate example locators and browser actions. Review generated code before using it in the framework.

---

## HTML Test Reports

Playwright HTML reporting allows test results to be reviewed in a browser.

### Step 1: Run the Tests

```cmd
npm run test:chromium
```

### Step 2: Open the HTML Report

```cmd
npm run report
```

Alternatively:

```cmd
npx playwright show-report
```

### Step 3: Review the Results

The report can display:

- Passed tests
- Failed tests
- Skipped tests
- Execution duration
- Error messages
- Test steps
- Available screenshots, videos, and traces

### Report Location

```text
playwright-report/
```

The report is generated locally and is not automatically published online.

To share a report, use an approved file-sharing method or configure a CI workflow that uploads the report as an artifact.

---

## Debugging Failed Tests

When a test fails:

1. Run the affected test suite.
2. Open the HTML report.
3. Read the assertion error and test steps.
4. Inspect the failed locator or action.
5. Review screenshots and traces when available.
6. Update the test if the locator or expectation is incorrect.
7. Rerun the affected tests.

Example:

```cmd
npm run test:chromium
npm run report
```

To open a trace file:

```cmd
npx playwright show-trace path\to\trace.zip
```

Replace the example path with the actual trace file path generated in `test-results`.

Prefer accessible locators where appropriate:

```typescript
page.getByRole('button', { name: /login/i });
page.getByLabel(/phone/i);
page.getByPlaceholder(/search/i);
page.getByText(/example text/i);
```

Always verify locators against the actual website DOM.

---

## Framework Architecture

### Page Object Model

The Page Object Model separates page-specific logic from test scenarios.

**BasePage.ts**

Contains common page operations such as navigation, page-title retrieval, and reusable checks.

**HomePage.ts**

Contains homepage-specific locators and methods.

**LoginPage.ts**

Contains login-page locators and methods.

### Reusable Fixtures

`fixtures/testFixtures.ts` exposes reusable `homePage` and `loginPage` objects to test files.

Example:

```typescript
import { test, expect } from '../../fixtures/testFixtures';

test('Verify PBS homepage loads', async ({ page, homePage }) => {
  await homePage.open();

  await expect(page).toHaveURL('https://pbs.com.bd/');
  await expect(page.locator('body')).toBeVisible();
});
```

This structure reduces repeated setup code and improves maintainability.

---

## Test Execution Workflow

The recommended development workflow is:

1. Open the project in VS Code.
2. Open CMD or the integrated terminal.
3. Navigate to the project root.
4. Run the required test suite.
5. Review the terminal output.
6. Open the HTML report.
7. Investigate failures.
8. Fix the test or report a reproducible application defect.
9. Rerun the relevant tests.
10. Commit the reviewed changes to GitHub.

### Recommended Daily Commands

```cmd
npm run test:chromium
npm run report
```

### Recommended Cross-Browser Check

```cmd
npm test
npm run report
```

---

## Git and GitHub

### Recommended `.gitignore`

```gitignore
node_modules/
test-results/
playwright-report/
blob-report/
playwright/.cache/
playwright/.auth/
.env
*.log
```

These entries prevent generated artifacts, dependencies, environment files, and authentication state from being committed.

### Initialize Git

```cmd
git init
```

### Check Changed Files

```cmd
git status
```

### Stage Changes

```cmd
git add .
```

### Commit Changes

```cmd
git commit -m "Add PBS Playwright automation framework"
```

### Push Changes

If the remote repository is already configured:

```cmd
git push
```

Otherwise, configure it first:

```cmd
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git branch -M main
git push -u origin main
```

Replace the placeholder with the real repository URL.

**Security:** Never commit passwords, access tokens, real customer information, or authenticated browser storage files.

---

## Known Limitations

- The current suite primarily covers basic page availability and UI checks.
- Some tests verify visibility rather than detailed business behavior.
- Empty-login submission does not yet validate a specific error message.
- The homepage-to-login navigation test should be updated to click the actual login control.
- Search, product details, cart, checkout, and payment flows are not currently implemented.
- Cross-browser support is configured, but successful execution in each browser must be verified.
- No pass rate or successful test count is claimed without an actual execution report.
- Website changes, network issues, or anti-automation restrictions may affect test execution.

Testing must comply with website policies and authorization requirements. Use only safe, non-destructive scenarios and authorized test accounts.

---

## Future Improvements

### Functional Test Coverage

- Add search functionality tests.
- Validate search results for known keywords.
- Test category navigation.
- Verify product detail information.
- Improve required-field validation tests.
- Verify invalid-login feedback using an authorized test account.
- Add safe cart tests where appropriate.

### Automation Framework

- Improve locator reliability.
- Replace weak assertions with meaningful behavioral checks.
- Implement real user navigation scenarios.
- Expand reusable test data.
- Add API testing for supported endpoints.
- Introduce accessibility testing.
- Improve configuration for different environments.

### CI/CD Integration

- Integrate Playwright with GitHub Actions.
- Run smoke tests automatically on pull requests.
- Upload HTML reports as CI artifacts.
- Schedule regression runs.
- Track flaky tests and recurring failures.

These items are planned enhancements and are not claimed as existing functionality.

---

## Author

**PBS Website Automation Testing Project**

A practical QA automation project demonstrating:

- Playwright Test
- TypeScript
- Web UI automation
- Page Object Model
- Reusable fixtures
- Smoke and regression testing
- Cross-browser configuration
- HTML test reporting
- Git and GitHub workflows

**Website Under Test:** https://pbs.com.bd/

---


If you find this project useful, consider starring the repository on GitHub.
