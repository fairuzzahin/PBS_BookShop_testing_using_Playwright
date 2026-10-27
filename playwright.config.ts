import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for PBS Website Automation
 */
export default defineConfig({

  // Test files are located inside the tests folder
  testDir: './tests',

  // Run test files in parallel
  fullyParallel: true,

  // Prevent accidental test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests only in CI
  retries: process.env.CI ? 2 : 0,

  // Use one worker in CI
  workers: process.env.CI ? 1 : undefined,

  // Generate HTML report
  reporter: [
    ['list'],
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }]
  ],

  // Shared settings for all browser projects
  use: {

    // PBS website
    baseURL: 'https://pbs.com.bd',

    // Run browser in headless mode by default
    headless: true,

    // Take screenshot when test fails
    screenshot: 'only-on-failure',

    // Keep video when test fails
    video: 'retain-on-failure',

    // Keep trace when test fails
    trace: 'retain-on-failure',

    // Maximum time for an individual action
    actionTimeout: 10 * 1000,

    // Maximum time for page navigation
    navigationTimeout: 30 * 1000,
  },

  // Browser configurations
  projects: [

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
});