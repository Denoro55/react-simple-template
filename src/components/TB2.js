import React from 'react';

import Counter from './Counter';
import Input from './Input';

export default class TB2 extends React.Component {
	state = {
		products: [
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
		],
		formDone: false
	}

	updateProduct(id, count) {
		console.log(id, count)
		const newProducts = [...this.state.products];
		const newProduct = newProducts[id];
		newProduct.currentCount = count;
		newProducts[id] = newProduct;
		this.setState({
			products: newProducts
		})
	}

	deleteItem = (id) => (e) => {
		const newProducts = this.state.products.filter((e) => e.id !== id);
		this.setState({
			products: newProducts
		})
	}

	sendForm = () => {
		this.setState({
			formDone: true
		})
	}

	renderItems = () => {
		const { products } = this.state;
		return products.map((e, idx) => {
			return (
				<tr key={e.id}>
					<td>{e.name}</td>
					<td>{e.price}</td>
					<td>
						<Counter onChange={(count) => this.updateProduct(idx, count)} min={1} max={e.rest} value={e.currentCount}/>
					</td>
					<td>{e.currentCount * e.price}</td>
					<td><button onClick={this.deleteItem(e.id)}>delete</button></td>
				</tr>
			)
		})
	}

	render() {
		const totalPrice = this.state.products.reduce((acc, e) => {
			return acc + (e.currentCount * e.price);
		}, 0)
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