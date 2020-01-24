import {observable, action, computed} from "mobx";

export default class {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable cart = [];

    @action addProduct(id) {
        console.log('add', id)
        this.cart.push({id, count: 1});
    }

    @action removeProduct(id) {
        this.cart = this.cart.filter(e => e.id !== id)
    }

    @computed get totalPrice() {
        return this.cart.reduce((acc, pr) => {
            const details = this.rootStore.products.getById[pr.id];
            return acc + details.price * pr.count;
        }, 0);
    }

    @computed get has() {
        return (id) => this.cart.some(e => e.id === id)
    }

    @computed get productsDetailed() {
        return this.cart.map(pr => {
            const details = this.rootStore.products.getById[pr.id];
            return {...details, count: pr.count}
        })
    }

    @action change = (id, newCount) => {
        const index = this.cart.findIndex(e => e.id === id);
        this.cart[index].count = newCount;
    }
}
