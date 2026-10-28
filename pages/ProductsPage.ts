import { Page, Locator } from '@playwright/test';


export class ProductsPage {

    addToCart: Locator;
    


    constructor(private page: Page) {
        this.addToCart = this.page.getByText('Add to cart')
        
    }

    async card_add() {
        await this.addToCart.nth(0).click();
       
    }
}
