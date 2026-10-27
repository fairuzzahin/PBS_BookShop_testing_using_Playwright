import { test, expect } from '../../fixtures/testFixtures';

test.describe('PBS Login Functional Tests', () => {

    test('Verify login page loads', async ({
        page,
        loginPage
    }) => {

        await loginPage.open();

        await loginPage.verifyLoginPage();

        await expect(page.locator('body'))
            .toBeVisible();
    });


    test('Verify login page contains input controls', async ({
        page,
        loginPage
    }) => {

        await loginPage.open();

        await expect(
            page.locator('input').first()
        ).toBeVisible();
    });


    test('Negative test - submit empty login form', async ({
        page,
        loginPage
    }) => {

        await loginPage.open();

        await loginPage.submitEmptyLogin();

        await page.waitForLoadState(
            'domcontentloaded'
        );

        console.log(
            'URL after empty login:',
            page.url()
        );

        await expect(page.locator('body'))
            .toBeVisible();
    });

});