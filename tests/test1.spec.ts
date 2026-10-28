
import { test } from '../pages/Fixtures/appfixture';

test('Add to cart', async ({ loginPage, productsPage }) => {

    await productsPage.card_add();
    console.log('Product added to cart successfully');


})