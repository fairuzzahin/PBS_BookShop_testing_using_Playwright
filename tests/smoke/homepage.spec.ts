import { test, expect } from '../../fixtures/testFixtures';
import { capturePageInfo } from '../../utils/testUtils';

test.describe('PBS Website - Homepage Smoke Tests', () => {

    test('@smoke Verify PBS homepage loads successfully', async ({
        page,
        homePage
    }) => {

        await homePage.open();

        await capturePageInfo(
            page,
            'PBS Homepage'
        );

        await homePage.verifyHomePage();

        await expect(page.locator('body'))
            .toBeVisible();
    });

});