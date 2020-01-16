import React from 'react';

import PropTypes from 'prop-types';
import Input from './Input';

export default class Counter extends React.Component {
	static defaultProps = {
		onChange: function() {}
	}

	static propTypes = {
		min: PropTypes.number.isRequired,
		max: PropTypes.number.isRequired,
		value: PropTypes.number.isRequired,
		onChange: PropTypes.func
	}

	state = {
		count: this.props.value
	}

	// static getDerivedStateFromProps(props, state) {
	// 	console.log(props, state)
	// 	state.count = Math.min(Math.max(props.min, state.count), props.max);
	// 	state.inputValue = Math.min(Math.max(props.min, state.count), props.max);
	// 	return state;
	// }

	updateCounter = (e) => {
		const count = parseInt(e.target.value);
		this.setCount(count);
	}	

	decrement = () => {
		this.setCount(this.state.count - 1);
	}

	increment = () => {
		this.setCount(this.state.count + 1);
	}

	setCount(newCount) {
		const count = Math.min(Math.max(newCount, this.props.min), this.props.max);
		this.setState({count});
		this.props.onChange(count);
	}

	// componentDidMount() {
	// 	this.props.onChange(this.state.count);
	// }

	render() {
		const { count } = this.state;
		return (
			<div>
				{ count }
				<button onClick={this.decrement}>-</button>
				<Input nativeProps={{className: 'input'}} onChange={this.updateCounter} value={count}/>
				<button onClick={this.increment}>+</button>
			</div>
		)
	}
}