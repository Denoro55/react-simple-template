import {observable, action, computed} from "mobx";

export default class {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.api = this.rootStore.api.products;
    }

    @observable products = [];

    @computed get getById() {
        const productsIds = {};
        Object.values(this.products).forEach(pr => {
            productsIds[pr.id] = pr;
        });
        return productsIds;
    }

    @action load() {
        this.api.all().then(data => {
            this.products = data;
        })
    }
}

// api
function getProducts () {
    return [
        {
            id: 1,
            name: 'Iphone X',
            price: 12000,
            rest: 4
        },
        {
            id: 2,
            name: 'Samsung AS12',
            price: 15000,
            rest: 7
        },
        {
            id: 3,
            name: 'Nokia KG19',
            price: 7500,
            rest: 3
        }
    ]
}
