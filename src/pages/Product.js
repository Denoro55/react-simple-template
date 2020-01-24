import React from 'react';

import {routesMap} from "~/router";
import ProductItem from '~/components/products/item';
import Error404 from '~/components/errors/404';
import withStore from "~/hocs/withStore";

class Product extends React.Component {
    render() {
        const {products: storeProducts, cart: storeCart} = this.props.store;
        const id = this.props.match.params.id;
        const product = storeProducts.getById[id];
        if (product === undefined) {
            return <Error404 />
        }
        return <ProductItem
            inCart={storeCart.has(product.id)}
            onAdd={() => storeCart.addProduct(product.id)}
            onRemove={() => storeCart.removeProduct(product.id)}
            name={product.title}
            price={product.price}
            link={routesMap.products}
        />
    }
}

export default withStore(Product);
