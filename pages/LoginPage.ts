import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    readonly phoneInput;
    readonly passwordInput;
    readonly loginButton;

    constructor(page: Page) {
        super(page);

        this.phoneInput = page.locator(
            'input[type="text"], input[type="tel"]'
        ).first();

        this.passwordInput = page.locator(
            'input[type="password"]'
        ).first();

        this.loginButton = page.getByRole('button', {
            name: /login|sign in/i
        }).first();
    }

    async open() {
        await this.page.goto(
            'https://pbs.com.bd/login',
            {
                waitUntil: 'domcontentloaded'
            }
        );
    }

    async verifyLoginPage() {
        await expect(this.page).toHaveURL(
            /pbs\.com\.bd\/login/
        );
    }

    async verifyLoginControls() {
        await expect(this.page.locator('body'))
            .toBeVisible();
    }

    async submitEmptyLogin() {
        await this.loginButton.click();
    }
}