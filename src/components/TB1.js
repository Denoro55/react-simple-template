import React from 'react';

import Counter from './Counter';

export default class extends React.Component {
	state = {
		text: 0,
		min: 1
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				min: 3
			})
		}, 2000)
	}

	updateText = (newValue) => {
		this.setState({
			text: newValue
		})
	}

	render() {
		const { text, min } = this.state;
		return (
			<div>
				<div>Test Block 1</div>
				
				<Counter key={min} onChange={this.updateText} min={min} max={5}/>
				<div>{text}</div>
			</div>
		)
	}
}