import React from 'react';

import Counter from './Counter';

export default class extends React.Component {
	state = {
		count: this.props.min
	}

	increment = () => {
		const { count } = this.state;
		this.setState({
			count: count + 1
		})
	}

	render() {
		const { count } = this.state;
		return (
			<div>
				<strong>{count}</strong>
				<br/>
				<button onClick={this.increment}>Plus 1</button>
			</div>
		)
	}
}