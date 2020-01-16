import React from 'react';

import PropTypes from 'prop-types';

export default class Input extends React.Component {
	static defaultState = {
		nativeProps: {}
	}

	static propTypes = {
		nativeProps: PropTypes.object
	}

	applyBlur = (e) => {
		if (e.target.value != this.props.value) {
			this.props.onChange(e.target.value);
		}
	}

	componentDidUpdate(prevProps, prevState) {
		const input = this.nativeInput.current;
		if (prevProps.value !== this.props.value || this.props.value != input.value) {
			input.value = this.props.value;
		}
	}

	nativeInput = React.createRef();

	render() {
		return (
			<input {...this.props.nativeProps} ref={this.nativeInput} type="text" onBlur={this.applyBlur} defaultValue={this.props.value}/>
		)
	}
}