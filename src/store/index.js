import StoreProducts from '~/store/products'
import StoreCart from '~/store/cart'
import StoreOrder from '~/store/order'

class rootStore {
    constructor() {
        this.products = new StoreProducts(this);
        this.cart = new StoreCart(this);
        this.order = new StoreOrder(this);
    }
}

export default new rootStore;
