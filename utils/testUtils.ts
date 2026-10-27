import { Page } from '@playwright/test';

export async function capturePageInfo(
    page: Page,
    name: string
) {
    console.log(`\n===== ${name} =====`);
    console.log(`URL: ${page.url()}`);
    console.log(`Title: ${await page.title()}`);
}