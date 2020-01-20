import {observable, action} from "mobx";

class Store {
    @observable current = 3;
    @observable products = [
        {
            id: 1,
            name: 'Iphone X',
            price: 12000,
            currentCount: 1,
            rest: 4
        },
        {
            id: 2,
            name: 'Samsung AS12',
            price: 15000,
            currentCount: 1,
            rest: 7
        },
        {
            id: 3,
            name: 'Nokia KG19',
            price: 7500,
            currentCount: 1,
            rest: 3
        }
    ];

    @action updateProduct(id, count) {
        this.products[id].currentCount = count;
        console.log(this.products)
        // const newProducts = [...this.state.products];
        // const newProduct = newProducts[id];
        // newProduct.currentCount = count;
        // newProducts[id] = newProduct;
        // this.setState({
        //     products: newProducts
        // })
    }

    @action add = () => {
        console.log(this.current, 'click add')
        this.current = this.current + 1;
    };

    @action sub = () => {
        this.current = this.current - 1;
    }
}

export default new Store;
