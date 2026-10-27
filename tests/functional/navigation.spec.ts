import { test, expect } from '../../fixtures/testFixtures';

test.describe('PBS Navigation Functional Tests', () => {

    test('Verify homepage to login navigation', async ({
        page,
        homePage,
        loginPage
    }) => {

        await homePage.open();

        await loginPage.open();

        await expect(page).toHaveURL(
            /pbs\.com\.bd\/login/
        );
    });


    test('Verify navigation page has visible content', async ({
        page,
        loginPage
    }) => {

        await loginPage.open();

        await expect(page.locator('body'))
            .toBeVisible();
    });

});