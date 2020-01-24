import StoreProducts from '~/store/products'
import StoreCart from '~/store/cart'
import StoreOrder from '~/store/order'

import * as products from '~/api/products';

class rootStore {
    constructor() {
        this.api = {
            products
        };
        this.products = new StoreProducts(this);
        this.cart = new StoreCart(this);
        this.order = new StoreOrder(this);
    }
}

export default new rootStore;
