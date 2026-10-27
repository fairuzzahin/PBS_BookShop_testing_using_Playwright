import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

    readonly loginLink;
    readonly body;

    constructor(page: Page) {
        super(page);

        this.body = page.locator('body');

        this.loginLink = page.getByRole('link', {
            name: /login/i
        });
    }

    async open() {
        await this.page.goto('https://pbs.com.bd/', {
            waitUntil: 'domcontentloaded'
        });
    }

    async verifyHomePage() {
        await expect(this.page).toHaveURL(
            'https://pbs.com.bd/'
        );

        await expect(this.body).toBeVisible();
    }

    async getBodyText() {
        return await this.body.innerText();
    }
}