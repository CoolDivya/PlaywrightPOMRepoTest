import { Page, Locator } from '@playwright/test';


export class LoginPage {

    username: Locator;
    password: Locator;
    loginButton: Locator;


    constructor(private page: Page) {
        this.username = this.page.getByPlaceholder('Username')
        this.password = this.page.getByPlaceholder('Password')
        this.loginButton = this.page.getByRole('button', { name: 'login' })

    }

    async login() {
        await this.page.goto('https://www.saucedemo.com/');

        const username = process.env.TEST_USERNAME;
        const password = process.env.TEST_PASSWORD;

         if (!username || !password) {
        throw new Error('TEST_USERNAME or TEST_PASSWORD is missing');
    }
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
       
    }
}
