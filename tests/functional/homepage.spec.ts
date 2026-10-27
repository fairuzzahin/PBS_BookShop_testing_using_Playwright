import { test, expect } from '../../fixtures/testFixtures';

test.describe('PBS Homepage Functional Tests', () => {

    test('Verify homepage title is available', async ({
        page,
        homePage
    }) => {

        await homePage.open();

        const title = await page.title();

        console.log(`Page title: ${title}`);

        expect(title.length).toBeGreaterThan(0);
    });


    test('Verify homepage URL', async ({
        page,
        homePage
    }) => {

        await homePage.open();

        await expect(page).toHaveURL(
            'https://pbs.com.bd/'
        );
    });


    test('Verify homepage body is visible', async ({
        page,
        homePage
    }) => {

        await homePage.open();

        await expect(page.locator('body'))
            .toBeVisible();
    });

});