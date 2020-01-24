import React from 'react';

import {Card, Button} from "react-bootstrap";

import {Link} from "react-router-dom";
import styles from './card.module.css'
import withStore from "~/hocs/withStore";

class Products extends React.Component {
    render() {
        const {products: storeProducts, cart: storeCart} = this.props.store;
        return (
            <div className="row">
                { storeProducts.products.map(product => {
                    console.log(product)
                    let btn;

                    if (storeCart.has(product.id)) {
                        btn = <Button onClick={() => storeCart.removeProduct(product.id)} variant="danger">Remove</Button>
                    } else {
                        btn = <Button onClick={() => storeCart.addProduct(product.id)} variant="success">Add to order</Button>
                    }
                    return (
                            <div key={product.id} className={"col col-4 " + styles.card}>
                                <Card style={{ width: '100%'}}>
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>
                                            Price is {product.price}
                                        </Card.Text>
                                        { btn }
                                        <Link to={`/products/${product.id}`} className="primary ml-3">Info</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                    )
                }) }
            </div>
        )
    }
}

export default withStore(Products);
