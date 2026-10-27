import { test, expect } from '../../fixtures/testFixtures';

test.describe('PBS Regression Test Suite', () => {

    test('@regression Homepage availability', async ({
        page,
        homePage
    }) => {

        await homePage.open();

        await expect(page).toHaveURL(
            'https://pbs.com.bd/'
        );

        await expect(page.locator('body'))
            .toBeVisible();
    });


    test('@regression Login page availability', async ({
        page,
        loginPage
    }) => {

        await loginPage.open();

        await expect(page).toHaveURL(
            /pbs\.com\.bd\/login/
        );

        await expect(page.locator('body'))
            .toBeVisible();
    });


    test('@regression Login page has input', async ({
        page,
        loginPage
    }) => {

        await loginPage.open();

        await expect(
            page.locator('input').first()
        ).toBeVisible();
    });

});