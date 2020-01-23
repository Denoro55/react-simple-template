import React from 'react';

import {routesMap} from "~/router";
import ProductItem from '~/components/products/item';
import Error404 from '~/components/errors/404';
import withStore from "~/hocs/withStore";

class Product extends React.Component {
    render() {
        const {products: storeProducts} = this.props.store;
        const id = this.props.match.params.id;
        const product = storeProducts.getById[id];
        if (product === undefined) {
            return <Error404 />
        }
        return <ProductItem name={product.name} price={product.price} link={routesMap.products} />
    }
}

export default withStore(Product);
