import React from 'react';

import Counter from './Counter';
import Input from './Input';

import store from '~/store';
import {observer} from "mobx-react";

export default @observer class TB2 extends React.Component {
	state = {
		formDone: false
	};

	deleteItem = (id) => (e) => {
		const newProducts = store.products.filter((e) => e.id !== id);
		this.setState({
			products: newProducts
		})
	};

	sendForm = () => {
		this.setState({
			formDone: true
		})
	};

	renderItems = () => {
	    console.log(store.products)
		return store.products.map((e, idx) => {
			return (
				<tr key={e.id}>
					<td>{e.name}</td>
					<td>{e.price}</td>
					<td>
						<Counter onChange={(count) => store.updateProduct(idx, count)} min={1} max={e.rest} value={e.currentCount}/>
					</td>
					<td>{e.currentCount * e.price}</td>
					<td><button onClick={this.deleteItem(e.id)}>delete</button></td>
				</tr>
			)
		})
	}

	render() {
		const totalPrice = store.products.reduce((acc, e) => {
			return acc + (e.currentCount * e.price);
		}, 0);
		return (
			<div className="table">
				{ this.state.formDone ? getResult() : getForm(this.renderItems, this.sendForm) }
				<div className="result">{ totalPrice }</div>
			</div>
		)
	}
}

function getForm(renderProducts, formDone) {
	return (
		<div className="table__table">
			<table>
				<thead>
					<th>Title</th>
					<th>Price</th>
					<th>Count</th>
					<th>Total price</th>
					<th>Actions</th>
				</thead>
				<tbody>
					{ renderProducts() }
				</tbody>
			</table>
			<button onClick={formDone}>submit</button>
		</div>
	)
}

function getResult() {
	return  (
		<div className="table__result">
			<h3>Congratulations! Your order in proccess</h3>
		</div>
	)
}
