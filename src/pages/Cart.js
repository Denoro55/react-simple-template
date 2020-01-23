import React from 'react';

import {Table} from "react-bootstrap";
import Counter from "~/components/Counter";
import withStore from "~/hocs/withStore";

class Cart extends React.Component {
    render() {
        const {cart: storeCart} = this.props.store;
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    { storeCart.productsDetailed.map((e, idx) => {
                        return (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>
                                    {/*<Counter onChange={store.changeOn[idx]} min={1} max={e.rest} value={e.currentCount}/>*/}
                                    <Counter onChange={(val) => storeCart.change(e.id, val)} min={1} max={e.rest} value={e.count}/>
                                </td>
                                <td>{e.price}</td>
                                <td>{e.count * e.price}</td>
                            </tr>
                        )
                    }) }
                    </tbody>
                </Table>
                <div className="total">
                    <h4> Total price is { storeCart.totalPrice } </h4>
                </div>
            </div>
        )
    }
}

export default withStore(Cart);
