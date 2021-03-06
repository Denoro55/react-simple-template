import React from 'react';
import {observer} from "mobx-react";
import makeRequest from "~/api/helpers/makeRequest";

class Box extends React.PureComponent {
    state = {
        value: this.props.value
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.value !== this.props.value) {
            this.setState({
                value: this.props.value
            })
        }
    }

    render () {
        console.log('render box');
        return (
            <div>
                Box value is {this.state.value}
            </div>
        )
    }
}

export default @observer class Test extends React.Component {
    state = {
        value: 1
    };

    addValue = (value, ads) => () => {
        this.setState({
            value: this.state.value + 1
        })
    };

    makeRequest = () => {
        makeRequest('index.php').then(data => {
            console.log(data);
        })
    };

    render() {
        return (
            <div>
                <Box value={this.state.value} />
                <Box value={5} onClick={() => {}} />
                <Box value={5} />
                <hr/>
                <button onClick={this.addValue(1, 2)}>Add value</button>
                <button onClick={this.makeRequest}>Make request</button>
            </div>
        )
    }
}
