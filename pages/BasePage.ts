import { Page, expect } from '@playwright/test';

export class BasePage {
    constructor(protected readonly page: Page) {}

    async navigateTo(url: string) {
        await this.page.goto(url, {
            waitUntil: 'domcontentloaded'
        });
    }

    async getPageTitle() {
        return await this.page.title();
    }

    async verifyPageLoaded() {
        await expect(this.page).toHaveURL(/pbs\.com\.bd/);
    }

    async takeScreenshot(name: string) {
        await this.page.screenshot({
            path: `test-results/${name}.png`,
            fullPage: true
        });
    }
}