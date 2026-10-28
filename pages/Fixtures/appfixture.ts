import {test as base} from '@playwright/test';
import { LoginPage } from '../LoginPage';
import { ProductsPage } from '../ProductsPage';

type MyFixtures = {
    loginPage: LoginPage;
    productsPage: ProductsPage;
};

const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
       
        const loginPage = new LoginPage(page);
        await loginPage.login();
        await use(loginPage);
    },

    productsPage: async ({ page }, use) => {
        const productsPage = new ProductsPage(page);
        await use(productsPage);
    }

});

export { test };