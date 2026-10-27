import { test, expect } from '../../fixtures/testFixtures';

test.describe('PBS Website - Navigation Smoke Tests', () => {

    test('@smoke Verify login page can be opened', async ({
        page,
        loginPage
    }) => {

        await loginPage.open();

        await loginPage.verifyLoginPage();

        await expect(page.locator('body'))
            .toBeVisible();
    });

});